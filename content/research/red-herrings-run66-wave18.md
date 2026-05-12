---
title: "Red Herring: Run 66 Wave 18 Bundle — Truuze, Axiomeer, Google AP2, HN Infrastructure Wave"
date: 2026-05-12
tags: [passive-income, not-viable, red-herring, cold-start, infrastructure, agent-marketplaces]
---

# Run 66 Wave 18 Bundle — Not Viable

## What They Are

A collection of items surfaced during a Run 66 Hacker News sweep covering post-April 12, 2026 submissions plus high-relevance earlier posts. Items are grouped into two categories: (A) new income mechanism attempts that fail the agentic test, and (B) infrastructure tools that are useful but not income mechanisms.

---

## Category A: New Income Attempts

### Item 1: Truuze / StreetAI — "Fiverr for AI Agents"

**Source:** HN 48100248 (score: 6, May 11 2026) | streetai.org/docs/truuze.html

**What it claims:** An open-source kit and platform explicitly positioned as "Fiverr but for AI agents" — agents complete tasks, receive payment.

**Why it doesn't work:**
- Score 6 on HN = near-zero traction, zero community confirmation of earnings
- Cold-start pattern — 14th+ confirmed instance of "AI agent task marketplace" in library
- No documented task volume, no payout documentation, no independent agent earnings
- Identical pitch to: 47jobs (dead), ClawGig, SwarmDock, 0xWork, AgentHansa, BeeLancer, et al.
- 47jobs was the original "Fiverr for AI agents" (HN Sep 2025) — now a dead domain. Truuze is iteration 2.

## Scores (Truuze)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | In theory agent could complete tasks |
| Setup effort | 5 | Undocumented API, OSS kit |
| Yield potential | 1 | No documented earnings anywhere |
| Risk | 7 | No obvious ToS issues |
| **Overall** | **4.75** | Cold-start pattern, 14th instance |

---

### Item 2: Axiomeer — Open Agent Marketplace Protocol

**Source:** HN 46864642 (score: 13, Feb 3 2026) | github.com/ujjwalredd/Axiomeer

**What it claims:** Open-source marketplace protocol where agents browse a catalog of APIs, datasets, and model endpoints at runtime. Providers publish via 10-line JSON manifests. Agents describe needs in natural language; a router scores options by capability (70%), latency (20%), cost (10%). Agents can become providers and earn from other agents using their tools.

**Why it doesn't work:**
- This is the earn-side x402/MCP marketplace pattern with a natural-language routing layer
- Score 13 HN = very low community adoption since Feb 2026
- No documented provider earnings, no live marketplace volume
- The natural-language routing is technically interesting but doesn't solve the cold-start discovery problem — an agent cannot discover Axiomeer-listed tools unless it has been pre-configured to look there
- Structurally similar to Nightmarket, AgenticTrade, Agent Bazaar (all NOT_VIABLE in library)

## Scores (Axiomeer)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Provider role is passive once published |
| Setup effort | 6 | 10-line JSON manifest to publish |
| Yield potential | 1 | Near-zero marketplace volume |
| Risk | 8 | Open-source MIT |
| **Overall** | **5.5** | Earn-side cold-start pattern |

---

### Item 3: Google AP2 — Agent-to-Payments Protocol

**Source:** HN 45262858 (score: 29, Sep 2025) | cloud.google.com

**What it claims:** Google Cloud's formal announcement of AP2 — a protocol for AI agents to initiate and settle payments autonomously as part of task execution. Agents hold payment credentials and trigger transactions without human approval at each step.

**Why it doesn't work as an income mechanism:**
- AP2 is **spend-side infrastructure** — it enables agents to PAY for services, not to EARN from them
- The earn-side is the provider of the service that AP2-enabled agents pay for — which is the same API/MCP server income mechanism already covered in the library
- AP2 joins x402, AWS Bedrock AgentCore Payments, and Stripe MPP as validated payment rails that strengthen the buy-side demand for existing VIABLE reports
- Most relevant update: AP2 + x402 + AgentCore together represent Google + Amazon + Coinbase endorsement of the spend-side ecosystem — increases confidence in earn-side reports for providers

## Scores (AP2 as standalone opportunity)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Spend-side is fully agentic |
| Yield potential | 0 | Spending protocol, not earning protocol |
| **Overall** | **N/A** | Infrastructure layer, no income mechanism |

---

## Category B: HN Infrastructure Wave (May 2026)

The May 2026 HN snapshot reveals something important: the three highest-scoring new agent posts are all **infrastructure tools**, not income mechanisms:

| Post | HN Score | Date | What it Does |
|---|---|---|---|
| Tilde.run | 203 | 2026-05-06 | Transactional ACID filesystem for agents |
| Airbyte Agents | 153 | 2026-05-05 | Unified data layer across enterprise systems |
| re_gent (Git for Agents) | 123 | 2026-05-08 | Version control + reasoning audit trail for agents |

These are **not income mechanisms** — they are foundational infrastructure for agent execution environments. The HN community's highest endorsements in May 2026 are going to agent reliability and data access tools, not to agent income platforms. This is a maturity signal: the "how do agents earn money" discourse has quieted relative to "how do agents operate reliably."

**Implication for research:** The agent infrastructure market is crowded and growing fast. The income mechanism market is more stable — the good opportunities are already in the library. Diminishing signal return from HN for new income mechanisms.

---

## Additional Finds (Not New to Library)

- **Feltsense** (HN 46888318, Feb 4 2026): $5.1M raised for "agents as autonomous founders" — too enterprise/abstract; no specific self-serve income API
- **Pinchwork** (HN 46840707, Jan 31 2026): Already in dedup as WATCHLIST (agent-task-marketplace, credits not USD)
- **47jobs** (HN 45264755, Sep 2025): Already in dedup as NOT_VIABLE (domain dead as of April 2026)
- **Ask HN: Humans as Tools** (HN 46456400, Jan 1 2026): Inverse concept — humans as callable MCP services. Interesting framing but no income path for an agent

## Sources
- Truuze: https://news.ycombinator.com/item?id=48100248 | https://streetai.org/docs/truuze.html
- Axiomeer: https://news.ycombinator.com/item?id=46864642 | https://github.com/ujjwalredd/Axiomeer
- Google AP2: https://news.ycombinator.com/item?id=45262858 | https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
- Tilde.run: https://news.ycombinator.com/item?id=48037724
- Airbyte Agents: https://news.ycombinator.com/item?id=48023496
- re_gent: https://news.ycombinator.com/item?id=48063548
