---
title: "Idea: Polymarket Same-Market Arbitrage Bot"
date: 2026-04-09
tags: [passive-income, agentic, viable, prediction-markets, polymarket, arbitrage, api]
---

# Polymarket Same-Market Arbitrage Bot

## What It Is

On Polymarket's binary prediction markets, every market has exactly two outcome tokens: Yes and No. At settlement, one token pays $1.00 and the other pays $0.00. This means the "correct" combined price of Yes + No is always $1.00.

In practice, momentary liquidity imbalances on short-duration markets (especially 5-minute and 15-minute Bitcoin/Ethereum up-down markets) can push the combined price below $1.00 — sometimes to $0.97 or $0.96. When this happens, an agent can buy both sides simultaneously for less than $1.00 and collect the full $1.00 at settlement. The profit is the spread: $0.03–$0.06 per dollar of combined notional.

This is not prediction — it is pure risk-free arbitrage with no directional exposure. The agent does not need to know whether Bitcoin will go up or down. It simply needs to detect when Yes + No on the same market sum to less than $1.00 and execute both trades faster than the market corrects.

**Documented real-world case**: A CoinDesk report from February 2026 documented a fully automated bot on Polymarket that executed 8,894 trades with zero human intervention and generated nearly $150,000 over its operating period. The mechanism was exactly this: same-market arb on 5-minute Bitcoin and Ethereum prediction contracts. Individual trades averaged approximately $16.80 profit.

## How an Agent Does It

1. **Account setup**: Create a Polymarket account, deposit USDC via Phantom wallet (Solana, Polygon, or Ethereum). Fund with $1,000–$5,000 to start.
2. **Market scanner loop** (every 5–10 seconds): Query Polymarket's CLOB (Central Limit Order Book) API for all active short-duration markets (5-min, 15-min crypto direction contracts). Extract the best ask prices for Yes and No on each market.
3. **Opportunity detection**: For each market, compute `Yes_ask + No_ask`. If combined < $0.98 (accounting for Polymarket's 2% winning-side fee), flag as a potential arb opportunity.
4. **Simultaneous order execution**: Place market buy orders on both Yes and No simultaneously. Timing matters — the opportunity window is seconds to minutes before the market self-corrects.
5. **Settlement collection**: At market expiration, one side pays $1.00, the other $0.00. Net return: (sum collected at settlement) − (amount paid for both sides). Repeat.
6. **P&L logging**: Track every trade pair in a local JSON file. Alert (via Telegram or email) if a position is open past settlement without resolving — manual intervention needed.

The only human interaction required: funding the wallet and reviewing weekly P&L reports.

## Source

- CoinDesk report, February 2026: "Fully Automated Polymarket Bot Executed 8,894 Trades, Generated $150K With No Human Intervention"
- Corroborated by Sharbel A. YouTube channel (March 30, 2026): mentions same-market arb as a documented Polymarket strategy alongside directional bots
- Web research via multiple search queries on prediction market arbitrage mechanisms

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Pure mechanical arbitrage; zero judgment required; fully documentable logic |
| Setup effort | 4 | Polymarket API requires EIP-712 wallet auth; CLOB order routing has moderate complexity; 2–4 days to build |
| Yield potential | 5 | Documented at $150K but over extended period; small players: $400–$800/month realistic at $2K capital; scale limited by per-market liquidity ($5K–$15K per side) |
| Risk | 6 | Capital at risk if execution is slow and price moves; 2% fee eats thin spreads; platform risk (Polymarket ToS, regulatory) |
| **Overall** | **6.0** | Best fully-documented autonomous income mechanism found; constraint is liquidity ceiling, not technical complexity |

## Implementation Notes

- **API**: Polymarket CLOB API (REST). Documentation available at docs.polymarket.com. Authentication uses EIP-712 Ethereum signatures — requires managing a funded Ethereum/Polygon wallet private key.
- **Useful tool**: Bullpen CLI (bullpen.so) abstracts wallet auth and order routing. Reduces CLOB implementation complexity significantly. Used by Sharbel A. in April 2026 Polymarket bot tutorial.
- **Fee math**: Polymarket charges 2% of winnings on the winning side. On a $1.00 settlement, the winning $1.00 position nets $0.98. This means the combined price must be below $0.98 for a profit. At combined $0.96: gross profit $0.04, net profit $0.02 after fee. Thin but positive.
- **Opportunity frequency**: Short-duration markets have the most frequent settlement events and therefore the most frequent arb windows. 5-minute markets fire 288 times per day. Not every 5-minute market has an arb window — monitoring 10–20 simultaneous markets increases hit frequency.
- **Language**: TypeScript/Node.js recommended (native ethers.js support for EIP-712 signing). Python also viable with web3.py.
- **Capital scaling**: The documented $150K case likely involved significantly more than $5,000 capital. Retail entry at $1,000–$5,000 yields smaller absolute numbers but validates the mechanism.

## Open Questions

- Is same-market arb in Polymarket's ToS? The documented bot ran unmolested, but no explicit ToS confirmation found.
- What was the exact capital deployed in the $150K case?
- Can Bullpen CLI handle simultaneous Yes + No order placement fast enough, or is direct CLOB API integration required for execution speed?
- How often do 5-minute crypto markets actually show combined prices below $0.98 vs. $0.99 or $1.00?
- Is there a simpler test using Manifold Markets (play money) before deploying real capital?
