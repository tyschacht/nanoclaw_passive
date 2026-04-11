---
title: "Red Herring: Manual-Listing Agent App Marketplaces (AutomationWorkflows.io, MindStudio)"
date: 2026-04-11
tags: [passive-income, not-viable, red-herring, marketplace, no-code, automation-templates, mindstudio]
---

# Manual-Listing Agent App Marketplaces — Not Viable

## What They Claim to Be

Two new platforms surfaced in this research run that promise passive income from publishing AI-powered products to marketplaces:

**AutomationWorkflows.io** — A dedicated marketplace for selling Make.com, n8n, Zapier, and AI agent workflow templates. 85% revenue share to sellers, Stripe-backed payouts, built-in marketplace browse for buyers specifically looking for automation templates. Unlike Gumroad (zero discovery), this platform targets automation buyers directly. The Medium case study "$3,200/mo from 5 n8n templates" circulates widely and is plausible.

**MindStudio** (mindstudio.ai) — A no-code AI agent builder where creators publish agents to a public marketplace. Platform handles hosting, billing, and discovery. Creators keep 100% of subscription revenue. 150,000+ deployed agents across enterprise, SMB, and government organizations. The company blog claims top creators earn $4,000–$6,000/mo MRR from business automation agents. TypeScript SDK and CLI exist for running agents programmatically.

## Why They Don't Work Agentically

**AutomationWorkflows.io: manually-listed, fully covered by existing VIABLE report.**
- The listing process is: sign up → apply as seller → submit workflow via dashboard. There is no confirmed listing API; every product requires a human to log in and submit.
- This is the same manual-listing bottleneck documented in the [[n8n-gumroad-workflow-templates]] red herring (Gumroad API returns 404 for product creation). The marketplace discovery is better, but the core problem — an agent cannot programmatically list a product — is identical.
- More importantly, [[whop-n8n-automation-templates]] (VIABLE) already covers this exact income model with a confirmed working REST API (`app_5UWRrs7haZZeiQ`) that allows fully programmatic product creation and file upload on a 450K-user marketplace. AutomationWorkflows.io adds no new agentic mechanism — it's a lower-automation version of an already-covered idea.

**MindStudio: creation step requires human using visual no-code UI.**
- The TypeScript SDK and "Running Agents via API" (MindStudio University) allow you to CALL and TRIGGER existing agents programmatically — not to BUILD them.
- Building a MindStudio agent requires using the visual drag-and-drop web builder: connecting tool blocks, configuring logic flows, writing prompt templates in their editor. There is no public API to create agents programmatically.
- This makes MindStudio similar to the Figma/Canva red herring ([[template-platform-dead-ends-2026]]): the building step is human-creativity-gated and uses a proprietary visual interface that an AI agent cannot operate headlessly.
- The pattern here is: [[framer-template-creator-program]] (VIABLE) works because Claude Code generates React/JSX components as text files that a human submits with one click. MindStudio agents cannot be generated as text files — they live inside the platform's structured editor.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | AutomationWorkflows.io: listing manual; MindStudio: builder manual (no-code UI) |
| Setup effort | 5 | Both platforms are easy to sign up for |
| Yield potential | 7 | Income model is real — $3K-6K/mo documented for human-built templates/agents |
| Risk | 9 | Zero legal risk on either platform |
| **Overall** | **6.0** | Income is real but agentic viability fails the threshold; both are human-managed template businesses |

## Source

- AutomationWorkflows.io: [marketplace](https://automationworkflows.io/marketplace), [sell workflows guide](https://automationworkflows.io/blog/sell-automation-workflows), [DEV Community writeup](https://dev.to/bishal_paul_ai/automationworkflowsio-a-marketplace-to-buy-sell-automation-workflows-5571)
- MindStudio: [Creator economy monetization blog](https://www.mindstudio.ai/blog/creator-economy-ai-monetizing-agent-apps), [Build & monetize agents](https://www.mindstudio.ai/blog/build-monetize-ai-agents-business), [Running Agents via API docs](https://university.mindstudio.ai/docs/deployment-of-ai-agents/running-agents-via-api)

## What's Worth Salvaging

If a human is already building automation templates or AI agents manually, both platforms are legitimate distribution channels alongside [[whop-n8n-automation-templates]]. AutomationWorkflows.io's buyer base is specifically automation-intent (better conversion than a general marketplace). MindStudio's 150K+ deployed agents suggest real buyer demand for hosted AI agent apps.

For a fully agentic pipeline, the existing [[whop-n8n-automation-templates]] path (Whop API → programmatic listing) remains the only confirmed agentic route for workflow templates. Do not re-evaluate AutomationWorkflows.io unless they announce a seller listing API. Do not re-evaluate MindStudio unless they open an agent creation API or CLI command.
