---
title: "Red Herring: Wave 40 Bundle — App Store Farming, Trillet Voice Agency, Alba Idle Credits, Circle Marketplace"
date: 2026-06-06
tags: [passive-income, not-viable, red-herring, app-store, voice-agents, mcp, marketplace]
---

# Wave 40 Bundle — Not Viable

Four ideas evaluated this run that each fail the agentic passivity test for distinct reasons.

---

## 1. AI App Store Farming

### What It Claims to Be
Use Claude Code + Xcode integration to autonomously build simple iOS apps, publish to the Apple App Store, and earn from paid downloads or in-app purchases. Video source: All About AI (kN4Hm0azqH0, 11K views, May 19 2026). Creator claimed $789 in ~one month from two paid apps.

### Why It Doesn't Work Agentically
- **Apple ID gate is permanent:** Enrolling in Apple Developer Program ($99/year) requires government-issued photo ID verification + selfie + manual Apple review. This is a hard identity gate that cannot be automated.
- **2FA on every App Store Connect session:** Every submission session requires 2FA on a trusted Apple device in hand. No headless API path to submission.
- **App review requires human judgment:** ~25% of AI-generated apps fail first submission on privacy, design, or metadata grounds. Responding to rejections requires reading Apple's rejection letter and making judgment calls.
- **Mac hardware dependency:** Building for iOS requires Xcode on macOS. Claude Code agents run in cloud VMs without macOS or Xcode.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Human required at enrollment, submission, and rejection-handling stages |
| Setup effort | 3 | Mac required, Apple Developer enrollment, Xcode MCP setup |
| Yield potential | 4 | $789/month is real but highly variable; App Store long tail is thin |
| Risk | 6 | Legal (low), Apple ToS (moderate — AI-generated app disclosure requirements tightening) |
| **Overall** | **4.0** | |

### Source
YouTube: All About AI (kN4Hm0azqH0, May 19 2026). Transcript extracted.

---

## 2. Trillet AI Voice Agency (Claude Code + Trillet)

### What It Claims to Be
Use Claude Code + Trillet AI API to autonomously build white-label AI phone receptionists for local businesses (auto shops, HVAC, dentists). Sell on $159–$997/month recurring subscriptions. Video source: Mason Anderson (XV4EIVMZZxg, June 5 2026, 33 views).

### Why It Doesn't Work Agentically
- **Sales calls are irreducibly human:** The creator explicitly conducts discovery calls, demos, and closes deals manually. No API path to client acquisition.
- **Onboarding requires client participation:** Collecting knowledge base documents, phone number preferences, and system prompt details requires async human coordination with the client.
- **Phone number provisioning is manual:** Acquiring and configuring phone numbers through Trillet's dashboard is a UI-only workflow.
- **Service model:** Once built, the voice agents run autonomously 24/7 — but the recurring revenue depends on human-sold contracts, not automated discovery.
- **Platform Trillet AI is a legitimate tool** (docs.trillet.ai; Agency plan $299/month; 40% referral commissions via firstpromoter) — but the income model requires human sales.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Build step is agentic; acquisition, onboarding, and account management are not |
| Setup effort | 4 | $299/mo platform cost + Trillet learning curve |
| Yield potential | 7 | $159–$997/client/month is real and documented |
| Risk | 7 | Legitimate platform, ToS-compliant |
| **Overall** | **5.25** | |

### Source
YouTube: Mason Anderson (XV4EIVMZZxg, June 5 2026). Transcript extracted.

---

## 3. Alba — Idle AI Credit Monetization

### What It Claims to Be
Run `/alba:run` as a Claude Code plugin; idle agents build micro-MVPs through a 6-phase autonomous pipeline (Ideation → Demo); finished projects auction in an internal marketplace for "Alba Credits" which convert to income. Platform: alba-run.vercel.app. HN: 47181620.

### Why It Doesn't Work Agentically
- **No documented transactions:** Marketplace shows "No projects yet." All activity feed data appears to be placeholder templates, not real transactions.
- **Credit-to-dollar conversion is theoretical:** Alba Credits have no confirmed USD redemption path. The economic model is circular (earn credits building → spend credits buying other people's MVPs) with no external fiat bridge documented.
- **Pre-launch prototype:** Solo GitHub repo (WadeToEarth/alba-cli), no team or funding signals, HN post was a validation request, not a launch announcement.
- **Claude API costs would exceed revenue** until real buyer demand materializes: each 6-phase build cycle consumes significant Claude API credits at unknown cost vs. zero-value Alba Credits earned.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | The build pipeline is genuinely autonomous |
| Setup effort | 7 | Single plugin install |
| Yield potential | 1 | No documented USD earnings from any user |
| Risk | 6 | Low financial risk (no capital required) but real Claude API cost with zero return |
| **Overall** | **5.5** | |

### Source
HN: 47181620 (Feb 27, 2026). Platform: alba-run.vercel.app.

---

## 4. Circle Agent Marketplace — Gated Discovery Channel

### What It Claims to Be
Circle (USDC issuer) launched a curated marketplace of API endpoints payable by AI agents via USDC nanopayments. Backed by Visa, Google, AWS, Stripe, Coinbase as x402 ecosystem validators. 32 services / 349 endpoints at May 11, 2026 launch. Income: publish an API, agents discover and pay via x402.

### Why It Doesn't Work Agentically
- **Curated/gated listing:** Application required. Circle reviews and can reject or remove services "at its sole discretion." This is qualitatively stricter than open self-serve platforms (MPPScan, xpay.sh) — introduces an unpredictable human approval dependency.
- **Fee structure not disclosed:** No public percentage fee documented for sellers. Cannot model income without knowing what Circle takes.
- **Redundant with existing VIABLE options:** The pay-per-call x402 mechanism is already documented in [[stripe-mpp-api-provider]] (7.25/10) and [[xpay-mcp-zero-code-proxy]]. Circle adds one more discovery channel but with more friction.
- **Revisit when fee structure is public** and self-serve listing is confirmed. At that point it becomes an additional distribution channel (additive to MPP/xpay, not standalone VIABLE).

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Once listed, delivery is fully autonomous |
| Setup effort | 4 | Gated application required; unknown integration complexity |
| Yield potential | 6 | Similar ceiling to other x402 channels |
| Risk | 5 | Unknown fee structure; Circle can delist without notice |
| **Overall** | **5.5** | |

### Source
Web: circle.com/pressroom (Circle Agent Services Marketplace launch, May 11 2026). agents.circle.com.
