---
title: "Idea: Polymarket Autonomous Whale Tracker + Auto Copy Trading"
date: 2026-04-10
tags: [passive-income, agentic, viable, polymarket, copy-trading, prediction-markets, claude-code]
---

# Polymarket Autonomous Whale Tracker + Auto Copy Trading

## What It Is

Polymarket's on-chain structure makes every wallet's trade history fully public — including profit history, win rate, market categories, and position sizes. The standard "copy trading" approach has always required a human to review top wallets and manually select who to copy. But the selection criteria are objective enough to fully automate: P&L over time, win rate, activity recency, market specialization, and drawdown profile can all be scored programmatically.

The opportunity is to run a Claude Code agent that continuously scans Polymarket's wallet leaderboard (500-2,400+ wallets via the Gamma API and Polymarket Analytics), applies objective scoring criteria to identify the top performers, and automatically configures copy trading execution via PolyCop (a non-custodial Telegram bot with <2s execution). Once configured, the agent monitors performance, rotates wallets when they go cold, and manages risk caps per market — with zero human input beyond initial setup.

This is distinct from `[[polybuild-polymarket-copy-trading]]` (evaluated NOT_VIABLE), where the bottleneck was human judgment in trader selection. The new mechanism automates that selection step using objective, deterministic criteria: a trader either meets the thresholds or they don't.

## How an Agent Does It

1. **Daily wallet scan**: Claude Code runs via cron. Hits the Polymarket Gamma API `/users?limit=500&sortBy=profitAndLoss&order=desc` to pull the top leaderboard wallets, plus the Polymarket Analytics API for extended wallet history (2.4M wallets available).
2. **Automated scoring**: For each wallet, the agent computes: 30-day P&L ($), win rate (%), active days in last 14, number of markets traded, dominant market category (politics, sports, crypto, economics), and drawdown profile.
3. **Selection filter**: Apply hard criteria — e.g. min $2,000 30-day P&L, min 55% win rate, active in last 7 days, min 30 resolved trades. Wallets passing all filters are ranked; top 3-5 are selected.
4. **PolyCop configuration**: Agent calls PolyCop Telegram bot API (or uses its web interface programmatically) to set up copy tasks: wallet address, fixed dollar amount per trade ($5-20), max per market ($50), min trade size to copy ($5), and slippage tolerance (5-20%).
5. **Continuous monitoring**: Agent checks daily for: wallets that have gone cold (no activity in 3+ days), drawdown approaching the per-wallet loss limit, and new wallets that have cleared the selection criteria. Rotates copy targets as needed.
6. **Reporting**: Generates daily Telegram/email digest: positions open, closed trades PNL, current account balance, and any rotation events.

## Source

- YouTube: ItsRagnar — "I Let AI Copy Trade on Polymarket for 7 Days (SHOCKING RESULTS)" (sPhZqKYUFLQ, 31,737 views, Mar 22 2026). Demonstrates Claude Code automated wallet scanner, Polycup execution.
- NadirLabs Poly Scanner (poly-scan.app) — confirms demand for autonomous Polymarket trading agents; $500 Founder Pack with 20 seats (19 remaining) validates willingness to pay.
- Polymarket Gamma API docs (polymarket.com/gamma) + GitHub: Polymarket/agents

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Wallet scanning, scoring, selection and monitoring fully automatable; only PolyCop execution step requires one-time API/Telegram setup |
| Setup effort | 6 | Polymarket Gamma API (public, no auth for reads); PolyCop Telegram bot setup; ~4-8 hours to build scanner + configure copy tasks |
| Yield potential | 6 | $50-150/mo on $1K capital (5-15% monthly, capital-dependent); scales to $500-1,500/mo on $5K; ItsRagnar showed +8% day 1 (exceptional) |
| Risk | 5 | Prediction markets are legal (federally regulated); Polycup was hacked for $230K in Jan 2026 — use PolyCop (non-custodial) instead; copy target underperformance risk |
| **Overall** | **6.25** | Capital-dependent yield; strong agentic viability; use PolyCop not Polycup |

## Implementation Notes

- **Polymarket Gamma API** (free, no key required for reads): `https://gamma-api.polymarket.com/users?limit=500&sortBy=profitAndLoss&order=desc` — returns wallet address, P&L, trade count. For detailed wallet history: `https://gamma-api.polymarket.com/positions?user={address}`
- **Polymarket Analytics** (polymarketanalytics.com): 2.4M+ wallets with extended metrics; use as secondary source
- **PolyCop** (polycopbot.com): Telegram bot, 0.5% fee per trade, <2s execution, non-custodial (connects to your Polygon wallet, keys never leave your device). Use PolyCop not Polycup (Polycup suffered a $230K hack in Jan 2026 due to centralized key storage).
- **Polycup** — AVOID until they demonstrate non-custodial key handling post-hack
- **CTF Exchange V2 note**: Polymarket migrated to CTF Exchange V2 (live April 6, 2026) and replaced USDC.e with Polymarket USD (1:1 USDC-backed). Update any SDK integrations to latest `polymarket/clob-client` before building.
- **Recommended starting capital**: $1,000-2,000 USDC. Too little (<$500) and position sizes become too small to be meaningful given Polymarket's minimum order sizes.
- **Objective selection criteria example**: 30d P&L > $2K, win rate > 57%, min 30 resolved trades, active in last 7 days, max 1 market contributing > 40% of P&L (concentration risk filter)

## Open Questions

- Can PolyCop's Telegram interface be called programmatically (via API or Bot token) to set up copy tasks without human interaction?
- Does following the same top wallets as thousands of other copy traders erode the edge? (The Polymarket leaderboard is public, so any high-performer may already be widely copied)
- ItsRagnar's +8% day 1 was exceptional — what is the realistic sustained monthly yield at steady state with $1-5K capital?
- How quickly do top traders' edges decay? Should the rotation interval be daily, weekly, or performance-triggered?
