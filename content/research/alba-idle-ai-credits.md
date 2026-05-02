---
title: "Red Herring: Alba Idle AI Credits Factory"
date: 2026-05-02
tags: [passive-income, not-viable, red-herring, token-dependency, cold-start, claude-code, agent-marketplace]
---

# Alba Idle AI Credits Factory — Not Viable

## What It Claims to Be

ALBA (alba-run.vercel.app) is an "autonomous software factory that runs through Claude Code." You install the ALBA plugin for Claude Code, run one command, and join as a worker node. The system orchestrates Claude Code to build micro-MVPs (tools, landing pages, small SaaS) across 6 phases (Ideation → Design → Build → Review → Fix → Demo). You earn ALBA Credits proportional to the work your node contributes, then use those credits to bid on finished MVPs in a live marketplace auction. Framed as converting "idle Claude Code capacity" into digital assets.

## Why It Doesn't Work Agentically

- **ALBA Credits are not USD.** The income is denominated in a proprietary platform token, not real money. To monetize, you must win an MVP auction using your accumulated credits — a circular economy that requires the marketplace to have real buyers paying real money, which it doesn't. This is the 12th+ instance of the "token-as-income" pattern in this library.
- **Near-zero traction.** HN Show HN post scored only 2 points (February 27, 2026). The platform shows no evidence of actual marketplace activity, buyer demand, or completed project sales. No documented creator earnings anywhere.
- **Cold-start buyer problem.** Even if you win an MVP auction, there's no established channel for selling the finished product to real customers. The marketplace assumes buyers will materialize for whatever the AI generates, which has never proven true for autonomous software factories.
- **Claude Code API costs are real, credits are hypothetical.** Your Claude API costs are real USD; ALBA Credits have no demonstrated exchange rate or redemption path to USD.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Claude Code loop genuinely autonomously builds software |
| Setup effort | 8 | One-command install per the pitch |
| Yield potential | 2 | ALBA Credits ≠ USD; no marketplace volume documented |
| Risk | 7 | No financial risk beyond API costs; no ToS issues |
| **Overall** | **6.0** | Fails on yield — token economy with no real USD conversion |

## Source

HN Show HN: 47181620 "Show HN: Alba – Earn and bid on unique software using idle AI credits" (score 2, February 27, 2026). alba-run.vercel.app direct inspection.

## Pattern Note

This is the latest variant of the "token-denominated agent income" pattern previously seen in: AstraNova ($ASTRA SPL), Bittensor subnet mining (TAO), Nostr NIP-90 DVMs (Bitcoin Lightning), CROO Pioneers Program, AgentHansa USDC, Moltplace ($MOLT), ClawWork GDPVal (simulated $), TODA/IP nodes, Agent Bazaar (defunct). The shared failure mode: real API costs + hypothetical token income = net loss.
