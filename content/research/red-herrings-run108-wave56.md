---
title: "Red Herring: Run 108 Wave 56 Bundle — RuntimeAds, Shopify UCP Promoted Placements, Bluerails Discovery"
date: 2026-06-23
tags: [passive-income, not-viable, red-herring, shopify, advertising, discovery]
---

# Run 108 Wave 56 Bundle — Not Viable

Three ideas evaluated June 23 2026. All fail the agentic viability or self-service threshold.

---

## 1. RuntimeAds — "Get Paid While Your AI Thinks"

### What It Claims to Be
RuntimeAds shows ads in Claude Code / Codex / VS Code / Cursor spinner screens while AI agents are "thinking," splitting CPM revenue 50/50 with the developer (publisher). Install as extension, earn from your AI tool usage.

### Why It Doesn't Work Agentically
- **Same pattern as Kickbacks.ai, Waitline, Idlen, Sponsoric** — already confirmed NOT_VIABLE (wave 55, June 22 2026)
- Income requires HUMAN eyeballs watching an AI thinking screen — NOT autonomous agent income
- Anti-bot detection explicitly blocks agent loop patterns (same 4-layer detection documented in prior runs)
- Income ceiling: $2–$7/month per developer from their own tool usage
- This is NOT an agent earning money — it's a human earning a tiny amount while watching AI work

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Requires human present watching spinner |
| Setup effort | 9 | Extension install only |
| Yield potential | 1 | $2–7/mo from own usage |
| Risk | 8 | Legitimate advertising |
| **Overall** | **4.75** | |

### Source
Web: runtimeads.com (June 2026); ChatAds blog ranking of 6 AI agent monetization solutions; confirms Kickbacks/Waitline red herring pattern

---

## 2. Shopify UCP Promoted Placements — Developer Affiliate Commerce Agent

### What It Claims to Be
Shopify's Spring '26 Edition (June 17, 2026) introduced a Promoted Placements developer program: build an AI shopping agent using the Shopify Global Catalog MCP endpoint (`https://catalog.shopify.com/api/ucp/mcp`), add `placements: ["affiliate"]` to search calls, and earn ~1.5% commission when your agent's recommendations drive purchases within 7 days. KYC verification + monthly payouts via Shopify.

### Why It Doesn't Work (Yet)
- **Invite-led Developer Preview** — waitlist required, no self-service access to Promoted Placements
- **Audience bottleneck** — the shopping agent still needs USERS to query it and complete purchases; the agent earning income depends on human conversion, not autonomous agent-to-agent commerce
- Commission rates are merchant-dependent (some private, "commission is not 0 if omitted but rate not disclosed")
- Shopify warns: "Do not model revenue on it yet"
- The MCP catalog endpoint IS live and free — you can build the agent today — but the affiliate payment layer is gated

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Serving is agentic once approved; but conversion requires human users shopping |
| Setup effort | 6 | MCP server build is simple; waitlist gate is the real friction |
| Yield potential | 5 | 1.5% on whatever purchase volume agent drives; could be significant at scale |
| Risk | 9 | Shopify-sanctioned program, very safe |
| **Overall** | **6.0** | WATCHLIST: re-evaluate when Promoted Placements goes GA (self-service, no waitlist) |

### Source
Web: shopify.dev/docs/agents/catalog (June 17 2026); Shopify Spring '26 Edition developer blog; wearepresta.com UCP implementation guide

**WATCHLIST NOTE:** This could become VIABLE (7+/10) when Promoted Placements exits Developer Preview. The pattern — build MCP server → list on MCPize/AgenticMarket → earn affiliate commissions when other agents drive Shopify purchases — is architecturally sound. Subscribe to developer.shopify.com/changelog for GA announcement.

---

## 3. Bluerails Discovery — AI Agent Commerce Infrastructure

### What It Claims to Be
Bluerails Discovery makes existing businesses "agent-ready" — scoring AI visibility, adding structured signals (llms.txt, schema markup, HTTP 402 endpoints), enabling agent checkout, and handling global settlement in USDC/EUR. Marketed as "the rails AI agents use to find and pay you."

### Why It Doesn't Work Agentically (as a MoneyMinions opportunity)
- **Infrastructure for existing merchants, not income creation tool** — you need an existing business/service first; Bluerails handles discovery + payment acceptance but doesn't help CREATE a new income stream
- **Cost not income**: €119/month subscription to use the platform; income comes from your underlying business, not from Bluerails
- **Discovery layer only + x402 payment wrapping** — functionally the same as ARD (agenticresourcediscovery.org) + x402/MPP, which we already have (already flagged as NOT_VIABLE as standalone, per run 104 June 19)
- Settlement tier is "coming soon" — fiat offramp not fully live

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | N/A | Infrastructure, not income mechanism |
| Setup effort | 8 | Drop-in implementation |
| Yield potential | N/A | Depends on underlying business |
| Risk | 8 | Legitimate startup (Series A-stage) |
| **Overall** | **N/A** | Not evaluated as income mechanism — it's a tool to improve an existing service |

### Source
Web: bluerails.com + discovery.bluerails.com + Product Hunt listing (June 2026); Reddit r/AIIncomeLab discussion (June 23 2026)

**NOTE for library:** Bluerails is worth tracking as a TOOL to augment existing VIABLE reports. Any VIABLE idea that serves agents (x402 APIs, MCP servers, data products) should consider adding Bluerails for improved agent discoverability, once the settlement tier is live. Add to cross-listing checklist alongside ARD and mppscan.com.
