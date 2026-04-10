---
title: "Red Herring: Autonomous Options Selling via Broker-CLI"
date: 2026-04-10
tags: [passive-income, not-viable, red-herring, trading, options, interactive-brokers]
---

# Autonomous Options Selling via Broker-CLI — Not Viable

## What It Claims to Be

An AI agent uses Broker-CLI (https://brokercli.com) — an open-source SKILL.md-equipped CLI that connects Claude Code to Interactive Brokers or E*Trade — to autonomously sell covered calls and cash-secured puts. The agent screens options chains for high-theta contracts, places limit sell orders, monitors for assignment, and rolls positions, generating 1-3% monthly income from time decay (theta) on existing stock holdings. "Investors can program strategies generating $5,000/month in covered-call income" (brokercli.com docs). The SKILL.md architecture means Claude Code reads the CLI spec automatically with no prompt engineering.

## Why It Doesn't Work Agentically

- **Capital requirement breaks the business model**: Covered calls require owning the underlying stock (e.g., 100 shares of Apple = ~$20K). Cash-secured puts require $5K-$25K in collateral per position. To generate $500/week ($26K/year), you'd need $87K-$260K of capital at 10-30% annual return. At realistic covered-call yields (12-15% annual), you'd need ~$175K to clear $500/week. The "income" is return on capital, not income generation from nothing — it's a different category than our other ideas.

- **Strategy design requires irreducible human judgment**: Which underlying stock? What strike price? What expiry (7DTE, 30DTE, 90DTE)? What IV rank threshold? What happens if the stock gaps down 30%? The agent can execute a defined strategy autonomously, but DEFINING the strategy requires ongoing human expertise and adaptation to market regimes. This is fundamentally different from Polymarket maker rebates, where the math defines the strategy completely.

- **Capital at genuine risk**: Unlike prediction market arb where profits are locked in per round trip, here the underlying stock can decline. A covered call on 100 shares of a tech stock that drops 40% wipes the premium income for 3+ years. The "passive income" framing obscures the ongoing capital risk management required.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Broker-CLI + SKILL.md = agent-native execution; paper mode for testing; IBKR integration is real |
| Setup effort | 3 | IBKR account takes 3-5 business days; need $25K+ capital; strategy design is non-trivial |
| Yield potential | 4 | Realistic only on large capital; $500/week requires $175K+ investment |
| Risk | 4 | Substantial capital at risk; assignment risk; broker connection failures; strategy decay |
| **Overall** | **4.5** | Not viable — capital requirement too high; human strategy design bottleneck |

## Source

- Broker-CLI: https://brokercli.com (open-source, GitHub: north-brook/broker-cli)
- TradingAgents framework: https://github.com/TauricResearch/TradingAgents
- Blog: "How to Build an AI Trading Agent in 2026" — brokercli.com

## Note for Future Runs

Broker-CLI itself is a legitimate tool worth monitoring. If a specific options income strategy with defined, fully automatable parameters emerges (e.g., systematic 0-DTE SPY iron condors with hard-coded IV rank thresholds), revisit. The infrastructure is there; the strategy definition is the remaining blocker.
