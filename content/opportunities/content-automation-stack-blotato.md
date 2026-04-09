---
title: "Content Automation Stack (Claude Code + Blotato + Zapier MCP + Apify)"
date: 2026-04-09
tags: [content-automation, claude-code, blotato, zapier-mcp, apify, social-media]
---

# Content Automation Stack

*Claude Code orchestrates a full content research, scripting, and multi-platform publishing pipeline.*

---

## Scores

| Dimension | Score | Notes |
|---|---|---|
| Agentic Feasibility | 6/10 | Highly automated for research, scripting, publishing, and analytics — but source content (video filming) requires human presence |
| Revenue Potential | 7/10 | Content business revenue is unbounded but slow to compound; depends entirely on audience growth |
| Effort to Launch | 5/10 | MCP server setup, Apify account, Blotato subscription, slash command authoring — moderate complexity |

*Agentic feasibility score of 6 falls below our 7+ threshold for pure passive income. Included here as a high-value tooling reference — the individual components (Blotato MCP, Zapier MCP, Apify scrapers) are useful building blocks for other agentic projects.*

---

## What It Is

A system where Claude Code acts as the orchestration layer for a content creator business. Custom slash commands trigger multi-step workflows spanning 30+ tools via MCP servers. Discovered via: YouTube — "How I Run a $70K/Month Business With No Team (Claude Code)" by Brock Mesarich (Feb 24, 2026).

**The $70K/month claim**: asserted but not substantiated in the video. Breakdown by revenue stream is never shown. Most credible interpretation: this is a content business with sponsorship revenue where Claude Code dramatically reduces production overhead.

---

## The Stack (High Signal for Other Projects)

| Tool | Role | Cost |
|---|---|---|
| Claude Code (in Cursor) | Orchestration + content generation | ~$20/mo API or Max subscription |
| Apify | Web scrapers for Instagram, YouTube trending content ("actors") | Pay-per-use |
| Blotato | Multi-platform social publishing + scheduling | $29/mo starter (20 accounts) |
| Zapier MCP | Single MCP connection to 8,000+ apps, 30,000+ actions | Existing Zapier subscription |
| CLAUDE.md | Persistent business rules, tone of voice, CRM data | Free (local file) |

---

## Slash Commands as Compiled Workflows

The core architectural innovation: each slash command encodes a complex multi-step workflow into a single word.

| Command | What It Does |
|---|---|
| `/morning` | Daily AI news briefing → top 3 script opportunities |
| `/trending` | Scrapes 8+ categories → scores by viral potential |
| `/script [topic]` | Generates script in creator's voice, A/B-tests 5 hooks, self-critiques |
| `/reel` | Scrapes latest reel via Apify, compares to historical data, outputs analysis |
| `/resource-script` | Finds free resource → builds script around it → generates shareable Google Doc |
| `scrape YouTube` | Downloads transcript → repurposes to 5 platform posts → publishes via Blotato |

---

## Why It Fails the Pure Passive Test

The workflow is autonomous for everything *except* filming. The creator still:
- Films videos himself (on-camera presence required)
- Manually triggers commands each morning
- Reviews scripts before filming

The repurposing layer (YouTube → 5 platforms via Blotato) is genuinely passive once source content exists. If you have a content asset library (existing YouTube channel), this stack could run semi-passively on legacy content.

---

## Salvageable Agentic Components

1. **Blotato MCP** — worth installing for any project needing social publishing automation
2. **Zapier MCP** — single connection replaces dozens of individual API integrations; applicable to almost any agentic project
3. **Apify scraper pattern** — scraping trending content, competitor feeds, or market signals; applicable to Etsy niche research, lead generation, etc.
4. **CLAUDE.md as persistent business memory** — pattern applicable to any long-running agent project

---

## Sources

- YouTube: https://youtube.com/watch?v=2KS3PjAbPek — "How I Run a $70K/Month Business With No Team (Claude Code)" by Brock Mesarich (Feb 24, 2026)
