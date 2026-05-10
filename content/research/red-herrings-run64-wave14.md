---
title: "Red Herring: Wave 14 Bundle — Voice Agency, Figma Gate, No-Code Templates, NanoCorp, Forex Trading"
date: 2026-05-10
tags: [passive-income, not-viable, red-herring, agency-model, figma, templates, trading]
---

# Wave 14 Red Herring Bundle — Not Viable

*Five patterns evaluated and closed out in one research pass. Sources: YouTube (Liam Ottley, Anthony Shoosh, Future-Tech AI channels), HN Show HN (nanocorp.so), Reddit (r/AIIncomeLab, r/chrome_extensions), Web (figma.com help docs, lovable.dev, v0.app, retellai.com, oanda.com).*

---

## 1. AI Voice Agent Reseller (Retell AI / Bland AI / Vapi)

### What It Claims to Be

Build white-label AI phone receptionist bots using Retell AI / Bland AI / Vapi, then sell them to local businesses (dental offices, restaurants, plumbers) at $297–499/mo per client. YouTube has 100K+ view tutorials (Liam Ottley "From Zero to First AI Voice Agent in 18 Minutes," Anthony Shoosh "How to Build & Sell AI Receptionists in 2026") framing this as a breakthrough passive income model. The underlying APIs (Retell at $0.04/min + LLM costs, Bland AI similar) are genuine and fully functional.

### Why It Doesn't Work Agentically

- *Client acquisition is entirely manual.* An agent cannot identify, pitch, close, or onboard SMB clients. Every tutorial involves a human doing in-person visits ("fly out and set up the first automation") or cold outreach campaigns. The Liam Ottley transcript explicitly describes $2,500/mo retainer clients acquired by "Tyler" who flies out to set up the first system in person.
- *Per-client OAuth and phone number provisioning requires human decisions.* Each client needs a dedicated phone number, forwarding rules configured, and business-specific voice/persona decisions — all requiring human judgment on client preferences.
- *Same bottleneck as every agency model in the library.* This is structurally identical to n8n-smb-video-production-service (NOT_VIABLE), n8n-ad-creative-agency-client-gate (NOT_VIABLE), and the general pattern of "AI tool + human client management = agency income, not passive income."
- *Differentiation from Stammer.ai / Wassenger is superficial.* Phone call AI vs. chatbot AI are different tech stacks but identical income models. Already covered adequately by existing reports.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | API provisioning is agentic; client acquisition, onboarding, and relationship management are not |
| Setup effort | 5 | Retell API is well-documented; white-label wrapper tools exist (VoiceAIWrapper) |
| Yield potential | 6 | $297-499/mo per client is real; ceiling is high but depends on client count |
| Risk | 8 | Low risk legally; Retell ToS is developer-friendly |
| **Overall** | **5.75** | Below viable threshold; agency model not passive |

### Source

YouTube: Liam Ottley "From Zero to Your First AI Voice Agent in 18 Minutes" (103K views, Jan 2026); Anthony Shoosh "How to Build & Sell AI Receptionists in 2026" (1,453 views, Feb 2026); multiple similar videos in the niche. Web: retellai.com/pricing, voiceaiwrapper.com.

---

## 2. Figma Paid Plugin Marketplace — Closed to New Sellers

### What It Claims to Be

Publish paid Figma plugins to Figma Community's native marketplace, using Figma's built-in Stripe payment infrastructure. Figma has 42M+ users (IPO'd 2025, $1B+ ARR) and supports one-time payments and subscriptions for plugins. The Email Love plugin reportedly reached $3K MRR. The theoretical model: Claude Code generates a useful Figma plugin → list it → passive subscription income.

### Why It Doesn't Work Agentically

- *Figma is NOT accepting new creators to sell paid resources on Community.* The official Figma help article ("About selling Community resources") explicitly states: "We're not currently approving new creators to sell paid resources on the Community." Only creators approved before the cutoff can use the native payment system.
- *No official headless publishing API.* Publishing requires the Figma desktop app. Community CLI tools exist (figcd, figma-cli via Chrome DevTools Protocol) but both rely on unofficial CSRF token extraction from the web session — fragile workarounds that Figma can break at any time.
- *Even if the gate opens, the CLI bottleneck remains.* The only programmatic publishing paths are unofficial. Production agentic pipelines cannot depend on session token extraction.
- *No alternative external payment path is validated.* Without native payment, you'd need to build your own license key system (adds engineering overhead) and link to an external checkout from the plugin UI — allowed by Figma but eliminates the discovery benefit of native paid listings.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Desktop-app publishing required; unofficial CLI tools only; new seller gate closed |
| Setup effort | 4 | Significant: figcd CSRF token setup + Figma partner approval (currently unavailable) |
| Yield potential | 7 | Platform has real buyers; $3K MRR documented for one plugin |
| Risk | 7 | ToS risk with unofficial CLI methods; marketplace gate changes at Figma's discretion |
| **Overall** | **5.25** | Market is real but access is gated and tooling is unofficial |

### Source

Figma Help Center: "About selling Community resources" (help.figma.com — explicitly states no new seller approvals). GitHub: opral/parrot-figcd (figcd CLI), silships/figma-cli. LinkedIn: Email Love plugin $3K MRR post (2025).

---

## 3. Lovable / v0 / Bolt.new No-Code Builder Templates

### What It Claims to Be

Use AI app builders (Lovable at $400M ARR, v0 by Vercel, Bolt.new by StackBlitz) to generate web app templates, then sell them as products. Lovable's own marketing guide suggests $99–$299 template pricing and cites "$500–$2,000/month for established sellers with 10–15 products." The pitch: Claude-equivalent AI builds the template in minutes, you sell it passively.

### Why It Doesn't Work Agentically

- *None of these platforms have a native paid template marketplace.* Lovable's own guide explicitly directs creators to sell on Gumroad (10% + $0.50 fee), their personal website, or "community channels." There is no Lovable marketplace with discovery, checkout, or rev share for template creators.
- *v0 Templates page exists but is free/community-only.* No documented creator monetization program, no revenue sharing, no submission API.
- *Bolt.new similarly has no template marketplace.* Self-hosting and external billing only.
- *The underlying sell-on-Gumroad mechanism is already covered.* gumroad-cli-digital-product-factory (VIABLE, 8.0/10) covers exactly this pattern. Lovable/v0-generated apps would simply be another product type for the Gumroad pipeline — not a new channel.
- *The tools are UI-based builders, not code generators with headless publishing.* Agentic generation of Lovable/v0 templates requires controlling a browser UI or using the platform API (if available) — neither of which is documented for headless use.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | No headless generation API; UI-only creation; no native marketplace |
| Setup effort | 6 | Quick to generate a template manually in the UI |
| Yield potential | 5 | Real buyers exist but external platform distribution needed |
| Risk | 9 | Zero legal risk |
| **Overall** | **5.75** | Not independently viable; subset of existing Gumroad + Whop pipeline |

### Source

Lovable guide: lovable.dev/guides/how-to-use-lovable-to-make-money-online (explicitly directs to Gumroad). v0 templates: v0.app/templates (free community listings only). Web: Sacra bolt.new revenue profile. Reddit r/SideProject discussions.

---

## 4. NanoCorp — "Autonomous Company Creator"

### What It Claims to Be

NanoCorp (nanocorp.so, Show HN May 8 2026, 13 points, 6 comments) lets users "create autonomous companies run by AI that make money while you sleep." Users define a mission, hire AI agents, and monitor from a dashboard. An upcoming feature will run Google Search Ads autonomously.

### Why It Doesn't Work Agentically

- *No documented income mechanism.* The product page says AI companies will "make money" but provides zero specifics on how, through what platform, via what API, or what revenue has been generated. It is purely marketing copy.
- *13 HN points, 6 comments.* Very early stage with negligible community traction.
- *3 free credits, no transparent paid tier pricing.* No public information on how credits translate to income, what the costs are, or what percentage of income (if any) is paid to users.
- *"Autonomous company" framing without a marketplace.* An agent running ads autonomously does not generate income unless it is selling something. The platform does not describe what it sells or to whom.
- *Structurally similar to prior cold-start platforms.* Fits the same pattern as multiple "AI income while you sleep" platforms evaluated in previous runs — all of which had vague income mechanisms and zero documented user earnings.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Agents run on schedules — technically fine in principle |
| Setup effort | 7 | Simple UI |
| Yield potential | 1 | No documented income, no marketplace, no revenue mechanism |
| Risk | 6 | Unknown; AI-run ads could generate compliance issues |
| **Overall** | **4.75** | Cannot evaluate what doesn't exist; revisit in 90 days if income mechanism documented |

### Source

HN: 48062033 (Show HN: NanoCorp, May 8 2026, 13pts). Web: nanocorp.so (inspected May 10 2026).

---

## 5. AI Forex / Swing Trading via OANDA API (Watchlist Closeout)

### What It Claims to Be

*[Closing out watchlist entry from 2026-04-09]* Build an automated trading bot using Claude + OANDA REST API. OANDA provides full programmatic access to 70+ forex pairs and 100+ CFDs. A Reddit post in r/ClaudeAI (1salhpg) described "20% annual returns in backtesting" using this setup. Originally placed on WATCHLIST pending deeper risk analysis.

### Why It Doesn't Work Agentically

- *Capital-dependent income.* 20% annual at $10,000 deployed = $2,000/year = $38/week. Even if the strategy performs (backtesting ≠ live trading), hitting the $50+/week income threshold requires $13,000+ deployed capital at risk.
- *Standard red herring pattern.* This is the 6th capital-dependent trading idea evaluated: Polymarket copy-trading, Coinbase CDP DeFi yield, VALR market making, etoro agent, HyperLiquid trading — all ultimately rejected because income scales with capital at risk, not with agent labor.
- *Backtesting does not validate live performance.* The research literature (arXiv 2512.16030) confirms single-LLM approaches perform WORSE than random guessing on prediction markets. Forex backtesting with overfitting is notoriously unreliable.
- *OANDA ToS allows automated trading but prohibits abusive rate requests.* The fundamental risk is not ToS but market risk on deployed capital.
- *Officially closing watchlist status.* No new information emerged to change the capital-dependence assessment. Not viable for passive income without substantial capital.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | OANDA REST API is fully headless; Claude + cron = genuinely autonomous |
| Setup effort | 5 | OANDA account + API key + strategy code (moderate complexity) |
| Yield potential | 3 | Capital-dependent; $38/week on $10K deployed assuming 20% annual |
| Risk | 3 | Market risk on deployed capital; strategy decay; drawdown risk |
| **Overall** | **4.75** | Capital-dependent trading, not labor-based income; closing watchlist |

### Source

Reddit: r/ClaudeAI post 1salhpg (April 2026). OANDA Developer docs: developer.oanda.com. Research: arXiv 2512.16030 (LLM prediction market performance).
