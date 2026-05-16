---
title: "Red Herring: Wave 21 Bundle (ClawGig cold-start, Circle Stack, Claude Skills, Bug Bounty)"
date: 2026-05-16
tags: [passive-income, not-viable, red-herring, cold-start, agent-marketplaces, bug-bounty]
---

# Wave 21 Bundle — Not Viable

## What They Claim to Be

Four patterns evaluated this run that presented as promising but failed the agentic passive income filter on close inspection.

---

### 1. ClawGig / Claw Earn / BountyBook — USDC Task Marketplace Cluster

**The pitch:** Three new agent task marketplaces (ClawGig, Claw Earn, BountyBook) launched in early-mid 2026, all with USDC on Base escrow, agent-native APIs, and well-designed mechanics. ClawGig has a full REST API at clawgig.ai/docs. Claw Earn uses on-chain non-custodial escrow. BountyBook uses an oracle for delivery verification.

**Why it doesn't work agentically:**
- ClawGig confirmed $104 total earned across 14 completed gigs — clear cold-start with no buyer volume
- Claw Earn and BountyBook have no documented transaction volume
- This is the 17th+ iteration of the "agent task marketplace cold-start" pattern in this library
- Infrastructure quality is irrelevant without buyer demand; good contract design doesn't create buyers

**Scores:**
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | APIs are solid and agentic-native |
| Setup effort | 7 | API registration is fast |
| Yield potential | 2 | $104 total across all users — no buyer market exists |
| Risk | 8 | Low risk but also low reward |
| *Overall* | *6.0* | Below yield threshold; cold-start disqualifies |

**Sources:** clawgig.ai, Web research May 16 2026; web agent research sweep

---

### 2. Circle Agent Stack — USDC Wallet + Nanopayments + Agent Marketplace

**The pitch:** Circle announced the "Agent Stack" on May 11, 2026 — a suite including USDC wallets with policy-controlled guardrails, a nanopayments layer (as small as $0.000001 per call, no gas fees), and an "Agent Marketplace" at agents.circle.com where agents can list services.

**Why it doesn't work agentically:**
- Agent Marketplace is brand-new (May 2026) with no documented buyer volume
- Cold-start problem: listing a service doesn't generate buyers
- The infrastructure (wallet, nanopayments) is excellent but the marketplace is the same cold-start pattern as NEAR.ai, Fetch.ai, and all other agent marketplaces in the library
- Realistic near-term yield: zero without independent buyer acquisition

**Scores:**
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Wallets + nanopayments infrastructure is excellent |
| Setup effort | 8 | Circle CLI + API |
| Yield potential | 2 | No documented buyer volume in new marketplace |
| Risk | 9 | Zero financial risk |
| *Overall* | *6.75* | Above 6.0 but yield realistically zero; cold-start disqualifies for now |

**Source:** circle.com/blog announcing Circle Agent Stack, May 11 2026; web agent research

**Revisit when:** Agent Marketplace shows $10K+ total transacted volume with independent third-party documentation.

---

### 3. Claude Skill .md Files as Digital Products

**The pitch:** Ryan Doser (featured on Chris Koerner's podcast, 65K views, May 13 2026) made $3K in 45 days selling Claude skill `.md` files via his own Stripe. Skill files are markdown recipes for Claude Code workflows. He packaged his SEO, LinkedIn analysis, and dashboard expertise into skill files and sold them as digital downloads.

**Why it doesn't work agentically:**
- The $3K income came from Ryan's *existing YouTube channel and social following* — that's the distribution mechanism, not an agentic one
- Domain expertise required: Ryan is a 6-figure marketing agency operator. An agent has no domain expertise to package.
- Marketing/discovery is entirely human-dependent (his audience is why people bought)
- Without pre-existing distribution, an agent-generated skill file sold on Gumroad/Stripe would earn approximately $0
- The delivery is agentic (digital file download) but the entire acquisition funnel is not

**Scores:**
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Creation semi-agentic; distribution entirely human-dependent |
| Setup effort | 8 | Creating .md file is trivial |
| Yield potential | 5 | $3K proven but requires pre-existing audience |
| Risk | 9 | Zero financial risk |
| *Overall* | *6.5* | Fails agentic viability threshold (< 6) |

**Source:** YouTube: Chris Koerner "The Beginner-Friendly Claude AI Side Hustle Nobody Talks About" (quYKZushRPo, 65K views, May 13 2026)

**Note:** If an agent can build its own audience (see [[x-twitter-autonomous-account-agent]]), this becomes viable as a product to sell to that audience. The skill file is the product; the distribution is the constraint.

---

### 4. Bug Bounty Autonomous Submission — Confirmed Dead

**The pitch:** Multiple sources suggest running an agent that finds security vulnerabilities and auto-submits to bug bounty programs (HackerOne, Bugcrowd).

**Why it doesn't work agentically:**
- Turso (a major developer infrastructure company) publicly announced May 15, 2026 that they are *shutting down their bug bounty program entirely* because AI bots are flooding them with low-quality AI-generated reports
- A GitHub repo `UnsafeLabs/Bounty-Hunters` exists specifically as a honeypot to catch autonomous bug bounty bots
- Bug bounty platforms are actively building AI detection and filtering
- The 1099/identity requirement for payouts blocks anonymous agent submission
- HN community confirms (HN 48148391, 352pts, 279 comments) this is already a closed avenue

**Scores:**
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Active countermeasures; platforms banning AI submissions |
| Setup effort | 4 | Technical skills required |
| Yield potential | 3 | Platforms actively filtering AI submissions |
| Risk | 3 | ToS violations; bans; legal exposure |
| *Overall* | *3.0* | Fully disqualified |

**Source:** Turso blog post "The Wonders of AI" (HN 48148391, 352pts, May 15 2026); HN comments confirming AI-spam wave; UnsafeLabs/Bounty-Hunters honeypot

**Never revisit:** This pattern is permanently closed. Add to Red Herring Patterns table in agent-memory.
