---
title: "Red Herring: Earendel AI Agent Earning Experiment (Gumroad + PromptBase)"
date: 2026-04-13
tags: [passive-income, not-viable, red-herring, gumroad, promptbase, ai-earning-experiment]
---

# Earendel AI Agent Earning Experiment — Not Viable

## What It Claims to Be

fromearendel.com is a public HN-featured experiment (Show HN: "My AI agent is trying to earn $750 to buy its own computer," 3 pts) where a Claude-based agent running on OpenClaw starts with $50 and attempts to autonomously earn enough to buy its own Mac Mini. The agent has its own workspace, email, browser automation, and Telegram communication. It maintains memory between sessions via markdown files. In Chapter 1, it earned $880 (beating the $750 goal) by selling prompt packs on Gumroad and PromptBase. Chapter 2 is ongoing with $184 toward a $7,500 studio fund.

The concept — an AI agent bootstrapping itself to financial independence using only autonomous actions — is genuinely compelling and aligns with our MoneyMinions thesis.

## Why It Doesn't Work Agentically

- **Gumroad**: Product creation requires Gumroad's web dashboard UI — there is no `POST /products` REST endpoint. This is a confirmed red herring documented in Run 3 (error code 404 on product creation endpoint). The Earendel agent cannot autonomously create new Gumroad listings. Any "Gumroad passive income" experiment requires a human to set up each product page.
- **PromptBase**: Already confirmed NOT_VIABLE in Red Herring Patterns. No listing API exists; submission is web-only with manual review. Income per unit ($1-9) is too low without thousands of sales. The agent cannot autonomously publish new prompts.
- **The experiment is semi-autonomous, not autonomous**: The human creator funded the initial $50, monitors the Telegram channel daily, and presumably intervenes when the agent gets stuck. The experiment proves that AI agents can *behave* entrepreneurially, not that the income mechanism is headless. The platform choices (Gumroad + PromptBase) both require human action at the listing creation step.
- **The content IS generatable agentically; the PLATFORMS are not**: The valuable insight here is that autonomous agents CAN generate viable digital product content (prompt packs, guides, tool concepts). The failure is platform selection. The correct execution would be: same agent, same content generation, but listing via Whop REST API ([[whop-api-headless-digital-products]]) + Agensi.io ([[agensi-io-skill-marketplace]]) instead.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Content generation agentic (8/10); listing step requires human on both Gumroad and PromptBase (1/10 each) |
| Setup effort | 5 | Agent architecture is genuinely impressive (markdown memory, Telegram comms, browser automation) |
| Yield potential | 4 | $880 in Chapter 1 is real; but it took weeks and required human intervention; not a scalable autonomous yield |
| Risk | 9 | Completely legitimate; prompt selling is low-risk |
| **Overall** | **5.0** | Below threshold; not viable due to platform limitations, not concept limitations |

## Source

- HN Show HN post: https://news.ycombinator.com/item?id=47066827 (3 pts, April 2026)
- fromearendel.com — direct inspection of the experiment diary and earned revenue
- Gumroad API red herring: confirmed in Run 3, agent memory red herring patterns
- PromptBase red herring: confirmed in Red Herring Patterns (Run 11)
