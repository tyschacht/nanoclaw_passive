---
title: "Idea: Chrome Web Store V2 API — Autonomous Extension Publishing"
date: 2026-04-12
tags: [passive-income, agentic, viable, chrome, browser-extension, consumer, google, extensionpay]
---

# Chrome Web Store V2 API — Autonomous Extension Publishing

## What It Is

Chrome extensions are one of the most overlooked passive income mechanisms for agents. There are 2+ billion Chrome users, no App Store gatekeeping (automated review, <24 hours for most extensions), and a legitimate paid marketplace model via third-party payment tools like ExtensionPay. The income per user is modest ($5–15/month subscriptions) but scales with installation count.

The key unlock is the Chrome Web Store **V2 API** (launched late 2025), which supports **service accounts** — enabling fully headless, automated extension publishing without a human needing to log in. An agent can build an extension in code, package it as a ZIP, upload via API, and submit for review autonomously. Combined with **ExtensionPay** (a lightweight Stripe-backed payments layer with 3 lines of JS integration), the entire lifecycle from "new extension idea" to "live paid product" is nearly autonomous.

The one bottleneck: each *new* extension item must be initially created in the Chrome Web Store Developer Dashboard by a human. This takes ~10 minutes (click "Add new item," fill in basic fields). After that, all subsequent versions, descriptions, and publishing are API-driven.

## How an Agent Does It

1. Agent identifies an underserved Chrome extension niche (productivity, developer tools, AI enhancement) using Reddit/HN market research
2. Agent writes the extension code (manifest.json + background service worker + popup UI) using Claude Code
3. Agent packages the extension as a ZIP file
4. **One-time human step per extension**: Open Chrome Web Store Developer Dashboard → "Add new item" → upload initial ZIP → fill in name, category, privacy policy URL → submit. (~10 min)
5. Agent authenticates with service account credentials and manages all future operations via Chrome Web Store V2 API:
   - Upload new version ZIPs: `POST https://www.googleapis.com/upload/chromewebstore/v1.1/items/ITEM_ID`
   - Submit for review: `POST .../publish`
   - Control rollout percentage: `POST .../setPublishedDeployPercentage`
6. ExtensionPay handles billing: `await extpay.getUser()` → check paid status; payments via Stripe, $0/month fee up to $500 MRR then 5%
7. Automated review completes in <24 hours for most extensions; extension goes live
8. Passive subscription revenue flows via ExtensionPay → Stripe → bank

## Source

- Chrome for Developers: "Introducing a new Chrome Web Store API" (developer.chrome.com/blog/cws-api-v2)
- Chrome for Developers: "Use a service account with the Chrome Web Store API" (developer.chrome.com/docs/webstore/service-accounts)
- ExtensionPay: extensionpay.com (monetization solution for Chrome extensions)
- Medium: "This Tiny Chrome Extension Pays Its Developer More Than a Full-Time Job" (Write A Catalyst, 2026)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Service account API handles all updates; one-time ~10min human step per new extension |
| Setup effort | 5 | $5 developer account + service account setup + ExtensionPay Stripe config (one-time) |
| Yield potential | 6 | $100-500/mo per popular niche extension; scale by building multiple |
| Risk | 9 | Google's platform; Chrome policies are strict but well-documented; no ToS gray areas |
| **Overall** | **6.75** | Viable factory model: build 5-10 niche extensions, passive once live |

## Implementation Notes

**Service account setup (one-time):**
1. Create Google Cloud project → enable Chrome Web Store API
2. Create service account → download JSON key
3. In Chrome Web Store Developer Dashboard → Settings → "Trusted testers & API" → link service account email
4. Now service account can manage all items owned by this publisher account

**API authentication:**
```javascript
const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: 'service-account-key.json',
  scopes: ['https://www.googleapis.com/auth/chromewebstore']
});
```

**ExtensionPay integration (3 lines):**
```javascript
// In service worker
const extpay = ExtPay('your-extension-id'); // ID from ExtensionPay dashboard
extpay.startBackground();

// In popup
const user = await extpay.getUser();
if (!user.paid) { extpay.openPaymentPage(); }
```

**High-yield niche extension ideas** (verified gaps as of April 2026):
- AI-powered tab summarizer with private on-device processing
- GitHub PR review assistant using Claude API
- LinkedIn message tone analyzer and rewriter
- Email sentiment checker before sending
- Meeting transcript → action items extractor

**Revenue model**: $7.99–$12.99/month subscription via ExtensionPay. At 100 paying users = $800–$1,300/month per extension. Factory model: 5 extensions × 50 users average = $2,000–$3,000/month.

**cws-publish** npm package (MobileFirstLLC) simplifies CI integration: `npm install cws-publish`

**Review process**: Automated for standard extensions (<24h). Manual review triggered only for extensions requesting broad permissions (downloads, history, etc.). Keep permissions minimal to stay on automated track.

## Open Questions

- Can the V2 API initial upload also create the item (bypassing Dashboard)? Current docs say no, but worth re-checking after API V2 migration deadline (Oct 15, 2026)
- Does ExtensionPay handle refunds automatically or does that require human attention?
- What are the most underserved paid extension niches in April 2026? (Run Reddit/HN scan at build time)
