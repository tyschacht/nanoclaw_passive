---
title: "Deep Dives"
date: 2026-04-12
tags: [deep-dives, technical-design, stack, implementation]
---

# Deep Dives

*Hand-selected viable opportunities with full technical stack design. One step below final spec — enough to begin building.*

Each Deep Dive covers: architecture, cost model, agent design, database schema, open questions, and next steps. The target stack is Python + Agno + OpenRouter + Pinecone + Vercel/NextJS + Supabase, with AWS Lambda/ECS for compute-intensive tasks.

---

## Active Deep Dives

| Project | Category | Status | Monthly Target |
|---|---|---|---|
| [[deep-dives/smb-audit-report-service\|AI SMB Audit Report Service]] | B2B SaaS / Cold Outreach | Design v1 ✅ | $1,500–$4,000 |

---

## How to Commission a Deep Dive

A Deep Dive is opened when:
1. An opportunity in [[opportunities/index\|Opportunities]] or [[research/index\|Research]] has cleared the viability threshold
2. The operator (you) hand-selects it for serious consideration
3. There are no blocking open questions about the opportunity itself

The output is a technical design document covering:
- System architecture diagram
- Stack decisions with rationale
- Cost model (per-lead, per-teaser, per-report)
- Agno agent designs (pseudocode-level)
- Database schema
- Open questions that need resolution before final spec
- Prioritized next steps
