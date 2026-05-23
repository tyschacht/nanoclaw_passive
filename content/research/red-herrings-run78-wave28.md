---
title: "Red Herring: Wave 28 Bundle — AI Radio, Circle Marketplace, Self-Improving Crypto Bots, Token Platforms"
date: 2026-05-23
tags: [passive-income, not-viable, red-herring, bittensor, radio, circle, token-dependency, audience-bottleneck]
---

# Wave 28 Bundle — Not Viable

*Run 78, May 23 2026. Sources: YouTube (7-query sweep + 5 specific transcripts), HN (all Show HN + top stories May 16-23), Reddit (6 subreddits), Web (15+ targeted searches). Low-signal week — 0 new VIABLE ideas found.*

---

## 1. Lewis Jackson "Self-Improving AI Trading Agent" — Bittensor Crypto (NOT_VIABLE)

### What It Claims to Be
YouTube: Lewis Jackson, video ID `6njREUQAFdg`, 33K views, May 22 2026. A Hermes Agent framework + Claude Code setup that runs 24/7 on Railway, trading on Bittensor subnets with a "dual momentum and yield strategy." The agent self-improves weekly using a second agent ("Cornelius") that tunes parameters based on trade outcomes. Target: 47%/month.

### Why It Doesn't Work Agentically
- Capital-dependent: income = profitable trades, not labor. Same pattern as hyperliquid-autoresearch-crypto-bot, alpaca-openclaw-stock-trading-bot, ai-swing-trading-broker-api.
- Zero documented live returns. At time of filming, the agent was in read-only mode — not yet live trading. The 47%/month figure is a stated goal, not a documented result.
- "Self-improving" framing is new but mechanism is identical: LLM strategy → trade → update → repeat. No verified edge.
- Bittensor subnets have significant slippage and liquidity constraints; the presenter acknowledges gas reserves and slippage tolerance as tuning challenges.

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 8 | Truly autonomous once in live mode |
| Setup effort | 5 | Railway + Claude Code + strategy YAML required |
| Yield potential | 2 | Capital-dependent; 47%/month is aspirational with no live evidence |
| Risk | 3 | Real capital at risk; crypto volatility; no circuit breakers documented |
| **Overall** | **4.5** | |

### Source
YouTube: Lewis Jackson — "How To Build A Self-Improving AI Trading Agent (Insanely Cool)" (6njREUQAFdg, 33,675 views, May 22 2026)

---

## 2. Andon Labs AI Radio Stations — Agents Running Media Businesses (NOT_VIABLE)

### What It Claims to Be
HN: 48183301, 372 points, 271 comments, May 18 2026. Andon Labs gave four AI agents (running Claude, Gemini, Grok, GPT) all the tools to independently broadcast live radio shows AND handle the full business side: ad sales, content scheduling, sponsor negotiations. Positioned as a live experiment in autonomous media companies.

### Why It Doesn't Work Agentically
- Revenue is "so far terrible": only documented deal was $45 from one startup (closed by DJ Gemini). DJ Grok hallucinated its own business deals. DJ Claude ran out of its $20 starting budget and faced financial constraints.
- Audience bottleneck is terminal: ad revenue on a new station with zero listeners = $0. Listener growth requires marketing (human or massive ad spend). Same pattern as beehiiv-niche-newsletter-programmatic-ads.
- Sponsor negotiation responses require humans to reply. Agents can send cold outreach but cannot close deals autonomously.
- Music licensing is a significant cost/legal hurdle not addressed in the post.

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 7 | Content generation and broadcasting fully agentic |
| Setup effort | 3 | Custom harness + bank account + music licensing required |
| Yield potential | 2 | $45 total in documented real deals; audience is the bottleneck |
| Risk | 6 | Music licensing ToS; hallucinated business claims; budget burn |
| **Overall** | **4.5** | |

### Source
HN: 48183301, "We let AIs run radio stations" (andonlabs.com/blog/andon-fm), 372 pts, May 18 2026

---

## 3. Circle Agent Marketplace — Curated Gate (NOT_VIABLE)

### What It Claims to Be
Circle Internet Group launched "Circle Agent Stack" on May 11, 2026, including Agent Wallets, Circle CLI, Nanopayments, and an Agent Marketplace — "a curated directory of agentic services that both humans and AI agents can browse, evaluate and integrate with." Available at agents.circle.com.

### Why It Doesn't Work Agentically
- Curated/application-gated listing: developers must "apply to list your Endpoint in the Agent Service Registry." Circle "does not guarantee approval" and "may suspend, remove, or decline to list any Endpoint... at any time in its sole discretion."
- No documented revenue share percentage or payout mechanism for sellers.
- Very early stage: only 6 illustrative example use cases on the marketplace (meeting prep, voice briefings, AI research, domain registration, social analytics, crypto analysis). No independent creator income documented.
- Same pattern as vercel-agents-marketplace-gated and anthropic-claude-marketplace-enterprise-only: curated partner program, not self-service.
- Agent Wallets and Nanopayments are spend-side infrastructure, not earn-side income.

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 5 | Listing step requires human application and Circle approval |
| Setup effort | 4 | agents.circle.com application + endpoint build required |
| Yield potential | 3 | No revenue share confirmed; marketplace has near-zero current buyers |
| Risk | 7 | Low legal risk; USDC payout if approved |
| **Overall** | **4.75** | |

### Source
Circle press release (circle.com/pressroom), BusinessWire May 11 2026; agents.circle.com direct inspection May 23 2026

---

## 4. Latenode Template Marketplace — Visual Editor Lock-In (NOT_VIABLE)

### What It Claims to Be
Latenode (latenode.com) is an n8n-like workflow automation platform with 5,500+ integrations, an AI agent builder, and a template marketplace where creators can sell automation templates to businesses. Community members report earning $800-$2,200/month from 5-14 template portfolios.

### Why It Doesn't Work Agentically
- Templates must be built in Latenode's visual editor. There is no programmatic API for template creation — no `latenode push` equivalent. An AI agent cannot generate and publish Latenode templates headlessly.
- Revenue share not publicly disclosed. Community posts explicitly ask about the rev split with no clear answer, suggesting it is either unfavorable or variable.
- Smaller buyer base than Whop or Gumroad; power law distribution means top 3 templates earn 70% of revenue — unpredictable for a new creator.
- Inferior to existing VIABLE reports: whop-n8n-automation-templates (Whop Files API creates listing fully agentic, 290+ templates already) and n8n-data-intelligence-subscription (nightly cron → subscriber delivery, 9/10 agentic purity).

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 2 | Visual editor required; no headless template creation API |
| Setup effort | 6 | Once in editor, template creation is straightforward |
| Yield potential | 5 | $800-2,200/mo documented but requires visual editor work |
| Risk | 8 | Low legal risk; standard platform |
| **Overall** | **5.25** | |

### Source
Latenode community forums (community.latenode.com); Reddit r/AiAutomations (referenced as new agent builder for client work), May 2026

---

## 5. Masumi Network — Cardano/Sumi Token Dependency (NOT_VIABLE)

### What It Claims to Be
Masumi (masumi.network) is "the payment network for AI agents" built on Cardano blockchain. It offers escrow smart contracts, on-chain identity, and an MCP server that connects AI clients to a decentralized agent discovery and payment registry. Agents earn Sumi Tokens per task completed.

### Why It Doesn't Work Agentically
- Token dependency: income is Sumi Tokens, not USD/USDC. No documented USD conversion mechanism or exchange liquidity for Sumi.
- No buyer marketplace: Masumi is infrastructure (bring-your-own-buyers), same as Nevermined and MonkePay. The MCP server connects Claude to the Masumi registry, but there is no self-populating buyer demand.
- Cardano blockchain is niche; most AI agent developers use Base/Ethereum/Solana. Cross-chain friction reduces likely buyer pool.
- 16th+ token-as-income red herring in the library.

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 7 | Per-task smart contract execution is fully agentic |
| Setup effort | 5 | MCP server install + Cardano wallet required |
| Yield potential | 2 | Token-only income; no USD payout documented |
| Risk | 5 | Smart contract risk; token value unproven |
| **Overall** | **4.75** | |

### Source
masumi.network; Nevermined MCP blog comparison; GitHub masumi-network/masumi-mcp-server, May 2026

---

## 6. Nevermined MCP — Earn-Side Cold-Start Variant (NOT_VIABLE)

### What It Claims to Be
Nevermined (nevermined.ai) provides "payment infrastructure for AI agents" — wraps MCP servers with a paywall, charges per tool call, and settles in fiat (Stripe) or crypto (USDC/USDT). 1% commission per transaction. Free tier available. Integrated x402, Google A2A, and AP2 protocols.

### Why It Doesn't Work Agentically
- Pure infrastructure with no marketplace discovery. Developers bring their own buyers. Same earn-side cold-start problem as x402-boring-utility-data-apis, monkepay, self-hosted-paid-mcp-stripe-cloudflare.
- The 1% commission is on seller revenue — sellers still need users querying their MCP server. With zero organic discovery, revenue is $0.
- No "Agent Marketplace" layer where buyers can discover Nevermined-hosted services (unlike MCP-Hive or MCPize which have listing directories).
- Effectively a Stripe wrapper for MCP servers, more polished than MonkePay but solving the same non-problem for sellers with no traffic.

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 8 | Payment integration is agentic; wrapping an MCP takes minutes |
| Setup effort | 8 | SDK in TypeScript and Python; "zero to working in 5 minutes" |
| Yield potential | 1 | Zero without existing buyer traffic; no marketplace discovery |
| Risk | 8 | Low legal risk; legitimate platform |
| **Overall** | **6.25** | Fails on yield — same as all x402 earn-side variants |

### Source
nevermined.ai/blog/mcp-monetization-ai-agents; nevermined.ai direct inspection, May 2026

---

## 7. MoneyPrinterTurbo TikTok/YouTube Video Automation (NOT_VIABLE)

### What It Claims to Be
MoneyPrinterTurbo (GitHub, 50K+ stars) automates HD short-video creation from a topic keyword: LLM writes script → stock video clips → TTS voiceover → auto-captions → music. Targets TikTok Creativity Program Beta ($0.40-$1.20 RPM) and YouTube Shorts ad revenue.

### Why It Doesn't Work Agentically
- Audience bottleneck: ad revenue requires viral content, which cannot be engineered autonomously. 1M qualified views needed for $400-1,200 — most AI-generated channels never reach 1M views.
- YouTube AI crackdown (January 2026): 16 channels + 4.7B views terminated for undisclosed AI content. Disclosure now required, which reduces RPM further (already in library: faceless-youtube-ai-generated, NOT_VIABLE since Run 1).
- TikTok Creativity Program requires 10,000+ followers and 100,000+ views in 30 days before monetization. Building to eligibility is human-marketing-dependent.
- This is the faceless-youtube-ai-generated red herring extended to TikTok.

### Scores
| Criterion | Score | Notes |
|---|---|---|
| Agentic viability | 7 | Video generation pipeline fully agentic once configured |
| Setup effort | 7 | GitHub install + API keys for stock footage + TTS |
| Yield potential | 2 | Requires massive audience; $0 until 10K+ TikTok followers |
| Risk | 4 | YouTube AI ban risk; TikTok disclosure required |
| **Overall** | **5.0** | |

### Source
MoneyPrinterTurbo GitHub (50K stars); fluxnote.io/guides/monetize-ai-generated-videos-tiktok; fliki.ai monetization guide; YouTube enforcement data from library (faceless-youtube-ai-generated), May 2026

---

## 8. Gigiac & Agent Overflow — Cold-Start Agent Hiring Platforms (NOT_VIABLE)

### What They Claim to Be
- **Gigiac** (gigiac.com, HN 48179202, score 1): AI agents post tasks and hire humans for real-world labor; humans who contribute data receive perpetual royalties. Built with Claude Code by an ex-lawyer.
- **Agent Overflow** (YouTube: Christian Kasim Loan, tGOR5Ee1LRU, 93 views): Trustless bounty marketplace on Solana where AI agents post problems with USDC bounties and earn crypto for correct answers. Built in 2 weekends.

### Why They Don't Work
- Gigiac: 1 HN score = near-zero traction. "Is this a rentahuman.ai clone?" is the top comment — concept has been tried. Income mechanism for AI agents unclear (they're described as the buyer/employer side, not earner side).
- Agent Overflow: 93 YouTube views, Solana-native (same cross-chain friction as Masumi), "trustless bounty" = 14th+ cold-start agent task marketplace in library. No documented USDC paid to agents.

### Scores
Both: Agentic viability 5-6/10, Yield 1-2/10 (zero buyers), Overall 4.5/10

### Source
HN 48179202 (Gigiac, 1pt, May 18 2026); YouTube tGOR5Ee1LRU (93 views, May 12 2026)
