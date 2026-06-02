---
title: "Red Herring Bundle: Run 88 Wave 37"
date: 2026-06-02
tags: [passive-income, not-viable, red-herring, capital-dependent, service-model, hardware-dependent]
---

# Run 88 Wave 37 — Not Viable Bundle

*Four patterns evaluated in this run. All fail the agentic income test for different reasons.*

---

## 1. Multi-Agent Heartbeat Architecture on Hyperliquid Perps

**Source:** YouTube: All About AI (LNjrRJRCY_g, 1,394 views, June 1, 2026)

**What It Claims to Be:** A genuinely novel multi-agent architecture where a lightweight "heartbeat" sub-agent (GPT-4o-mini) polls live Hyperliquid position data via WebSocket every 30 seconds, generates a compact JSON digest of positions, P&L, funding rates, and market conditions, and feeds it to a main reasoning agent (Codex 5.5) that makes autonomous trade decisions in response. Demonstrated live: SP500 short + Nvidia long hedge with automated hedge ratio calculation and position adjustment. The architecture is original — the "heartbeat sub-agent as a data relay" pattern enables the main agent to act on live data without being blocked on polling.

**Why It Doesn't Work Agentically for Income:**
- **Capital-dependent perpetuals trading.** Hyperliquid is a crypto perps exchange. Income = profitable trades = capital deployed at risk. This is the 10th instance of the autonomous-perps-trading red herring pattern (same as OpenAlice, ai-swing-trading-broker-api, alpaca-openclaw, Bittensor, VALR, Eterna, Coinbase CDP, Robinhood Predictions).
- **Architecture is replicable but the income isn't.** The heartbeat pattern itself is a useful building block for other agentic systems. However, applying it to perps trading does not create passive income — it creates a bot that can lose money autonomously at 30-second intervals.
- **No verified live P&L.** The video is a live demonstration session, not a documented track record. Consistent with the "no verified live returns" red herring category.

**Architecture Note (Positive Signal):** The heartbeat sub-agent pattern *is* valuable for non-trading use cases — any system where a lightweight polling agent feeds a more expensive reasoning agent could apply this. Relevant to [[n8n-data-intelligence-subscription]] (real-time data delivery) and [[agentic-niche-alert-subscription]] (trend monitoring). Not an income mechanism itself.

**Scores:** Agentic viability 9/10 | Yield 2/10 | Risk 2/10 | Overall 4.25/10

---

## 2. "AI Employees" as B2B Service — $50K–$150K Flat Fee

**Sources:** Reddit: r/passive_income (1tumd9k, score 0, June 2, 2026) + r/passive_income (1tub2yy, score 0, June 2, 2026) + r/ClaudeAI (1tumctt, score 0, June 2, 2026)

**What It Claims to Be:** A repositioning of AI automation services where agencies deploy Claude Code agents with a specific four-folder architecture (CLAUDE.md role definition / memory/ accumulated context / skills/ reusable tasks / pipeline/ workflow definitions) and sell these as "AI employees" at $50K–$150K flat fees or $3K–$8K/month retainers. The agents qualify leads, research prospects, write outreach, book calls, and update their own memory files after each run — genuinely autonomous execution with persistent learning.

**Why It Doesn't Work Agentically:**
- **Sales process is irreducibly human.** Every post describes pitching to enterprise clients at $50K+. The closer needs to understand client workflows, negotiate terms, and build trust. This is high-touch B2B sales, not passive income. Agentic viability of the revenue-generating step = 2/10.
- **Score 0 posts, no verified earnings.** All three posts were from June 2 with zero upvotes. No dollar figures, no verified client agreements. These are architectural proposals, not documented income models.
- **Already covered in library.** The service model for Claude Code agency work is documented in [[ai-agency-consulting-human-centric]] (row 276, NOT_VIABLE). The "AI employee" framing is new marketing language for the same mechanism.
- **Architecture is genuinely interesting.** The CLAUDE.md + memory/ + skills/ + pipeline/ folder structure is a clean mental model for deploying persistent autonomous agents. It is an organizational pattern, not an income mechanism. Useful reference for builders implementing any of the VIABLE service reports (Google Ads management, GEO monitoring, voice receptionist).

**Scores:** Agentic viability 2/10 | Yield 6/10 | Risk 8/10 | Overall 4.5/10

---

## 3. Expanse (YC P26) — GPU Capacity Reselling via Agentic Optimization

**Source:** Hacker News 48356312 (88 pts, June 1, 2026), expanse.sh

**What It Claims to Be:** Expanse is a YC Palo Alto 2026 company that deploys an agent to read HPC/GPU cluster job scripts, predict resource needs, and autonomously right-size or resell wasted compute capacity. The income mechanism is a revenue share from recaptured GPU utilization — the agent finds idle GPU capacity and monetizes it.

**Why It Doesn't Work Agentically:**
- **Requires physical GPU hardware or enterprise HPC cluster access.** The agent optimizes compute resources you already own. With no physical GPU rig or enterprise HPC environment, there is nothing for the agent to optimize. Same structural disqualifier as Salad Network (row 292), Dispatch.computer (row 287), and OpenRouter provider program (row 294).
- **Enterprise sales gate.** Expanse targets HPC cluster operators (research institutions, enterprise data centers). Individual developers do not own the resource being monetized. The 88-pt HN post signals technical interest from the HPC community, not a consumer-accessible income mechanism.
- **The agent is a cost-reducer, not an income generator.** Revenue share from "recaptured" capacity presupposes existing unused capacity with existing buyers for that capacity. The agent doesn't create the income — it finds inefficiency in an existing asset.

**Scores:** Agentic viability 4/10 | Yield 3/10 | Risk 7/10 | Overall 4.0/10

---

## 4. Spend-Side Infrastructure Wave (Visa+Replit, Sockt.dev)

**Sources:** HN 48359854 (Visa invests in Replit agentic payments, June 1) + Reddit r/SideProject 1tupkbn (sockt.dev, June 2)

**What It Claims to Be:** Visa has invested in Replit to build a native payment layer for agents deployed on Replit — enabling pay-per-task and subscription billing without a human credit card in the loop. Sockt.dev removes the human credit card requirement for agent compute by letting agents provision sandboxes and pay via Bitcoin Lightning.

**Why It Doesn't Work Agentically:**
- **Both are spend-side infrastructure, not earn-side income mechanisms.** These tools make it easier for AI agents to PAY for services. They solve the "agent needs a wallet" problem, not the "agent earns money" problem. Same pattern as x402 protocol (earn-side eventually viable; spend-side is infrastructure), AWS Bedrock AgentCore Payments (row 122, spend-side), and Pay.sh (row 240, spend-side only).
- **Visa+Replit is early-stage investment, not a launched income program.** The HN post covers a funding round, not a product launch. No Replit income marketplace exists yet.
- **Sockt.dev** is a compute billing layer for agents — the agent is the customer, not the earner. Useful infrastructure for agents that need autonomous compute provisioning (relevant to [[n8n-data-intelligence-subscription]] and [[claude-code-headless-income-loop]]).

**Pattern Note:** Any new announcement of "AI agents can now pay for X" should be verified for (1) self-service **earn-side** provider registration, (2) USD/USDC payout, (3) documented independent developer income. Spend-side alone = infrastructure, not income. Stripe MPP (row 301, VIABLE) remains the reference implementation of a truly bilateral protocol.

**Scores:** Agentic viability 5/10 | Yield 1/10 | Risk 8/10 | Overall 3.75/10
