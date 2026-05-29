---
title: "Red Herring: Run 84 Wave 33 Bundle"
date: 2026-05-29
tags: [passive-income, not-viable, red-herring, agency-model, trades-voice-ai]
---

# Run 84 Wave 33 — Not Viable Bundle

Three candidates evaluated this run; all fail on agentic viability or yield. Documented to prevent re-evaluation.

*Note: AgentAds (agentads.xyz) was surfaced again this run via HN/web research but is already documented as NOT_VIABLE in Run 23. Re-confirmation: $0.10/view yield is structurally too low, advertiser marketplace unconfirmed.*

---

## 1. After-Hours Voice AI for Trades Businesses (SpeakNode + Latenode + Housecall Pro)

### What It Claims to Be
Deploy an AI voice agent that answers after-hours calls for HVAC/plumbing/electrical shops, qualifies leads, schedules jobs, and writes bookings directly into the FSM (Housecall Pro or Jobber). Collect a $400–500/month managed service retainer. One r/AiAutomations post documented Q1 results: 5–6 jobs captured/week for one Tampa Bay plumbing shop, including a $9,400 Sunday night sewer replacement.

### Why It Doesn't Work Agentically
- **Client acquisition and onboarding are irreducibly human:** The shop must upgrade to Housecall Pro MAX ($329/month) to get API access, hand over credentials, and sign a service agreement. These steps require trust-building that no agent can autonomously complete at scale.
- **SpeakNode API is opaque:** REST API for agent CRUD exists but is behind a login wall with no public endpoint documentation. Deployment cannot be scripted without confirmed API access.
- **Housecall Pro MAX is a hard client-side prerequisite:** $329/month (billed to the *client*, not the freelancer) as a baseline requirement before a single booking can be automated. This is a significant sales objection the agent cannot overcome autonomously.
- **Market is rapidly commoditizing:** Avoca AI (raised $125M at $1B valuation, $1,000–$3,000/month targeting $3M+ revenue shops) and Rosie AI ($49–$149/month, unlimited minutes) already dominate this vertical with purpose-built products. A solo agent reselling SpeakNode is competing at a structural disadvantage.
- **Agentic score 5/10:** Lead sourcing via LinkedIn CSR hiring signals is automatable; everything after the first contact is a human sales process.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Lead detection agentic; client sales and FSM credential exchange are not |
| Setup effort | 4 | Multi-platform integration (SpeakNode + Latenode + Housecall Pro + Twilio) + client onboarding |
| Yield potential | 7 | $400-500/mo × 10 clients = $4-5K/mo ceiling is real — but requires human-built client base |
| Risk | 8 | No ToS issues; client churn and FSM pricing change are main risks |
| **Overall** | **6.0** | Fails agentic threshold (5/10 < 6); agency model bottleneck confirmed |

### Source
r/AiAutomations (1tqgwc0, May 28 2026, score 1); SpeakNode docs inspection (docs.voxagent.app); Housecall Pro API research (developer.housecallpro.com); Avoca AI competitive analysis.

---

## 2. API Arbitrage Micro-SaaS ("Tiny Tools Making Millions")

### What It Claims to Be
Chris Koerner interview (YouTube 50iWtrj9Mkw, 63K views, May 19 2026) — solo developer Nico went from restaurant work to $3,500/month MRR by wrapping Apify scrapers and Clay enrichment APIs into cleaner, niche-specific B2B data tools. "The great unbundling" thesis: break Apify/Clay into single-purpose products for specific verticals.

### Why It Doesn't Work Agentically
- **Redundant with existing VIABLE reports:** The core mechanism (Claude Code builds a niche API wrapper → sells via Stripe) is already covered by [[github-action-claude-microsaas]] ($8K MRR in 90 days, 7.5/10), [[n8n-data-intelligence-subscription]] (9/10 agentic purity, 7.25/10 overall), and [[apify-mcp-server-actor]] (80% rev share, 7.5/10). No new mechanism is introduced.
- **Customer acquisition is still human-gated:** Koerner explicitly walks through how Nico cold-pitched B2B buyers on LinkedIn. The agent can build the tool; the human sells it.
- **No new platform or API mentioned:** Clay, Apify, and OpenAI are all already well-documented in the library. The video's value is inspirational framing, not a novel mechanism.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Build is agentic; distribution is not |
| Setup effort | 5 | Niche selection + build + Stripe integration |
| Yield potential | 7 | $3,500/mo documented is real |
| Risk | 9 | Low risk |
| **Overall** | **6.75** | Does not clear bar — fully superseded by existing VIABLE reports; no new mechanism |

### Source
YouTube: Chris Koerner (50iWtrj9Mkw, 63K views, May 19 2026).

---

## 3. Invoice Processing Automation as SMB SaaS

### What It Claims to Be
r/AiAutomations post (1tqiroy, May 28 2026) describes a zero-touch invoice processing pipeline: Gmail watches for invoice emails → FastAPI + Gemini 2.0 Flash extracts fields → high-confidence results file to Google Drive + Sheets with no manual touch. Pitched as a productizable service to SMBs.

### Why It Doesn't Work Agentically
- **Client acquisition and credentialing are the bottleneck:** SMBs must grant Gmail access, review confidence thresholds, and handle exceptions. This is a managed service, not a passive one.
- **Wrong audience for Whop:** SMBs needing invoice processing are not Whop shoppers. The product would need its own landing page, SEO, and sales — all human-driven.
- **Established competitors:** Dext, Hubdoc, AutoEntry, and QuickBooks' own AI extraction already own this space for SMBs. An indie build without accounting software integrations (QBO, Xero) has a structural disadvantage.
- **Pattern match:** Same "SMB automation SaaS without discovery marketplace" pattern as n8n-smb-video-production-service (NOT_VIABLE, 5.5/10). The pipeline is agentic; the business is not.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Pipeline itself is fully agentic |
| Setup effort | 5 | FastAPI + Gmail OAuth + Gemini integration + per-client setup |
| Yield potential | 5 | Bookkeeper displacement math works (~$40/hr) but no discovery marketplace |
| Risk | 8 | Low legal risk; Gmail ToS requires explicit client consent |
| **Overall** | **6.25** | Fails on missing discovery mechanism; agency model for SMBs is not passive |

### Source
r/AiAutomations (1tqiroy, May 28 2026, score 1); competitive landscape: Dext, Hubdoc, AutoEntry.
