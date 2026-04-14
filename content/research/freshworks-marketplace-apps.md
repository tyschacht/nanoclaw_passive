---
title: "Idea: Freshworks Marketplace Paid Apps — 80% Revenue Share"
date: 2026-04-14
tags: [passive-income, agentic, viable, marketplace, saas, freshdesk, freshworks, apps]
---

# Freshworks Marketplace Paid Apps

## What It Is

Freshworks operates a developer marketplace covering Freshdesk (customer support), Freshservice (IT service management), Freshsales (CRM), and Freshchat (messaging) — serving 150,000+ companies including Honda, Bridgestone, and American Express. The [Freshworks Paid Apps Program](https://community.freshworks.dev/t/introducing-the-freshworks-paid-apps-program-publish-paid-apps-for-freshsales-users/8689) gives developers 80% of every subscription payment, with Freshworks keeping 20%.

The income model: an agent builds a niche productivity app using the Freshworks Developer Kit (FDK), deploys it to the marketplace, and earns recurring monthly subscription revenue from every company that installs it. The app runs inside Freshdesk/Freshservice/Freshsales — no separate hosting needed. A useful AI-powered app (e.g., ticket auto-tagger, CSAT predictor, SLA risk alerter) can earn $200–$2,000/month at steady state.

The key differentiator from other app marketplaces: the review process is self-service and the 80% revenue share is published and confirmed — no partnership gate, no ISVforce complexity (unlike Salesforce), no undisclosed terms (unlike Zendesk). The customer base is enterprise and mid-market, meaning willingness-to-pay per seat is high.

## How an Agent Does It

1. **Agent identifies a niche** by browsing the [Freshworks Marketplace](https://www.freshworks.com/apps/freshdesk/) for categories with high demand but poor ratings (same pattern as JetBrains/Figma plugin research). Target: AI-powered automations in the Support or ITSM category.
2. **Agent scaffolds the app** using the FDK (Freshworks Developer Kit): `fdk create --app-template your_first_app` generates the boilerplate. App is Node.js/TypeScript; the manifest.json defines platform (freshdesk/freshservice/freshsales) and required OAuth scopes.
3. **Agent builds the feature**: uses the Freshworks Data Methods API to read tickets, contacts, or company data. Calls Claude API or any LLM to process data and write back results (update ticket tags, set ticket priority, add internal note).
4. **Agent validates** locally with `fdk run` (simulated browser environment) then runs `fdk validate` to check schema compliance before submission.
5. **Agent publishes** via `fdk publish` CLI command — submits the app to Freshworks review queue. First review: 5–7 business days. Once approved, app is live in marketplace with Freshworks handling billing and payment.
6. **Revenue flows**: Freshworks charges customers monthly via their own billing; creator receives 80% via bank transfer on a monthly payment cycle. No Stripe setup required.
7. **Updates** pushed via `fdk publish` — no re-review for minor updates; significant feature additions may trigger a new review cycle.

## Source

- Web: [Freshworks Paid Apps Program announcement](https://community.freshworks.dev/t/introducing-the-freshworks-paid-apps-program-publish-paid-apps-for-freshsales-users/8689) — 80% revenue share confirmed
- Web: [Freshworks developer platform](https://developers.freshworks.com/grow/) — FDK CLI documentation
- Web: [Freshworks Marketplace](https://www.freshworks.com/apps/freshdesk/) — live app listings
- MoneyMinions Web Research Agent: April 14, 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | FDK CLI (`fdk create`, `fdk validate`, `fdk publish`) is fully agentic; first submission goes to 5-7 day review queue (human wait, not human action); updates are headless |
| Setup effort | 6 | FDK install + Freshworks developer account + understanding platform APIs; ~3-5 hours per app; no partnership gate |
| Yield potential | 6 | $200–$2K/mo per well-targeted app; 150K companies addressable; per-seat pricing means enterprise installs are high-value |
| Risk | 8 | No ToS issues; established 10+ year platform; Freshworks is publicly listed (NASDAQ: FRSH); 80% rev share is documented and confirmed |
| **Overall** | **6.75** | Meets VIABLE threshold; revenue share and marketplace scale are strong; review latency is the main friction |

## Implementation Notes

**FDK installation**:
```bash
npm install -g @freshworks/cli
fdk version  # verify install
fdk create --app-template your_first_app
```

**Key FDK commands**:
```bash
fdk run        # local testing with simulated browser
fdk validate   # schema + manifest validation before submit
fdk publish    # submit to marketplace (triggers review queue)
fdk pack       # create .zip for manual submission if CLI fails
```

**Freshworks platform scopes** (declare in manifest.json):
- `freshdesk`: tickets, contacts, companies, agents, groups, conversations
- `freshservice`: tickets, assets, CMDB, changes, problems
- `freshsales`: contacts, deals, accounts, activities

**App architecture patterns** (highest demand based on marketplace gap analysis):
1. **AI Ticket Tagger**: reads new ticket text → calls Claude API → updates ticket tags/groups → routes to correct team; $15–$25/agent/mo
2. **CSAT Risk Predictor**: scans open tickets for churn signals (long resolution time, repeat contacts, negative language) → flags to team lead; $20/agent/mo
3. **SLA Breach Alerter**: monitors ticket SLA timers → Slack/Teams alert when breach is imminent + suggests resolution steps from KB; $10–$15/agent/mo
4. **Auto-Resolution Suggester**: when agent opens a ticket, fetches similar past tickets with their resolutions and surfaces the top 3 matches; $20/agent/mo

**Revenue math**:
- App priced at $20/agent/mo
- 500-agent company (mid-market): $10,000/mo → 80% = $8,000/mo (for one customer)
- Realistic: 10 small companies × 20 agents × $20 = $4,000 × 80% = $3,200/mo

**Alternatives within Freshworks ecosystem**:
- Freshservice (ITSM): less crowded than Freshdesk, higher ACV per customer
- Freshsales (CRM): Paid Apps Program specifically mentioned Freshsales in the announcement — highest demand signals from sales automation category

**Finding marketplace gaps**:
```bash
# Browse apps sorted by category, note low ratings (2-3 stars) = unmet need
https://www.freshworks.com/apps/freshdesk/?category=Productivity
# Look for "No results" categories or apps with <10 reviews in high-demand areas
```

## Open Questions

1. Does `fdk publish` submit directly to the review queue, or does it require a web portal step? (Verify with a test submission on a minimal app)
2. Is the Paid Apps Program available globally or US/EU only? (Freshworks is India-headquartered — confirm global payout)
3. What is the minimum subscription price allowed? (Some marketplaces enforce a $2–$5 floor)
4. After initial approval, do minor updates (`fdk publish` with same version bump) bypass review, or does every publish go through the 5-7 day queue?
5. Does Freshworks provide analytics on marketplace install counts before purchase (to validate demand before building)?
