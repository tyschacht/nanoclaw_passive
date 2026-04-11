---
title: "Idea: Opinion OPN 50% Maker Rebate Market Making"
date: 2026-04-11
tags: [passive-income, agentic, viable, prediction-markets, market-making, bnb-chain, opinion, clob]
---

# Opinion OPN 50% Maker Rebate Market Making

## What It Is

Opinion (opinion.trade) is the third-largest prediction market by volume globally, processing $8.08 billion per month as of January 2026 — capturing approximately 31% of global prediction market volume. Backed by a $20M pre-Series A from Hack VC and Jump Crypto, Opinion is built on BNB Chain and focuses on macroeconomic markets: FOMC interest rate decisions, inflation data, crypto price milestones, global election outcomes, and news events.

Unlike Polymarket's 25% maker rebate or Kalshi's per-market liquidity incentive program, Opinion pays **50% of all taker fees directly to the liquidity provider involved in each trade** — the highest maker rebate rate of any prediction market platform covered in this library. Makers pay zero fees. Takers pay a dynamic fee capped at 1%, calculated as `topic_rate × price × (1 − price)`, which peaks at 0.25% for 50/50 markets and approaches zero for near-certain outcomes.

In addition to the fee-split rebate, Opinion runs a weekly points pool (100,000 PTS distributed pro-rata) based on time-weighted liquidity quality. Orders placed closer to the mid-price earn higher points weight. Minimum qualifying thresholds: $200 total weekly trading volume, $10 per limit order. Points convert to OPN tokens, adding a second income stream stacked on top of USDT rebates.

## How an Agent Does It

1. **Setup**: Create a BNB Chain wallet (MetaMask or WalletConnect), deposit USDT or USDC, connect to opinion.trade. Obtain Opinion API credentials for CLOB SDK access.
2. **Install SDK**: `pip install opinion-clob-sdk` (Python) or `npm install @opinion/clob-sdk` (TypeScript). Alternatively, use the `dr-manhattan` library (GitHub: guzus/dr-manhattan, 183 stars) for a unified CCXT-style interface across Opinion + Polymarket + Kalshi + Limitless + PredictFun.
3. **Fetch markets**: Agent queries `/market` endpoint to list active FOMC/economics/crypto markets. Filter by volume, spread width, and time-to-resolution.
4. **Quote both sides**: Agent calculates fair value using Perplexity Sonar API or multi-LLM ensemble (OpenRouter). Places limit orders on both YES and NO at a spread of 1-3 cents from estimated fair value.
5. **Earn rebates**: When a taker hits the limit orders, 50% of their taker fee is credited to the maker wallet daily in USDT.
6. **Harvest points**: Bot tracks time-weighted spread quality. Orders near mid-price accumulate PTS points redeemable for OPN tokens weekly.
7. **Rebalance**: Agent monitors position risk (net YES/NO exposure), cancels stale orders, re-quotes at updated fair values every cycle (5-15 minutes).
8. **Monitor capital**: Circuit breaker triggers if daily drawdown exceeds 2% of deployed capital; bot pauses and alerts.

## Source

- Opinion platform: opinion.trade
- Opinion CLOB SDK docs: docs.opinion.trade/developer-guide/opinion-clob-sdk
- Liquidity incentive announcement: Phemex News (phemex.com/news/article/opinion-launches-liquidity-incentive-mechanism-for-providers-66276)
- Fee structure: docs.opinion.trade/trade-on-opinion.trade/fees
- CoinDesk $20M raise: coindesk.com/business/2026/02/04/opinion-raises-usd20-million
- dr-manhattan library: github.com/guzus/dr-manhattan
- Prediction Hunt API blog (mentions Opinion integration): predictionhunt.com/blog/best-api-for-prediction-markets
- Run 23 memory note (2026-04-11): Opinion is flagged as priority research target since Run 22

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Python + TypeScript CLOB SDK; dr-manhattan unified library; market making loop is fully automatable; no human decision needed per trade |
| Setup effort | 5 | BNB Chain wallet setup more friction than Kalshi; API credentials; requires understanding spread quoting logic; ~3-5 hours to deploy |
| Yield potential | 7 | 50% of taker fees in USDT daily; $8B/month platform volume; providing 0.1% of volume earns ~$1,000-2,000/month at average 0.5% taker fee; plus OPN token points stacked on top |
| Risk | 5 | BNB Chain smart contract risk; OPN token price volatility on points portion; US accessibility not explicitly confirmed; crypto regulatory uncertainty; market making P&L depends on spread accuracy |
| **Overall** | **6.25** | Highest maker rebate rate of any prediction market; BNB Chain adds friction; strong platform volume |

## Implementation Notes

**Key tools:**
- Opinion CLOB SDK: Python + TypeScript, one API key for both OpenAPI (read) and CLOB SDK (trading)
- dr-manhattan (guzus/dr-manhattan): CCXT-style Python wrapper, enables cross-platform quoting — place maker orders on Opinion simultaneously with Polymarket/Kalshi using one codebase
- Prediction Hunt v2 API: already in library; check if `/api/v2/matching-markets` now includes Opinion for cross-platform pricing reference
- OpenRouter: use for multi-LLM ensemble fair value estimation before quoting

**BNB Chain specifics:**
- Gas costs on BNB Chain are low (~$0.01-0.05/transaction), acceptable for frequent order management
- USDT preferred over USDC on BNB Chain (native asset); rebates paid in USDT daily
- MetaMask supports BNB Chain out of the box (RPC: https://bsc-dataseed.binance.org, Chain ID: 56)

**Points program mechanics:**
- 100,000 PTS/week distributed pro-rata based on contribution score
- Contribution score = time-weighted liquidity × proximity-to-mid multiplier
- Orders at exactly mid-price earn maximum weight; orders 5+ cents away earn near-zero weight
- OPN token value is volatile (launched March 5, 2026 TGE) — treat points as speculative upside, not base income

**Market categories that optimize for this strategy:**
- FOMC rate decisions (binary Yes/No, high volume around announcement dates)
- Major crypto price milestones ($100K BTC, etc.)
- Macroeconomic data releases (CPI, unemployment numbers)
- Elections (long-horizon, less frequent rebalancing needed)

**Stacking strategy:**
- Run this bot simultaneously with polymarket-maker-rebates-market-making (25% rebate) using dr-manhattan's unified interface
- Compare spreads across Opinion/Polymarket/Kalshi to detect cross-platform arbitrage opportunities

**Rate limits:** Opinion OpenAPI and CLOB SDK rate limits not documented in public docs; start conservative (1 req/sec) and increase based on 429 behavior.

## Open Questions

1. **US restriction**: Does Opinion block US IP/wallet addresses? Crypto-native platforms on BNB Chain vary. Test with VPN or check Terms of Service explicitly. Opinion is decentralized (no KYC claimed in early docs) — likely not geofenced, but unconfirmed.
2. **Minimum viable capital**: What capital deployment generates meaningful USDT rebates? At $5K deployed and $200/day volume, taker fees at 0.5% avg = $1/day → 50% rebate = $0.50/day = $3.50/week — requires $25K-50K deployed for $50-100/week range.
3. **OPN token liquidity**: Is OPN token liquid enough to exit weekly points earnings? Check Binance/MEXC spot markets for daily volume. If thin: treat as bonus, not income.
4. **dr-manhattan Opinion support**: Verify that the guzus/dr-manhattan `opinion` exchange class is fully implemented (not just a stub). Check GitHub commit history for Opinion-specific code.
5. **Points-to-USD conversion rate**: 100,000 PTS/week pool — what's the OPN price per point? Monitor on-chain to size the points income stream.
