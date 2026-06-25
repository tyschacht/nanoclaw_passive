---
title: "Red Herrings: Run 110 — Wave 58 Bundle"
date: 2026-06-25
tags: [passive-income, not-viable, red-herring, robinhood, kalshi, meta, wholesale-ted]
---

# Wave 58 Red Herring Bundle — Not Viable

Five ideas swept and rejected in this run. Standalone Higgsfield Earn report filed separately.

---

## 1. Robinhood Agentic Trading (Official MCP Launch) — 4.75/10

*What it claims:* Robinhood launched official Agentic Trading on May 27, 2026, via MCP. Claude, ChatGPT, and other LLMs can now read portfolios, pull live quotes, and place real stock/options orders on a sandboxed wallet. REST + MCP protocol. 27M Robinhood users. The first regulated US brokerage with LLM-native trade execution.

*Why it doesn't work:* Capital-dependent directional trading — exactly the same pattern as ai-swing-trading-broker-api (NOT_VIABLE), autonomous-options-selling-broker-cli (NOT_VIABLE, requires $175K+ for $500/wk), and alpaca-openclaw-stock-trading-bot (NOT_VIABLE, -$367 in 30-day live test). Agent earns nothing without capital at risk. "Passive income" here means "return on capital" not "return on labor." The sandboxed sub-account requirement is a safety feature, not an income mechanism. Prior red-herrings-run97-wave45 and run108-wave56 document this pattern.

*Score: 4.75/10* (agentic 9, setup 7, yield 3 — capital-dependent, risk 3 — capital at risk)

---

## 2. Wholesale Ted's Coloring Channel + Affiliate SEO Sites — 4.5/10

*What it claims:* Two ideas from YouTube: Wholesale Ted (I2EV7atP8NA, 180K views, Jun 1 2026):
- *Cozy coloring channel:* Use Nano Banana (Gemini Image API) to generate coloring pages, upload to Printify as POD coloring books, create a TikTok/Instagram/YouTube Shorts coloring channel, monetize via affiliate commissions and direct book sales.
- *Affiliate review websites:* Use Base44/Lovable vibe coding to build niche review comparison sites (e.g., kneeling chairs), rank on Google for low-competition keywords, earn Amazon affiliate commissions (22% on $435 chairs = ~$95 per sale).

*Why neither works:*
- Coloring channel = audience bottleneck (14th+ faceless social content instance). Requires filming yourself coloring or human-looking videos; TikTok/YouTube algorithmic discovery favors established accounts; subscriber acquisition is irreducibly human. Printify POD upload is covered by printify-gelato-api-autonomous-pod (VIABLE), but the distribution (social channel) bottleneck kills the income.
- Affiliate SEO sites = covered by programmatic-seo-claude-code-loop (NOT_VIABLE): Google Scaled Content Abuse policy deindexes AI-generated affiliate sites; new domains take 6-18 months to rank; AdSense/Amazon affiliate approval manual for new sites. Base44 and Lovable are vibe-coding wrappers (UI-only, no CLI deploy), so agent cannot do the build step programmatically.

*Score: 4.5/10 average*

---

## 3. Kalshi Crypto Perpetual Futures Trading — 5.0/10

*What it claims:* Kalshi launched the first CFTC-regulated crypto perpetual futures in the US on June 3, 2026. BTCPERP went live first, with ETH, SOL, XRP, and 9 more contracts planned. REST + WebSocket + FIX APIs available. Zero trading fees during launch period. Market is new and potentially mispriced, creating LLM-exploitable edges.

*Why it doesn't work:* Capital-dependent derivatives trading — the same pattern as all prior crypto/options trading red herrings. Key red flags:
- *Funding rate cap at 2% per 8-hour window.* Normal crypto perps charge 0.01-0.03%. Kalshi's 2%/8h cap means a position on the wrong side of net demand can cost ~6%+ per day in funding alone — catastrophic for market-making or directional bots.
- *No maker rebate program documented* for perps (unlike Kalshi's prediction market incentive program which pays for liquidity provision). Zero-fee launch period is a user acquisition tactic, not a sustainable market maker incentive.
- *New market liquidity:* Thin books on day-one perps = wide spreads = high slippage = unfavorable for bot strategies beyond first-mover window.
- Covers the same capital-at-risk pattern as: ai-swing-trading-broker-api, autonomous-options-selling-broker-cli, alpaca-openclaw-stock-trading-bot. Do NOT re-evaluate unless Kalshi announces a documented perps maker rebate program.

*Score: 5.0/10* (agentic 8, setup 6, yield 4, risk 4)

*Note:* Kalshi ecosystem is extremely healthy — $40B valuation, $19.8B volume in June alone, $1B+ daily days during World Cup week. This validates existing VIABLE reports (kalshi-liquidity-market-making, kalshi-multimodel-llm-ensemble-bot) and supports raising yield estimates on those reports.

---

## 4. Meta "Arena" Prediction Markets — 3.5/10

*What it claims:* NYT (June 23 2026) reported Meta CEO Mark Zuckerberg directed staff to build a prediction markets app internally called "Arena," separate from Facebook and Instagram. People can wager on real-world event outcomes.

*Why it doesn't work:* Play money only — "wager" here uses virtual currency, not real USD or USDC. No API announced. No launch date confirmed. No maker rebate or market-making program described. In pre-launch stage as of June 25, 2026 — categorically the same as ProphetX Day 1 evaluation (entry 346).

*Score: 3.5/10* (agentic 2 — no API, setup N/A, yield 1 — play money, risk 9)

*Monitor:* Apply cross-platform arbitrage reports immediately when Meta Arena launches with real money + public API. Mark Zuckerberg's involvement suggests a major distribution advantage (3B+ Facebook/Instagram users) that could make it the largest prediction market by volume within 12 months of launch. This is the highest-value monitoring flag in this run.

---

## Key Ecosystem Updates (Not New Reports — COVERED Territory)

### x402 Foundation → Linux Foundation (June 2026)
Coinbase's x402 protocol now governed under the Linux Foundation with 20+ institutional members: Google, Microsoft, AWS, Visa, Mastercard, Stripe, Cloudflare, Circle, Solana Foundation. Milestone stats: 165M+ cumulative transactions, $50M+ volume, 69K active agents. A curated consumer-facing catalog launched at agent.market / agentic.market — listed by adding `@x402/extensions/bazaar` to your server. *Impact:* Upgrades yield estimates for x402-boring-utility-data-apis, gov-data-enriched-mcp-api-ard-pipeline, agentcore-bedrock-x402-enterprise-buyer-funnel, and smithersbot-x402-autonomous-bootstrap.

### Apify PPE Migration Deadline — October 1, 2026
Rental actor model ends October 1, 2026. Apify auto-migrates remaining rental actors to pay-per-usage at that date. Developers who do NOT manually migrate to PPE before the deadline face 40–70% revenue drops. Large portfolio developers (10+ actors) are publishing PPE drafts in May-June with an eye on June-July publish window to clear the 14-day notice period. *Action for apify-actor-marketplace holders:* Migrate before August 2026. See: godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026

### Shopify UCP Build Layer Now Self-Serve
The approval requirement to BUILD with Shopify UCP/Catalog API is removed — register in Developer Dashboard, call the public MCP endpoint, build end-to-end agentic commerce. The Promoted Placements earn layer (1.5% commission when shopping agents buy through your integration) remains invite-only Developer Preview. Re-check Q3 2026 for Promoted Placements GA.

## Sources

- Robinhood Agentic Trading: bitsminds.com/news/robinhood-agentic-trading-claude-chatgpt-mcp-2026 (May 27 2026)
- Wholesale Ted: YouTube I2EV7atP8NA (180K views, Jun 1 2026) — full transcript reviewed
- Kalshi crypto perps: news.kalshi.com/p/kalshi-launches-perpetual-futures-america (Jun 3 2026)
- Kalshi $40B: coindesk.com/business/2026/06/24/kalshi-targets-a-massive-usd40-billion-valuation (Jun 24 2026)
- Meta Arena: npr.org/2026/06/24/nx-s1-5869486/meta-prediction-market-app-ai (Jun 24 2026)
- x402 Foundation: linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation (June 2026)
- Apify PPE: godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026 (May 2026)
