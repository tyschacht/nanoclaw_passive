---
title: "Deep Dive: Kalshi Liquidity Market-Maker Bot"
date: 2026-04-12
tags: [deep-dive, kalshi, market-making, prediction-markets, python, agno, supabase, trading]
---

# Deep Dive: Kalshi Liquidity Market-Maker Bot

*Technical design document. Step below final spec — enough to begin building.*

Source opportunities: [[research/kalshi-liquidity-market-making]] · [[research/kalshi-multimodel-llm-ensemble-bot]]

---

## What We're Building

A fully autonomous Python bot that acts as a market maker on Kalshi — posting resting limit orders on both sides of prediction market order books, collecting bid/ask spread when matched, and earning Kalshi's daily Liquidity Incentive Program subsidy.

*This is not a prediction bot.* The bot has no opinion on event outcomes. It earns income from market structure — providing liquidity and being compensated for it — the same way market makers operate on stock exchanges.

---

## Why Kalshi Over Polymarket

| Factor | Kalshi | Polymarket (international) |
|---|---|---|
| US legal | ✅ CFTC-regulated | ❌ Geoblocked for US IPs (2022 settlement) |
| Trading fees | 0% (currently) | 1.56% taker fee (round-trip ~3.12%) |
| Liquidity incentive | ✅ $10-$1,000/day program through Sep 2026 | Maker rebate (lower) |
| Public REST API | ✅ Full docs, RSA-PSS auth | ✅ py-clob-client |
| FIX protocol | ✅ FIX 4.4 for lower latency | ❌ |
| US crypto hourly markets | ✅ BTC, ETH hourly | ❌ (5-min markets on intl only) |
| Regulatory risk | Low (CFTC-sanctioned) | Medium |

The 0% fee structure is the critical unlock. On Polymarket, a round-trip trade costs ~3.12% in fees — meaning you need a >51.6% win rate just to break even before any edge. On Kalshi, the market maker pays zero fees and *receives* a daily subsidy on top of spread income.

---

## The Income Model

### Source 1: Bid/Ask Spread Capture

When a taker crosses your resting order, you collect the difference between your limit price and the fair value. On a 50¢ contract:
- You post a bid at $0.48, ask at $0.52
- A taker buys at your $0.52 ask
- Fair value is $0.50
- You captured $0.02 per share

At $10 position size: $0.40/trade profit. Small per trade — but the bot runs 24/7 across dozens of markets.

### Source 2: Kalshi Liquidity Incentive Program (LIP)

*Program active: September 15, 2025 → September 1, 2026. Kalshi can modify terms at any time.*

Kalshi pays market makers a daily USDC subsidy based on their contribution to market liquidity. Key verified details:

- *Daily pool per market*: $10–$1,000 (varies by market and day)
- *Scoring method*: Second-by-second random snapshots. **Score = Order Size × Proximity Discount**. Orders closer to the mid-price receive a higher proximity discount (higher score). Your daily reward = `your_score / total_scores × daily_pool`
- *Minimum qualifying order*: 100 contracts (thresholds up to 20,000 contracts)
- *Eligible markets*: Subset of all markets; explicitly includes Fed rate decision markets. Check individual market pages for LIP eligibility badge.
- *Excluded*: Kalshi affiliates, Market Maker Agreement signatories, IBs, FCMs

*Practical implication*: To maximize LIP earnings, quote tight (close to mid-price) with as large a size as your risk tolerance allows. The Proximity Discount rewards tight quoting — but tight quotes also get filled more often, so balance spread income vs. fill frequency.

*Conservative estimate for $2,000 deployed*: At 0.1–0.5% of eligible resting volume → $1–$5/day LIP income = $30–$150/month. Combined with spread income, total target remains $100–$300/month at this capital level.

### Combined Yield Target

| Capital | Spread income/mo | Incentive/mo | Total/mo | Monthly ROI |
|---|---|---|---|---|
| $500 | $50–$100 | $50–$150 | $100–$250 | 20–50% |
| $2,000 | $150–$300 | $150–$500 | $300–$800 | 15–40% |
| $5,000 | $300–$600 | $300–$900 | $600–$1,500 | 12–30% |

*These are estimates. The incentive program math needs live testing to verify actual proportional share.*

---

## Latency Reality Check (Critical Infrastructure Decision)

Validation research surfaced a major nuance: latency matters more here than for other projects.

| Connection | Round-trip to Kalshi |
|---|---|
| Residential US | 50–200ms (spikes to 500ms) |
| Chicago VPS (e.g., TradoxVPS) | ~0.82ms |
| NY4 Equinix datacenter | ~1.14ms |
| FIX co-location | Sub-millisecond |

During a Fed announcement, Kalshi markets fully reprice in ~400ms. A 340ms-latency bot is already too slow.

**Does this matter for our strategy?**

For *pure LIP farming* (place resting orders, collect daily subsidy + spread over hours): **No. Lambda + residential latency is fine.** Your orders sit as resting limit orders for minutes to hours — the exact millisecond they're placed doesn't matter.

For *event-driven market making* (tighten quotes around a Fed announcement, then widen): **Yes. You need a VPS.** Even a $10/month Chicago VPS drops latency to <1ms.

**Decision for MVP**: Start with Lambda (zero infrastructure overhead, <$3/month). If LIP farming is confirmed profitable and you want to add event-driven strategies, spin up a Chicago VPS for $10/month at that point. The two strategies can coexist: Lambda handles scheduling/monitoring/reporting; VPS handles the hot order loop if needed.

---

## Tech Stack (Stack-Native)

Per [[tech-stack]] preferences:

| Component | Choice | Notes |
|---|---|---|
| Language | Python | Primary language |
| Agentic framework | Agno | Orchestrates market scan, order management, P&L logging |
| Database | Supabase | Trade log, open positions, P&L history, bot state |
| Compute | AWS Lambda | Cron-triggered (every 30-60s for monitoring); lightweight, no persistent server needed |
| Scheduler | AWS EventBridge | Triggers Lambda on schedule |
| Alerting | Postmark or SNS | Email/SMS on circuit breaker trigger or daily P&L summary |
| LLM | None (for pure market-making) | Market making requires no prediction — pure API/math |

*No OpenRouter needed for the pure market-making strategy. LLM is only needed if you later add the Multi-LLM Ensemble prediction layer — see [[research/kalshi-multimodel-llm-ensemble-bot]].*

---

## Kalshi API Architecture (Verified April 12, 2026)

### Environments

```python
# Production
BASE_URL = "https://api.elections.kalshi.com/trade-api/v2"

# Demo/Sandbox (separate API keys, fake money — START HERE)
DEMO_URL = "https://demo-api.kalshi.co/trade-api/v2"
```

*Always build and test against demo first. Demo keys are separate from production.*

### Python SDK (Official)

```bash
# Use these — NOT the deprecated 'kalshi-python' package
pip install kalshi_python_sync    # synchronous client
pip install kalshi_python_async   # async/await client

# Reference starter code
git clone https://github.com/Kalshi/kalshi-starter-code-python  # 90 stars
```

The official SDK handles RSA-PSS signing automatically. The old `kalshi-python` package on PyPI is deprecated — do not use it.

### Authentication (RSA-PSS) — Manual Implementation

If building without the SDK:

```python
import base64, time
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding

def sign_request(private_key_pem: bytes, method: str, path: str) -> dict:
    """Generate RSA-PSS signed headers for Kalshi API."""
    private_key = serialization.load_pem_private_key(private_key_pem, password=None)
    timestamp_ms = str(int(time.time() * 1000))  # milliseconds, not seconds
    message = f"{timestamp_ms}{method.upper()}{path}".encode()

    signature = private_key.sign(
        message,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.DIGEST_LENGTH
        ),
        hashes.SHA256()
    )
    return {
        "KALSHI-ACCESS-KEY": KALSHI_API_KEY,
        "KALSHI-ACCESS-TIMESTAMP": timestamp_ms,
        "KALSHI-ACCESS-SIGNATURE": base64.b64encode(signature).decode(),
        "Content-Type": "application/json"
    }
```

### Key Endpoints

```python
# Market discovery (public, no auth)
GET  /markets                          # list markets, filter by status/category
GET  /markets/{ticker}/orderbook       # current bid/ask depth

# Order management (authenticated)
POST /portfolio/orders                 # place limit order (no market orders on Kalshi)
DELETE /portfolio/orders/{order_id}    # cancel single order
POST /portfolio/orders/cancel_all      # batch cancel (counts as 0.2 writes each)

# Account state
GET  /portfolio/balance                # cash balance (dollar strings as of Mar 2026)
GET  /portfolio/positions              # open positions
GET  /portfolio/fills                  # fill history

# Note: prices changed to fixed-point dollar strings in March 2026
# e.g., "yes_price_dollars": "0.6500", "count_fp": "10.00"
# Legacy integer cent fields removed — update any existing code
```

### Rate Limits (4 Tiers)

| Tier | Read/sec | Write/sec | How to Qualify |
|---|---|---|---|
| Basic | 20 | 10 | Auto on signup |
| Advanced | 30 | 30 | Typeform application |
| Premier | 100 | 100 | 3.75% monthly exchange volume |
| Prime | 400 | 400 | 7.5% monthly exchange volume |

*Start: Basic tier (20 read/10 write/sec). Sufficient for monitoring 10+ markets + placing orders.*

Batch cancel counts as 0.2 write transactions each — use batch cancel in cleanup loops.

### WebSocket API (Required for Real-Time Market Making)

```python
WS_URL = "wss://api.elections.kalshi.com/trade-api/ws/v2"
WS_DEMO = "wss://demo-api.kalshi.co/trade-api/ws/v2"
# RSA-PSS auth headers required even on WebSocket handshake

# Public channels (no auth needed)
"orderbook_delta"   # orderbook updates
"ticker"            # price/volume ticks
"trade"             # trade prints

# Private channels (auth required)
"fill"              # your order fills — use this for instant fill notification
"user_orders"       # your order status changes
"market_positions"  # your position updates
```

*REST polling alone is insufficient for market making. WebSocket delivers orderbook deltas in <10ms. Use WebSocket for fill monitoring and orderbook state; REST for order placement and cancellation.*

---

## Agno Bot Architecture

### Agent 1: Market Scanner (runs every 5 minutes)

```python
class KalshiMarketScanner(Agent):
    """
    Discovers eligible markets for market making.
    Writes qualified markets to Supabase `eligible_markets` table.
    """
    instructions = """
    Query Kalshi for all open markets. Apply filters:
    - Open interest > $1,000 (enough liquidity to get fills)
    - Time to expiry: 1 hour to 7 days (sweet spot for turnover)
    - Bid/ask spread > 3¢ (minimum viable spread to capture)
    - Currently in Liquidity Incentive Program (if determinable)

    Priority categories (in order):
    1. Crypto hourly markets (BTC-HOURLY, ETH-HOURLY) — highest volume
    2. Fed rate decision markets — very liquid near meeting dates
    3. Weekly economic indicator markets (CPI, unemployment)
    4. Sports markets — only if NCAAB/NBA in season

    Write results to: supabase.eligible_markets
    """
```

### Agent 2: Order Manager (runs every 30-60 seconds)

```python
class KalshiOrderManager(Agent):
    """
    Core market-making loop. Places and manages resting orders.
    """
    instructions = """
    For each market in eligible_markets:

    1. Fetch current orderbook (bid/ask depth)
    2. Calculate target bid = best_bid - $0.01 (one tick below)
       Calculate target ask = best_ask + $0.01 (one tick above)
    3. If no resting order on this market: place bid + ask
    4. If resting order exists but price has moved >$0.02: cancel + replace
    5. If one side filled: immediately cancel the other side
       (prevents directional exposure — we're market making, not predicting)
    6. Log all actions to supabase.order_log

    Position limits:
    - Max $50 per side per market (start small)
    - Max 10 markets simultaneously
    - Max $500 total deployed capital

    Circuit breakers:
    - Stop all activity if daily P&L < -$25
    - Stop all activity if total P&L < -$100
    - Resume after 24-hour cooling period + human review
    """
```

### Agent 3: P&L Monitor (runs every hour)

```python
class KalshiPLMonitor(Agent):
    """
    Tracks performance, generates daily summaries, fires alerts.
    """
    instructions = """
    Every hour:
    - Pull all fills from Kalshi API since last check
    - Calculate: realized P&L, unrealized P&L, incentive payments received
    - Update supabase.daily_pnl table
    - Check circuit breakers — suspend Order Manager if triggered

    Daily (9 AM CT):
    - Send email summary via Postmark:
      * Total P&L today / week / month
      * Incentive payments received
      * Win rate, average spread captured
      * Capital deployed vs. available
      * Any circuit breaker events
    """
```

---

## Supabase Schema

```sql
-- Markets currently eligible for market making
CREATE TABLE eligible_markets (
  ticker TEXT PRIMARY KEY,
  title TEXT,
  category TEXT,
  expiry TIMESTAMPTZ,
  open_interest_cents INT,
  current_bid FLOAT,
  current_ask FLOAT,
  spread FLOAT,
  in_incentive_program BOOLEAN,
  last_scanned TIMESTAMPTZ DEFAULT now()
);

-- All order activity
CREATE TABLE order_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kalshi_order_id TEXT UNIQUE,
  ticker TEXT,
  side TEXT,           -- 'buy' | 'sell'
  price FLOAT,
  size_cents INT,
  status TEXT,         -- 'resting' | 'filled' | 'cancelled'
  fill_price FLOAT,
  pnl_cents INT,       -- realized on fill
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Daily P&L summary
CREATE TABLE daily_pnl (
  date DATE PRIMARY KEY,
  spread_income_cents INT DEFAULT 0,
  incentive_received_cents INT DEFAULT 0,
  total_pnl_cents INT DEFAULT 0,
  trades_count INT DEFAULT 0,
  capital_deployed_cents INT DEFAULT 0,
  circuit_breaker_triggered BOOLEAN DEFAULT FALSE
);

-- Bot state (for recovery on Lambda cold start)
CREATE TABLE bot_state (
  key TEXT PRIMARY KEY,
  value JSONB,
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

## Lambda Deployment

Market making doesn't need a persistent server — Lambda on a 30-second EventBridge schedule is sufficient at this volume.

```
┌────────────────────────────────────────────────────────┐
│  AWS EventBridge                                        │
│  Rule: rate(30 seconds)                                 │
│  Target: kalshi-order-manager Lambda                    │
└────────────────────────────────────────────────────────┘
          │
          ▼
┌────────────────────────────────────────────────────────┐
│  Lambda: kalshi-order-manager                           │
│  Runtime: Python 3.12                                   │
│  Memory: 256MB (no Chromium, no heavy deps)             │
│  Timeout: 25 seconds                                    │
│  Package: standard zip (no container needed)            │
│                                                         │
│  On invocation:                                         │
│  1. Read bot_state from Supabase (recovery)             │
│  2. Run OrderManager agent cycle                        │
│  3. Write state back to Supabase                        │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  AWS EventBridge                                        │
│  Rule: rate(5 minutes)                                  │
│  Target: kalshi-market-scanner Lambda                   │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  AWS EventBridge                                        │
│  Rule: cron(0 9 * * ? *)  [9 AM CT daily]              │
│  Target: kalshi-pl-monitor Lambda                       │
└────────────────────────────────────────────────────────┘
```

*Lambda cost at 30-second interval: ~5,760 invocations/day × 0.5s execution × 256MB = ~$0.80/month. Negligible.*

---

## Market Selection Strategy

*Kalshi total platform volume (verified): ~$1.8B/week as of early 2026.*

### Tier 1 — Fed Rate Decision Markets (Highest LIP Value)

Explicitly listed as LIP-eligible markets. March 2026 FOMC market alone did $120M+ volume. FOMC meets 8x/year; in the week before each meeting, volume spikes and spread widens — the best possible conditions for market making.

*Calendar strategy*: Program 8 pre-FOMC windows per year; increase position sizes 2× during those 5-7 day windows.

### Tier 2 — Crypto Hourly BTC/ETH Markets

$20.5M/day verified volume (Apr 2026). Continuous underlying price feeds, oracle-based mechanical settlement, new market every hour. Suitable for 24/7 automated quoting.

Why ideal: no ambiguity in resolution, constant fresh liquidity demand, spread typically 3-8¢.

### Tier 3 — Weekly Economic Indicators

CPI, NFP, PCE — lower volume ($2M/day across economics), but event-concentrated volume spikes the day of release. Same pattern as Fed markets.

### Sports — Proceed Carefully

$81.2M/day total volume — highest on platform — but sports markets are event-concentrated. Volume only exists during game windows, not continuously. Poor fit for 24/7 resting order strategies. If pursuing sports: target NBA/NFL in-game markets during game windows only.

### Avoid

- Low-volume markets (<$500 open interest): too few fills to justify overhead
- Long-duration markets (>30 days): capital locked up too long
- Highly contested political markets: sophisticated betters with informational edge will adversely select your quotes

---

## Risk Analysis

| Risk | Severity | Mitigation |
|---|---|---|
| One-sided fill + slow hedge | Medium | Auto-cancel opposite side immediately on fill; $50 max per side keeps max exposure small |
| Incentive program ends (Sep 2026) | Medium | Build income model on spread alone — if spread income justifies effort, incentive is a bonus |
| Kalshi 0% fee period ends | Low-Medium | Current fee is 0%; if taker fees introduced for market makers, reassess; maker rebates would likely offset |
| Capital loss from market risk | Medium | Circuit breakers: -$25/day, -$100 total; small position sizes; never directionally naked |
| API downtime/rate limit | Low | Exponential backoff + state recovery from Supabase on restart |
| CFTC regulatory change | Low | Already CFTC-regulated — this is the *safe* venue; risk is of rule changes, not enforcement |
| Adverse selection | Medium | Avoid markets with large information asymmetry (political insider trading impossible to detect) |

**Biggest practical risk**: hedge execution gap. If your bid fills (you now own YES shares) and before you can cancel your ask, another taker hits the ask (you sell YES shares at your price) — good, that's the full round trip you wanted. The risk is if the market moves significantly between the fill and your cancel, leaving you with an unwanted directional position. At $50/side max, the maximum loss on a catastrophic move is $50 per position.

---

## Cost Model

### Fixed Costs/Month

| Item | Cost |
|---|---|
| AWS Lambda (3 functions, ~17K invocations/day) | ~$2 |
| Supabase | Free |
| Postmark (1 email/day) | ~$0.50 |
| *Total fixed* | *~$2.50/month* |

### Capital Required

| Phase | Capital | Expected Monthly Return |
|---|---|---|
| Phase 1 (test/validate) | $200 | $20–$50 |
| Phase 2 (scale up) | $1,000 | $100–$300 |
| Phase 3 (full deployment) | $2,000–$5,000 | $300–$1,500 |

Start at $200 to validate that the strategy works as expected. Scale only after 30 days of confirmed positive P&L.

---

## Implementation Path

### Week 1: Setup & Paper Trading

1. Create Kalshi account, fund with $200 USDC
2. Generate RSA-PSS keypair, store private key in AWS Secrets Manager
3. Build `KalshiClient` Python class — wraps auth + all needed endpoints
4. Run in **shadow mode**: log what orders would be placed, but don't actually send them
5. Verify: are the target markets liquid? Is the spread wide enough? How often would fills occur?

### Week 2: Live Trading (Small Scale)

6. Enable live order placement; max $10/side per order, 3 markets max
7. Let run for 7 days; monitor via daily P&L emails
8. Validate: are we getting fills? Is the incentive program paying out? What's the actual spread captured?

### Week 3: Optimize & Scale

9. Analyze which market tiers (crypto, Fed, economic) generate the best spread/capital ratio
10. Tune position sizing based on actual fill rates
11. Increase to $50/side, 10 markets if Week 2 results are positive

### Week 4+: Automate & Monitor

12. Deploy to production Lambda schedule
13. Weekly human review of P&L summary email
14. Monthly: review whether incentive program terms have changed; reassess capital allocation

---

## Optional Extension: LLM Ensemble Layer

Once the pure market-making bot is stable and profitable, the next step is adding the [[research/kalshi-multimodel-llm-ensemble-bot]] prediction layer on top:

- Market maker earns baseline income from spread + incentive
- LLM ensemble identifies markets where the crowd is mispriced by >5%
- Agent sizes into directional positions on those markets (in addition to normal market-making)
- OpenRouter routes to Claude, Gemini, GPT-4o, DeepSeek, Grok simultaneously; uses weighted ensemble consensus

*This is Phase 2. Don't build it until Phase 1 (pure market making) is live and validated.*

---

## Open Questions

*Most questions resolved by live validation. Remaining:*

1. *Exact daily LIP pool size per market* — Kalshi doesn't publish the total daily pool amount for each market. This can only be determined empirically — deploy $200, run for 7 days, observe actual incentive payments received.
2. *Crypto hourly ticker format* — confirm exact ticker naming convention for BTC/ETH hourly markets (e.g., `BTC-HOURLY-UP-2026APR12T14` format needs live API verification).
3. *LIP proximity discount formula* — "Score = Order Size × Proximity Discount" but the exact proximity discount schedule is not documented publicly. Experimentation needed.
4. *Sports market hourly volume* — $81.2M/day for sports looks high for market making, but sports markets are event-concentrated (game time only), not continuous. Verify whether sports markets have resting order depth between events.

*Resolved by validation:*
- ✅ Fee structure: 0% confirmed, no maker/taker distinction in standard program
- ✅ Python SDK: `kalshi_python_sync` and `kalshi_python_async` (official; old `kalshi-python` deprecated)
- ✅ WebSocket: `wss://api.elections.kalshi.com/trade-api/ws/v2` — RSA-PSS auth required
- ✅ LIP scoring: second-by-second snapshots, Score = Order Size × Proximity Discount
- ✅ Minimum order: 100 contracts to qualify for LIP
- ✅ Automation ToS: Explicitly supported and expected; Market Maker Program requires automation
- ✅ Rate limits: Basic = 20 read/10 write/sec (sufficient for MVP)

---

## Related Opportunities

- [[research/kalshi-multimodel-llm-ensemble-bot]] — LLM prediction layer to add on top of this infrastructure
- [[research/polymarket-maker-rebates-market-making]] — same strategy on Polymarket for non-US or VPN users
- [[research/polymarket-kalshi-cross-platform-arbitrage]] — arbitrage between Kalshi and Polymarket on same events
