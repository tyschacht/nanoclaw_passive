---
title: "Red Herring: Zoom App Marketplace"
date: 2026-04-13
tags: [passive-income, not-viable, red-herring, zoom, marketplace, us-only]
---

# Zoom App Marketplace — Not Viable

## What It Claims to Be

Zoom's App Marketplace has 900M+ registered users and a built-in monetization program where third-party developers build paid apps for the Zoom meeting/collaboration ecosystem. Revenue share is handled by Zoom (exact % not publicly disclosed — estimated at ~85% to developer based on the 15% fee referenced in Zoom's pricing FAQ). Apps can be TypeScript/React-based web apps built with the Zoom App SDK, and the Marketplace provides organic discovery to Zoom's massive user base.

## Why It Doesn't Work Agentically

- **US-only seller and buyer restriction (structural dealbreaker):** The developer receiving payouts AND the buyer purchasing the app must both be US-based, with transactions in USD only. This eliminates non-US developers entirely and restricts the addressable buyer base to a US subset of 900M users — dramatically shrinking the monetization opportunity vs. the headline number.
- **Revenue share percentage undisclosed:** Zoom's public documentation deliberately avoids stating the revenue share %. The "15% fee" cited in secondary sources means 85% to developer — which is lower than AWS Marketplace (97%), Discord (85%), JetBrains (85%), Teams (97%), and Google Workspace (97%). Not the best rev share for any app category.
- **Manual submission with unclear programmatic path:** The app review process requires manual Zoom Marketplace portal submission. The Zoom Marketplace API provides data about your published app but doesn't enable headless first-time submission. The review can take several weeks.
- **Free tier required:** Developers must offer a free version alongside any paid tiers, complicating the value capture model for niche utility tools.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Building app is agentic; listing submission is manual portal |
| Setup effort | 5 | Zoom SDK + manual portal submission; US entity/bank required |
| Yield potential | 5 | US-only buyer restriction reduces addressable market; undisclosed rev share |
| Risk | 8 | Legitimate platform, standard ToS |
| **Overall** | **5.75** | Structurally inferior to AWS Marketplace, Teams, Discord for same app category |

## Source

Web: [Zoom Marketplace Monetization docs](https://developers.zoom.us/docs/distribute/monetization/) + [Pricing/Fees FAQ](https://developers.zoom.us/docs/distribute/monetization/pricing-fees-faq/) + secondary research (April 2026)
