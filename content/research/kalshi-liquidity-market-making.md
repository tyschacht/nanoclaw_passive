---
title: "Idea: Kalshi Liquidity Market Making"
date: 2026-04-09
tags: [passive-income, agentic, viable, prediction-markets, kalshi, market-making, api]
---

# Kalshi Liquidity Market Making

## What It Is

Kalshi is a CFTC-regulated prediction market exchange where users bet on real-world events ranging from Fed rate decisions to weather outcomes. Unlike Polymarket (which is decentralized and grey-area legal in the US), Kalshi is the only fully CFTC-regulated exchange of its kind in the United States — which matters for agent deployment risk.

Kalshi currently runs a **Liquidity Incentive Program** active through September 2026 that pays market makers $10–$1,000/day proportional to their share of daily resting order volume on eligible markets. Crucially, Kalshi's trading fees are currently 0% — meaning an agent placing and canceling resting orders earns the daily subsidy without paying per-trade fees. The mechanism is pure market making: the agent places a resting bid below the current price and a resting ask above it, collects the spread when matched, and earns the proportional daily incentive payment on top.

This is the least-discussed mechanism in current AI income discourse despite being directly documented in Kalshi's own help center. The combination of 0% fees + direct daily subsidy + a free REST API makes it uniquely accessible for autonomous agents at small capital scale.

## How an Agent Does It

1. **Setup**: Register a Kalshi account, fund with USDC, obtain API credentials (RSA-PSS authentication, documented in Kalshi's API reference). Rate limit is 10 requests/second — sufficient for retail market making.
2. **Market selection loop**: Every cycle, query the Kalshi REST API for markets in the Liquidity Incentive Program. Filter for markets with meaningful volume but not so tight a spread that the bid/ask edge is gone.
3. **Order placement**: For each selected market, place a resting bid slightly below the current best bid and a resting ask slightly above the current best ask. Starting size: $10–$50 per side to stay within a conservative capital budget.
4. **Position monitoring**: Every 30–60 seconds, check fill status. If one side fills, immediately hedge or cancel the opposite side to avoid directional exposure. For pure liquidity provision, the agent is never directionally exposed as long as hedge execution is fast.
5. **Daily incentive settlement**: Kalshi pays the daily subsidy automatically based on proportional share of resting order depth. No action required.
6. **P&L logging**: Log all fills, cancels, and incentive payments to a local JSON file. Weekly reporting to check if incentive share is growing or shrinking.

The agent needs no predictive model about event outcomes — this is pure market structure arbitrage, not prediction.

## Source

Web research: Kalshi Help Center (Liquidity Incentive Program documentation), cross-referenced with Kalshi API reference and confirmation that 0% fees are active as of April 2026.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | REST API exists, fully automatable order placement and monitoring; no human judgment needed |
| Setup effort | 5 | Kalshi account + RSA-PSS auth setup + market making logic; ~1-2 days of build time |
| Yield potential | 6 | $10–$1,000/day from incentive alone; realistic for small player: $50–$200/day = $350–$1,400/week |
| Risk | 6 | Real capital deployed; program may end early; market risk if hedge execution is slow; 10/10 on regulatory risk (CFTC-regulated) |
| **Overall** | **6.25** | Strongest argument: 0% fees + direct subsidy = subsidized practice even if spread income is minimal |

## Implementation Notes

- **API**: Kalshi REST API + optional FIX 4.4 for lower latency. REST is sufficient for retail market making at 10 req/sec.
- **Auth**: RSA-PSS key pair. Generate once, store private key securely. All requests signed.
- **Capital requirement**: $500–$2,000 to start; larger capital = larger proportional incentive share.
- **Language**: Python with `requests` is simplest. TypeScript/Node also fine.
- **Key risk**: Kalshi's matching engine can move faster than the agent's hedge execution, creating brief directional exposure. Start with very small position sizes ($5–$10 per order) and widen only after testing hedge latency.
- **Incentive program expiry**: Currently through September 2026. Build the income model assuming the incentive disappears and the spread income alone must justify the effort — if it does, the incentive is a bonus.
- **Markets to prioritize**: Shorter-duration markets (same-day or weekly) have more frequent settlement events and more trading activity than multi-month markets. Fed rate decision markets and weekly crypto price markets have historically been the most liquid.

## Open Questions

- Exact daily incentive calculation formula (proportional share — need to understand whether it's time-weighted or order-size-weighted)
- Minimum resting order size to qualify for incentive
- Whether 0% fee period has an expiry separate from the incentive program
- How quickly Kalshi's matching engine executes vs. typical API response latency (determines hedge viability)
- Whether Kalshi has any restrictions on fully automated order placement in their ToS
