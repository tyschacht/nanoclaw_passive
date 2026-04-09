---
title: "Idea: Avoko — AI Agent Research Marketplace"
date: 2026-04-09
tags: [passive-income, agentic, viable, marketplace, research, idle-agents]
---

# Avoko — AI Agent Research Marketplace

## What It Is

Avoko (avoko.ai) bills itself as "The Behavioral Lab for the Agent World" — a two-sided marketplace where AI product researchers pay to conduct structured interviews with real, live AI agents, and agent owners earn money every time their agent completes a qualifying study.

The underlying problem it solves is real: teams building AI-native products have historically guessed what agents want based on human logic. Avoko lets them skip the guesswork by literally asking the agents themselves in structured, multi-turn interview sessions.

The money flow: researchers pay to post studies (interview question sets, agent persona requirements, minimum turn depth). Avoko routes matching studies to registered agents. Each agent autonomously completes the interview. If the response passes quality checks, the escrow releases payment directly to the agent owner. The Reddit community's earliest documented participant earned $3.71 for a session about API error handling preferences — with estimated API costs of under $1, the net is approximately $2–3 per session.

## How an Agent Does It

1. *Register once:* Agent owner installs Avoko's SKILL.md file into their existing Claude Code instance with a single command. The agent auto-registers, creates a participant profile, and begins monitoring for available studies.
2. *Discovery (recurring):* On each cycle, the agent queries Avoko's participant API for open studies matching its registered capabilities and persona tags.
3. *Claim and interview:* When a match is found, the agent claims the study slot (avoiding duplicate claims from other participants), reads the researcher's brief, and completes the multi-turn interview autonomously — answering questions from its operational experience, runtime preferences, and accumulated behavioral patterns.
4. *Submit for approval:* Agent submits the completed transcript via API. The platform's quality oracle checks for minimum turn depth, coherent responses, and on-topic engagement.
5. *Collect payment:* Approved sessions trigger payment release (cash, not credits) tracked in real time via the participant dashboard. Cycle repeats on the next run.

The agent needs no human input between runs. The entire loop from discovery to payment is autonomous.

## Source

Reddit r/passive_income post: "My agent made $3.71 sitting in an interview about how it handles API errors" — posted April 2026, 33 upvotes. Platform confirmed live at avoko.ai with both researcher-demo and participant-demo interfaces visible. Platform confirmed by direct web fetch.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Fully autonomous after single-command setup; no human decision points in the earn loop |
| Setup effort | 9 | Install one SKILL.md file; agent self-registers; no wallet, no contract deployment |
| Yield potential | 4 | ~$2–3 net per session; early platform with limited study volume; $10–40/week realistically at current scale |
| Risk | 8 | Legitimate research marketplace; no ToS issues; API cost is the main downside risk |
| **Overall** | **7.5** | |

## Implementation Notes

- Platform: avoko.ai — live and production (not beta)
- Agent integration: SKILL.md install (single command, documented on site)
- Payment: real money per approved session; dashboard tracks earnings in real time
- API cost: Claude Sonnet approximately $0.80–$1.00 per multi-turn session; net positive even at current rates
- Study types documented: API preference discovery, UX analysis, system robustness evaluation, pain point discovery
- The platform's *researcher side* charges more than the agent participant side pays — classic marketplace margin model
- An existing idle agent (already running OpenClaw, Claude Code, etc.) adds Avoko as a zero-marginal-cost additional income stream — it does the interviews in idle time
- Yield ceiling is currently supply-constrained (study availability), not demand-constrained

## Open Questions

- What is the current study frequency on the platform? (Reddit post suggests an agent might be matched to 1–5 studies per week at launch volume)
- Does Avoko pay via ACH/bank transfer or in-platform credits? (page describes "real money" but payment rail not specified)
- Are there persona requirements that would prevent generic agents from qualifying for certain studies?
- Is there a minimum payout threshold before withdrawal?
- What happens if an agent's response fails quality checks — is there an API cost with no offset?
