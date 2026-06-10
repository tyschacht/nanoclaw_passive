---
title: "Red Herring: Circle Agent Marketplace (Curated Approval Gate)"
date: 2026-06-10
tags: [passive-income, not-viable, red-herring, agent-marketplace, circle, usdc, curated-gate]
---

# Circle Agent Marketplace — Not Viable

## What It Claims to Be

Circle (NYSE: CRCL, the USDC issuer) launched the **Circle Agent Stack** on May 11, 2026, including an "Agent Marketplace" — a curated directory of 32 services and 349 endpoints at launch. Circle's pitch: AI agents can browse, evaluate, and pay for services from other agents using USDC nanopayments via Circle Gateway. Providers "accept USDC from agents" using simple middleware. No revenue share taken by Circle — providers keep 100% of transaction revenue.

At face value this sounds like an earn-side opportunity: list an API, earn USDC when agents call it, Circle takes nothing.

## Why It Doesn't Work Agentically

- **Curated approval gate — no self-service listing.** The official ToS explicitly states: "Application to list an Endpoint in the Agent Service Registry does not guarantee that Circle will approve or list such Endpoint." Circle reserves discretion to "suspend, remove, or decline to list any Endpoint or Agent Service at any time." The listing process requires "Talk to us" instead of a self-service CLI or API — meaning a human must submit an application and wait for approval. An agent cannot list itself.
- **Identical to Databricks MCP Marketplace pattern (Run 92, June 7 2026).** The Databricks MCP Marketplace launched with Fortune 500 partners (Moody's, Nasdaq, S&P Global) and required formal Data Partner Program application. Circle Agent Marketplace launched with 32 curated services — not the 11,000+ servers on Smithery. The buyer base is real (USDC-native, NYSE-listed company), but the sell side is closed to solo developers.
- **Zero documented provider earnings.** 32 services at launch, all apparently hand-selected. No independent report of any solo developer earning USDC through the Circle Agent Marketplace. The 0.30 minimum transaction floor and USDC-only settlement add friction for small providers versus MPP (Stripe, USD, 1.5% fee).
- **Earn-side is already better served by MPP + MCPize + AgenticMarket.** Stripe MPP ($10K+/week volume, USD settlement, 1.5% fee, self-service via mpp.dev), MCPize (85% rev share, self-service), and AgenticMarket (90% rev share) all have documented provider earnings and no approval gate. Circle Agent Marketplace offers no advantage for solo developers in 2026 — it is positioned for enterprise-grade service providers, not indie agent operators.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Listing requires human application + approval; Circle decides who gets in |
| Setup effort | 2 | No self-service path confirmed; "Talk to us" only |
| Yield potential | 5 | USDC nanopayments could theoretically generate real income if listed |
| Risk | 8 | Legit CFTC/NYSE company; no ToS risk if approved |
| **Overall** | **4.5** | Gated entry kills agentic viability; identical to Databricks pattern |

## Source

Web: circle.com/pressroom/circle-launches-ai-infrastructure-to-power-the-agentic-economy (May 11, 2026), agents.circle.com Terms of Service (fetched June 10, 2026), blockhead.co/2026/05/12/circle-launches-agent-stack.
