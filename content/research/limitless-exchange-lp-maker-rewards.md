---
title: "Idea: Limitless Exchange LP & Maker Rewards Bot"
date: 2026-04-12
tags: [passive-income, agentic, viable, prediction-markets, market-making, limitless, base-chain, defi]
---

# Limitless Exchange LP & Maker Rewards Bot

## What It Is

Limitless Exchange (limitless.exchange) is a Base-native prediction market platform with $580M+ cumulative trading volume and ~$13.1M annual fee run rate. It runs two simultaneously stackable passive income programs for limit order providers — both distinct from directional trading and fully compatible with autonomous agent execution.

**Program 1 — Maker Rebates (fee-funded, daily USDC):** On Daily markets, 100% of eligible taker fees are rebated back to makers in proportion to their filled volume. On Hourly and 15-minute Crypto markets, the rebate is 20% of eligible taker fees. Critically, makers pay zero fees on Limitless — takers pay 0.40%–3.00% depending on market probability. This creates an unusually wide maker/taker spread: a maker on a binary event at 50% probability (highest taker fee) captures the full rebate on a 2%+ fee pool.

**Program 2 — LP Rewards (proximity-weighted, per-market daily pools):** Each market has a dedicated daily USDC reward pool. Rewards are distributed every minute to limit orders resting within a defined spread threshold from the midpoint (e.g., ≤3 cents), weighted by proximity — tighter orders earn disproportionately more. Pools are funded separately from taker fees and distributed at 12:00 UTC daily. Minimum order sizes apply per-market (typically 100 shares).

A single well-placed limit order near the midpoint on a Daily market earns both streams simultaneously. This is passive yield from liquidity provision, not directional speculation — income is largely market-outcome agnostic.

This opportunity is **distinct** from the existing [[limitless-exchange-mcp-trading]] report, which covers using Limitless's 34-tool MCP server to take directional positions. The LP/maker rewards mechanism is about providing resting liquidity and earning fee rebates and pool distributions, regardless of how markets resolve.

## How an Agent Does It

1. **Connect** to the Limitless CLOB API using the official TypeScript SDK (`limitless-exchange-ts-sdk`), Python SDK (`limitless-sdk`), or Go SDK — all maintained by limitless-labs-group on GitHub
2. **Discover eligible markets**: Query the Limitless API for active Daily markets (100% rebate tier) with sufficient taker volume to generate meaningful fee rebates; prioritize markets near 50% probability (highest taker fee rate)
3. **Calculate optimal order placement**: For each target market, compute the midpoint and place resting limit orders on both YES and NO sides within the LP Rewards spread threshold
4. **Manage inventory**: Track directional exposure; if fills accumulate on one side, hedge or rebalance to avoid unintended net position
5. **Collect daily**: Maker Rebates and LP Rewards are distributed at 12:00 UTC; agent reads wallet balance and logs income
6. **Rotate capital**: After market resolution, redeploy capital into the next high-volume Daily market; use the `agents-starter` repo's `cross-market-arb` example as a starting scaffold
7. **Monitor**: Check `limitless-labs-group/limitless-cli` (Rust) for orderbook monitoring; the Rust CLI supports GTC and FOK order types natively

The official `agents-starter` repository (TypeScript) from limitless-labs-group provides three example strategies (oracle arbitrage, signal sniper, cross-market arb) that can be adapted for maker/LP strategies with the API already wired up.

## Source

- Maker Rebates docs: https://docs.limitless.exchange/user-guide/maker-rebates
- LP Rewards docs: https://docs.limitless.exchange/user-guide/lp-rewards.md
- Fees structure: https://docs.limitless.exchange/user-guide/fees.md
- GitHub SDK + agents-starter: https://github.com/limitless-labs-group
- DeFiLlama volume data: https://defillama.com/protocol/limitless-exchange
- Platform review: https://pm.wiki/projects/limitless-exchange

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Full CLOB API, official TS/Python/Go SDKs, agents-starter repo with example strategies, Base chain wallet; entirely automatable |
| Setup effort | 6 | Requires Base chain wallet setup + SDK integration + order management logic + inventory hedging; ~3-6 hours for a developer |
| Yield potential | 5 | $13.1M annual fee pool; realistic share with $5K capital = $30-150/week depending on volume and competition; scales with capital |
| Risk | 6 | Smart contract risk (Base chain, audited); market risk if inventory management fails; DeFi bridge risk for USDC deposits; Limitless is newer platform with less track record than Polymarket/Kalshi |
| **Overall** | **6.5** | Strong agentic fit; yield scales with capital; honest DeFi risk caveat |

## Implementation Notes

- **SDK install**: `npm install @limitless-exchange/sdk` (TypeScript) or `pip install limitless-sdk` (Python)
- **Rust CLI**: `cargo install limitless-cli` — supports GTC/FOK orders, orderbook monitoring
- **agents-starter**: Clone `github.com/limitless-labs-group/agents-starter` for TypeScript strategy scaffolding; adapt `cross-market-arb.ts` for the maker/LP strategy
- **Base chain**: Requires USDC on Base; bridge from Ethereum via official Base Bridge or Coinbase
- **Key constraint**: LP Rewards have per-market spread thresholds — orders too far from midpoint earn zero LP Rewards (still eligible for Maker Rebates)
- **Fee formula**: Rebate Credit = Executed Value × Taker Fee Rate × Program Eligibility Factor; taker fee = category_rate × 4 × p × (1-p) where p = market probability
- **Inventory risk**: Unlike Opinion/Kalshi market-making, binary prediction market prices move toward 0 or 1 on resolution — accumulated inventory on the "wrong" side can exceed earned rebates; active hedging or small position sizing required
- **Stacks with**: [[opinion-opn-maker-rebate-market-making]] (50% rebate on BNB Chain) and [[polymarket-maker-rebates-market-making]] for a multi-platform passive liquidity provisioning portfolio
- **Limitless USD settlement**: Same-day settlement on Base; no withdrawal delays

## Open Questions

- What is the actual daily LP Rewards pool size per market? Docs give an example ($200/day/market) but the live pool size per market is not publicly listed
- How competitive is the maker side? If many bots are providing liquidity, the per-bot share decreases — no maker count data published
- Does the 100% Daily market rebate tier apply to all event categories or only specific ones?
- How does the rebate wallet handle shortfalls — the docs mention pro-rata distribution if the wallet runs low, implying pool is not guaranteed
