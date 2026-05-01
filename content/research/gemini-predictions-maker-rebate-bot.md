---
title: "Idea: Gemini Predictions Maker Rebate Bot"
date: 2026-05-01
tags: [passive-income, agentic, viable, prediction-markets, maker-rebates, gemini, market-making, usd-payouts]
---

# Gemini Predictions Maker Rebate Bot

## What It Is

Gemini, the regulated US cryptocurrency exchange, launched prediction markets in early 2026 after receiving a Designated Contract Market (DCM) licence from the CFTC in December 2025. The platform covers crypto, sports, commodities, weather, and politics/economics markets — and in March 2026 introduced a Maker Rebate Program that pays market makers in USD daily.

The core mechanism: an autonomous agent places resting limit orders on eligible Gemini Predictions markets within the $0.20–$0.80 price band. Whenever a taker hits those orders and fills them, the maker earns a rebate. Rebates are calculated as: `Rebate = Rebate_Rate × 0.07 × C × P × (1-P)`, where C = contracts filled, P = price, and Rebate_Rate varies by category (up to 0.70 during the April–June 2026 promotional period). Payouts happen daily at 5pm ET directly in USD.

This is structurally distinct from the existing [[polymarket-maker-rebates-market-making]], [[opinion-opn-maker-rebate-market-making]], and [[kalshi-liquidity-market-making]] reports because Gemini is a new third regulated US exchange: USD settlement (not USDC or crypto), CFTC-regulated, and built on an existing 1M+ customer base of crypto traders who are new to prediction markets and therefore less efficient at pricing. Less efficient markets = better maker edge.

## How an Agent Does It

1. **Setup (one-time)**: Create Gemini account, enable API keys with trading scope, fund with USD via ACH or wire transfer.
2. **Market scan loop** (every 15-30 min): Call `GET /v1/prediction-markets/events?status=active` to retrieve all open markets eligible for maker rebates (price $0.20–$0.80, listed Mar 18, 2026+).
3. **Spread analysis**: For each market, subscribe to `{symbol}@bookTicker` WebSocket stream; calculate mid-price and current bid-ask spread.
4. **Order placement**: Post limit orders just inside or at the current best bid/ask using `order.place` WebSocket method with `timeInForce: GTC`. Include orders on both YES and NO sides to be market neutral when possible.
5. **Position management**: Monitor `orders@account` and `balances@account` streams for fills. When positions accumulate directional risk, hedge by placing opposing orders or withdrawing from the market.
6. **Rebate collection**: Rebates accrue automatically and are visible in account balance. USD withdrawable at any time.
7. **Cycle**: Re-run market scan, adjust stale orders, add new eligible markets as they open.

## Source

- Gemini Agentic Trading announcement: https://www.gemini.com/blog/introducing-agentic-trading-on-gemini-the-future-of-crypto-is-autonomous (Apr 27, 2026)
- Gemini Predictions Maker Rebate Program docs: https://developer.gemini.com/prediction-markets/maker-rebate-program
- Gemini Predictions fee schedule: https://www.gemini.com/fees/predictions
- Gemini Predictions getting started: https://developer.gemini.com/prediction-markets/getting-started
- Propheseer coverage of Gemini prediction market integration (shows ~50 Gemini markets active as of May 2026)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | REST API + WebSocket for order placement; "Agentic" section explicitly in Gemini Predictions docs; daily USD auto-payouts; HMAC-SHA384 auth is standard and automatable |
| Setup effort | 6 | Gemini account verification + trading scope API keys; no official SDK (raw Node.js/Python); need to code market-neutral spread logic; similar complexity to Kalshi setup |
| Yield potential | 6 | 0.70 × 7% taker rate = ~4.9% rebate on P(1-P) notional; at $5K deployed across 20 markets at $0.50 avg price: ~$50-200/week realistic starting out; scales with capital and market depth as Gemini Predictions grows |
| Risk | 7 | CFTC-regulated exchange, USD settlement (no DeFi/stablecoin risk), but market-making IS directional risk if orders fill on wrong side; lower market depth vs Polymarket means easier to get stuck in positions; promotional rates expire Jun 10, 2026 (rates drop to 0.30 after) |
| **Overall** | **6.75** | Genuinely new third regulated US prediction market exchange with competitive maker incentives; first-mover advantage over sophisticated quants who focus on Polymarket/Kalshi |

## Implementation Notes

**Authentication:**
- API key with HMAC-SHA384 signature
- Headers: `X-GEMINI-APIKEY`, `X-GEMINI-NONCE` (milliseconds), `X-GEMINI-PAYLOAD` (base64), `X-GEMINI-SIGNATURE`
- Enable time-based nonce when creating keys (required for WebSocket)
- Scopes needed: trading

**Key endpoints:**
- `GET https://api.gemini.com/v1/prediction-markets/events?status=active&limit=100` — browse eligible markets (public, no auth)
- WebSocket `wss://api.gemini.com/v2` — order placement and real-time feeds
- `order.place` method: `{symbol, side, type: "limit", timeInForce: "gtc", price, quantity, eventOutcome: "YES"|"NO", clientOrderId}`
- `orders@account` stream — fill notifications
- `balances@account` stream — rebate accretion tracking

**Rebate rate table (effective Apr 9–Jun 10, 2026):**
| Category | Promotional Rate | Rate After Jun 10 |
|---|---|---|
| Crypto, Commodities | 0.70 | 0.30 |
| Sports | 0.50 | 0.30 |
| Politics, Economics | 0.50-0.70 | 0.30 |
| All others | 0.30 | 0.30 |

**Rebate formula:** `Rebate = Rate × 0.07 × C × P × (1-P)` (max 5% of fill notional)

**Eligible price band:** $0.20–$0.80 only. Orders outside this range don't earn rebates.

**Market selection heuristics:**
- Prefer markets with active taker volume (higher fill probability)
- Prefer midpoint near $0.50 (maximum P(1-P) = 0.25 maximizes rebate per contract)
- Start with crypto markets (highest 0.70 rate through Jun 10)
- Skip markets with bid-ask spread < 0.03 (maker competition too high)
- Skip markets with < 100 contracts open interest (insufficient taker flow)

**Libraries:** No official Gemini Predictions SDK. Use `axios` (Node.js) or `requests` (Python) for REST. For WebSocket, use `ws` (Node.js) or `websockets` (Python).

**Capital requirements:** Minimum $500 to have meaningful presence. $2K-$5K recommended for 10-20 markets. Capital is locked in open orders, not at direct risk unless markets move against your resting positions.

**Rate limits:** Not documented publicly; standard Gemini API rate limits apply (likely 60 req/min for REST).

## Open Questions

1. What's the actual taker volume on Gemini Predictions markets? The 2,483-market count is impressive, but daily trading volume per market is unknown — low taker volume means slow fill rates and slow rebate accumulation.
2. After Jun 10, 2026, rates drop to 0.30 for all categories. Will Gemini extend the promotional period or announce new rates?
3. Does Gemini's "Agentic" section provide additional tools for autonomous bot operation, or is it just documentation?
4. Can a single API key operate across all market categories, or are separate permissions needed?
5. How does Gemini handle market resolution — is there a liquidation mechanism for positions that go wrong?
6. How does this compare in practice to Kalshi's Liquidity Incentive Program ($10-$1,000/day) at similar capital levels?
