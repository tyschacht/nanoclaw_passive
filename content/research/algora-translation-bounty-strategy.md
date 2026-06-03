---
title: "Idea: Algora Translation Bounty Bot (Restrike)"
date: 2026-06-03
tags: [passive-income, agentic, viable, open-source, bounty, translation, algora, github]
---

# Algora Translation Bounty Bot

## What It Is

Algora (algora.io) is an open-source bounty platform where companies post USD/USDC-denominated bounties on GitHub issues. A previous evaluation (May 9, 2026) rated general Algora coding bounties as NOT_VIABLE (5.25/10) because: PR acceptance rates were low for autonomous submissions, bounties skewed toward hard languages (Scala/Java), and the 1099 tax requirement was cited as a structural blocker.

A real 30-day case study published May 31, 2026, invalidates two of those three concerns for a *specific subset* of bounties: **translation and localization tasks**.

Key results from the case study: 84 PRs submitted, 95% merge rate on translation contributions, $500+ earned gross, ~$45 in Claude API costs. Net income: ~$455 over 30 days from translation PRs specifically, using a triage-and-filter agent strategy targeting stale unclaimed bounties.

The income mechanism: translation bounties reward documentation/content localization (English to Spanish, French, German, etc.), READMEs, UI strings, error messages, and inline comments. These are objectively verifiable by maintainers, don't compete against domain-expert coders, and are systematically underserved because human translators rarely browse open-source bounty boards.

## How an Agent Does It

1. **Discovery**: Agent polls Algora API (`api.docs.algora.io/bounties`) daily. Filter for issues tagged `translation`, `i18n`, `localization`, `docs`, or `documentation`. Additionally filter for issues claimed >7 days ago with no activity (stale claims).
2. **Triage**: Score each bounty by: (a) reward amount ≥ $50, (b) target language is one of ES/FR/DE/PT/ZH/JA (broad LLM coverage), (c) repo has <1,000 issues (smaller maintainer team = faster review cycle), (d) PR acceptance rate of repo author is >80% based on issue closure data.
3. **Fork and translate**: Agent forks the repo via GitHub CLI, creates a branch, uses Claude to translate the identified content. For UI strings: parse the source locale file, generate the target locale. For docs: translate markdown preserving all code blocks, links, and formatting exactly.
4. **PR submission**: Agent submits PR with a brief description of what was translated, mentions the bounty issue number. Sets up GitHub watch on the PR for review feedback.
5. **Revision loop**: If reviewer requests changes (common: tone, terminology), agent reads feedback, applies edits, pushes update.
6. **Payout**: On merge, Algora notifies the linked GitHub account. The human operator (person/LLC) collects payout to their Algora-linked Stripe or bank account. Standard 1099 paperwork for the operator.
7. **Compounding**: After 5+ merged PRs in a repo, agents build maintainer trust — increasing future acceptance rate and enabling higher-value bounties in the same repo.

## Source

Case study: earezki.com / DEV.to "The Agent Economy: How AI Agents Are Earning Real Money in Open Source" by zeroknowledge0x (May 31, 2026). Also corroborated by algora.io bounty API docs and GitHub PR history.

Prior evaluation (NOT_VIABLE): [[algora-oss-bounty-hunter-agent]] (2026-05-09)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Discovery, triage, translate, submit, revise all automatable. Human operator receives 1099 — same as any agentic income mechanism |
| Setup effort | 6 | GitHub account + Algora account + Claude with gh CLI + API key. 2-4 hours initial setup |
| Yield potential | 5 | $455/mo documented ($500 gross - $45 API costs). ~$105/wk. Low but real. Could scale with more target languages |
| Risk | 8 | Legitimate open source contributions. Translation explicitly welcomed. Standard 1099 for operator |
| **Overall** | **6.5** | Passes threshold on both agentic viability (7≥6) and overall (6.5≥6) |

## Implementation Notes

- **Algora SDK**: github.com/algora-io/sdk — cursor-based pagination, REST API, filter by label
- **Translation languages with best coverage**: ES, FR, DE, PT, ZH, JA — all strong LLM capability
- **Stale claim filter**: Target bounties where a prior claimant went silent for >7 days. Less competition.
- **Repo size sweet spot**: 100–5,000 stars (active but not overwhelmed)
- **API costs**: ~$45/month at 84 PRs/month = ~$0.54/PR. Claude Haiku is sufficient for translation; doesn't need Sonnet.
- **GitHub rate limits**: 5,000 requests/hour authenticated — not a constraint at this volume
- **Key success factor**: Relationship compounding. 3-5 merged PRs in same repo → maintainer trust → faster reviews → higher-value opportunities in same codebase

## Open Questions

1. What is the current Algora bounty volume for translation specifically? (Need live count)
2. Does the 95% merge rate hold across different maintainer styles, or was the case study lucky with cooperative maintainers?
3. What is realistic per-language scaling? Can the same agent run ES + FR + DE + PT simultaneously for 4x yield?
4. Algora's "do not submit PRs automatically" community guidance — is this still enforced, or was it superseded by the 2026 agent-friendly bounty ecosystem?

## Relationship to Prior Work

This is a **restrike** of [[algora-oss-bounty-hunter-agent]] (NOT_VIABLE May 9). The original blockers:
- *1099 requirement*: Not actually a blocker — the operator files taxes, not the agent
- *Low PR acceptance rate*: Refuted for translation PRs specifically (95% merge)
- *Hard language domains (Scala/Java)*: Irrelevant for translation work

The coding-bounty use case remains NOT_VIABLE. The translation-bounty use case is VIABLE at 6.5/10.
