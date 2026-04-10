---
title: "Idea: Multi-LLM Ensemble Prediction Market Bot (Sports Safe Compounder)"
date: 2026-04-10
tags: [passive-income, agentic, viable, prediction-markets, kalshi, polymarket, trading, multi-agent, llm]
---

# Multi-LLM Ensemble Prediction Market Bot

## What It Is

A prediction market trading bot that routes questions about upcoming events through a *panel of 5 LLM models simultaneously* — each playing a distinct analytical role — and only enters a position when the weighted ensemble reaches consensus. The strategy is grounded in three peer-reviewed research papers from MIT, Bridgewater AIA Labs, and Penn, which collectively show that a multi-LLM ensemble ("wisdom of the silicon crowd") can *rival human superforecaster accuracy* on real prediction markets.

The key insight from the research: a single LLM fails at prediction markets. In controlled tests, only Claude Opus marginally beat a random-guess baseline (Brier score of +0.057 over base rate). All other models performed *worse* than uninformed guessing. But when 5–10 models are combined using a median forecast, ensemble accuracy climbs to match the Polymarket/Kalshi crowd — the same crowd that historically outperforms polls and pundits. The optimal ensemble size is 5–10 models; beyond 10 there is no accuracy gain.

The open-source implementation `ryanfrigo/kalshi-ai-trading-bot` operationalizes this directly on Kalshi. It orchestrates five frontier models via OpenRouter (single API key, no per-model accounts needed) with assigned roles: Lead Analyst (Claude, 30%), Forecaster (Gemini, 30%), Risk Manager (GPT, 20%), Bull Researcher (DeepSeek, 10%), Bear Researcher (Grok, 10%). If the weighted confidence falls below the threshold (default: 45%), the trade is skipped. The bot also applies Platt scaling to correct for the known LLM hedging bias: models systematically under-report their true confidence (e.g., a model 98% confident reports 97%), so raw probabilities are recalibrated before comparison to market prices.

A specific sub-mode called the *Safe Compounder* has documented edge: it exclusively bets NO on underdog NCAA basketball teams during regular season and tournament play, where the human crowd (Kalshi) systematically over-estimates their chances. This mode requires no LLM calls — it uses a rules-based scan for markets where implied probability exceeds a threshold — and achieves a documented **74% win rate and +10% ROI** on deployed capital across the NCAAB season.

## How an Agent Does It

1. **Market scan** — every 15 minutes, query Kalshi REST API (`/v2/markets`) for open sports, politics, and economics markets with >$500 in open interest and expiry within 7–30 days.
2. **Safe Compounder filter** — for any NCAA basketball market: if Kalshi price for YES > 0.70 (implied 70%+ chance the team wins), queue the corresponding NO-side as a candidate.
3. **LLM ensemble evaluation** (optional, for non-sports markets) — pass market question + resolution criteria + current probability to all 5 models via OpenRouter. Collect weighted confidence estimates. Apply Platt scaling. Skip if consensus confidence < 45% or models disagree > 15% spread.
4. **Kelly sizing** — calculate fractional Kelly position size (0.25x) based on ensemble edge vs. Kalshi price. Cap at 10% of bankroll per position.
5. **Order execution** — place limit order via Kalshi REST API (`POST /v2/orders`). Log position ID, entry price, rationale.
6. **Position monitoring** — check open positions every 30 minutes. If market resolves: record P&L, update running metrics. If market moves > 20% against position: evaluate exit.
7. **Circuit breakers** — hard stop at -10% daily drawdown or -15% total drawdown. Resume after 24-hour cooling period.

## Source

- YouTube: Emil Nielsen — "How a Multi-Model AI Ensemble Can Trade Prediction Markets (Research-Backed)" (Apr 3 2026, 401 views) — https://www.youtube.com/watch?v=tlylAJ9zbFo
- GitHub: ryanfrigo/kalshi-ai-trading-bot — open-source Python implementation with OpenRouter + Kalshi
- Research Paper 1: "Do Large Language Models Know What They Don't Know?" — arXiv 2512.16030
- Research Paper 2: "Wisdom of the Silicon Crowd: LLM Ensemble Prediction Capabilities Rival Human Crowd Accuracy" — arXiv 2402.19379
- Research Paper 3: "AIA Forecaster Technical Report" — arXiv 2511.07678

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Fully autonomous once deployed; OpenRouter abstracts multi-model complexity; Kalshi has clean REST API; runs on cron |
| Setup effort | 6 | Python + OpenRouter account ($5 credit to start) + Kalshi account; 2–3 hours; open-source code to fork |
| Yield potential | 5 | NCAAB Safe Compounder: 74% win rate, ~10% ROI on capital per season (Oct–Apr); general ensemble yield unproven; need ~$500 bankroll for meaningful returns; realistically $50–200/season on $500 |
| Risk | 5 | Experimental software (no audited live results); NCAAB edge may not persist; LLM API costs $0.10–0.50 per trade decision; Kalshi market risk |
| **Overall** | **6** | Viable — specific sports edge is credible; research backing is unusual for this space |

## Implementation Notes

**OpenRouter** (openrouter.ai) is the key unlock: one API key routes to Claude, Gemini, GPT-4o, DeepSeek, and Grok. No separate accounts for each model. Cost per trade decision: roughly $0.08–0.25 depending on prompt length and model pricing.

**Kalshi API**: REST + RSA-PSS authentication. Rate limit: 10 req/sec. Paper trading not native but you can shadow-trade (log decisions without sending orders) by commenting out the `POST /v2/orders` call.

**Required setup**:
```bash
git clone https://github.com/ryanfrigo/kalshi-ai-trading-bot
pip install -r requirements.txt
cp .env.example .env  # add OPENROUTER_API_KEY, KALSHI_API_KEY
python main.py --mode safe_compounder  # start with NCAAB only
```

**NCAAB timing**: College basketball regular season runs Nov–Mar; tournament (March Madness) runs March–April. The Safe Compounder mode is dormant May–Oct. During NBA/NHL/MLB season, adapt the same "NO on heavy favorites" logic to those markets.

**Platt scaling**: The repo implements a calibration layer that corrects for LLM hedging bias. Recalibrates probability outputs before comparing to Kalshi market price to identify true edge.

**Related open-source**:
- `aarora4/Awesome-Prediction-Market-Tools` — curated list of all prediction market bots/tools
- `polyseer` — multi-agent Bayesian aggregation for Polymarket/Kalshi (alternative ensemble approach)
- `PolyOracle` — multi-LLM consensus system for Polymarket (similar architecture)

## Open Questions

1. Has anyone documented live trading P&L on the AI ensemble mode (not just NCAAB Safe Compounder)?
2. Does the NCAAB edge persist once more bots discover it? (Market saturation risk)
3. What is the minimum bankroll needed to cover LLM costs while still generating positive net income?
4. How does the bot handle Kalshi's Polymarket USD token migration currently underway?
5. Can the "NO on heavy favorites" logic be extended to NFL/NBA/MLB profitably with the same setup?
