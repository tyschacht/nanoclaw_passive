---
title: "Idea: Claude Code Routines — Headless 24/7 Agentic Infrastructure"
date: 2026-06-04
tags: [passive-income, agentic, viable, infrastructure, claude, anthropic, headless, automation]
---

# Claude Code Routines — Headless 24/7 Agentic Infrastructure

## What It Is

Claude Code Routines is an officially launched Anthropic feature (research preview, April 14 2026) that runs Claude Code automation workflows on Anthropic's managed cloud infrastructure — *without requiring a local machine to be on*. This directly solves the central problem blocking many agentic income mechanisms: agents need a permanently-on host to run scheduled tasks.

A Routine is a saved Claude Code session with a trigger: scheduled (cron), on-demand via HTTP POST, or GitHub webhook. Each routine has its own bearer token, dedicated fire endpoint, and access to all MCP connectors, skills, and environment variables configured in the workspace. The agent does not need to keep a laptop running; Anthropic runs it.

Official docs: https://code.claude.com/docs/en/routines

## How an Agent Does It

1. Create a Claude Code workspace on claude.ai (Pro plan minimum, $20/mo)
2. Write an income-generating prompt session (e.g., "Pull top Polymarket markets near 50%, calculate edge against GFS weather model, place limit orders via CLOB API")
3. Save it as a Routine with a schedule trigger (e.g., `0 6 * * *` = 6am daily)
4. Optionally register the routine's HTTP POST endpoint as a webhook in an external system (n8n, GitHub Actions, monitoring cron) for event-driven firing
5. The routine runs on Anthropic's servers on schedule — local machine can be off
6. Agent pushes results to GitHub, sends Telegram alerts, places API calls, writes files — all without human involvement

The API trigger format is fully headless:
```
POST https://api.anthropic.com/v1/claude_code/routines/{routine_id}/fire
Authorization: Bearer {token}
anthropic-beta: experimental-cc-routine-2026-04-01
```

## Source

Verified via official Anthropic docs (code.claude.com/docs/en/routines), reported in 9to5Mac launch coverage (April 14 2026), confirmed via Nate Herk YouTube video "How to Deploy Your Claude Automations (3 Methods)" (ID: xJ5oz63mIec, 41K views, May 15 2026) where all three deployment tiers are demonstrated live including the cloud routines approach.

## Why This Matters for Existing VIABLE Reports

Every VIABLE report in this library that relies on a scheduled agent (weather bot, Polymarket arbitrage, niche alert subscriptions, Algora translation bounty hunter, Apify actor automation) previously assumed the agent needed a local machine or a paid cloud VM. Claude Code Routines eliminates this requirement at $20-200/mo depending on plan — often cheaper than a VPS.

Key stacking pattern: Use Claude Code Routines to *orchestrate* existing VIABLE mechanisms. The routine calls external APIs (Polymarket CLOB, Apify Actor deploy, Whop Files API, x402 endpoint, MPP server) via its tool access. One routine can stack multiple income streams in a single scheduled run.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Fully headless — API-triggered, runs on Anthropic servers, no local machine needed |
| Setup effort | 7 | ~30 min to configure: create workspace, write prompt, set cron schedule |
| Yield potential | 5 | Infrastructure only — direct yield $0; enables $50-500+/week from mechanisms it hosts |
| Risk | 8 | Research preview (may change); Anthropic-managed = reliable; Pro plan required ($20+/mo) |
| **Overall** | **7.25** | Strong infrastructure enabler; yield unlocked depends entirely on the mechanism deployed |

## Implementation Notes

**Plan limits (daily routine run caps):**
- Pro ($20/mo): 5 routine runs/day
- Max 5x ($100/mo): 15 runs/day
- Max 20x ($200/mo): 15 runs/day
- Team/Enterprise: 25 runs/day
- One-off (non-recurring) runs do NOT count against daily caps — they consume subscription usage

**For high-frequency strategies** (hourly market-making, news arbitrage): daily cap at 5-15 runs is a hard constraint on Pro/Max. Use the API trigger from an external lightweight cron (e.g., GitHub Actions free tier, n8n cloud, or Cloudflare Workers) to fire the routine endpoint on demand.

**MCP connector access:** Routines can use any MCP server configured in the workspace — this includes Polymarket CLOB, Apify, Slack, GitHub, database connections, and custom HTTP MCP servers. Full tool access, not just text generation.

**Environment variables:** Secrets (API keys, bearer tokens for external services) are stored per-workspace and injected into each routine run. No secrets in the prompt text.

**Still in research preview:** Request and response shapes, rate limits, and token semantics may change. Monitor anthropic.com/changelog for graduation to stable.

## Open Questions

- What happens to routine runs that exceed the daily cap — are they queued or dropped?
- Can a single routine trigger another routine (agent orchestration)?
- What is the overage pricing for usage credits beyond daily caps?
- When does this graduate from research preview to stable/GA?
- Are there compute timeouts per routine run? (Max Claude Code session length applies)
