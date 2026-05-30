---
title: "Idea: Autodesk Design & Make Marketplace — AEC Enterprise MCP Server Income"
date: 2026-05-30
tags: [passive-income, agentic, viable, mcp-server, marketplace, enterprise, autodesk, aec]
---

# Autodesk Design & Make Marketplace — AEC Enterprise MCP Server Income

## What It Is

The Autodesk Design & Make Marketplace (formerly App Store) is Autodesk's official distribution channel for third-party solutions targeting AEC (architecture, engineering, construction), manufacturing, and media & entertainment workflows. It serves 2.7 million annual visitors from enterprise professionals using Fusion, Revit, AutoCAD, and related products — people who routinely pay $1,000–$10,000+/year for professional software.

The key 2026 differentiator: the marketplace was redesigned around *agentic AI workflows*. MCP servers listed there become discoverable by **Autodesk Assistant** — the AI layer embedded across Fusion, Revit, and other Autodesk products. When a user asks Autodesk Assistant to help with a task that requires a specialized capability (clash detection, CAM post-processing, specifications lookup, etc.), it can automatically identify and invoke a certified marketplace MCP server *without the user manually browsing the store*. This is genuine AI-native distribution.

Revenue terms: **0% commission currently**. Autodesk reserves the right to charge up to 30% in the future but currently takes nothing. Developers keep 100% of subscription or one-time purchase revenue, paid via PayPal.

## How an Agent Does It

1. **Agent identifies an Autodesk workflow gap** — scan the marketplace for underserved categories (check apps.autodesk.com; filter by Revit/Fusion/AutoCAD, sort by recent). AEC professionals pay for: clash detection, BIM data extraction, specification lookup, material database access, CAM toolpath generators, energy analysis helpers.

2. **Agent builds the MCP server** — writes TypeScript or Python MCP server targeting the identified Autodesk workflow. Uses standard `@modelcontextprotocol/sdk` for TypeScript. Autodesk requires an **MCP Tool Manifest** (JSON listing all tools, resources, prompts, external connections) — agent generates this automatically from the codebase.

3. **Human submits to marketplace** (one-time per server, ~2-3 hours) — create Autodesk account, complete Publisher Declaration Form, submit via Publisher Corner (apps.autodesk.com/en/MyUploads) or email appsubmissions@autodesk.com. Set up PayPal for payouts.

4. **Autodesk review** (1-3 weeks) — staff reviews for quality, security, API compliance. Agent can address feedback by pushing code updates.

5. **Autodesk Assistant certification** — submit for agentic certification so the server appears in Autodesk Assistant's invocable tool registry. This is the passive distribution multiplier: users get the server recommended mid-workflow without ever visiting the marketplace.

6. **Passive recurring income** — subscriptions renew automatically. Agent monitors analytics dashboard (Publisher Analytics Dashboard) for usage signals to identify the next server to build.

## Source

Autodesk APS DevCon 2026 blog post: https://aps.autodesk.com/blog/design-and-make-marketplace-where-your-solutions-meet-industry-agentic-ai-workflows

Autodesk Publisher FAQ: https://damassets.autodesk.net/content/dam/autodesk/www/adn/pdf/frequently-asked-questions.pdf

MCP Publisher Guide: https://aps.autodesk.com/marketplace/mcp-publisher-guide

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Agent builds the MCP server fully; one-time human submits web form + email; then passive via Autodesk Assistant |
| Setup effort | 5 | 1-3 week review cycle; MCP manifest required; PayPal account setup; AEC domain knowledge needed to identify the right gap |
| Yield potential | 7 | AEC enterprise = premium pricing ($29-99/mo subscriptions realistic); 2.7M annual visitors; first-mover on Autodesk Assistant agentic invocation |
| Risk | 8 | 0% fee can increase to 30% with notice; legitimate established platform (20+ years); PayPal dependency |
| **Overall** | **6.5** | |

## Implementation Notes

**Required tools:**
- TypeScript: `@modelcontextprotocol/sdk` (standard MCP SDK)
- Python: `mcp` package (for Python server authors)
- PayPal Business Account for payouts
- Autodesk Developer Network (ADN) account (free)

**Pricing strategy:** AEC professionals are accustomed to premium software pricing. $29-49/mo per seat is appropriate for utility tools; $79-199/mo for specialized calculation or data tools. Annual subscriptions preferred (cashflow stability).

**Best MCP categories with clear Autodesk workflow fit:**
- BIM/Revit data extraction and export tools
- Material specification lookup (querying manufacturer databases)
- CAM post-processor generators for Fusion
- Building energy analysis helpers
- RFI/submittal generation from BIM model data
- Clash detection report summarizers

**Rate limits / platform constraints:** All external requests must use HTTPS. AI providers used must be disclosed in the MCP manifest. Autodesk may delist if the server fails to support current Autodesk product versions within a reasonable timeframe of new releases.

**One-time human setup checklist:**
1. Register at https://apps.autodesk.com/en/Publisher/SignUpPage
2. Complete Publisher Declaration Form (downloadable PDF)
3. Create PayPal Business Account
4. Email MCP Tool Manifest + completed form to appsubmissions@autodesk.com
5. Respond to any review feedback (typically one round)
6. Submit for Autodesk Assistant certification (separate form, same email)

## Open Questions

- What is the current Autodesk Assistant certification timeline? (MCP certification process launched 2026 — early applicants may face queue)
- Does Autodesk Assistant auto-discovery require users to opt-in per-server, or is it automatic once certified?
- Are there rate limits on API calls from Autodesk Assistant to third-party MCP servers?
- What happens to listings if Autodesk moves to the reserved 30% commission? (Check Publisher Agreement terms for notice period)
- Can the same MCP server be listed on both Autodesk Marketplace AND general MCP marketplaces (MCPize, AgenticMarket)? No exclusivity clause found in Publisher Agreement — cross-listing appears permitted.
