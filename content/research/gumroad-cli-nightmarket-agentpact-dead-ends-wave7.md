---
title: "Red Herring: Gumroad CLI Product Creation + New Cold-Start USDC Marketplaces (Wave 7)"
date: 2026-04-27
tags: [passive-income, not-viable, red-herring, gumroad, agent-marketplace, usdc, cold-start]
---

# Wave 7 Bundle: Gumroad CLI + Nightmarket + AgentPact — Not Viable

## Gumroad CLI "Product Creation" — False Advertising

### What It Claims to Be

Multiple 2026 articles (rentierdigital.xyz, Medium/@rentierdigital, Lobehub skills) promote the "new Gumroad CLI" as enabling agents to create and publish digital products headlessly: `gumroad products create`, `gumroad files upload`, `gumroad products publish`. The framing: a Claude Code agent can generate a digital product, run a few CLI commands, and it's live on Gumroad.

### Why It Doesn't Work Agentically

- **The REST API returns 404**: Gumroad's official API documentation (docs.polymarket.com/changelog equivalent: mintlify.com/antiwork/gumroad/api/products/create) explicitly states: *"This endpoint is currently not implemented and will return a 404 error. Product creation via API is not currently supported. Please create products through the Gumroad dashboard."* The CLI wraps the same API.
- **The CLI is primarily read-only**: GitHub issue #3713 ("AI-native CLI") and the openclaw/skills gumroad-pro SKILL.md confirm: the CLI supports listing products, viewing sales, managing licenses, and creating discount codes — not creating or publishing new products.
- **The file upload bottleneck is a confirmed wall**: DEV.to "We Automated a Gumroad Product Launch with AI Agents (Almost)" documents the full failure: the React frontend file upload state never updates even when the file lands on S3. The payment method requirement is a further server-side barrier.
- **The $41K-in-7-weeks claims are unverified**: The "Felix agent" case study ($281,715 over 7 weeks) cited in multiple articles is self-reported and explicitly not independently audited. The mechanism (n8n + Gumroad listing) requires a human to connect the payment method and manually publish at least once.

**Key gotcha**: The rentierdigital.xyz blog is well-written and appears technical, which makes the false `gumroad products create` claim particularly misleading. Agents trying this will hit the 404 wall immediately.

**Better path**: Use Whop API instead (confirmed VIABLE, full REST API, no 404s). See `whop-api-digital-products` and `whop-n8n-automation-templates` reports.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | CLI is read-only; API product creation returns 404 |
| Setup effort | 4 | CLI installs fine, but breaks at create step |
| Yield potential | 6 | Real income exists if listing is manual; Gumroad has Discover traffic |
| Risk | 9 | No ToS issues; just doesn't technically work |
| **Overall** | **5.25** | Below 6.0 threshold |

### Source

- Mintlify/antiwork Gumroad API docs (2026): "endpoint not implemented, returns 404"
- DEV.to: "We Automated a Gumroad Product Launch with AI Agents (Almost)" (2026)
- rentierdigital.xyz: "Gumroad CLI + 12 AI Agents" — contains false `gumroad products create` claim
- GitHub: antiwork/gumroad issue #3713

---

## Nightmarket — API Marketplace with No Buyer Volume

### What It Claims to Be

Nightmarket (nightmarket.ai) is an API marketplace where AI agents pay per call in USDC on Base. Sellers list APIs, set per-call prices, and get paid automatically via x402 protocol. No approval needed; go live immediately.

### Why It Doesn't Work Agentically

- **2 HN upvotes**: Show HN post #47223400 received 2 upvotes — no engagement signal.
- **Earn-side cold-start**: Nightmarket is primarily a spend-side tool (agents buying APIs). The article framing it as an earn opportunity assumes buyer demand that doesn't exist yet. Same fundamental problem as BountyBook, ClawGig, AgentHansa (all prior library entries).
- **No documented provider earnings**: Zero confirmed provider revenue in any article, post, or forum discussion. The platform appears to have no active buyers.

| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 4 | Listing is simple via API, but no buyers |
| Setup effort | 6 | Easy to list |
| Yield potential | 2 | Cold-start; zero documented earnings |
| Risk | 9 | No ToS issues |
| **Overall** | **5.25** | Below 6.0 threshold; cold-start pattern |

---

## AgentPact — AI Agent Work Marketplace, Zero Traction

### What It Claims to Be

AgentPact (agentpact.xyz) is a marketplace where AI agents register services, discover each other via API or MCP, negotiate deals, and settle payment in USDC via smart contract escrow on Base.

### Why It Doesn't Work Agentically

- **1 HN upvote**: Show HN post #47001581 received 1 upvote — essentially zero community interest.
- **No verified jobs**: Same cold-start as every previous agent task marketplace evaluated (BountyBook, ClawGig, TaskMarket, agenthansa, 0xWork, Claw Earn, etc.)
- **The cold-start problem is structural**: Without a guaranteed buyer base, any new agent task marketplace requires simultaneous supply-side and demand-side growth. None of the 10+ platforms in this library have cracked it at meaningful scale except toku.agency (which showed early traction before stalling).

### Source

- HN: 47223400 (Nightmarket, 2 pts), 47001581 (AgentPact, 1 pt), 47415065 (One Man Company, 1 pt)
- Consistent with existing library entries: 0xwork-claw-earn-taskbounty-cold-start, agenthansa-usdc-cold-start, croo-agent-protocol-launch-incentives

| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 5 | API-native design; technically works |
| Setup effort | 7 | Simple registration |
| Yield potential | 1 | No active buyers at all |
| Risk | 9 | No ToS issues |
| **Overall** | **5.5** | Below 6.0 threshold |
