---
title: "Red Herring: Wave 55 — AI Wait-State Ads / Fake SaaS Waitlists / Grant Research Agent"
date: 2026-06-22
tags: [passive-income, not-viable, red-herring, ai-ads, saas, grants]
---

# Wave 55 Bundle — Not Viable

Three ideas from the June 22 research sweep that each fail the agentic income threshold for distinct reasons.

---

## 1. AI Wait-State Ad Platforms (Kickbacks.ai / Waitline / IdleAds / Idlen / Sponsoric)

### What It Claims to Be

A new category of platforms that display ads in the Claude Code terminal *during* the model's "thinking" time (the loading spinner). Developers install a plugin, see a sponsored status line while waiting for responses, and earn a share of the ad revenue. Multiple competing platforms launched June 2026:

- **Kickbacks.ai** — 50% dev rev share, $8–15 CPM, ~$7–15/month for typical usage (documented in Run 99, Wave 47)
- **Waitline** (getwaitline.com) — Claude Code plugin, 50% rev share, auction-based, ~$1.25 CPM live board (lower than Kickbacks)
- **IdleAds.dev** — 70% rev share, $8–14 CPM, ~$30–50/month at 4hr/day usage
- **Idlen.io** — 70% rev share, $20–42 CPM, ~$50–100+/month at 4hr/day usage
- **Sponsoric** — 70% rev share, $15–35 CPM

A DEV.to comparison article ("I compared every AI wait-state ad platform") confirms all five are live and actively paying as of June 2026.

### Why It Doesn't Work Agentically

- *Not agentic — earns from HUMAN usage*. The income requires a human developer to sit at a terminal running Claude Code. The ads are displayed to the human eye watching the spinner. An AI agent cannot autonomously generate these impressions because the agent IS Claude Code — you can't run Claude Code inside Claude Code at scale to generate impressions for ad platforms.
- *Not passive income by any definition*. The developer must be actively working and using Claude Code to generate impressions. Stopping work = stopping income.
- *Earnings ceiling is trivially low for human effort*. Even Idlen's best case ($100+/month) requires 4 hours of active Claude Code usage daily — that's ~$0.83/hour of effective "ad income" on top of whatever productive work is happening.
- *The correct framing*: this is a *productivity bonus* for human developers, not an agentic income mechanism.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Cannot be operated autonomously by an AI agent; requires human eyeballs |
| Setup effort | 9 | One terminal command to install |
| Yield potential | 2 | $50–100/month ceiling even at peak usage |
| Risk | 8 | Low risk — legitimate ad platforms, clear ToS |
| *Overall* | *5.0* | Below viable threshold; fails agentic criterion categorically |

### Source

YouTube: multiple channels ("I Made Money While Claude Code Was Thinking" — The Brave Coders, Jun 15 2026; "waitline — get paid while your code thinks" — Waitline channel, Jun 20 2026); DEV.to comparison article (dev.to/digitalcheff/i-compared-every-ai-wait-state-ad-platform-kickbacks-idleads-idlen-more-3m4a); HN 48493940

---

## 2. "Fake SaaS" Waitlist Farming

### What It Claims to Be

The All About AI channel (PA7pkV4IqAk, May 22 2026, 5,721 views) documents an experiment: build a convincing but non-functional startup landing page in ~2 hours, post a demo video on X (Twitter) tagging relevant companies, and harvest waitlist signups via FOMO. The implied income is from monetizing the waitlist (selling access, affiliate placements, flipping the audience).

The specific build shown: "Maxquant" — a fake AI quant trading platform. Landing page via Claude Code + Vercel. Fake "live" dashboard hooked to Polymarket's public WebSocket so it displays real data convincingly. Logo from ChatGPT image gen. Promo video from HyperFrames. Waitlist backend on Neon (Postgres). Full build time ~2 hours.

### Why It Doesn't Work Agentically

- *Requires an aged social account with existing followers*. The creator explicitly notes their pre-existing X account as the distribution mechanism. A cold account posting the same content would get zero organic reach. An agent cannot autonomously build a social following.
- *Income mechanism is unverified and undefined*. The video is part 1 of 2 and no revenue figures were disclosed — the experiment was still running at time of upload. "Monetize the waitlist" is not a specific mechanism with documented income.
- *Deception-based model*. Pitching a non-functional product as a real startup carries FTC deceptive marketing risk (US), ASA risk (UK), and obvious ToS issues with any platform used to host or promote it. Not appropriate to recommend.
- *Even if it worked, it's one-shot*. Each fake SaaS is a standalone experiment, not a compounding passive income stream. The pattern collapses the moment any signups become real customers with expectations.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Build/deploy steps are agentic; distribution requires human social account |
| Setup effort | 7 | ~2hr build using Claude Code; easy toolchain |
| Yield potential | 2 | No documented income; "monetizing a waitlist" is speculative |
| Risk | 2 | FTC/ASA deceptive marketing risk; ToS violations; reputational risk |
| *Overall* | *3.75* | Well below viable threshold; risk alone disqualifies |

### Source

YouTube: All About AI "Why Creating a Fake SaaS Using AI Is So Profitable" (PA7pkV4IqAk, May 22 2026, 5,721 views)

---

## 3. Government Grant Research Agent

### What It Claims to Be

A Reddit commenter (u/UsernameOmitted, r/ClaudeAI post 1u4v9ts, Jun 13 2026) claims ~$200K CAD since April 2026 from the following cycle: use Claude to scrape government grant databases → identify non-repayable grants applicable to small software development projects → approach a business that qualifies → business applies for the grant → developer receives the grant amount (~$5K CAD) → repeat.

The agent scrapes ~6 government grant portals plus private aggregators, builds a spreadsheet of qualifying grants, and generates polished pitch decks for the developer to present to businesses.

### Why It Doesn't Work Agentically

- *The human closes the deal*. The entire income-generating step — approaching a business, convincing them to apply, getting approved — is irreducibly human. The agent does research and document generation only; those are support tasks, not income tasks.
- *Grant discovery is not novel*. Claude agents scraping public grant databases is a known pattern. The competitive advantage is the human relationship with the qualifying business, not the automation.
- *Income is project-based, not passive*. Each grant requires finding a new qualified business, submitting an application, and waiting for approval. There is no recurring income from a single system setup.
- *$200K claim is unverified*. Single Reddit commenter with no corroborating evidence, no project names, no links. Could be accurate, could be exaggerated for upvotes.
- *Agentic score 5 = below threshold*. Our minimum for VIABLE is agentic viability >= 6.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Discovery and document generation are agentic; closing is human |
| Setup effort | 7 | Build grant scraper + pitch generator; straightforward Claude task |
| Yield potential | 7 | $5K/project is real if the cycle works; but project frequency is human-limited |
| Risk | 7 | Legitimate grants; no legal risk in grant application facilitation |
| *Overall* | *6.5* | Above threshold on paper, but fails agentic minimum (5 < 6); NOT_VIABLE |

### Source

Reddit: r/ClaudeAI post 1u4v9ts top comments (683 upvotes, 699 comments, Jun 13 2026)
