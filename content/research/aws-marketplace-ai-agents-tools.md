---
title: "Idea: AWS Marketplace AI Agents & Tools"
date: 2026-04-13
tags: [passive-income, agentic, viable, aws, mcp-server, enterprise, marketplace, saas]
---

# AWS Marketplace AI Agents & Tools

## What It Is

Amazon Web Services launched an "AI Agents and Tools" category on AWS Marketplace in mid-2025, now actively expanding in 2026. This is an enterprise-grade distribution channel where developers can list AI agents, MCP servers, knowledge bases, and guardrails for sale to AWS's 300,000+ active customer organizations — Fortune 500 companies, mid-market enterprises, and fast-growing SaaS businesses that already have AWS billing accounts.

The key mechanics: an agent builds an MCP server (or AI agent tool), deploys it to a cloud endpoint (Vercel, Cloudflare Workers, etc.), and lists it in AWS Marketplace as a SaaS product. When an enterprise customer subscribes, AWS handles billing, tax, and remittance — the developer receives 97% of all subscription revenue. Pricing models include monthly subscriptions ($10-$500+/mo per seat), pay-as-you-go usage, and upfront annual contracts. Real listings are already live: Wiz (security), Elasticsearch, and enterprise tools companies have MCP server products listed.

The critical differentiator vs. indie MCP marketplaces (MCPize, AgenticMarket, mcp-marketplace.io): the buyer on AWS Marketplace is an enterprise procurement team with a $10K-$100K software budget, not an indie developer spending $5-$20/mo. A single enterprise subscriber can pay $50-$500/month. Even one subscriber puts you at $500-$2,000/month — the same yield as having 100+ indie dev subscribers on MCPize.

## How an Agent Does It

1. **Agent builds MCP server in TypeScript or Python** using the MCP protocol spec — exposes `tools/list` and `tools/call` endpoints. Claude Code can do this in one session using the @modelcontextprotocol SDK.

2. **Agent deploys to Vercel or Cloudflare Workers** via CLI (`vercel deploy` or `wrangler deploy`) — fully headless, no human required. The deployed HTTPS endpoint becomes the listing's fulfillment URL.

3. **Human (one-time only): AWS Marketplace seller registration** — 1-4 week process: create public profile, submit W-9/W-8, bank account info (or Hyperwallet for non-US), KYC verification. Free to register. This is a one-time setup for the developer's account, not per-listing.

4. **Human (one-time per product): Create product listing** in AWS Marketplace Management Portal — navigate to Products → AI agents and tools → Create → API-based AI agents & tools. Fill in title, description, logo, pricing model. Set up Quick Launch integration (generate API keys for new subscribers via Deployment API webhook). ~30-60 min per listing.

5. **Agent manages subsequent updates via Catalog API** — `StartChangeSet` with `AddDeliveryOptions` or `UpdateDeliveryOptions` enables programmatic updates to pricing, endpoints, and visibility without touching the portal.

6. **Passive income begins** — When an enterprise customer subscribes through AWS Marketplace, AWS automatically collects payment, deducts 3%, and disburses 97% to the developer's registered bank account. No invoice chasing, no Stripe setup, no sales calls needed for existing marketplace traffic.

7. **Optional: Amazon Bedrock AgentCore integration** — Register the MCP server with AgentCore Gateway (supports OAuth, MCP protocol 2025-03-26 and 2025-06-18) to be discoverable by enterprises using Amazon Bedrock agent frameworks — accessing thousands of additional enterprise AI workloads.

## Source

- AWS Marketplace documentation: [Listing SaaS API-based AI agent products](https://docs.aws.amazon.com/marketplace/latest/userguide/listing-saas-ai-agents.html)
- AWS Partner Blog: [AWS Partner Guide to AI Agents and Tools in AWS Marketplace](https://aws.amazon.com/blogs/apn/aws-partner-guide-to-ai-agents-and-tools-in-aws-marketplace/)
- AWS Marketplace AI Agents & Tools category: [Browse live listings](https://aws.amazon.com/marketplace/solutions/ai-agents-and-tools)
- AWS what's new: [Introducing AI agents and tools in AWS Marketplace (July 2025)](https://aws.amazon.com/about-aws/whats-new/2025/07/ai-agents-tools-aws-marketplace/)
- Wiz MCP Server listing: [Live enterprise example](https://aws.amazon.com/marketplace/pp/prodview-34bjontfeovme)
- Catalog API SaaS products: [Programmatic management reference](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/saas-products.html)
- Listing fees: [3% for public SaaS subscriptions](https://docs.aws.amazon.com/marketplace/latest/userguide/listing-fees.html)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Build + deploy fully agentic; AWS registration (1-4 wk) and initial listing (~1hr) are one-time human steps |
| Setup effort | 5 | More friction than indie MCP marketplaces; AWS registration 1-4 weeks; technical MCP build + OAuth/key issuance setup required |
| Yield potential | 8 | 1-5 enterprise subscribers at $50-500/mo = $50-2,500/mo; single enterprise client pays more than 50 indie dev subscribers |
| Risk | 9 | Official AWS channel; standard software ToS; no legal/IP concerns; AWS handles tax compliance globally |
| **Overall** | **7.25** | Enterprise-grade channel with best-in-class rev share; higher barrier than indie marketplaces but materially higher yield per subscriber |

## Implementation Notes

**Seller registration requirements:**
- AWS account (free)
- US bank account (or Hyperwallet free virtual US account for non-US sellers)
- W-9 (US entities) or W-8BEN-E (non-US entities)
- KYC verification — personal/company identity, beneficial ownership, contact details
- Process takes 1-4 weeks; free to register; no upfront fees

**Product types supported:**
- `MCP_SERVER` — Model Context Protocol server
- `AGENT` — General AI agent via API
- `KNOWLEDGE_BASE` — RAG/retrieval knowledge bases
- `GUARDRAIL` — Content safety / compliance tools
- `OTHER` — Custom API-based AI tools

**Pricing models:**
- SaaS subscriptions (monthly, annual)
- Pay-as-you-go (per-call/per-token usage dimensions)
- Contract + subscription hybrid
- Minimum meaningful enterprise pricing: $49-99/mo

**Technical requirements for Quick Launch (recommended):**
- POST endpoint at `/mcp` that handles MCP RPC messages (for MCP_SERVER type)
- OR custom REST endpoint (for AGENT type)
- Webhook to receive new-subscriber events from Deployment API (issue API key)
- HTTPS endpoint (Vercel/Cloudflare Workers handles this automatically)
- For Bedrock AgentCore: OAuth 2.0 two-legged authentication, `tools/list` and `tools/call` support

**Best niches for enterprise buyer interest (based on live listings):**
- Security/compliance automation (Wiz MCP server pattern)
- Data infrastructure tools (Elasticsearch MCP server pattern)
- Developer productivity tools
- Business process automation (document processing, approval workflows)
- CRM/sales intelligence (AWS Partner Central agents use case)

**Revenue share breakdown:**
- Public subscriptions: 3% to AWS → 97% to seller
- Private offer ≥$1M TCV: 1.5% to AWS → 98.5% to seller
- Renewals: 1.5% to AWS → 98.5% to seller

**Cross-listing strategy:** List the same MCP server on AWS Marketplace (enterprise channel at $50-500/mo) AND MCPize/AgenticMarket (indie dev channel at $5-20/mo) — different buyer segments, no conflict.

## Open Questions

- Does the Bedrock AgentCore Gateway provide significant organic discovery boost vs. standard listing traffic?
- What is the typical time-to-first-subscriber on AWS Marketplace for a new SaaS listing with no AWS co-sell partner?
- Does AWS Marketplace provide any marketing support (feature placement, emails to target-segment customers) for new AI agent listings?
- Can the Catalog API fully create a new product from scratch, or is the initial Management Portal step truly required?
- Is there an AppExchange-style security review or is listing self-service after registration?
