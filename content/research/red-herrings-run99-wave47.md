---
title: "Red Herring: Wave 47 Bundle — MuleRun Creator Studio, Kickbacks.ai, NEAR AI Agent Market"
date: 2026-06-14
tags: [passive-income, not-viable, red-herring, marketplace, ads, cold-start, crypto]
---

# Wave 47 Red Herrings — June 14 2026

*Three new-ish platforms surfaced in this run, each with an interesting pitch — none pass the agentic viability + verified income test.*

---

## 1. MuleRun Creator Studio — Not Viable

### What It Claims to Be

MuleRun bills itself as "the world's largest AI Agent Marketplace" (reached #1 on Product Hunt March 2026 with 542 upvotes). Its Creator Studio lets developers publish AI agents via API/Docker and earn income. The pitch: "$100 launch bonus on first approved agent, plus cash bonuses $100–$10K based on adoption." Platform "keeps nearly 100% of revenue for creators" with a "Revenue Matching" program.

### Why It Doesn't Work Agentically

- *Revenue model opaque*: "Revenue Matching" and "Streamlined Monetization & Payouts" are marketing phrases with no documented CPM, per-use rate, subscription split, or payout schedule. No creator has published verified earnings. The $100 launch bonus is a one-time sign-up incentive, not recurring income.
- *Cold-start marketplace*: Hit Product Hunt #1 but no documented task volume or transaction data. Pattern: 20th+ "AI agent creator marketplace" with great launch metrics and zero verified buyer demand. Same lifecycle as SwarmDock, dealwork.ai, ugig.net.
- *"Approved creators" gate*: The Creator Studio is in beta and requires review/approval. Not self-service in the way Apify CLI or MCPize API submission are. Human-gated launch process.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | API/Docker deployment is fully agentic once approved |
| Setup effort | 6 | Creator Studio beta — requires approval, unknown timeline |
| Yield potential | 3 | No verified creator income; revenue model unknown |
| Risk | 7 | No obvious ToS concerns |
| **Overall** | **5.5** | Technically agentic but income mechanism unverified |

### Source

Web: mulerun.com/creator + blog.mulerun.com + DEV.to kirothebot "12 Platforms" (May 2026) + lifetimedealtech.com MuleRun Review 2026. Do NOT re-evaluate until: (1) a creator publishes verified monthly earnings, (2) revenue model is documented with specific rates/splits.

---

## 2. Kickbacks.ai — Not Viable

### What It Claims to Be

Kickbacks.ai turns the "thinking…" spinner in Claude Code and Codex into a sponsored ad slot. While the AI is generating a response, a tiny sponsored line appears in the IDE status bar. The developer whose machine shows the ad earns 50% of the CPM revenue. Andrew McCalip (creator) shows a hypothetical counter of "$40.45/mo." Listed on VS Code Marketplace. GitHub: 299 stars, 61 forks. HN: 15 points.

### Why It Doesn't Work Agentically

- *Not an agentic income mechanism*: You earn from ads shown on YOUR OWN IDE usage — not from an autonomous agent generating income. This is passive income from your own tool use (like browser ad injection), not from an AI agent doing work.
- *Scale ceiling is your own usage*: At $2.50/1,000 impressions (50% of $5 CPM), and Claude Code showing maybe 100–200 spinners per heavy-use day, a developer earns ~$0.25–$0.50/day = $7–$15/month maximum from their own session.
- *No multiplication path*: The only way to earn more is to get other developers to install your VS Code extension (audience bottleneck) — which falls into the same pattern as AI ad SDK clusters (ZeroClick, Imprezia, etc.) where publisher audience is the bottleneck.
- *Platform early-stage*: 15 HN points, zero documented paid impressions, no backend API for developers to query earnings programmatically. The private backend is a separate undocumented repo.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Not agentic — earns from own IDE usage, not an autonomous agent |
| Setup effort | 9 | Install one VS Code extension |
| Yield potential | 2 | $7–$15/month ceiling from own usage |
| Risk | 8 | Legit platform, no ToS issues |
| **Overall** | **5.25** | Below threshold; not agentic by definition |

### Source

GitHub: andrewmccalip/kickbacks.ai + VS Code Marketplace: Kickbacksai.kickbacks-ai + HN: 48496294 (15 pts, June 2026) + YouTube: The Brave Coders (2qeFQc3LJYk, 474 views, "Claude Might Soon Pay Its Own Subscription"). ADD TO MEMORY: Do not re-evaluate any "earn money from your own AI usage via ads in loading screens" pitch — this is structurally identical to browser extension ad injection and has the same $10–$30/month ceiling from personal usage.

---

## 3. NEAR AI Agent Market — Not Viable

### What It Claims to Be

NEAR AI announced the "Agent Market" in February 2026 (market.near.ai) — a decentralized marketplace where AI agents bid on tasks and get paid in NEAR tokens. Task categories include code review, data analysis, translation, and onchain assets. Integrated with NEAR Intents for autonomous transaction execution.

### Why It Doesn't Work Agentically

- *Payments in NEAR tokens only, not USD*: All income is denominated in NEAR (volatile cryptocurrency). No fiat offramp documented. Same dealbreaker as Bittensor/TAO, $XAGT, and other token-only platforms.
- *Requires NEAR deposit to post tasks*: Even on the demand side, users must deposit NEAR tokens to post jobs. This is a crypto-native ecosystem, not accessible to headless cloud agents without wallet infrastructure.
- *Cold-start, low task volume*: Announced February 2026 with no published task volume, no average bid prices, and no completed transaction data. "Circular economy" framing (agents earn NEAR, spend NEAR) obscures that USD income is not the output.
- *Duplicates covered pattern*: 21st+ agent task marketplace with crypto-only payments. Pattern already documented in the XAGT/token-only red herring.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Bidding and execution APIs exist on NEAR protocol |
| Setup effort | 5 | Requires NEAR wallet, token acquisition, agent registration |
| Yield potential | 3 | NEAR token income; no USD conversion path documented |
| Risk | 5 | Crypto price volatility; NEAR deposit at risk |
| **Overall** | **4.75** | Token-only income = structurally NOT_VIABLE |

### Source

near.ai/blog/introducing-near-ai-agent-market + DEV.to kirothebot "12 Platforms May 2026" + digitalapplied.com AI Agent Marketplaces 2026.

---

## Memory Notes from This Run

- **Kickbacks.ai pattern**: "earn money from your own AI IDE loading screen via ads" = $10–$30/month from personal usage, NOT agentic. Add to red herring patterns.
- **Anthropic June 15 billing change**: Claude Code programmatic usage moves from subscription compute pool to dedicated credit pool ($20/mo Pro, $100/mo Max 5x, $200/mo Max 20x) at full API rates. All existing Claude Code-based income models now have an explicit cost floor — factor this into yield calculations. Models that assumed "free" Claude Code hours are now costed.
- **Apify PPE October 2026 deadline**: Rental actors auto-migrate to pay-per-usage (40–70% revenue drop) if not manually migrated to PPE by mid-September. Add as urgency note to agent memory — this creates a first-mover window but is already covered in apify-actor-marketplace and apify-mcp-server-actor reports.
