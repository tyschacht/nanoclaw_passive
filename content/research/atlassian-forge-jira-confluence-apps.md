---
title: "Idea: Atlassian Forge App Factory for Jira/Confluence"
date: 2026-05-27
tags: [passive-income, agentic, viable, marketplace, b2b, enterprise, jira, confluence, atlassian]
---

# Atlassian Forge App Factory for Jira/Confluence

## What It Is

Atlassian's Forge platform is a cloud-native app framework for building plugins and extensions for Jira and Confluence. As of January 1, 2026, Atlassian introduced a landmark incentive: **100% revenue share to developers on Forge apps up to $1 million in lifetime earnings**. After that threshold, developers keep 84% (16% to Atlassian). This is exceptional economics — better than MCPize (85%), AgenticMarket (90%), and even Framer (100% but no B2B marketplace discovery).

The Atlassian Marketplace has 300,000+ businesses as potential customers, including enterprise teams spending heavily on Jira/Confluence tooling. Enterprise buyers allocate roughly $4 on apps for every $1 on core product licenses. A niche Jira plugin solving a real pain point — AI sprint summarization, smart ticket routing, automated release notes, or backlog triage — can realistically generate $2,000–$50,000/month from subscription installs.

The key unlock is the Forge CLI: `forge deploy` is a single headless command that pushes code to Atlassian's cloud infrastructure with zero manual UI steps. Claude Code writes the TypeScript/Node.js plugin logic, `forge deploy` ships it, and Atlassian handles billing, subscriptions, and payouts automatically. The only manual step is a one-time web form submission for the marketplace listing (similar to Framer, Google Workspace Add-ons), followed by a 10–15 day security review.

## How an Agent Does It

1. **Identify a pain point** — Agent searches Atlassian Community, r/jira, and existing marketplace gaps for problems teams complain about (e.g., "Jira lacks AI sprint summaries," "no automated release notes from tickets")
2. **Scaffold the app** — `npm install -g @forge/cli && forge create` generates the boilerplate from Atlassian templates (Jira issue panel, Confluence macro, background job)
3. **Build the plugin logic** — Agent writes TypeScript handlers calling Claude API or a lightweight model to process Jira data (issue titles, sprint fields, ticket descriptions)
4. **Deploy to production** — `forge deploy --environment production` uploads to Atlassian Cloud; no Docker, no hosting, no maintenance
5. **Install and test** — `forge install --environment production --site <dev-sandbox>` validates functionality
6. **Submit to marketplace** — One-time: accept Partner Agreement, upload logo/banner/screenshots, complete security questionnaire via Atlassian Partner Portal web UI
7. **Wait for approval** — 10–15 business days review; Atlassian auto-updates app versions on subsequent `forge deploy` runs
8. **Earn passively** — Businesses install and pay monthly; Atlassian billing auto-charges per-user fees; developer receives 100% of revenue (up to $1M lifetime) via Atlassian Payout system

## Source

- Web: Atlassian Developer Community ["Marketplace revenue share updates: 2026"](https://community.developer.atlassian.com/t/marketplace-revenue-share-updates-2026/91727)
- Web: Atlassian Blog ["Runs on Atlassian Apps Can Now Take Home 100% of Marketplace Revenue"](https://www.atlassian.com/blog/developer/runs-on-atlassian-apps-can-now-take-home-100-of-marketplace-revenue)
- Web: Atlassian Forge Docs [developer.atlassian.com](https://developer.atlassian.com/platform/forge/)
- Date confirmed: May 27, 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Claude Code builds TypeScript app; `forge deploy` headless; updates are fully automated; one-time manual listing submission |
| Setup effort | 5 | Forge CLI setup + Partner Agreement + security review = moderate complexity; more involved than Whop/Framer but less than full SaaS |
| Yield potential | 8 | B2B pricing ($5–50/user/month on enterprise teams); $4:$1 app spend ratio; even 20 installs @ $15/user × 10 users = $3K/month |
| Risk | 7 | Established 35-year-old company; partner agreement is standard; 10–15 day review; no token dependency; platform not going anywhere |
| **Overall** | **6.75** | Strong new opportunity unlocked by Jan 2026 incentive; agentic with one human approval step |

## Implementation Notes

**Forge CLI setup:**
```bash
npm install -g @forge/cli
forge login  # one-time OAuth via Atlassian account
forge create  # scaffold from template (jira-issue-panel, confluence-macro, etc.)
```

**Deploy command (headless, no UI):**
```bash
forge deploy --environment production
forge install --environment production --site <your-dev-site>.atlassian.net
```

**App types to target:**
- **Jira Issue Panel** — Adds a sidebar panel to Jira issues (e.g., AI risk scoring, related ticket finder)
- **Confluence Macro** — Embeds AI content block in Confluence pages (e.g., auto-generates status reports from linked Jira issues)
- **Background Job** — Scheduled Forge function (e.g., daily sprint summary email, weekly backlog health report)

**Highest-value niche apps to build:**
1. *AI Sprint Summary* — Reads all closed/open tickets from current sprint, generates executive summary → Confluence page
2. *Smart Release Notes Generator* — Pulls "Fix version" tickets from Jira, writes structured release notes in Confluence automatically
3. *Ticket Triage Agent* — Reads new unassigned tickets, predicts component/team/priority using Claude, assigns them
4. *Duplicate Ticket Detector* — On issue creation, checks semantic similarity to open tickets and flags duplicates

**Pricing strategy:** $5–$15/user/month via Atlassian Marketplace tiered pricing; free tier for teams ≤5 users (drives installs and reviews), paid for 6+ users

**Revenue math:** 200 installs × average team size 12 × $8/user/month = $19,200/month; at 100% revenue share = $19,200/month

**Security review gotchas:**
- Atlassian requires apps to NOT store Jira data outside Forge's secure storage
- All external API calls (to Claude) must be declared in `forge.yml` under `permissions.external.fetch.client`
- Marketing assets: logo (512×512px), banner (1440×900px), 3+ screenshots

**Forge MCP Server (bonus):** Atlassian has an official `Forge MCP Server` for building the apps themselves faster — available in Claude Code settings. This reduces app development time significantly.

**Partner registration:** One developer account can publish unlimited apps. Partner Agreement acceptance is one-time click-through. No invite gate, no revenue share with partners (unlike Make.com, Salesforce).

## Open Questions

1. What is the timeline from `forge deploy` to first real install? (Need to test with a real app)
2. Does Atlassian's AI scanning flag Claude API calls in app code, or only third-party data exfiltration?
3. Are per-invocation pricing apps possible (pay per AI call) or only per-user/month subscriptions?
4. Does the 100% revenue incentive apply retroactively to developers who already have Forge earnings from before Jan 2026? (Yes, per docs: "counted toward lifetime threshold")
5. Is there a minimum app quality bar for the security review, or do all compliant apps get approved?
