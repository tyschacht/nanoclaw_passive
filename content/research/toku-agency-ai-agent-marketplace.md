---
title: "Idea: toku.agency — AI Agent Service Marketplace (Real USD)"
date: 2026-04-10
tags: [passive-income, agentic, viable, marketplace, service, usd, api]
---

# toku.agency — AI Agent Service Marketplace with Real USD Payouts

## What It Is

toku.agency is a service marketplace where AI agents register, list services, accept jobs, deliver work, and earn real USD — all via a REST API with no human intermediation required. Unlike every other agent marketplace previously evaluated (BountyBook, ClawTasks, TaskMarket, ClawGig), this one has confirmed real USD transactions through Stripe Connect, verified reviews, and a clean SDK with zero dependencies.

The platform supports 9 service categories: Design, Development, Writing, Research, Analysis, Automation, Marketing, Consulting, and Other. Agents list tiered services at any price in USD (examples seen: $8–$1,000+). When a human or another agent posts a job, registered agents can bid competitively. Once hired, the agent accepts, completes work, and delivers via API. Payment flows: hirer pays via Stripe Checkout → worker's wallet credited 85% → agent withdraws anytime to bank account via Stripe Connect.

As of April 2026: 588 registered agents, 1,368 services, 95+ open jobs. The top agent "Lily" (reportedly a Claude-based AI agent herself) has 5 completed jobs and a 5-star review from January 2026. This is the first agent task marketplace in our library with verified real USD transactions and documented client satisfaction.

## How an Agent Does It

1. **Registration** (one-time, one API call): `POST https://toku.agency/api/agents/register` with name, description, optional email. Returns agent ID + API key. No human verification required.
2. **List services**: Define tiered pricing (Basic/Standard/Premium) in USD for each service type (e.g., "Research Report: $50/$100/$200").
3. **Monitor job board**: `GET /api/agents/jobs` on a polling loop (every 30 seconds) to watch for incoming jobs matching your service categories.
4. **Accept a job**: `PATCH /api/jobs/:id {action: "accept"}` → status moves to IN_PROGRESS.
5. **Do the work**: Claude processes the job input (research question, copy request, code review, etc.) and generates output.
6. **Deliver**: `PATCH /api/jobs/:id {action: "deliver", output: "..."}` → payment credited to wallet.
7. **Withdraw**: Stripe Connect bank withdrawal available anytime via `/api/agents/wallet`.

The toku-agent Node.js SDK (`github.com/lilyevesinclair/toku-agent`) wraps this entire workflow. Zero npm dependencies. Install and run with Node 18+. Alternatively, use the REST API directly from a Claude Code `claude -p` loop.

## Source

- DEV.to: "Every Way an AI Agent Can Get Paid in 2026" (lilyevesinclair) — https://dev.to/lilyevesinclair/every-way-an-ai-agent-can-get-paid-in-2026-2il7
- toku.agency platform: https://toku.agency
- SDK: https://github.com/lilyevesinclair/toku-agent
- Run 8 research, April 10 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Full REST API, clear workflow, no human approval steps; agent does the work (writing, research, code review) entirely via Claude |
| Setup effort | 9 | One npm install, one POST request to register; SDK handles polling loop automatically |
| Yield potential | 3 | Honest current ceiling: ~$50–150/month (5 jobs in 3 months for top agent); potential grows with platform volume |
| Risk | 9 | No capital at risk; only compute costs; platform backed by USD/Stripe |
| **Overall** | **7.25** | Infrastructure is real; USD is real; income is currently low but present |

## Implementation Notes

**SDK (preferred):**
```bash
npm install toku-agent
```
```js
import { TokuAgent } from 'toku-agent';

const agent = new TokuAgent({ apiKey: 'your-api-key' });

agent.service('Research & Analysis', {
  Basic: { price: 5000, description: 'Brief report, 500 words' },
  Standard: { price: 10000, description: 'Full report, 1500 words' },
  Premium: { price: 25000, description: 'Deep dive, 3000 words + sources' },
});

agent.on('job', async (job) => {
  const result = await claude(job.input); // your Claude call here
  await job.deliver(result);
});

agent.start(); // begins polling every 30 seconds
```

**Pricing is in cents USD.** $5000 = $50.00.

**Best service categories for LLMs**: Research & Analysis, Writing (blog posts, documentation), Code Review, Automation scripting.

**Competitive bidding**: The job board allows agents to submit bids with price + approach. Higher-quality pitches and strong reviews win jobs over low prices. Build rating reputation aggressively in early days by accepting small jobs.

**SKILL.md integration**: The SKILL.md + `claude -p` loop pattern works well here. Define a `SKILL.md` describing what the agent can do, configure a polling script, and run headlessly.

## Open Questions

- What is the actual acceptance rate for agent bids? (108 bids on one job = very competitive)
- Does Whop's Stripe Connect require a human bank account or can it connect to business accounts?
- What quality threshold separates 5-star deliveries from disputed ones? No rejection/dispute data visible.
- Does agent reputation decay? Does being early to a growing marketplace create a lasting moat?
- Platform is ~3 months old (first reviews Jan 2026). Volume needed: check in 60 days for job completion counts.
