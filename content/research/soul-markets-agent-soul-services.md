---
title: "Idea: Soul.Markets — Sell Packaged Agent Expertise for USDC"
date: 2026-04-14
tags: [passive-income, agentic, viable, usdc, agent-marketplace, soul-md, watchlist]
---

# Soul.Markets — Sell Packaged Agent Expertise for USDC

## What It Is

Soul.Markets (soul.mds.markets) is a live USDC marketplace where AI agents sell executable expertise — packaged as a `soul.md` file. A soul is a markdown document encoding an agent's judgment, strategy, taste, or specialized knowledge. Other agents (or humans) pay USDC on Base to execute that soul's services via API. The creator earns 80% of each transaction; the platform takes 20%.

The key distinction from other agent marketplaces: you're not selling *outputs* (a report, a scrape result) — you're selling *packaged reasoning*. A soul.md might encode: a due diligence checklist agent for SaaS acquisitions, a hyper-specific copywriting persona for DTC beauty brands, a regulatory compliance classifier for FinTech startups, or a negotiation strategy advisor. Any agent calling the Soul.Markets API gets the encoded expertise applied to their specific input, in real time, paid per call in USDC.

As of April 2026, the platform is live with real transactions: 31 active souls, 111 active services, 604 completed executions, and $1,563.01 total paid to sellers. Average revenue per execution is ~$2.59. This is early — but real USD (USDC on Base, not tokens or credits). The setup is a single API call to register. Once registered, the agent earns passively as callers discover and invoke it.

This is a complement to other SKILL.md/MCP marketplaces: while Agent37 and Agensi sell *instructions* that run locally on the buyer's agent, Soul.Markets sells *hosted execution* — the buyer doesn't need to run anything, they just call the API and pay. Different buyer profile, no installation friction.

## How an Agent Does It

1. Design the soul: Claude Code drafts a `soul.md` file defining the agent's specialty, reasoning approach, example inputs/outputs, and pricing. The soul.md is structured markdown (system prompt + few-shot examples + capability description).

2. Register via API: `POST https://api.soul.mds.markets/v1/soul/register` with the soul.md content, service list, pricing (in USDC per invocation), and a Base wallet address. No browser, no dashboard. Registration is immediate.

3. Service execution: When another agent (or human) calls the Soul.Markets API requesting the soul's expertise, Soul.Markets routes the request, the soul processes it, and USDC is transferred. The creator's wallet receives 80% of the invocation fee automatically.

4. Optimize and iterate: Track which services get invoked most frequently via the API's stats endpoint → refine soul.md for high-demand services → add more service definitions to the same soul.

5. Cross-list: The soul.md encoding is also portable — list the same expertise on Agent37 (subscription) and Agensi (one-time purchase) to capture buyers who prefer those billing models.

## Source

- Soul.Markets platform: https://soul.mds.markets/
- CrewClaw blog overview: https://www.crewclaw.com/blog/soul-md-create-ai-agent
- Platform stats accessed directly April 2026: 31 souls, 604 executions, $1,563.01 total paid

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Registration is one POST request; execution is fully automated; USDC settlement is instant; no human steps after initial soul.md creation |
| Setup effort | 8 | Write a soul.md (< 2 hours), make one API call to register — trivially fast to ship |
| Yield potential | 3 | Total platform volume is tiny ($1,563 total, ~$50 average per soul lifetime); income is real but negligible today; **this is a watchlist until volume grows 10x** |
| Risk | 9 | USDC on Base = real money; purpose-built platform so no ToS risk; no legal exposure |
| **Overall** | **7.25** | Setup is trivially easy — low-cost bet worth making even at current platform scale |

## Implementation Notes

- Soul.md format: start with a system prompt section (who the soul is, what it knows), followed by 3–5 concrete service definitions (input format, expected output format, pricing), and examples of ideal inputs. Treat it like writing a Claude Project instruction set.
- Pricing sweet spot: $1–5 per invocation for analytical services (classification, research, scoring); $5–15 for generation services (copywriting, strategy documents, code review). Undercut the average ($2.59) initially to build execution count, then raise after reviews appear.
- Best soul.md categories (based on top 111 services on platform): financial analysis, B2B copywriting, legal document review, code debugging, SEO audit, market research — professional judgment tasks where the soul adds specialized expertise.
- Wallet requirement: deploy a Base wallet (e.g., via Coinbase CDP or a standard EVM wallet); USDC arrives within ~2 seconds of each invocation.
- Cross-list strategy: same soul.md → Agent37 (hosted subscription, $10/mo, 80% rev share) + Agensi (one-time $8 purchase, 80% rev share) + Soul.Markets (per-invocation USDC). Three parallel revenue streams from one document.
- Platform discovery: Soul.Markets surfaces souls via category browsing and keyword search — choose categories carefully based on what other agents are likely to search for programmatically.

## Open Questions

- When does total platform volume cross $10K/week? At that threshold, individual seller income becomes meaningful (even 10% market share = $1K/week).
- Does the 20% platform take decrease with volume? (No tiered pricing documented yet.)
- Is there an API endpoint for listing top-performing souls to learn from? (Check API docs for leaderboard or stats endpoints.)
- Will Soul.Markets integrate with Coinbase AgentKit so that agent wallets can autonomously pay for other souls? (This closes the agent-to-agent economy loop.)

*Note: Flag for re-evaluation in 60 days — platform volume growth trajectory determines whether this becomes a primary recommendation or stays watchlist.*
