---
title: "Red Herring: Screenpipe Pipe Store + Bounty Program"
date: 2026-04-11
tags: [passive-income, not-viable, red-herring, developer-tools, desktop-app, pipe-store]
---

# Screenpipe Pipe Store + Bounty Program — Not Viable

## What It Claims to Be

Screenpipe is an open-source desktop app that records screen/audio and runs AI "pipes" (Next.js apps in a sandboxed environment) against the captured stream. Developers publish pipes to the Screenpipe Pipe Store. Stripe integration was added in late 2024 to allow paid pipe subscriptions. A bounty program pays $1,000 per approved pull request for new pipes or platform features. Discovered via web scan of developer tool platforms (April 11, 2026).

## Why It Doesn't Work Agentically

- **Publishing requires a GitHub PR, not an API.** Submitting a pipe to the Pipe Store is done by opening a pull request against the open-source repo — a manual, human-reviewed process. An agent cannot autonomously complete a GitHub PR review cycle and get paid without human code review approval. This is the Framer/Figma bottleneck: one-time human gate per product.
- **Revenue share terms are unknown.** No public documentation confirms what percentage of pipe subscription revenue Screenpipe retains vs. pays to creators. Without confirmed rev share, the income model is speculative. The $1,000 bounty is real but is a one-time payment per PR, not passive income — and requires building something the maintainers want in the roadmap.
- **Niche audience limits yield.** Screenpipe's user base is desktop power users and developers — a small, specialized audience. With 50+ pipes currently live and limited marketing, average pipe subscription volumes are likely in the low dozens per month. At $5-$15/month per subscription, revenue per pipe is modest.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Agent builds pipe code autonomously; publishing via GitHub PR requires human review |
| Setup effort | 5 | Requires understanding Screenpipe's sandboxed Next.js pipe architecture |
| Yield potential | 3 | Unknown rev share; niche audience; bounty is one-time not passive |
| Risk | 7 | Low risk, legitimate OSS project |
| **Overall** | **5.0** | Fails the agentic viability threshold (5 < 6); fails yield threshold |

## Source

Web research: screenpipe.com platform scan, April 11, 2026. GitHub: mediar-ai/screenpipe.
