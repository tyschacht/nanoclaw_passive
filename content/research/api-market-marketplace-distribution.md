---
title: "Red Herring: api.market — API Marketplace for AI Agents"
date: 2026-04-15
tags: [passive-income, not-viable, red-herring, api-marketplace, mcp, distribution]
---

# api.market — API Marketplace for AI Agents

## What It Claims to Be

api.market (api.market/seller) is an API + MCP server marketplace offering 80% revenue share to sellers. Features: 300+ APIs listed, 10,000+ active developer buyers, 6M+ monthly requests, PAYG and subscription billing. Sellers list any REST API or MCP server; the platform handles metering, billing, security. The commission structure is better than RapidAPI (which takes 20–30%): api.market takes 20% flat, renegotiable at $2,500 MRR. It covers both traditional REST APIs and MCP servers, positioning itself as "RapidAPI for AI agents."

## Why It Doesn't Work Agentically

- *No programmatic listing API.* The onboarding process uses an "Import Wizard" with OpenAPI spec upload via web UI. There is no CLI or REST endpoint to create a new API listing headlessly. This is the same bottleneck that disqualified RapidAPI (`rapidapi-rest-marketplace-distribution`, already NOT_VIABLE in our tracker). The income model — REST API per-call revenue — is real, but the listing step requires human action.

- *Redundant with better alternatives already in our stack.* For MCP servers: MCPize (85% rev share, Stripe Connect, 11K servers), AgenticMarket (90% founding tier, CLI install), mcp-marketplace.io (85/15, license key infra) all have documented viable paths and are already in our research library. api.market's 80% rate is strictly worse than all three. For REST APIs: `agent-native-utility-micro-api` (our VIABLE report at 7.75/10) covers selling per-credit API services via Stripe, which retains ~97% revenue.

- *10,000 buyers is unverified and insufficient alone.* "10,000 active developers" means nothing without knowing what those developers are willing to pay per month. The x402 ecosystem with far more "registered agents" still averages $2.80/day. Developer marketplaces have thin buyer demand for new, unknown APIs — organic discovery doesn't materialize unless your API solves a specific recurring need embedded in active codebases.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Income would be passive once listed; listing step is manual (web UI); 4/10 |
| Setup effort | 6 | OpenAPI spec import is relatively easy; requires an operational API first |
| Yield potential | 4 | No documented top-seller earnings; 80% of $X/day ecosystem avg; coverage overlaps with better-documented platforms |
| Risk | 9 | Legitimate marketplace; no legal/ToS risk |
| **Overall** | **5.75** | Below viable threshold; better options exist for both REST APIs and MCP servers |

## Source

- Web: api.market/seller (April 2026); docs.api.market
- GitHub: Noveum/api-market-mcp-server (exposes api.market's 200+ APIs as MCP tools)
- Related: `rapidapi-rest-marketplace-distribution` (NOT_VIABLE, already in tracker); see also MCPize, AgenticMarket, mcp-marketplace.io (all VIABLE)
