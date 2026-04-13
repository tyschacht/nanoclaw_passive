---
title: "Red Herring: Polymarket 'Nothing Ever Happens' No-Bias Strategy"
date: 2026-04-13
tags: [passive-income, not-viable, red-herring, polymarket, prediction-markets, trading]
---

# Polymarket "Nothing Ever Happens" No-Bias Strategy — Not Viable

## What It Claims to Be

A Polymarket trading bot that always buys the "No" outcome on non-sports yes/no markets, based on the observation that prediction markets systematically overprice dramatic outcomes. The thesis: reality is boring, most anticipated big events don't happen, and "No" is chronically underpriced because markets attract speculators excited by dramatic outcomes. The open-source bot (github: sterlingcrispin/nothing-ever-happens) scored 322 points on Hacker News in April 2026 with active community discussion. Theoretically grounded in behavioral finance literature (availability bias, narrative bias in crowd-sourced predictions).

## Why It Doesn't Work Agentically

- **Zero documented P&L, live or backtested.** The repository explicitly warns: "FOR ENTERTAINMENT ONLY. PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND." The README contains no performance metrics, profit figures, win rate, or return on capital. The bot defaults to paper trading unless three specific environment variables are all set to enable live trading. No user has publicly documented sustained positive returns from deploying this strategy.

- **Fatal tail risk from rare but catastrophic events.** HN commenter "krashidov" accurately describes the core problem: "Isn't this just picking up pennies on an active railroad track? You'll win small bets and then get run over once a long tail event completely wipes you out." The strategy has no position sizing rules, no Kelly criterion, no stop-loss, and no circuit breaker. A single "No" bet on a market that resolves "Yes" (e.g., a dramatic political event) wipes accumulated gains. The 92.4% of Polymarket traders who lose money predominantly lose because of exactly this pattern.

- **No edge over the multi-model ensemble strategy already documented.** Our [[kalshi-multimodel-llm-ensemble-bot]] VIABLE report covers a statistically grounded approach using 5+ LLM models with Kelly criterion position sizing, documented 74% win rate on NCAAB markets, and verified $10% ROI. A single-rule "always buy No" heuristic has no comparable research backing. The three arXiv papers cited in the ensemble report (2402.19379, 2511.07678, 2512.16030) specifically find that single-model analysis produces 52% accuracy — worse than informed human trading.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Technically autonomous; the bot can run headlessly |
| Setup effort | 7 | Open-source, Heroku-deployable, relatively simple setup |
| Yield potential | 2 | Zero documented returns; tail-risk wipeout pattern; entertainment-only disclaimer |
| Risk | 3 | High financial risk (no stop-loss, no position sizing, no edge validation); trading on real capital |
| **Overall** | **4.75** | Technically agentic but yield is unproven and tail risk is disqualifying |

## Source

- HN: item 47753472 (322 pts, April 2026) — "Nothing Ever Happens: Polymarket bot that always buys No on non-sports markets"
- GitHub: sterlingcrispin/nothing-ever-happens (open-source Polymarket No-bias bot)
- HN discussion comments: "tekno45" (no returns documented), "krashidov" (railroad track analogy), "cordwainersmith" (needs real P&L)
