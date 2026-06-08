---
title: "Idea: Agensi Paid SKILL.md Marketplace"
date: 2026-04-13
tags: [passive-income, agentic, viable, skill-marketplace, claude-code, openclaw, cross-listing]
---

# Agensi Paid SKILL.md Marketplace

## What It Is

[Agensi (agensi.io)](https://agensi.io) is a paid marketplace for SKILL.md skills — the same format used by Claude Code, OpenClaw, Codex CLI, Cursor, Gemini CLI, and GitHub Copilot. Unlike [[agent37-claude-skill-marketplace]] (which hosts and executes skills on its own platform for a subscription fee), Agensi uses a "buy once, install yourself, own forever" model. Buyers pay a one-time fee ($3–$20 per skill) and install the skill file in their own agent environment.

The marketplace has 171 real paid skills as of April 2026, with prices ranging from $3 (single-purpose utilities) to $20 (comprehensive domain-expertise skills). 80% of each sale goes to the creator via Stripe Connect. The platform covers 20+ AI agent environments, meaning a single SKILL.md file can serve Claude Code, OpenClaw, Codex CLI, Cursor, Gemini CLI, and GitHub Copilot users simultaneously.

The income model is straightforward: an agent writes a high-quality SKILL.md skill (e.g., a parallel research coordinator, a PR reviewer, a DeFi yield monitor), submits it via the Creator Dashboard, passes an automated 8-point security scan plus manual 24–48 hour review, sets a price, and earns 80% of every sale indefinitely. Stripe Connect handles payouts on a weekly schedule.

## How an Agent Does It

1. *Identify skill gaps* — Agent audits existing skills on GitHub (thousands of unpublished or free skills with no monetization) and Agensi browse page for underserved categories
2. *Write SKILL.md* — Claude Code generates a well-structured SKILL.md file with proper frontmatter, clear step descriptions, tool declarations, and usage examples
3. *Package for submission* — Agent zips the SKILL.md + any companion files, prepares metadata (price, description, tags, category)
4. *Submit via Creator Dashboard* — One-time manual web form per skill (human step ~5 min per submission); automated 8-point security scan runs immediately; manual review in 24–48 hours
5. *Passive sales* — Buyers discover skills via Agensi search; one-time purchases billed via Stripe; 80% deposited to creator's Stripe Connect account weekly
6. *Scale* — Agent generates a portfolio of 20–50 skills across multiple domains; each skill is a separate passive income unit

## Source

Web research: [agensi.io](https://agensi.io) platform + [Creator Guide](https://www.agensi.io/learn/how-to-sell-skills-on-agensi) (April 2026) + browse page pricing verification + updated June 8 2026 via Google Cloud Blog (Google Cloud Next 2026), HN 48398925 SaturnCI TDD Skill (246 pts), agensi.io/learn/ai-agent-skills-marketplace-comparison-2026, GitHub sickn33/antigravity-awesome-skills (39.8K stars)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Agent writes + packages skill; submission step is one-time 5-min human form per skill; then fully passive |
| Setup effort | 7 | Stripe Connect account + Creator Dashboard signup + first submission in <2 hours; no CLI needed |
| Yield potential | 6 | Top 10% earns $500–3K/mo (updated June 2026 with real data); median <$50/mo; realistic portfolio target $100–500/mo for quality niche skills |
| Risk | 9 | Established Stripe Connect payouts; zero legal risk; real marketplace with actual paid listings |
| **Overall** | **7.25** | Real paid marketplace with confirmed creator earnings; ecosystem growing with Google institutional validation (SKILL.md = official Google Cloud format since Google Cloud Next 2026) |

## Implementation Notes

*Pricing guidelines per Agensi docs:*
- $5–$15: Single-purpose skills saving 15–30 minutes per use
- $20–$50: Comprehensive domain-expertise skills

*Cross-listing strategy:* List the same skill on BOTH Agensi (buy-once, install yourself) AND [[agent37-claude-skill-marketplace]] (hosted subscription execution) for two parallel revenue streams. Different buyer segments — Agent37 buyers want managed execution; Agensi buyers want to own and install.

*High-demand skill categories based on browse page:*
- Multi-agent coordination ($7–$15)
- Code review / PR review ($12)
- Research automation ($12)
- Test generation ($12)
- API design ($5)

*Platform coverage advantage (updated June 2026):* A single SKILL.md file reaches Claude Code, Cursor, Codex CLI, Windsurf, Antigravity (Google's replacement for Gemini CLI), and OpenClaw — six runtimes, one file. Google adopted SKILL.md as the official format for their Google Cloud skills repository (BigQuery, Cloud Run, GKE, Firebase — announced Google Cloud Next 2026), cementing the format's longevity. antigravity-awesome-skills community library has 39.8K GitHub stars — evidence of massive developer ecosystem. NOTE: Gemini CLI is being sunset June 18, 2026 and replaced by Antigravity (still SKILL.md compatible); no disruption to creator income.

*Submission:* Creator Dashboard at agensi.io/creator — no CLI available as of April 2026. A "public catalog API" is mentioned in docs but endpoints are undocumented.

*Payout threshold:* Stripe Connect standard schedule for your country (typically weekly; no minimum threshold documented).

## Open Questions

- Does the "public catalog API" support programmatic skill submission? (undocumented as of April 2026)
- What is the actual buyer traffic / discovery volume? No published metrics
- Are any top creators documenting earnings publicly?
- How does Agensi's "buy once" model compare to Agent37's subscription model in terms of LTV?
