---
title: "Idea: Cross-Platform Prediction Market Arbitrage (Polymarket + Kalshi)"
date: 2026-04-10
tags: [passive-income, agentic, viable, prediction-markets, arbitrage, polymarket, kalshi, usdc]
---

# Cross-Platform Prediction Market Arbitrage (Polymarket + Kalshi)

## What It Is

Cross-platform prediction market arbitrage exploits price differences between Polymarket and Kalshi when both platforms list the same event. If Kalshi prices "Yes" at 35¢ and Polymarket prices "No" at 63¢, buying both costs 98¢ — yet one must resolve to $1.00, guaranteeing a 2¢ risk-arb profit regardless of outcome. The math is simple: any cross-platform pair where combined Yes+No cost < $1.00 is exploitable.

This is distinct from [[polymarket-same-market-arbitrage]] (which trades Yes+No on the *same* platform) and [[polymarket-maker-rebates-market-making]] (which earns on spread capture). Cross-platform arb requires maintaining accounts and capital on two separate exchanges. The key challenge is engineering, not math: Polymarket is crypto-native (CLOB on Polygon/EVM) while Kalshi is a US-regulated REST API exchange — different authentication, different contract schemas, different settlement timelines.

Documented spreads range from 1.5% to 4.5% per round trip on high-volume events. Working open-source implementations exist on GitHub (ImMike/polymarket-arbitrage, CarlosIbCu/polymarket-kalshi-btc-arbitrage-bot). The strategy gained new surface area in March 2026 when Polymarket US launched sports contracts (NBA, NHL, MLB, NCAA Tournament) under CFTC regulation, creating a fresh pool of less-competitive arb opportunities across sports markets that Kalshi also covers.

## How an Agent Does It

1. **Discovery loop (every 30-90 seconds)**: Poll `GET /api/v2/matching-markets` on Prediction Hunt v2 API (free tier: 1,000 req/month; paid for production) to identify equivalent contracts trading on both platforms. For sports use `GET /api/v2/matching-markets/sports`.

2. **Opportunity filter**: Calculate `kalshi_yes_price + polymarket_no_price` and `kalshi_no_price + polymarket_yes_price`. Flag any pair where combined cost < $0.97 (leaving 3¢+ margin after ~2¢ in platform fees).

3. **Execution**: Simultaneously submit limit orders on both platforms — CLOB limit order on Polymarket via Gamma API + Kalshi REST API order. Use `pmxt` (unified JS wrapper) to normalize schemas. Monitor fill status on both legs within a 5-second window.

4. **Partial fill handling**: If one leg fills but the other doesn't, cancel the unfilled leg and track the open directional exposure. Set a stop-loss rule if directional exposure exceeds $50.

5. **Position monitoring**: Track open positions until resolution. Note any discrepancy in resolution criteria between platforms on the same contract — flag for human review if resolution rules differ materially.

6. **Capital rotation**: When spreads close or better opportunities emerge, exit positions early rather than holding to expiry. Fiat withdrawal delays from Kalshi (regulated exchange) can slow rotation cycles.

7. **Alert on anomalies**: Any resolution where one platform pays out $1.00 and the other doesn't constitutes a resolution mismatch — log immediately and halt that market category.

## Source

- DEV Community article by Samuel Tinnerholm: "How I Built a 'Risk-Free' Arbitrage Bot for Polymarket & Kalshi" (https://dev.to/realfishsam/how-i-built-a-risk-free-arbitrage-bot-for-polymarket-kalshi-4f)
- GitHub: ImMike/polymarket-arbitrage (Python, watches 10,000+ markets)
- GitHub: CarlosIbCu/polymarket-kalshi-btc-arbitrage-bot (BTC 1-hour price markets)
- Prediction Hunt v2 API: https://www.predictionhunt.com/blog/how-to-build-prediction-market-trading-bot-api-guide
- Polymarket full exchange upgrade announcement: CoinDesk, April 6, 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Fully autonomous — pmxt library + Prediction Hunt API for discovery, CLOB + Kalshi REST for execution; working open-source implementations exist |
| Setup effort | 5 | Need Polymarket crypto wallet + Kalshi US account + API keys + capital on both platforms; 2-3 week setup; schema normalization engineering |
| Yield potential | 6 | 1.5-4.5% per round trip; frequency varies; sports markets are new and less competitive; weekly rotation compounds well |
| Risk | 7 | Risk-free per contract math, but resolution mismatch (platforms settle same event differently) is real; execution latency risk; liquidity risk on second leg |
| **Overall** | **6.75** | Viable — novel mechanism; extends existing prediction market stack |

## Implementation Notes

**Libraries and APIs:**
- `pmxt`: Unified JS/TS wrapper for Polymarket + Kalshi APIs (normalizes schemas)
- Prediction Hunt v2 API: `GET /api/v2/matching-markets` — free tier 1,000 req/month; paid tier for production polling
- Prediction Hunt sports endpoint: `GET /api/v2/matching-markets/sports?sport=NBA&date=YYYY-MM-DD`
- Kalshi REST API: standard API key auth, REST endpoints
- Polymarket CLOB API: EIP-712 wallet auth (handled by Bullpen CLI)
- eventarb.com: Cross-platform calculator for manual validation

**Fee structure:**
- Polymarket: zero fees for maker orders (limit orders resting on book); taker fee on filled orders
- Kalshi: transaction fee on expected earnings; maker fees on some markets
- Net cost: ~1.5-2¢ per $1 round trip → target spreads ≥ 3.5¢ after fees

**Sports arbitrage (new as of April 2026):**
Polymarket US (CFTC-registered) launched NBA, NHL, MLB, NCAA markets April 2026. These are less competitive than crypto/politics markets where high-frequency bots already operate. Sports contracts have defined resolution rules but check carefully for overtime clauses, withdrawal definitions, and statistical source differences between platforms.

**Capital requirements:** Recommend starting with $200-$500 per platform to validate execution. Scale to $2K-$10K per platform for meaningful returns.

**Important note on Polymarket USD (April 6 2026):** Polymarket is migrating from USDC.e to its own "Polymarket USD" collateral token. Existing CLOB integrations may need to update collateral handling once migration completes. Monitor official Polymarket docs.

## Open Questions

1. What percentage of matched markets on Prediction Hunt have genuine execution windows vs. stale data? (Test with paper trades for 2 weeks first)
2. How often do resolution criteria differ between platforms on the same event? (Check 10-20 resolved contracts manually before scaling)
3. Does Kalshi US block non-US IP addresses / VPN usage? (Could affect automated execution)
4. Is the sports contract overlap (NBA/NHL/MLB) large enough on both platforms for consistent daily opportunities?
5. How does the Polymarket USD collateral migration affect CLOB API authentication for existing bots?
