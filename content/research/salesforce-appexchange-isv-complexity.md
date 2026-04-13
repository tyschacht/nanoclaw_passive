---
title: "Red Herring: Salesforce AppExchange"
date: 2026-04-13
tags: [passive-income, not-viable, red-herring, salesforce, enterprise, appexchange]
---

# Salesforce AppExchange — Not Viable

## What It Claims to Be

Salesforce AppExchange is the world's largest enterprise SaaS marketplace with 150K+ companies using it, 10M+ Salesforce admins, and a developer revenue share of 85% (Salesforce takes 15%). Developers build apps using Salesforce's Apex language and Lightning Web Components (LWC), list them through the Partner Community portal, and earn passive recurring revenue from the enormous enterprise customer base.

## Why It Doesn't Work Agentically

- **Requires ISVforce partner program — not self-service:** Unlike AWS Marketplace or JetBrains (direct seller registration), AppExchange requires joining the ISVforce partner program through Salesforce's Partner Community. This involves a formal partnership agreement, not just a registration form. The process is explicitly designed for established software companies, not individual developers.
- **Technical stack is non-agentic:** Building AppExchange apps requires Apex (Salesforce's proprietary Java-like language that runs only on Salesforce's cloud infrastructure), Lightning Web Components, and deep Salesforce platform knowledge. Claude Code can write Apex, but the development, testing, and deployment cycle requires a Salesforce Developer Org — not a standard cloud environment. The `sf deploy` CLI exists, but deploying to a production managed package (required for AppExchange) requires Salesforce org provisioning, package versioning, and ISVforce-specific workflows that are significantly more complex than `vercel deploy` or `apify push`.
- **Security review is mandatory and takes 4-8 weeks:** Every app submitted to AppExchange goes through Salesforce's security review process (automated + human review). This is not a soft review — it blocks listing until passed. New apps from unknown developers have high rejection rates. This is explicitly NOT a one-time-human-submit-then-passive model.
- **Revenue share is lower than enterprise alternatives:** 85% vs 97% on AWS Marketplace, 97% on MS Teams, 0% on Google Workspace. Salesforce charges 15% regardless of scale.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Apex development partially agentic; ISVforce partnership, security review, and org management require sustained human oversight |
| Setup effort | 2 | ISVforce application + managed package setup + security review = months of work |
| Yield potential | 7 | 150K companies, enterprise pricing real; but yield locked behind 3-6 month setup |
| Risk | 8 | Legitimate platform, low legal risk |
| **Overall** | **5.0** | Fails agentic viability threshold; blocked by ISVforce partner program |

## Source

Web: [Salesforce ISVforce Guide Spring '26](https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/salesforce_packaging_guide.pdf) + [AppExchange Checkout Revenue Share docs](https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_rev_share.htm) + [Minusculetechnologies 2026 guide](https://www.minusculetechnologies.com/blogs/build-and-launch-salesforce-appexchange-app-step-by-step) (April 2026)
