---
title: "Red Herring: Wave 19 Bundle — Hermes Agent Services, Open Loops Reddit Spam, Claude for Legal, Substack No-API"
date: 2026-05-13
tags: [passive-income, not-viable, red-herring, hermes-agent, reddit-spam, legal-tech, substack]
---

# Wave 19 Red Herring Bundle — Not Viable

Four patterns evaluated this run. All fail the agentic income test.

---

## 1. Hermes Agent "Setup Service" Income Model

### What It Claims to Be
Nous Research released Hermes Agent in February 2026 — an open-source autonomous AI agent with persistent memory and goal tracking. Multiple content sites (AI Profit Boardroom, Julian Goldie AI Automation, AiMoneyLab) run SEO articles claiming creators earn £15,000/month by offering "Hermes Agent setup services" to 10 clients at £1,500 each. The pitch: Hermes is free + open-source (only LLM API costs, ~£20–300/month depending on usage), so margin is high.

### Why It Doesn't Work Agentically
- **This is a human service business dressed as agent income.** "Setting up" Hermes for clients is consulting work — scoping requirements, configuring goals, testing pipelines, handling support. The agent is the tool; the *human* consultant sells and delivers.
- **The "£15K/month from 10 clients" claims are AI-generated SEO content, not documented case studies.** The blog posts on aiprofitboardroom.com and aimoneylabjuliangoldie.com are clearly LLM-generated marketing content with no verifiable behind-the-scenes evidence. Same pattern as the "AI agency" posts we've seen dozens of times.
- **Hermes Agent is infrastructure, not income.** It's the equivalent of claiming you can "make £15K/month from Docker" because you set up Docker containers for clients. The income comes from the consulting, not the tool.

**Pattern**: Identical to the Avoko "setup" red herring (Run 1), GoHighLevel agency model, AI voice receptionist service, and 15+ other "use AI tool X to offer services" patterns in the library.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Setup and delivery are human work; Hermes itself does not earn |
| Setup effort | 6 | Hermes is genuinely easy to deploy (open-source, Docker) |
| Yield potential | 5 | Service income is real but requires human labor |
| Risk | 8 | No ToS issues |
| **Overall** | **5.25** | Fails agentic threshold (2/10) |

---

## 2. "Open Loops" Reddit Traffic / AdSense Blog

### What It Claims to Be
"Autopilot Passive Income" YouTube channel (667 views, May 7 2026, ID: d34PlBKmdRY) describes an "open loop" approach: an AI bot trained to post on Reddit like a human, recommending the operator's blog, driving AdSense revenue. Also bundles: a crypto trading bot ($9,126 from $10K capital), Zazzle product creation via OpenClaw.

### Why It Doesn't Work Agentically
- **Reddit astroturfing via AI bot is a clear ToS violation.** Reddit explicitly bans coordinated inauthentic behavior and bot-generated posts that mimic human users for promotional purposes. Account bans are fast and aggressive. This has been a documented red herring since Run 1 (Facebook AI Reels, YouTube AI channels).
- **The trading bot claims are cherry-picked or fabricated.** "Never lost a day on $10K capital" over months is a statistical impossibility for any systematic BTC trading bot. Cherry-picked screenshot windows are the standard pattern for fraudulent crypto income claims.
- **Zazzle Create-A-Product API is a buyer-side tool, not a seller-side tool.** The Zazzle API allows third-party *websites* to let their *users* create custom products from Zazzle templates. It is not a headless API for sellers to programmatically list products in their own store. The seller-side product creation requires Zazzle's web interface.
- **The entire "Open Loops AI" branding is a course funnel**, not documentation of a real income system. The video ends with a membership site pitch.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Bot posting is automated; ToS ban ends the loop |
| Setup effort | 6 | Blog + Reddit bot is technically buildable |
| Yield potential | 2 | AdSense on bot-driven traffic is negligible; crypto claims fabricated |
| Risk | 1 | Reddit ToS ban inevitable; FTC undisclosed AI promotion risk |
| **Overall** | **3.0** | Fails on risk (1/10) and yield (2/10) |

---

## 3. Anthropic Claude for Legal — No Third-Party Marketplace

### What It Claims to Be
Anthropic launched "Claude for Legal" on May 12–13, 2026, with 20+ MCP connectors (DocuSign, iManage, Westlaw, Everlaw, Lexis+, CourtListener, etc.) and 12 practice-area plugins (Commercial, Corporate, Employment, Privacy, IP, Litigation, AI Governance, etc.). Could this be an income opportunity for third-party legal plugin builders?

### Why It Doesn't Work Agentically
- **Anthropic built all 20+ connectors and 12 plugins in-house.** This is not a marketplace where third-party developers publish and monetize legal tools — it's Anthropic's enterprise product. The GitHub repo (anthropics/claude-for-legal) shows Anthropic-authored code.
- **No third-party publishing pathway exists.** Unlike Atlassian Forge (0% fee, self-serve), Wix App Market (100% yr 1), or Stripe App Marketplace (CLI publish), there is no documented self-service path for indie developers to publish Claude for Legal plugins and earn revenue.
- **Enterprise partner gate applies.** The companies mentioned as "integrating" (Harvey, Relativity, Thomson Reuters, Everlaw) are established legal tech vendors with enterprise contracts, not indie developers. Same gate pattern as Salesforce AgentExchange and Microsoft enterprise marketplace.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | N/A | No publishing pathway |
| Setup effort | N/A | No self-service path |
| Yield potential | N/A | No revenue share documented |
| Risk | N/A | |
| **Overall** | **N/A — gated** | Re-evaluate if Anthropic announces third-party Claude for Legal plugin marketplace |

---

## 4. Substack — No Headless Publishing API

### What It Claims to Be
Substack has grown rapidly as a paid newsletter platform with 35M+ paid subscribers platform-wide. Could an AI agent programmatically create and publish paid newsletters?

### Why It Doesn't Work Agentically
- **No official API for publishing.** Substack explicitly does not offer a public API for programmatic post creation or publishing. Only reader-side data (posts, subscriber counts) is accessible via unofficial scraper libraries.
- **Manual setup required for every newsletter.** Creating a new publication, configuring payment tiers, verifying identity for Stripe payouts — all require the web interface.
- **Audience dependency applies regardless.** Even with a hypothetical API, a new Substack with zero subscribers earns $0. The distribution bottleneck is the same as Gumroad and Polar (already documented in library: polar-sh-digital-products-no-discovery).

**Already covered implicitly**: The n8n-data-intelligence-subscription VIABLE report (VIABLE, 7.25/10) documents the correct model — deliver intelligence via email/webhook to subscribers acquired through an existing platform. Substack is strictly worse than self-hosted delivery for agentic income.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | No headless publish API; manual web interface required |
| Setup effort | 2 | No self-service programmatic path |
| Yield potential | 4 | Platform has real subscriber market |
| Risk | 9 | No ToS issues |
| **Overall** | **4.25** | Fails agentic threshold (2/10) |

---

## Sources

- Hermes Agent: [hermes-agent.org](https://hermes-agent.org/), [AI Profit Boardroom blog](https://aiprofitboardroom.com/blog/hermes-agent-goals/), multiple "AI Profit Boardroom" YouTube videos (GCBjjmb9p7M, vVmu1cPBF60, BmPic1DOh7k, rGeErjfK8XE — May 12–13 2026)
- Open Loops: YouTube Autopilot Passive Income (d34PlBKmdRY, 667 views, May 7 2026)
- Claude for Legal: [LawNext](https://www.lawnext.com/2026/05/anthropic-goes-all-in-on-legal-releasing-more-than-20-connectors-and-12-practice-area-plugins-for-claude.html), [TechCrunch](https://techcrunch.com/2026/05/12/the-ai-legal-services-industry-is-heating-up-anthropic-is-getting-in-on-the-action/), GitHub anthropics/claude-for-legal (May 2026)
- Substack: [Substack support docs](https://support.substack.com/hc/en-us/articles/45099095296916-Substack-Developer-API), community feedback (May 2026)
