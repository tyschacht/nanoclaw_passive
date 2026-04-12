---
title: "Red Herring: NEAR AI Agent Market"
date: 2026-04-12
tags: [passive-income, not-viable, red-herring, agent-marketplace, near-protocol, crypto, cold-start]
---

# NEAR AI Agent Market — Not Viable

## What It Claims to Be

NEAR AI Agent Market (market.near.ai, launched February 4, 2026) is a decentralized marketplace where AI agents post tasks, bid on tasks, execute work, and receive payment in NEAR tokens via the NEAR Intents escrow protocol. The pitch: deploy a Claude or GPT-based agent, register it once, and it autonomously bids on tasks — data processing, code review, translation, content writing, API credit resale — earning NEAR tokens upon completion. NEAR has 40M accounts and is pivoting its entire platform strategy to agentic commerce, giving this more credibility than smaller cold-start platforms (BountyBook, ClawTasks, SwarmDock, etc.).

Technical setup is well-documented: Python + `near-examples/near-intents-agent-example` repo, agent registration via NEAR wallet, task bidding via Intents contract calls. An OpenClaw integration exists.

## Why It Doesn't Work Agentically

- **$19,400 total volume in 10 weeks across 1,100 agents = $277/day total, or roughly $1.75/agent/day at maximum.** The actual median agent is likely $0/day — tasks cluster to the best-performing agents and NEAR Foundation seed tasks may inflate the stats. At $1.36/NEAR token (April 2026), this represents negligible fiat income.
- **Crypto-only payout with all associated friction.** Earnings denominated in NEAR tokens require exchange KYC + conversion to fiat + price volatility risk + taxable events per trade. Unlike Kalshi/Polymarket which settle in USD/USDC, NEAR adds a conversion layer that erodes margins and creates compliance overhead.
- **Same cold-start pattern as every predecessor.** This is the 6th agent task marketplace evaluated (BountyBook, ClawGig, ClawTasks, 0xWork, SwarmDock, NEAR). Every one has launched with placeholder or thin demand. NEAR is larger than the others but the task economy is still orders of magnitude too thin to be a reliable income source.
- **Generic task categories face brutal competition.** Code review, translation, and content writing on NEAR compete directly with: (a) humans doing the same tasks for lower effective rates, (b) direct LLM API calls that are cheaper and faster than hiring an agent via marketplace overhead, and (c) existing platforms (Upwork, Fiverr, DeepL API) with proven buyer demand.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Technically well-designed; Python SDK + NEAR Intents is agent-native |
| Setup effort | 4 | Blockchain/crypto knowledge required; NEAR wallet + exchange account + KYC needed |
| Yield potential | 2 | ~$1.75/agent/day max across entire platform; median is $0 |
| Risk | 5 | Crypto price volatility; exchange KYC; token-denominated income introduces tax complexity |
| **Overall** | **4.5** | Below viable threshold; good architecture, too-thin market |

## Source

Discovered via web research April 12, 2026. Sources: near.ai blog (launch Feb 4, 2026), market.near.ai live data (~2,800 tasks, $19.4K total volume), GitHub near-examples/near-intents-agent-example, FinanceFeeds (agent market overview), DEV.to "Your AI Agent Earned $0 Because the Marketplace Doesn't Exist Yet."

Re-check: July 2026, when platform has 6+ months of data.
