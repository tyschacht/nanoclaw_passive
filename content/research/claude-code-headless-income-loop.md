---
title: "Idea: Claude Code Headless Income Loop (SKILL.md Architecture)"
date: 2026-04-09
tags: [passive-income, agentic, viable, claude-code, automation, architecture, prediction-markets]
---

# Claude Code Headless Income Loop (SKILL.md Architecture)

## What It Is

The Claude Code Headless Income Loop is an architecture pattern — not a single income strategy — that turns Claude Code's CLI (`claude`) into a fully autonomous, recurring agent loop with zero ongoing human interaction. Discovered from All About AI's April 8, 2026 video, this pattern is the most directly replicable autonomous income framework found to date.

The architecture has three components:

1. **SKILL.md** — A structured markdown file that defines a repeatable multi-step task. Claude reads this file as its instruction set on each cycle. Example structure: "Step 1: Fetch X. Step 2: Analyze X against criteria Y. Step 3: If condition Z is met, take action A. Step 4: Log result."

2. **Claude Code's `-p` (prompt) flag** — Runs Claude Code in headless, non-interactive mode. The command `claude -p "/skill-name"` executes the named skill once with no terminal UI and no human prompts.

3. **Bash while-loop with sleep** — The outer loop that keeps the skill running continuously:
   ```bash
   while true; do claude -p "/autocalch"; sleep 60; done
   ```

The creator's real deployed example is "autocalch" — a skill that monitors Kalshi (a prediction market) for newly listed markets, checks each one against a bug bounty eligibility checklist, and auto-emails a formatted bug report to Kalshi's bug bounty address when a market's settlement terms don't match what a layperson would expect. Bug bounties pay $25 (minor), $50 (moderate), $100 (severe), plus $10 if reported before the market goes live.

The creator reports earning $100–$200/week from this single skill running unattended. He runs multiple skills simultaneously: "some make $20/week, some make $300/week."

The deeper value is the architecture itself. The same SKILL.md + while-loop pattern can be applied to any repeatable agent task: monitoring APIs for opportunities, scanning for price discrepancies, submitting applications, filing reports. It is the smallest viable agentic income primitive.

## How an Agent Does It

1. **Define the income task**: Identify a repeatable, rules-based task that produces money (or reduces cost) when executed. The clearest examples: bug bounty scanning, market monitoring, arbitrage detection, content scheduling.

2. **Write a SKILL.md**: Define the task as a numbered sequence of actions with explicit decision rules. Claude Code reads this file as its operating instructions. Example for a Kalshi bug scanner:
   ```
   # autocalch
   Step 1: Call Kalshi API GET /markets?status=pending to get markets listed in the last 24h.
   Step 2: For each new market, read the full contract spec.
   Step 3: Check: Does the settlement condition match the plain-language title? Does it match common layperson expectations?
   Step 4: If a discrepancy is found, compose an email to bugs@kalshi.com with subject "Market Bug Bounty Report" and body describing the issue.
   Step 5: Send the email using the Gmail API token at ~/.config/gmail-token.json.
   Step 6: Log the result to ~/skills/autocalch/log.json.
   ```

3. **Configure settings.json**: Whitelist specific bash commands that Claude is allowed to execute autonomously. This is what enables truly unattended operation — Claude can call `curl`, `python3`, send emails, etc., without per-command approval prompts.

4. **Launch the loop**: Start `while true; do claude -p "/autocalch"; sleep 60; done` in a tmux session or systemd service on any always-on machine (VPS, home server, etc.).

5. **Monitor weekly**: Check the log.json once a week. Respond to any bounty confirmations or follow-ups manually. Everything else runs without human touch.

## Source

- All About AI YouTube channel: "My Easy Claude Code Passive Income AI Automation Setup" (April 8, 2026, https://www.youtube.com/watch?v=3hioz8dlTFs)
- Creator demonstrates the exact bash command, SKILL.md structure, and settings.json whitelist approach live on camera
- Real income claim: $100–$200/week from the bug bounty skill, plus additional skills running simultaneously

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Completely autonomous once running; human only reviews logs and responds to bounty confirmations |
| Setup effort | 8 | < 2 hours to replicate for a Claude Code user; SKILL.md is a markdown file, loop is 1 bash command |
| Yield potential | 5 | $100–$300/week per skill demonstrated; multiple skills can stack; ceiling depends on which tasks are targeted |
| Risk | 9 | No financial capital at risk; Claude Code API costs are the only variable expense; fully legitimate activities |
| **Overall** | **7.75** | Highest overall score this run; best risk-adjusted entry point for an autonomous income experiment |

## Implementation Notes

- **Cost**: Claude Code API usage per loop cycle. At $0.003/1K tokens (Haiku) and a typical skill using ~2K tokens per cycle at 60-second intervals: ~$8.64/day if running 24/7. Use Haiku for reading/checking, escalate to Sonnet only when composing the output. Realistic cost with intelligent escalation: $1–$3/day.
- **Always-on server**: A $5–$6/month VPS (DigitalOcean, Vultr, Hetzner) is sufficient. Run in a tmux session or configure as a systemd service for auto-restart.
- **settings.json whitelist example**: `{"allowedTools": ["Bash(curl:*)", "Bash(python3:*)", "Bash(cat:*)", "Bash(echo:*)"]}`
- **Skill ideas to implement first** (ranked by ease + yield):
  - Kalshi market bug bounty scanner (demonstrated working)
  - Polymarket arbitrage opportunity detector (feeds a separate execution layer)
  - GitHub issue scraper for active bug bounty programs (HackerOne, Bugcrowd public programs)
  - Niche job board monitor for specific high-value keywords (feeds application pipeline)
- **Key architectural principle**: The skill runs, acts, and logs. The human only reviews logs. The loop should never require human input mid-cycle.

## Open Questions

- What is the exact settings.json whitelist structure that allows Gmail API calls without per-command prompts?
- How does the creator handle rate limits when the loop polls the Kalshi API every 60 seconds? (Kalshi API rate limit is 10 req/sec — fine for polling)
- Can multiple skills run simultaneously in separate tmux panes without API rate limit conflicts?
- What other bug bounty programs (beyond Kalshi) are accessible via API and email submission, with no human triage required on the reporter's side?
