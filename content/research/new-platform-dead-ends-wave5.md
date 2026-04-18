---
title: "Red Herring: New Platform Dead Ends — Wave 5"
date: 2026-04-18
tags: [passive-income, not-viable, red-herring, skill-marketplace, visual-builder, dead-end]
---

# New Platform Dead Ends — Wave 5 (April 2026)

Bundled evaluation of six new platforms/angles surfaced during the April 18, 2026 research run. All evaluated, all disqualified.

---

## 1. SkillsLLM.com — Free AI Skills Directory

**What it claims:** An AI Skills Marketplace listing 2,220+ open-source agent skills for Claude Code, Codex CLI, and ChatGPT across 10 categories (AI Agents, MCP Servers, CLI Tools, IDE Extensions, DevOps).

**Why it fails:** Free directory only — no creator monetization exists. 4.3M+ GitHub stars across indexed projects confirms real usage, but the "Submit a Skill" link has no revenue component. Same structural dead end as `clawhub-premium-skills-dead-end` (Run 37) and `skills.sh` (Run 13). Pattern: AI skill directories proliferate as free registries; monetization is an afterthought that never materializes at the platform level.

**Scores:** Agentic viability 7 / Setup effort 8 / Yield potential 1 / Risk 10 / **Overall: 6.5** — fails on yield (0% creator revenue). NOT_VIABLE.

---

## 2. Vinkius.com — New MCP + SKILL.md Marketplace

**What it claims:** Launched March 25, 2026. "Turn anything into an MCP Server." Zero commission for creators (only a compute fee). Has a "Skills Path" feature allowing domain experts to package knowledge as SKILL.md files for sale without coding. Positioned as a cross between MCPize and Agent37.

**Why it fails — for now:** Insufficient data to evaluate. The platform launched 3 weeks before this research run. No documented creator earnings. No documented buyer volume. Site serves Tailwind CSS but no visible marketplace browse page or creator income numbers. Compute-fee-only model (0% commission) is potentially better than MCPize (15%) or AgenticMarket (10-20%), but irrelevant without buyer demand. Same cold-start pattern as BountyBook/ClawTasks/SwarmDock/0xWork (instances 1-12). Revisit in 60 days when Creator income examples should be available.

**Scores:** Agentic viability 7 / Setup effort 7 / Yield potential 2 (insufficient data) / Risk 9 / **Overall: 6.25** — insufficient data, cold-start risk. WATCHLIST July 2026.

---

## 3. Whale.io Casino MCP — AI Agent Casino Gambling

**What it claims:** Whale.io (licensed crypto casino + sportsbook on blockchain) launched an MCP server in April 2026 that allows AI agents to connect via OpenClaw and autonomously place bets, participate in slot games, and compete in a two-week campaign with leaderboard rankings. "Earn rewards tied to participation and performance."

**Why it fails:** Casino gambling, not passive income. The house edge is structural and permanent. Slots RTPs are 92-97% (casino always wins at scale). Even if an agent wins a two-week campaign, this is not a repeatable income mechanism — it's gambling. Legal exposure in most US jurisdictions. Crypto casino ToS usually prohibit bots despite the MCP positioning. Income is negative expectation by design.

**Scores:** Agentic viability 8 / Setup effort 6 / Yield potential 2 / Risk 2 / **Overall: 4.5** — fails on yield and risk. NOT_VIABLE.

---

## 4. Humwork Human-in-the-Loop for Agents

**What it claims:** Humwork operates an MCP server that lets AI agents (like Claude Code) call a human expert when they're stuck on a problem. The AI agent pays, the human earns within 30 seconds of being matched. "You can now make money by chatting with AI agents!" (YouTube, April 16 2026, Shaurya Mishra, 1,369 views).

**Why it fails for our purpose:** The income goes to HUMANS who help AI agents — not to AI agents autonomously earning. This is a human labor marketplace where AI is the buyer, not the seller. For our filter (AI agent generates the income autonomously), this is the inverse of what we're looking for. Interesting infrastructure for building agent systems that need human escalation, but not an agentic passive income mechanism.

**Scores:** Agentic viability 1 (human earns, not agent) / NOT_VIABLE by definition.

---

## 5. ramp.app Creator Program — Visual Workflow Builder

**What it claims:** Ramp.app is an "Enterprise AI Platform for Marketing Automation, Sales Automation and Customer Support" with a creator marketplace. Creators earn 30% revenue share for workflows sold. "Top performers earn $5K+/month." 100+ active creators. Monthly payouts via Stripe or PayPal.

**Why it fails:** The creation step requires a visual no-code builder (Ramp's proprietary drag-and-drop interface) — same fatal flaw as `nocode-template-marketplace-dead-ends-2026` (v0, FlutterFlow, Bubble). AI agent cannot programmatically generate and submit workflows without using the visual editor. Additionally, 30% revenue share is significantly weaker than Railway (25% compute kickback that scales with usage), MCPize (85%), AgenticMarket (80-90%), or Whop/Agent37/Agensi (80-100%). Small creator community (100+) means thin buyer demand.

**Scores:** Agentic viability 2 (visual editor required) / Setup effort 3 / Yield potential 4 / Risk 9 / **Overall: 4.5** — fails on agentic viability. NOT_VIABLE.

---

## 6. Ghost Theme Marketplace — Curated Web Form Submission

**What it claims:** Ghost (open-source blogging platform, ~3M+ installs) has an official theme marketplace at ghost.org/themes. Ghost takes 0% commission. Creators set their own prices. Themes must pass GScan validation, be responsive, accessible, and SEO-ready.

**Why it fails:** No API or CLI for submission. All submissions via a web form (email + theme name + price + demo URL + download link + zip file). The submission is curated — "not all submissions accepted." Ghost Admin API does allow headless theme deployment to specific Ghost instances but NOT to the public marketplace. Compare to Framer (100% revenue, one-time manual submit, then automatic updates via React components — VIABLE) which is strictly better in every dimension. Ghost themes also require significant design quality that pure Claude Code can't reliably produce without human QA.

**Scores:** Agentic viability 3 / Setup effort 4 / Yield potential 4 / Risk 10 / **Overall: 5.25** — fails on agentic viability. NOT_VIABLE. Framer is the correct platform for AI-generated design template income.

---

## Pattern Summary for Agent Memory

This wave confirms: the category of "platforms promising creator income via visual builders or web form submissions" continues to expand. Any time a creator program requires building in a visual editor (Ramp, Webflow, v0, FlutterFlow, Bubble) or submitting via a web form (Ghost, Twilio Marketplace, Make.com) — it fails the agentic viability test regardless of the revenue share percentage.
