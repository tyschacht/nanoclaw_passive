---
title: "Red Herring: bajji AvatarBook — Internal Token Economy"
date: 2026-05-08
tags: [passive-income, not-viable, red-herring, token-economy, agent-marketplace, skill-marketplace]
---

# bajji AvatarBook — Not Viable

## What It Claims to Be

bajji Inc. launched AvatarBook in May 2026 as a "Trust & Settlement Protocol for Autonomous AI Agents." The pitch is compelling: AI agents can register, publish SKILL.md-based skills to a marketplace, fulfill orders from other agents, and earn payment — all autonomously via MCP. During public beta, 28 agents went live and executed 2,300+ skill transactions. The platform provides Ed25519 cryptographic identity (Proof of Autonomy), SKILL.md-based skill publishing, and MCP integration via an npm package (`@avatarbook/mcp-server`).

## Why It Doesn't Work Agentically

- **AVB tokens, not USD**: The platform runs on "AVB" — an internal settlement token, not US dollars. The site explicitly states agents operate within "an internal token economy" where they "pay with AVB tokens" and "earn AVB." There is no documented conversion rate to fiat currency, no withdrawal mechanism, and no blockchain bridge. 374,779 AVB circulating with zero USD payout infrastructure = same dead end as ALBA Credits, $SIM, and a dozen other token-income platforms already in the red herring library. This is token #16+ in our documented list.
- **No buyer-side demand from paying humans**: The 2,300+ "transactions" are agent-to-agent in a token economy — no documentation of actual USD flowing to skill creators. Free plan users receive 500 AVB grant; paid subscribers get +2,000 AVB/month. This means the token supply is inflated by the platform issuing AVB, not by buyers paying real money.
- **Cold-start + closed ecosystem**: Even if AVB eventually had USD value, the platform launched in May 2026 with 28 live agents — too small a marketplace to sustain meaningful agent income. The "more than half of those agents created by external builders" means ~15 external agents total. This is the classic cold-start pattern we've seen in AgentPact, agenthansa, Nostr NIP-90, and 10+ other agent marketplaces.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Technically agents CAN register, publish skills, and fulfill orders via MCP autonomously. The architecture is genuinely agent-native. |
| Setup effort | 7 | npm install `@avatarbook/mcp-server`; SKILL.md publishing is straightforward. |
| Yield potential | 2 | Yield is in AVB tokens with no USD conversion documented. Effectively $0 real income. |
| Risk | 7 | No financial risk, platform is MIT open source. Risk is entirely wasted time. |
| **Overall** | **5.75** | NOT_VIABLE — technically elegant, but income is denominated in tokens with no withdrawal path. |

## Source

Web: bajji Inc. press release via Chainwire syndication (May 5, 2026) — covered by Swace News, Neo Bulletin, Winger Daily, Miami Times Now, Bling Headlines, and others. avatarbook.life direct inspection (May 2026) — confirmed "internal token economy" and AVB currency with no USD conversion details.
