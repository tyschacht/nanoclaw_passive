---
title: "Red Herring: Run 66 Wave 17 Bundle — Ragora Earn-Per-Query, Dome (Acquired), Agent Job Boards, HN $0 Validation"
date: 2026-05-12
tags: [passive-income, not-viable, red-herring, cold-start, prediction-markets, agent-marketplaces]
---

# Run 66 Wave 17 Bundle — Not Viable

## What They Claim to Be

A collection of items evaluated May 12, 2026 during the Run 66 late web research batch. Items surfaced during an independent web sweep and cross-checked against the existing library. All fail the agentic passive income test.

---

## Item 1: Ragora — RAG Knowledge Marketplace Earn-Per-Query

**Source:** HN thread (February 2026) | ragora.app | mcp.ragora.app

**What it claims:** Ragora's MCP server connects Claude to a user's knowledge base. An earlier HN thread described a marketplace feature where providers earn per query when AI agents retrieve their data.

**Why it doesn't work:**
- The earn-per-query marketplace feature is *not confirmed operational* as of May 12, 2026
- Current Glama listing and official docs describe it as a RAG tool only — no revenue mechanism documented
- Free tier: 10K vectors, 200 retrievals/day. Pro: $19.99/mo — these are buyer pricing tiers, not provider payouts
- The marketing language ("earn when AI agents retrieve your data") appears aspirational, not live
- Pattern: Same "earn-side described in marketing but not shipped" failure as several x402 explorers

**Verdict:** Re-evaluate if Ragora explicitly launches a marketplace revenue share with documented provider payouts.

## Scores (Ragora earn-per-query)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | MCP protocol native, host once |
| Setup effort | 7 | Cloud-hosted, API key auth |
| Yield potential | 2 | Mechanism not confirmed live |
| Risk | 8 | No ToS issues |
| **Overall** | **5.75** | |

---

## Item 2: Dome — Unified Prediction Market API

**Source:** bankless.com/read/news/polymarket-snaps-up-prediction-market-api-startup-dome | February 2026

**What it claims:** Dome provided a unified API giving agents access to both Kalshi and Polymarket through a single integration, removing the need to maintain separate SDKs for each platform.

**Why it doesn't work:**
- Dome was **acquired by Polymarket in February 2026** — the service no longer exists as an independent API
- Any integrations built on Dome must be migrated to native Polymarket CLOB SDK
- The underlying use case (cross-platform access) is served by the existing `polymarket-kalshi-cross-platform-arbitrage` report and the TRUEiGTECH unified API (already evaluated as infrastructure-only)

**Verdict:** Dead end. Polymarket has absorbed this capability internally.

## Scores (Dome as standalone opportunity)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 0 | Platform no longer exists |
| **Overall** | **0** | Acquired — no path forward |

---

## Item 3: Agent Job Boards — JobForAgent, Tamorro, Agentalent

**Sources:** jobforagent.com | tamorro.com | agentalent.ai (May 2026)

**What they claim:** Platforms positioning themselves as "job boards for AI agents" where autonomous agents can discover and bid on tasks, earning income autonomously.

**Why they don't work:**
- **JobForAgent.com**: Site confirmed live but revenue model and task volume not publicly documented
- **Tamorro.com**: Same category — no documented jobs, earnings mechanism unclear
- **Agentalent.ai**: Claims "agents earning ~$2,000/month" but this appears to be unverified marketing copy — no source, no case study, no API documentation
- Pattern: This is structurally identical to the cold-start agent marketplace pattern documented across 12+ platforms in this library (BountyBook, ClawGig, SwarmDock, 0xWork, AgentHansa, DealWork, etc.)
- The cold-start problem: job boards need both agents AND buyers; neither side has critical mass at launch
- Even DealWork (the most advanced implementation: 252 tasks done) yields only $0.93/task average

**Verdict:** Same cold-start pattern as prior 12+ agent marketplace evaluations. Revisit if any show >$10K total platform earnings.

## Scores (Agent Job Board platforms — average)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | In theory, agent submits proposals |
| Setup effort | 5 | Undocumented APIs |
| Yield potential | 1 | No documented earnings anywhere |
| Risk | 7 | No obvious ToS issues |
| **Overall** | **4.75** | Below threshold on multiple criteria |

---

## Item 4: HN Validation — 72-Hour Autonomous Claude Run → $0

**Source:** HN 47417016 "Ask HN: Has anyone gotten AI agents to make money autonomously?" (104 points, May 4 2026)

**Summary:** The top-voted thread documents a 72-hour fully autonomous Claude Code run:
- 7 digital products created
- 150+ promotional posts written
- 6 distribution platforms set up
- **Revenue: $0**

**HN consensus:** "Autonomous output is not the same as autonomous revenue." The thread validates the MoneyMinions core filter: output generation (content, products, code) is trivially automatable; *distribution and discovery* remain the hard human problem.

**Key insight for library:** This confirms why all high-scoring VIABLE reports in this library use platforms that provide **organic discovery** (app stores, marketplaces with buyer traffic, protocol-native routing). Stand-alone agent content creation without platform distribution remains a dead end regardless of output quality.

**Not a new idea:** No standalone report needed. This observation is recorded in agent-memory as validation data.

---

## Library Cross-Reference

All three "worth investigating" items from the web batch were already in the library:
- MCP-Hive → `mcp-hive-project-ignite-founding-provider` (VIABLE, 2026-04-12)
- Needle.app → `needle-workflow-marketplace` (VIABLE, 2026-04-09)
- Kalshi Liquidity Incentive → `kalshi-liquidity-market-making` (VIABLE, 2026-04-09)
- Gumroad CLI → `gumroad-cli-digital-product-factory` (VIABLE, 2026-05-07, v0.5.0 overturns the wave-7 red herring)

Independent rediscovery of these four validates the library's comprehensiveness.

## Sources
- Ragora: https://ragora.app | https://glama.ai/mcp/servers/@velarynai/ragora
- Dome acquisition: https://www.bankless.com/read/news/polymarket-snaps-up-prediction-market-api-startup-dome
- JobForAgent: https://jobforagent.com
- HN validation: https://news.ycombinator.com/item?id=47417016
