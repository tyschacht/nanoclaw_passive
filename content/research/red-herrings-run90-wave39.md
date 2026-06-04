---
title: "Red Herring: Wave 39 Bundle — n8n Marketplaces, Prebuilt Agent Packs, Circle Agent Stack"
date: 2026-06-04
tags: [passive-income, not-viable, red-herring, n8n, marketplace, cold-start, infrastructure]
---

# Wave 39 Bundle — Not Viable

*Sources: YouTube (Nate Herk xJ5oz63mIec, Eric Tech nX_bGyIOFM4, Sharbel 2WZAcWtwoDI confirmed recheck) + HN sweep (May 28 – June 4 2026, ~430 posts) + Reddit sweep (r/AiAutomations, r/passive_income, r/SideProject, r/ClaudeAI, r/AIIncomeLab, r/LLMDevs, r/modelcontextprotocol, June 4 2026) + Web (n8nmarkets.com, managen8n.com, Circle agents.circle.com, HN ID 48383851, June 4 2026)*

---

## 1. n8n Workflow Marketplaces — No Headless Listing API

### What It Claims to Be
Dedicated marketplaces for n8n automation workflows where creators submit templates and earn revenue share from downloads or purchases. n8nmarkets.com offers 90% revenue share (10% platform fee) via Paddle, billing itself as "the #1 global marketplace" with 3,850+ templates. ManageN8N promises a creator marketplace with majority revenue share. Presents as a passive income channel for automation builders.

### Why It Doesn't Work Agentically
- **No listing API at any platform.** n8nmarkets.com requires manual web-based submission through their editor UI. ManageN8N is still in limited beta/waitlist as of June 4, 2026. Neither has documented a headless API for autonomous agent listing.
- **Editorial review gate.** n8nmarkets.com reviews every submission for "quality, security, and functionality before going live" — human-curated catalog. This alone blocks agent-automated publishing regardless of API availability.
- **Redundant with existing VIABLE mechanism.** The Whop Files API approach (`whop-n8n-automation-templates`, VIABLE 7.5/10) already solves this problem: agents upload workflow JSON via Whop's headless Files API and earn passively from organic marketplace discovery. n8nmarkets.com adds no new income pathway vs. Whop.
- n8n's official template hub (n8n.io/workflows) is free community resource — no creator payments.

## Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | No listing API; editorial review; manual web submission required |
| Setup effort | 4 | Moderate manual listing effort |
| Yield potential | 5 | 90% rev share is good; platform has real volume |
| Risk | 9 | No platform risk — just agentic blocker |
| **Overall** | **5.0** | Fails agentic threshold |

---

## 2. Prebuilt Claude Code Agent Packs (One-Time Purchase) — Audience Bottleneck

### What It Claims to Be
Package pre-configured Claude Code specialist agents (developer, architect, marketer, etc.) as one-time purchase digital products. HN post ID 48383851 (score 3, June 3): creator "keeps rebuilding the same agent setups — same MCP servers, same skills, same prompts, every project" and considers packaging 5 specialists at a one-time price. The Chris Koerner "skill stack" video (115K views, May 13 2026) showed $3K+ in 30-45 days via Google/LLM search traffic.

### Why It Doesn't Work Agentically
- **Audience bottleneck confirmed** — same finding as `red-herrings-run69-wave21` for Claude skill .md files. The creation of the product pack is agent-assistible but the distribution channel (personal website, Google SEO, LLM crawl traffic) requires ongoing SEO work and human content marketing to maintain.
- **Already covered** by `claude-code-seo-tool-portfolio` (VIABLE 6.5/10) which properly models the SEO-driven digital product stack including setup effort and discovery path. No new mechanism here.
- HN post score of 3 with zero confirmation of sales = unverified revenue claim. Chris Koerner's $3K/month example (quYKZushRPo) was already documented in `red-herrings-run69-wave21` as a service/skills model, NOT passive income.

## Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Creation ✓ agentic; distribution ✗ requires SEO/audience maintenance |
| Setup effort | 6 | Packaging is fast; distribution setup takes weeks |
| Yield potential | 6 | Real income possible if traffic acquired; not passive |
| Risk | 9 | Low risk |
| **Overall** | **6.25** | Fails agentic threshold (4/10) |

---

## 3. Circle Agent Stack / Agent Marketplace — Curated Gate (Repeat Finding)

### What It Claims to Be
Circle Internet Group's Agent Stack (launched May 11, 2026) includes an Agent Marketplace at agents.circle.com with 32 services and 349 endpoints, Agent Wallets (USDC), and Nanopayments at $0.000001 gas-free via Circle Gateway. Appears to offer a way to list paid agentic services that AI agents and humans pay for programmatically.

### Why It Doesn't Work Agentically
- **Curated directory — no self-service enrollment.** Already evaluated in Run 65 (May 11 2026): "The marketplace is described as a 'curated directory' — no self-service provider enrollment confirmed." This remains unchanged. The 32 services listed are pre-selected Circle partners, not open to independent developers.
- **Infrastructure-only for self-service operators.** Agent Wallets and Nanopayments are spend-side tools for agents that PAY for services — they do not provide an earn-side mechanism for solo operators.
- Re-evaluate in 90 days (September 2026) if self-service provider enrollment goes live with documented API.

## Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Earn side blocked by curated gate; spend side agentic |
| Setup effort | N/A | Cannot list — not accessible |
| Yield potential | 6 | Potentially strong if opened |
| Risk | 9 | Low risk |
| **Overall** | **5.0** | Access gate disqualifies; same verdict as Run 65 |

---

## 4. HN Wave 39 — Infrastructure with No Income Mechanism

Several HN posts May 28–June 4 2026 were checked and confirm the library saturation signal:

- **Ktx (ID 48309986, score 93, May 28)** — Open-source executable context layer for data agents. Solves agent SQL accuracy. Pure infrastructure, no income mechanism.
- **Anywager Chrome Extension (ID 48384261, score 3, June 3)** — Inline Kalshi prediction lookup. Human-in-the-loop only; does not autonomously place bets.
- **AgtChain / AgentChain (ID 48369985)** — On-chain XAGT token economy. Same as wave 38: token-only payout, no USD, 4.25/10. Already documented in `red-herrings-run89-wave38`.
- **Spain blocks Polymarket/Kalshi (ID 48279316, score 1082, May 26)** — Regulatory risk signal for prediction market strategies. Does not change UK/US availability but raises long-term geo-block risk.
- **Agents-CLI (ID 48346958, score 6, May 31)** — Reuse existing Claude/GPT subscriptions instead of API keys for cost reduction. Cost tool, not income mechanism.

## HN Wave 39 Overall Score
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Infrastructure tools dominate; no new earn-side mechanisms |
| Setup effort | N/A | Not applicable |
| Yield potential | 2 | No documented income mechanisms found |
| Risk | N/A | Not applicable |
| **Overall** | **~3.5** | Library saturation signal: HN has exhausted novel agentic income ideas for this cycle |

## Sources
- n8nmarkets.com (verified live, 90% rev share, no listing API, June 4 2026)
- managen8n.com (limited beta, June 4 2026)
- agents.circle.com (curated directory, no self-service, confirming Run 65 finding)
- HN IDs: 48309986, 48384261, 48369985, 48279316, 48346958 (June 2026)
- YouTube: Nate Herk xJ5oz63mIec, Eric Tech nX_bGyIOFM4 (May 2026)
- Reddit sweep: r/AiAutomations, r/passive_income, r/SideProject, r/ClaudeAI, r/artificial, r/LLMDevs, r/modelcontextprotocol (June 4 2026)
