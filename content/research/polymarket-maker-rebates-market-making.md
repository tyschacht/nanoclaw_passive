---
title: "Idea: Polymarket Market Making with Maker Rebates Program"
date: 2026-04-10
tags: [passive-income, agentic, viable, polymarket, market-making, prediction-markets, usdc, defi]
---

# Polymarket Market Making with Maker Rebates Program

## What It Is

Polymarket's Maker Rebates Program pays liquidity providers daily USDC rebates equal to a percentage of taker fees collected in each eligible market. As of March 30, 2026, the program expanded to cover 10 market categories: Crypto (20%), plus Sports, Finance, Politics, Economics, Culture, Weather, Other/General, Mentions, and Tech — all at 25% rebate rates.

The mechanism: you place resting limit orders (maker orders) on Polymarket's CLOB. When other traders execute against your orders ("takers"), Polymarket collects a taker fee and distributes 20-25% of that fee back to you in USDC, daily. Your rebate is proportional to your share of filled maker volume in each specific market. You don't compete globally — only against other makers in the same market, which means smaller markets can be dominated by a single diligent market maker.

This is structurally distinct from the two Polymarket strategies already documented here ([[polymarket-crypto-direction-bots]] and [[polymarket-same-market-arbitrage]]). Directional trading requires predicting outcomes. Same-market arb exploits Yes+No pricing errors. Market making earns from the act of providing liquidity regardless of outcome direction — the rebate is the income source, not the prediction itself.

## How an Agent Does It

1. **Market selection**: Agent scans active Polymarket markets via the CLOB REST API (`GET /markets`) and scores each by: (a) bid-ask spread (wider = more edge), (b) daily volume (higher = more fills), (c) eligibility for the rebate program, (d) current maker competition (thin order books = less competition for rebate share)
2. **Order placement**: Agent places limit orders on both sides of the order book (bid and ask) at chosen tick intervals from the mid-price, via `POST /order` on the CLOB API. Bullpen CLI can abstract wallet signing and EIP-712 complexity.
3. **Inventory management**: Agent monitors fills every N minutes. When one side fills significantly, it re-balances by placing new orders on the depleted side to avoid directional exposure building up.
4. **Risk limits**: Agent enforces per-market position limits and total notional-at-risk caps. If a market moves too far (>10 ticks), agent cancels all orders and waits.
5. **Daily accounting**: Agent reads the daily rebate distributions from the CLOB API or on-chain event logs, logs them to a CSV, and reports net P&L (rebates earned minus position losses).

## Source

- Polymarket official documentation: https://docs.polymarket.com/polymarket-learn/trading/maker-rebates-program
- ainvest.com article: "Polymarket's $1M Daily Fee Flow: Bots, Arbitrage, and the Liquidity Engine" (April 2026)
- Polymarket program expansion to 10 categories: March 30, 2026 (MEXC News coverage)
- Cross-referenced with Bullpen CLI documentation for order execution abstractions (previously documented in [[polymarket-crypto-direction-bots]])

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Fully autonomous via CLOB REST API + Bullpen CLI; no human needed during operation |
| Setup effort | 5 | Requires Polymarket account, funded USDC wallet, CLOB API access, market making logic; 5-10 hours to build |
| Yield potential | 5 | Capital-dependent: ~$40-80/wk at $5K deployed, ~$90-175/wk at $10K deployed, $450+/wk at $50K+ |
| Risk | 5 | Real capital at risk from adverse selection; informed traders pick off stale orders; smart contract risk |
| **Overall** | **6** | Solid mechanism but capital-dependent yield and meaningful financial risk |

## Implementation Notes

**API access**: Polymarket CLOB API is public REST (no API key required for reading; order signing uses ECDSA with your Polygon wallet). Bullpen CLI (`bullpen.so`) abstracts the wallet + order routing complexity significantly.

**Capital required**: Unlike arb (which can be done with $500-2K), effective market making requires enough capital to place meaningful limit orders on both sides without wiping out on a single adverse fill. Minimum viable capital: ~$2K-$5K. Sweet spot: $10K-$20K.

**Market selection is critical**: High-volume, volatile markets (crypto price markets, major sports) have the most fill activity but also the most sophisticated competition from professional market makers. Better targets for small operators: niche political markets (state elections, legislative outcomes), cultural markets (award shows, TV ratings), and weather markets — all at 25% rebate rates with lower competition.

**Spread capture vs. rebate**: Two income sources simultaneously — if your bid is at $0.48 and ask at $0.52 and both fill, you pocket the $0.04 spread PLUS 25% of the taker fees on both transactions. In practice, asymmetric fills are common (one side fills, other doesn't), so you often have directional exposure.

**Best combined strategy**: Run market making alongside the existing same-market arb bot ([[polymarket-same-market-arbitrage]]). The arb bot exploits Yes+No pricing errors while the market making bot earns rebates from providing depth. Both use the CLOB API and Bullpen CLI, so they can share infrastructure.

## Open Questions

- What is the exact daily taker fee volume in the niche political/cultural market categories? (This determines the rebate pool size and thus absolute dollar yields for small operators)
- Does Polymarket penalize accounts that cancel large percentages of orders without fills? (Important for the inventory management loop)
- How often do professional market making firms (Jane Street, Wintermute equivalents) participate in smaller Polymarket markets? (Determines competition intensity)
- Is there a minimum fill rate or minimum maker contribution to receive any rebate distribution in a given day?
