---
title: "Idea: Polymarket Builder Codes V2 — Earn Trading Fees on Routed Volume"
date: 2026-05-12
tags: [passive-income, agentic, viable, polymarket, prediction-markets, trading-fees, builder-codes]
---

# Polymarket Builder Codes V2 — Earn Trading Fees on Routed Volume

## What It Is

Polymarket Builder Codes are an official Polymarket program that lets developers (and their AI agents) earn a percentage of trading fees on all order volume they route through their application. Unlike the existing prediction market strategies in this library (weather bots, maker rebates, copy trading), Builder Codes earn money from the *mechanism* of trading — not from the *outcome* of bets. A builder earns whether their users win or lose.

V2 launched April 28, 2026. It replaces the old HMAC header system with a native `builder` field in the EIP-712 order struct. The old SDKs (`py-clob-client`, `@polymarket/clob-client`) stopped working April 22, 2026 — any existing Polymarket integration must upgrade.

Fee structure: builders configure up to **100 bps (1%) taker fee** and **50 bps (0.5%) maker fee** per order, in 1 bp increments. Polymarket currently takes no disclosed cut — 100% flows to the builder's USDC wallet.

## How an Agent Does It

1. **One-time human setup** (~5 min): Log in to `polymarket.com/settings?tab=builder` to retrieve the builder's bytes32 code and configure fee bps. Set up a USDC wallet address for fee deposits.
2. **Agent builds the trading engine**: Using the updated `py-clob-client` v1.x SDK, integrate the `builder` field into every EIP-712 order struct.
3. **Agent executes trades**: Every order the agent places automatically routes through the builder code and deposits the configured fee (0–100 bps) into the builder wallet.
4. **Agent self-routes its own volume**: Even if the agent is only trading for itself, it earns builder fees on every trade it executes. At $500K/month own trading volume and 50 bps: ~$2,500/month in builder fees regardless of whether the trades profit.
5. **Optional: build a Telegram/Discord bot** (like Betmoar): Attract external users, route their volume through the same builder code, earning fees on their trades too. Betmoar now routes $92.94M/month in volume — earning $464K–$929K/month in builder fees.
6. **Optional: apply for Verified status** at builders@polymarket.com to access the $2.5M/quarter grant program for additional revenue stacking.

## Source

- Polymarket official builder documentation: `docs.polymarket.com/clob/builder-codes`
- Betmoar case study: $817M cumulative volume, $92.94M/month current volume, builder codes confirmed as primary revenue
- V2 EIP-712 order struct change: Polymarket CLOB-Client SDK changelog, April 22–28 2026
- "Based Prediction" disclosed $1M ARR on approximately $10M/month volume (100 bps taker)
- "Why Almost Everyone Loses–Except a Few Sharks–On Prediction Markets" — WSJ / HN: 48007503 (104 pts, May 4 2026) — external validation that automated strategies dominate profits

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | One-time human login to retrieve builder code; all order routing is automated via EIP-712 builder field |
| Setup effort | 7 | Must upgrade to py-clob-client v1.x (SDK breaking change April 22); USDC wallet required; 30-60 min total setup |
| Yield potential | 7 | Self-trading: ~$2,500/mo at $500K/month volume. External users: $50K-$929K/mo at Betmoar scale. Most solo agents realistically $200-$2K/mo from own volume |
| Risk | 9 | Official Polymarket program, no ToS risk; USDC deposits daily; US access open since CFTC no-action letter |
| **Overall** | **7.75** | |

## Implementation Notes

**SDK upgrade required (critical):**
```bash
pip install py-clob-client>=1.0.0
```

Old order struct (broken):
```python
order = LimitOrderArgs(token_id=..., price=..., size=..., side=...)
```

New V2 order struct (add builder field):
```python
from py_clob_client.clob_types import OrderArgs

order = OrderArgs(
    token_id="...",
    price=0.65,
    size=100.0,
    side="BUY",
    builder="0x<your_32_byte_builder_code>"  # bytes32, from polymarket.com/settings?tab=builder
)
```

**Key endpoints:**
- Builder registration: `polymarket.com/settings?tab=builder` (web UI, one-time)
- Fee configuration: Set `takerFee` (0–100 bps) and `makerFee` (0–50 bps) in builder settings
- Earnings: Deposited directly to builder's USDC wallet per trade settlement
- Grant applications: `builders@polymarket.com`

**Volume targets:**
| Monthly Volume | Fee (50 bps avg) | Monthly Income |
|---|---|---|
| $100K | 0.5% | $500 |
| $500K | 0.5% | $2,500 |
| $1M | 0.5% | $5,000 |
| $10M | 0.5% | $50,000 |

**Stacking with existing VIABLE strategies:**
- Combine with `polymarket-maker-rebates-market-making`: route maker orders through builder code → earn BOTH 25% maker rebate AND builder fee on same volume
- Combine with `polymarket-weather-bot-gfs-edge`: weather bot routes its own trades through builder code → stack builder fees on top of directional P&L
- Combine with `polymarket-sports-liquidity-rewards`: sports market maker earns monthly pool + 25% rebate + builder fee on same position

**CLOB SDK reference:** `github.com/Polymarket/py-clob-client` — check for latest v1.x changelog to confirm EIP-712 field names as they evolve.

## Open Questions

1. Is there a programmatic API to register a new builder code, or is the settings page the only method? (Unverified as of May 12, 2026)
2. What's the minimum volume required for grant eligibility ("Verified" status)?
3. Can the `builder` field be set dynamically per order (different codes for different strategies), or is it fixed per wallet?
4. How quickly are builder fee deposits settled — same block as trade or batch daily?
