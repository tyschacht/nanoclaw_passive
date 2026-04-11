---
title: "Red Herring: Claw Arbs — Prediction Market + Sportsbook Arbitrage Desktop App"
date: 2026-04-11
tags: [passive-income, not-viable, red-herring, polymarket, kalshi, sports, arbitrage, desktop-app]
---

# Claw Arbs — Prediction Market + Sportsbook Arbitrage Desktop App — Not Viable

## What It Claims to Be

Claw Arbs (clawarbs.com) is a desktop app (Python + FastAPI + React, packaged via Nuitka) that detects price discrepancies between Kalshi, Polymarket, and sports bookmakers in real time. The standout feature: a "point-and-click calibration wizard" that reads odds off any bookmaker website by learning CSS selectors — no per-bookmaker scraper required. Cloudbet (crypto sportsbook) is wired in out of the box. The pitch is that prediction market sports contracts (e.g., "Will the Lakers win tonight?") and sportsbook odds for the same event can diverge enough to generate guaranteed profit on both sides. The app is free during alpha, with ~100 users as of soft launch.

## Why It Doesn't Work Agentically

- *Desktop app, not API-native.* Claw Arbs is designed for human operation — you load the app, configure strategies, and monitor trades. There is no headless API or CLI for programmatic control from a Claude Code agent. Execution requires a running desktop session.
- *Bookmaker integration via browser scraping violates ToS.* The calibration wizard works by using Playwright to read odds off bookmaker websites — identical to the KDP/Amazon scraping red herring. Most sportsbooks (DraftKings, FanDuel, BetMGM) explicitly prohibit automated scraping in their ToS, and accounts running bots are flagged and banned.
- *US gambling law complexity.* Cloudbet is an unregulated offshore crypto casino. For US-based operators, facilitating or automating real-money sportsbook bets on unregulated offshore platforms exposes you to significant legal risk. The UIGEA (Unlawful Internet Gambling Enforcement Act) may apply.
- *Cross-platform arb between prediction markets and traditional sportsbooks is covered by our existing viable strategy.* The prediction-market-only arb (Kalshi vs Polymarket via pmxt library) is already documented at `polymarket-kalshi-cross-platform-arbitrage` and does not require scraping or offshore gambling.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Desktop GUI app — requires human operator; no headless/API mode |
| Setup effort | 6 | Alpha app, free to install; but calibration per bookmaker takes manual setup |
| Yield potential | 6 | Sportsbook arb margins are real; timing windows narrow quickly |
| Risk | 3 | ToS scraping risk; offshore gambling legal risk in US |
| **Overall** | **4.5** | Well below viable threshold |

## Source

Reddit: r/SideProject post ID 1si8xlm (April 2026, 12 upvotes)
https://reddit.com/r/SideProject/comments/1si8xlm/kalshi_trading_bot_can_be_used_for_value_betting/
