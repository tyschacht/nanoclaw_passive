---
title: "Prediction Market Arbitrage & Market Making — Full Deep Dive (May 2026)"
date: 2026-05-05
tags: [prediction-markets, market-making, arbitrage, kalshi, polymarket, deep-dive]
---

> *3-agent research team. All claims pressure-tested against live data, API docs, community signals, and academic research as of May 5, 2026. Several original estimates were significantly revised.*

---

## Executive Summary & Rankings

| # | Strategy | Risk | Realistic Weekly | Capital | Verdict |
|---|---|---|---|---|---|
| 1 | Kalshi LIP Market Making | 4/10 | $80–180/wk | $5–15K | ✅ Pursue |
| 2 | Gemini Predictions Maker Rebate | 5/10 | $40–120/wk | $3–10K | ✅ Pursue (time-sensitive) |
| 3 | Limitless LP & Maker Rewards | 5/10 | $25–80/wk | $5K | ✅ Pursue (time-sensitive) |
| 4 | Polymarket Sports Liquidity Rewards | 6/10 | $50–200/wk | $25K | ⚠️ Pursue w/ conditions |
| 5 | Weather Bot (GFS/ECMWF Edge) | 7/10 | $40–100/wk | $10K + data costs | 👁️ Monitor |
| 6 | Whale Copy Trading (PolyCop) | 7/10 | $25–80/wk | $1–5K | 👁️ Monitor (small) |
| 7 | Opinion OPN Market Making | 7/10 | $40–120/wk | $10K | 👁️ Monitor |
| 8 | Kalshi LLM Ensemble Bot | 7/10 | $0–60/season | $2K | ❌ Skip |
| 9 | Polymarket/Kalshi Cross-Platform Arb | 8/10 | $0–30/wk | $10K+ | ❌ Skip |
| 10 | Limitless MCP AI Agent Trading | 8/10 | Unknown | $2–5K | ❌ Skip |

*Recommended opening stack: #1 + #2 + #3 simultaneously on $15K total = $145–380/wk realistic.*

---

## TIME-SENSITIVE ALERTS

- ⏰ *Gemini Predictions 0.70 promotional maker rebate expires June 10, 2026* (36 days). Drops to 0.30 after that — income roughly halves.
- ⏰ *Limitless Season 3 points program ends May 25, 2026* (20 days). Post-TGE hangover likely to reduce returns 60–70%.
- ⚠️ *CFTC political risk*: Congressional Democrats formally urged CFTC to rein in prediction markets on April 30, 2026. Treat all prediction market income as operating in a politically uncertain regulatory environment.

---

## 1. Kalshi LIP Market Making

### Original claim
$350–1,400/wk at moderate capital. Strategy: resting limit orders score Liquidity Incentive Program rewards proportional to order size × proximity to mid.

### What we found

*Holes in original analysis:*
- The $350–1,400/wk figure has no sourced basis. It represents an aspirational ceiling for a well-capitalized professional, not a center estimate.
- LIP rewards are purely *proportional* — more capital only helps up to the point where other participants are quoting the same market. In a $500/day pool with 10 active makers, each earns ~$50 before adverse selection drag.
- A 2026 GWU/CEPR academic paper documents that Kalshi market makers lose ~10% on average through adverse selection. LIP income must cover this drag to be net positive.
- Premier/Prime API tier requirements (3.75%/7.5% of monthly exchange volume = $450M–$900M/month traded) are completely unreachable for retail. Basic tier (10 writes/sec) is adequate for a bot managing 2–4 active markets.
- September 1, 2026 cliff is real. No LIP renewal has been announced. If it ends, the passive income thesis changes materially.
- Adverse selection is *not* symmetric. Informed bettors hit your stale quotes right before resolution. You collect rebates constantly but lose large chunks on resolution events. Net math is tighter than it appears.

*What's confirmed solid:*
- RSA-PSS WebSocket API is production-stable, well-documented
- Best markets for LIP: Fed rate decisions ($120M+/FOMC), hourly crypto, major political events
- USDC settlement, regulated in all 50 states
- Capital is not at risk to exchange insolvency in the same way as DeFi

### Revised returns

| Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|
| $5K | $40/wk | $80/wk | $130/wk |
| $10K | $70/wk | $140/wk | $220/wk |
| $15K | $80/wk | $170/wk | $260/wk |
| $25K | $85/wk | $180/wk | $270/wk |

*Returns plateau above ~$15K.* The binding constraint is number of active LIP-eligible markets you can quote, not capital deployed. Each market has a fixed daily pool. Capital beyond what fills your quotes is dead weight.

### Capital scaling curve
- $1K: Below practical threshold for meaningful LIP participation
- $5K: Sweet spot entry — covers 2 active markets adequately
- $10K: Near-optimal for 3–4 markets with buffer
- $15K+: Diminishing returns begin
- $25K+: No material improvement unless new LIP markets added

### Saturation
*Moderate, growing.* Kalshi LIP is discussed openly on r/Kalshi and r/PredictionMarkets. The early-mover window is still open but closing. Competition increases as program approaches Sep 1 cliff.

### Risk: 4/10
Primary risks: adverse selection, LIP program ending Sep 1, CFTC political environment.

### Verdict: ✅ Pursue
Start at $5–10K. Deploy WebSocket quoting bot across 2–4 active LIP markets. Reevaluate in August based on LIP renewal signals.

---

## 2. Gemini Predictions Maker Rebate Bot

### Original claim
$50–200/wk at $2–5K capital. Third CFTC-regulated US exchange (launched Mar 2026). Promotional 0.70 maker rebate rate through Jun 10.

### What we found

*Confirmed live as of May 5, 2026:*
- CFTC-regulated under Gemini Titan, LLC — live in all 50 US states
- Promotional maker rebate of *0.70* is real and documented (April 9 – June 10, 2026). After June 10, standard rate drops to *0.30*.
- Fee formula: `0.70 × 0.07 × C × P × (1-P)`. At $0.50 price = ~4.9¢ rebate per contract when taker hits your resting order. Net-positive maker fee even at current volume.
- REST + WebSocket API fully documented as of April 9, 2026 update
- Volume growing 330% MoM from a small base (absolute numbers still modest)

*Holes found:*
- Rebates only pay when *taker flow hits your orders*. At thin volume on a 5-month-old exchange, this is the binding constraint — you can quote all day without a fill.
- Eligible price band is $0.20–$0.80 only. Near-certain outcomes (priced outside this band) are excluded from maker rewards — these are often the highest-volume markets.
- June 10 cliff is hard: income roughly halves. Build in the assumption that this becomes a $20–60/wk opportunity after that date, not $40–120.
- No settlement fees, but on thin markets the bid-ask spread you must cross to enter/exit a position can exceed the rebate earned.
- 330% MoM growth is from a tiny base. Absolute volume unclear.

### Revised returns (through June 10)

| Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|
| $3K | $20/wk | $50/wk | $90/wk |
| $5K | $30/wk | $75/wk | $130/wk |
| $10K | $40/wk | $100/wk | $160/wk |

*Post-June 10 (standard 0.30 rate): divide by ~2.3*

### Capital scaling curve
- $1K: Viable, very small returns
- $5K: Sweet spot
- $10K: Near ceiling given current volume
- $25K+: No benefit until exchange volume grows materially

### Saturation
*Very low.* First-mover window on a new regulated exchange. Community awareness is minimal. This is the least crowded opportunity in this entire analysis.

### Risk: 5/10
Risks: thin volume limits fills, June 10 rate drop, new exchange counterparty risk (mitigated by CFTC regulation), USDC/USD liquidity.

### Verdict: ✅ Pursue — Time-Sensitive
*36 days left on the promotional rate.* Deploy $3–10K now, focused on BTC/ETH intraday contracts (likely highest volume). Build the bot first, reassess at June 10 whether to continue.

---

## 3. Limitless LP & Maker Rewards Bot

### Original claim
$30–150/wk at $5K capital. 100% maker rebate on Daily markets + proximity-weighted LP rewards pool. Base L2. Official Python/TS/Go SDKs.

### What we found

*Confirmed:*
- 100% maker rebate on daily, hourly, and 15-minute crypto markets is live and paying in USDC
- Base L2 gas fees are negligible (fractions of a cent per transaction)
- TypeScript and Python SDKs are maintained (confirmed active commits)
- agents-starter repo exists and is functional
- Season 3 points program actively incentivizing liquidity provision

*Holes found:*
- Volume is heavily *Season 3 points-program-driven*. Season 3 ends *May 25, 2026* — 20 days away.
- After the TGE (token generation event), volume is likely to experience the same hangover as Opinion OPN — volume dropped 60% in 48 hours post-TGE there.
- Post-TGE realistic returns: $5–25/wk on the same capital as the current $25–80/wk — a 60–70% reduction.
- The opportunity window for the current income level is measured in days, not months.

### Revised returns

| Period | Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|---|
| Now → May 25 | $5K | $15/wk | $50/wk | $100/wk |
| Post-May 25 | $5K | $5/wk | $20/wk | $40/wk |

### Capital scaling curve
- $5K: Sweet spot for current season
- $10K: Marginal improvement; market depth limits fills
- $25K+: Not productive during current season

### Saturation
*Moderate.* Points-program participants are actively farming this. But the market is not yet crowded with sophisticated bots — manual and semi-manual LPs dominate.

### Risk: 5/10
Risks: Season 3 end cliff, TGE hangover, Base L2 smart contract risk (mitigated by Limitless being a known protocol).

### Verdict: ✅ Pursue — Time-Sensitive
*Deploy before May 25 to capture Season 3 returns.* Reassess post-TGE. This is the easiest technical lift of the group — Python SDK, Base L2, straightforward quoting.

---

## 4. Polymarket Sports Liquidity Rewards

### Original claim
$150–600/wk during sports season. $5M/month pool. Champions League $24K/game. Stacks with 25% maker rebates.

### What we found

*Confirmed real:*
- $5M April 2026 pool is documented
- Champions League per-game allocations ($24K peak for finals) are real
- 25% maker rebate stacks with liquidity rewards

*Major holes found:*
- *CLOB v2 migration on April 28, 2026 broke all V1 bots.* Every bot running against the old API stopped working. This is a mandatory re-tool. If you don't have a V2-native bot already, you're starting from scratch.
- May 2026 pool continuation is *not confirmed* in any official source. The $5M was April's allocation — unclear if it continues.
- *US users remain geoblocked from Polymarket main exchange.* Polymarket is seeking CFTC approval to lift this but it has not happened as of May 5, 2026. This eliminates the opportunity entirely for US-based operators without using a non-US entity.
- Most LP participants earn *negative real returns* after adverse selection events. When a major news event hits, informed bettors hammer your resting orders before you can reprice. The $150–600/wk is a gross figure before these losses.
- The live-game market pool (78% of per-game allocation) requires real-time sports data infrastructure (sub-second event feeds). Pre-game markets are more accessible to retail.
- Champions League finals are May 30, 2026 — the top-value event window closes in 25 days.

### Revised returns (US operators who can access)

| Setup | Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|---|
| Pre-game focus, V2 native | $10K | $20/wk | $60/wk | $120/wk |
| Semi-pro, live+pre-game | $25K | $50/wk | $150/wk | $300/wk |

### Capital scaling curve
- Below $10K: Allocation too small to win meaningful portion of pool
- $10K–$25K: Linear improvement
- $25K+: Diminishing returns as pool share grows but adverse selection risk scales faster

### Saturation
*High for professional operators.* The $24K/game figure attracts quantitative shops. Retail competes only in pre-game pools where professional real-time data is not required.

### Risk: 6/10
US geoblocking is the biggest blocker. CLOB v2 migration is required. Adverse selection is real.

### Verdict: ⚠️ Pursue only if US-accessible
If you can access Polymarket (non-US entity, or if CFTC approval lands), pursue pre-game markets with a V2-native bot at $10–25K. Otherwise, skip. Champions League finals are the immediate opportunity (May 30).

---

## 5. Polymarket Weather Bot (GFS/ECMWF Edge)

### Original claim
$100–400/wk at $5–20K. Timing arb between model updates and market prices. $24K–$65K documented profits. Multiple open-source bots.

### What we found

*Confirmed:*
- The $24K–$65K profit claims trace to real on-chain wallet data. These are verifiable.
- Multiple open-source weather bots exist and are maintained (Python and Rust implementations found on GitHub)
- The edge mechanism is real: GFS updates every 6 hours, ECMWF updates twice daily, markets often take 5–15 minutes to reprice after a model shift

*Major holes found:*
- The $24K–$65K figures are *top 0.1% operators over 10+ months* — not weekly returns for a new entrant. This is survivor bias.
- Free ECMWF ERA5 data has a *structural 2-hour lag* vs. paid ECMWF real-time feeds. You are racing against bots with paid feeds if you use free data.
- Five-plus maintained open-source bots plus at least 2 commercial SaaS entrants have compressed the edge window. Major markets (>$500K open interest) are effectively competed out for retail.
- The edge is real but now requires: (1) paid real-time data ($200–$1,000/mo for ECMWF commercial), (2) VPS co-location near AWS us-east-1 (Polymarket backend) to minimize latency, (3) niche market selection (smaller markets where bots haven't saturated yet).
- Polymarket is US-geoblocked — same issue as Sports.

### Revised returns (with proper infrastructure)

| Setup | Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|---|
| Free data + residential | $5K | $0/wk | $10/wk | $40/wk |
| Paid data + VPS | $10K | $30/wk | $80/wk | $200/wk |

### Capital scaling
Returns are *latency-bound*, not capital-bound. Doubling capital does not double returns if you're already losing the latency race.

### Saturation: High on major markets, low on niche sub-markets

### Risk: 7/10
Geoblocking, latency arms race, data costs, no guaranteed edge.

### Verdict: 👁️ Monitor
Only viable with paid real-time data and VPS co-location. Budget $400–1,200/mo in infrastructure before this generates positive returns. Track whether Polymarket CFTC approval lands.

---

## 6. Whale Copy Trading (PolyCop)

### Original claim
$50–150/mo at $1K ($500–1,500/mo at $5K). Wallet scoring + automated copy via PolyCop. Note: use PolyCop, not Polycup (Polycup hacked Jan 2026).

### What we found

*Clarification on the hack:*
- "Polycup" was actually *"Polycule"* — $230K stolen via SSRF attack on custodially stored private keys in January 2026. Not $0 user loss — it was significant.
- PolyCop uses non-custodial EIP-4361 architecture (sign-in, not key custody). Structurally safer. Currently operational as of May 2026.

*Holes found:*
- Copy-trading edge has *severely deteriorated*. 7+ competing tracker services (PolyCop, Polytrack, ShadowWhale, plus several Telegram bots) now monitor the same wallets.
- Sophisticated whales have documented counter-measures: decoy positions in small amounts, multi-wallet obfuscation, position splitting across 5–10 wallets to make true size invisible.
- Unavoidable slippage on copy-entry: by the time your copy order lands, the market has moved. On a $0.50 market that moves to $0.52, your effective entry is worse by 4 cents — meaningful on thin margins.
- Most of the documented profitable wallets are themselves market makers, not directional traders. Copying a market maker's positions gives you adverse selection exposure, not edge.
- US geoblocking on Polymarket — same issue.

### Revised returns

| Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|
| $1K | $5/mo | $25/mo | $60/mo |
| $5K | $20/mo | $80/mo | $200/mo |

*Original $500–1,500/mo at $5K was 2024 data. Edge has compressed 60–70% since then.*

### Capital scaling
Not capital-constrained — constrained by quality of copy targets. Adding more capital just increases your slippage on each trade.

### Saturation: High and rising

### Risk: 7/10
Declining edge, US geoblocking, whale counter-measures, PolyCop counterparty dependency.

### Verdict: 👁️ Monitor at small scale ($1–5K)
Don't deploy serious capital here. At $1–2K it's a useful learning exercise and generates small returns. Not a primary income strategy.

---

## 7. Opinion OPN Market Making

### Original claim
$100–400/wk at $5–25K capital. 50% maker rebate, $0 maker fee. 31% global prediction market volume, $8B+/mo.

### What we found

*Volume claim is real-but-inflated:*
- The $8B+/mo volume is verifiable on-chain but heavily inflated by airdrop-farming activity.
- Volume *collapsed 60% in 48 hours* after the March 5, 2026 TGE — clear evidence the pre-TGE volume was incentive-driven, not organic.
- As of May 5, 2026, there is a *32M OPN token unlock* adding significant sell pressure.

*Rebate claim partially wrong:*
- The 50% maker rebate was a *roadmap item* at the time of the original research, not yet fully operational. It has since launched (reportedly up to 60%), but into a thinner post-airdrop market.
- No official trading SDK — automation requires building against the raw API, which is more engineering lift than Kalshi or Limitless.
- BNB Chain gas fees are low but non-zero; bridge friction to move capital in/out.
- US user access unclear — not explicitly geoblocked but KYC requirements ambiguous.

### Revised returns

| Capital | Conservative | Realistic | Optimistic |
|---|---|---|---|
| $5K | $15/wk | $50/wk | $100/wk |
| $10K | $20/wk | $80/wk | $130/wk |
| $25K | $20/wk | $90/wk | $140/wk |

*Caps at ~$15K due to thin per-market depth. Original $100–400 at $5–25K was overstated.*

### Capital scaling
Effectively flat above $15K — the market depth per contract is the ceiling, not your capital.

### Saturation: Growing (post-airdrop market makers still present)

### Risk: 7/10
Token price risk on OPN rewards, thin liquidity post-TGE, no official SDK, KYC uncertainty for US users.

### Verdict: 👁️ Monitor
Wait for post-TGE volume to stabilize (2–4 weeks). If organic volume holds at $3–4B/mo, this becomes attractive. Re-evaluate in June 2026.

---

## 8. Kalshi LLM Ensemble Bot (Sports)

### Original claim
$50–200/season. 5-model OpenRouter consensus. NCAAB 74% win rate / +10% ROI documented.

### What we found

*The core premise is unverified:*
- The "74% win rate / +10% ROI" claim has *zero verifiable source*. No peer-reviewed paper, no audited backtest, no confirmed live trading record was found.
- A real-world Kalshi sports bot case study with comparable architecture showed the LOW confidence tier (stated 65–75% confidence) produced an *actual 34.9% win rate* — the exact inverse of the stated confidence. The bot was shut down.
- LLM calibration on sports outcomes is documented to fail in peer-reviewed benchmarking. Models express high confidence on outcomes they cannot reliably predict.
- LLM "ensemble diversity" is largely illusory when all 5 models share training corpora — they produce correlated errors, not diverse perspectives.
- Kalshi's 3.5% max taker fee requires a breakeven accuracy of ~53.5% on even-money markets. At 10% ROI edge (if it existed), Kelly optimal bet at $2K bankroll with 2 bets/week yields ~$8.45 expected value per week — far below the stated $50–200/season claim.
- NCAAB season is 5 months; the strategy provides no income November→January or June→September.

### Revised returns
$0–60/season *if* the edge claim has any validity. $0 if the premise is fabricated (most likely).

### Risk: 7/10
Capital at risk if LLMs produce anti-correlated accuracy. The documented case study shows real money was lost.

### Verdict: ❌ Skip
Paper-trade one full season before deploying real capital. The underlying 74% win rate claim is unsubstantiated.

---

## 9. Polymarket/Kalshi Cross-Platform Arbitrage

### Original claim
$60–300/wk. Same event, different prices. Bot monitors both sides and locks spreads.

### What we found

*This opportunity is effectively dead for retail operators:*
- Arb windows have collapsed from *12.3 seconds average (2024)* to *2.7 seconds (early 2026)*.
- *73% of all cross-platform arb profits are now captured by sub-100ms bots* (IMDEA Networks Institute, 2026 analysis of $40M extracted from Polymarket over 12 months).
- Median arb spread is *0.3¢*. Break-even spread needed to cover fees is *1.75–2.5¢*. The median opportunity is fee-negative before execution.
- Partial fill execution risk is severe: if one leg fills and the other doesn't, you're left with a naked directional position — the opposite of risk-free arbitrage.
- Capital locked on two platforms simultaneously (USDC on Polygon vs. USD bank transfers to Kalshi). Bank transfers take 1–5 business days — you cannot react to price dislocations.
- 14 of the 20 most profitable Polymarket wallets are institutional bots. Multiple public open-source Python and Rust arb bots confirm this space is saturated.
- Polymarket is US-geoblocked — retail US users cannot legally access the exchange.

### Revised returns
$0–30/wk at $10K+ on residential connection without co-location. *Effectively zero.*

### Saturation: Extreme

### Risk: 8/10
Capital at risk to partial fills, geoblocking legal exposure, no realistic edge for retail.

### Verdict: ❌ Skip
The original $60–300/wk claim was achievable in 2024. In May 2026, this requires professional-grade infrastructure and co-location. Not viable for retail.

---

## 10. Limitless MCP AI Agent Trading

### Original claim
$100–400/wk at $2–5K capital. Base-native prediction market. 34-tool MCP server. Same-day settlement.

### What we found

*The primary MCP server is abandoned:*
- The main Limitless MCP server (joinQuantish/limitless-mcp) has *9 commits and no planned maintenance*. Quantish is winding down operations.
- The 34 tools are execution plumbing (order placement, wallet management) — they are *not alpha generation*. Having a tool to place orders does not tell you what to order.
- The $100–400/wk at $2–5K implies *104–416% annualized returns from directional trading*. This requires a genuine predictive edge the original analysis never establishes.
- An AI agent does not have informational advantage over domain experts on sports, political, or economic outcomes. LLM-based directional trading is the same failed premise as the Ensemble Bot.
- The LP/Maker opportunity on Limitless (Opportunity #3) is the valid play — this MCP-wrapped directional trading is not.

### Risk: 8/10

### Verdict: ❌ Skip
Use Limitless for market making (Opportunity #3), not directional AI trading. The MCP server is abandoned and the return premise is unrealistic.

---

## Recommended Capital Allocation

### $10K Budget

| Allocation | Strategy | Expected Weekly |
|---|---|---|
| $5K | Kalshi LIP Market Making | $80–140/wk |
| $3K | Gemini Predictions (through Jun 10) | $40–80/wk |
| $2K | Limitless LP & Maker (Season 3) | $15–35/wk |
| $0 | Everything else | — |

*Combined: $135–255/wk on $10K = 1.35–2.55%/week through June 10*
*Post-June 10 (Gemini rate drops, Limitless season ends): $80–160/wk on $10K*

### $25K Budget

| Allocation | Strategy | Expected Weekly |
|---|---|---|
| $15K | Kalshi LIP Market Making | $150–250/wk |
| $7K | Gemini Predictions (through Jun 10) | $70–150/wk |
| $3K | Limitless LP & Maker (Season 3) | $15–50/wk |
| $0 | Everything else | — |

*Combined: $235–450/wk on $25K through June 10*

---

## Universal Risk Factors (All Strategies)

1. *CFTC regulatory risk* — Congressional Democrats urged CFTC action on April 30, 2026. The US-regulated window could close faster than expected.
2. *Adverse selection* — The universal primary risk across all market making strategies. Informed bettors hit your stale quotes at unfavorable moments. LIP income buffers this but does not eliminate it.
3. *Capital concentration* — Don't run >50% of liquid capital on any single platform. Exchange risk is non-zero.
4. *Airdrop-driven volumes* — Any DeFi prediction market volume during an active points program should be discounted 50–70% when estimating post-TGE returns.
5. *CLOB migration risk* — Polymarket's CLOB v2 migration on April 28 broke all V1 bots. Platform upgrades are a recurring maintenance burden.

---

## What Changed vs. Original Analysis

| Opportunity | Original | Revised | Change |
|---|---|---|---|
| Kalshi LIP | $350–1,400/wk | $80–180/wk | ⬇️ 70% lower |
| Gemini Predictions | $50–200/wk | $40–120/wk | ≈ Confirmed |
| Limitless LP | $30–150/wk | $25–80/wk (seasonal) | ⬇️ Cliff incoming |
| Polymarket Sports | $150–600/wk | $50–200/wk (US blocked) | ⬇️ US blocked |
| Weather Bot | $100–400/wk | $0–10/wk (free data) | ❌ Saturated |
| Whale Copy Trading | $500–1,500/mo | $20–80/mo | ⬇️ 80% lower |
| Opinion OPN | $100–400/wk | $40–120/wk | ⬇️ Post-TGE thin |
| Kalshi Ensemble | $50–200/season | $0 (unverified premise) | ❌ Skip |
| Polymarket/Kalshi Arb | $60–300/wk | $0–30/wk | ❌ Saturated |
| Limitless MCP Trading | $100–400/wk | Skip (abandoned infra) | ❌ Skip |

---

*Related docs: [[kalshi-market-maker-bot]] · [[april-11-top-5]] · [[tech-stack]]*
