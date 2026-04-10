---
title: "Idea: Polymarket Sports Liquidity Rewards — Sports-Targeted Market Making"
date: 2026-04-10
tags: [passive-income, agentic, viable, prediction-markets, market-making, polymarket, sports, liquidity-rewards]
---

# Polymarket Sports Liquidity Rewards — Sports-Targeted Market Making

## What It Is

Polymarket runs a dedicated $5M+/month Liquidity Rewards program (separate from the 25% maker rebates program) that pays market makers a share of a fixed monthly pool based on the quality of their limit orders. In April 2026, this program distributes rewards specifically across sports and esports markets, with the highest allocations going to individual game contracts:

- Champions League QF games: $24,000 per game ($6,750 pre-game + $17,250 live in-play)
- NBA games: $7,700 per game ($2,150 pre + $5,550 live)
- UFC main card events: $4,250 per card ($1,200 pre + $3,050 live)
- English Premier League: $10,000 per game ($2,800 pre + $7,200 live)

An agent that consistently posts tight, two-sided limit orders in these sports markets earns a proportional share of each game's daily reward pool via a quadratic scoring formula. Critically, this program stacks on top of the existing 25% maker rebate on taker fees — meaning a sports market maker earns from three simultaneous income streams: (1) the fixed monthly rewards pool, (2) 25% of taker fees on their orders, and (3) the natural bid-ask spread when orders are filled.

## How an Agent Does It

1. **Initialization**: Register Polymarket wallet, fund with Polymarket USD (post-April 2026 migration), install CLOB-Client SDK (updated to CTF Exchange V2 compatible version — required by late April 2026)
2. **Market discovery**: Query `GET /markets?category=sports` via Polymarket CLOB API to retrieve all active sports contracts, their `min_incentive_size` and `max_incentive_spread` values per market
3. **Reward pool check**: Query `GET /rewards/markets/{marketId}` to see current reward pool allocation per game
4. **Quoting loop (every 30-60 seconds)**:
   - Pull current mid-price from order book
   - Post limit buy at `midprice - spread/2` and limit sell at `midprice + spread/2`, staying within `max_incentive_spread` to qualify
   - Size orders at or above `min_incentive_size`
   - Favor two-sided quoting (both YES and NO sides) — the formula applies a two-sided depth boost
5. **Epoch accumulation**: Rewards accumulate across 10,080 minute-long samples per month, paid out daily at midnight UTC to the maker's wallet address
6. **Risk management**: Set maximum position exposure per market (e.g., max $500 net long/short on any single game) and circuit breakers for live in-play volatility
7. **Settlement**: Resolved markets automatically settle USDC to wallet; agent reinvests into new active markets

The agent specifically targets the live in-play period (which carries 3x+ the pre-game reward allocation per game) while managing inventory risk during sharp event moves.

## Source

- Polymarket Liquidity Rewards documentation: https://docs.polymarket.com/market-makers/liquidity-rewards
- Polymarket Help Center Liquidity Rewards article confirming separate program from maker rebates
- Phemex News: "Polymarket LP Rewards Top $12.86M with 66,000 Addresses" — confirms program scale
- RootData analysis: "Four Key Truths and Cost Traps Behind Polymarket LP Market Making Incentives"
- Bitcoin.com News: "Polymarket's April 2026 Upgrade: New Stablecoin, Faster Order Matching, Smart Contract Wallet Support" (April 6, 2026) — CTF Exchange V2 context
- Awesome-Prediction-Market-Tools GitHub (aarora4): PolyRewards Tracker confirmed "$11M distributed" milestone

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Identical infrastructure to maker rebates bot — same CLOB API, same order routing; reward optimization is a parameter tweak, not a new build |
| Setup effort | 5 | Requires understanding the quadratic scoring formula, targeting the right markets, and handling CTF Exchange V2 migration; more complex than basic quoting |
| Yield potential | 7 | $150-600/week with $20K deployed during active sports season; Champions League QF + NBA playoffs running simultaneously in April 2026 = peak opportunity |
| Risk | 7 | Capital at risk for inventory positions; sports results create sharp moves; regulatory risk is low (CFTC-compliant platform); Polymarket USD migration must complete first |
| **Overall** | **7** | |

## Implementation Notes

**Critical prerequisite**: Polymarket's CTF Exchange V2 (launched April 6, 2026) requires all bot operators to update to the latest CLOB-Client SDK (TypeScript, Python, or Go). Order struct changed. Bot operators must update within approximately 2-3 weeks or orders will be rejected. GitHub: polymarket/py-clob-client or polymarket/clob-client.

**Quadratic scoring formula mechanics**: The reward formula scores orders using a quadratic decay based on distance from the mid-price. Orders tighter than `max_incentive_spread` score highest. The formula explicitly rewards two-sided depth — posting both a YES and NO limit order for the same market gives a multiplicative boost vs. single-sided quoting.

**Portfolio approach**: Target 3-5 simultaneous games during peak periods (April = Champions League QF + NBA playoffs). Set maximum gross exposure per game at 5-10% of portfolio.

**Capital requirements**: Minimum ~$5,000 deployed to earn meaningful rewards. $20,000+ deployed allows competitive quoting on multiple high-value games simultaneously.

**Stacking income streams**: This strategy should be combined with the [[polymarket-maker-rebates-market-making]] report — the same orders earn both the fixed reward pool share AND the 25% maker rebate on taker fees.

**Known limitation**: Sports season dependency. High-value games only run during specific seasons. Champions League QF = April. NBA playoffs = April-June. UFC = year-round. EPL = August-May. An agent should shift to non-sports markets (crypto, politics, economics) during off-seasons to maintain income.

**Polymarket USD migration note**: As of April 6, 2026, Polymarket replaced USDC.e with their own 1:1 USDC-backed stablecoin ("Polymarket USD"). The CLOB-Client SDK handles this transparently for users but the SDK must be updated to the latest version first.

## Open Questions

- What percentage of the monthly reward pool can a single well-tuned market maker realistically capture? (5-15% of a game's pool seems feasible based on leaderboard analysis)
- Does the quadratic scoring formula penalize agents that post very large orders vs. many smaller orders?
- Has the CTF Exchange V2 live/pre-game reward allocation structure changed from the April 2026 documentation?
- Do the Liquidity Rewards stack additively with maker rebates, or is there any cap or offset between the two programs?
