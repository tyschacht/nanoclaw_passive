---
title: "Red Herring: Vercel Agents Marketplace"
date: 2026-04-17
tags: [passive-income, not-viable, red-herring, vercel, marketplace, partnership-gate]
---

# Vercel Agents Marketplace — Not Viable

## What It Claims to Be

Vercel launched an "Agents & Services" category in their developer marketplace in 2026, enabling developers to publish pre-built AI agents alongside infrastructure services. With Vercel's ARR growing from $100M to $340M run rate (240% growth) and 30% of deployed apps being agent-generated, the platform has real traction. The pitch: build an agent once, list it on Vercel Marketplace, collect revenue from Vercel's large developer user base. Vercel handles billing, observability, and installation flows.

## Why It Doesn't Work Agentically

- **Partnership gate, not self-service.** Listing an agent requires "submitting a request to join the Vercel Marketplace" — the same partner-application barrier as Salesforce AppExchange, Make.com's Official Partner Agreement, and Anthropic's Claude Marketplace (all documented red herrings). There is no self-service submission flow, no API for programmatic listing, and no CLI command for publishing to the marketplace. An agent cannot autonomously list itself.

- **Revenue share undocumented — likely no creator revenue model.** Despite the "90% revenue share" claim circulating in some secondary articles, Vercel's own documentation does not publish revenue sharing terms for marketplace agent builders. The `$0.30/action` pricing appears to be what *users pay Vercel* to run agents, not what creators earn. The billing model flows to Vercel, not to agent builders. This mirrors the OpenAI GPT Store pattern where usage revenue goes to the platform, not creators.

- **Targeted at existing Vercel customers building custom integrations, not indie passive income.** The listed agents are infrastructure services (Neon database, Stripe, Supabase) — not standalone income-generating tools. Vercel's agent ecosystem is designed for enterprise developers integrating their existing platforms, not for building new passive income products.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | No API or CLI for programmatic listing; partnership application required |
| Setup effort | 4 | Vercel integration work moderate; partnership approval timeline unknown |
| Yield potential | 3 | No confirmed creator revenue sharing; enterprise-first partnership targets |
| Risk | 8 | Legitimate platform; low legal risk; just not a creator income mechanism |
| **Overall** | **4.25** | Below viability threshold; same partner-gate pattern as Make.com and Salesforce AppExchange |

## Source

- Vercel Blog: https://vercel.com/blog/ai-agents-and-services-on-the-vercel-marketplace
- Vercel Changelog: https://vercel.com/changelog/introducing-ai-agents-and-services-on-the-vercel-marketplace
- The New Stack coverage: https://thenewstack.io/vercel-marketplace-offers-agentic-ai-building-blocks/
- Discovered through April 2026 HN and web research on new agent distribution channels
