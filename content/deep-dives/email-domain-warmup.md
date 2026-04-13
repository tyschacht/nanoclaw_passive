---
title: "Deep Dive: Email Domain Warmup for Cold Outreach"
date: 2026-04-13
tags: [deep-dive, cold-email, domain-warmup, deliverability, infrastructure, smb-audit]
---

# Email Domain Warmup — Complete 2026 Guide

*Required reading before sending a single cold email. Applies to any MoneyMinions project using cold outreach — primarily [[deep-dives/smb-audit-report-service]].*

*Sources: r/coldemail (multiple threads, Apr 2026), Instantly.ai documentation, MailReach 2026 benchmark data, Postmaster Tools documentation, Google/Microsoft policy updates.*

---

## Why This Matters More Than Everything Else

Domain warmup is the **critical path item** for any cold email project. You can have perfect copy, perfect targeting, and a flawless agentic pipeline — and still land in spam 100% of the time if your domain reputation is bad. There is no fix once a domain is flagged. Recovery takes 3-6 months. Abandon and start fresh is often the only viable answer.

Start domain warmup **immediately** when a project is greenlit — 30 days before you write a single line of pipeline code.

---

## Domain Setup

### How Many Domains

For 100 cold emails/day target volume:

```
3 domains × 2 mailboxes each = 6 mailboxes total
6 mailboxes × 50 emails/day max = 300 emails/day capacity
```

This gives comfortable headroom. Key finding: adding a 3rd mailbox per domain drops inbox placement from 89% → 86% and reduces domain lifespan from 10-12 months → 8-10 months. Stay at 2 mailboxes per domain.

*Never put all domains under one Google Workspace tenant.* Post-2025 crackdown: entire tenants were locked when a single inbox triggered abuse detection. Keep each domain on a separate account.

### TLD Selection (2026 Data)

| TLD | Inbox Placement | Notes |
|---|---|---|
| .com | 90–95% | Clear winner. Always use if available. |
| .io | 85–90% | Acceptable for tech-adjacent niches |
| .co | 83–88% | Good alternative |
| .ai | 68–78% | Growing abuse — avoid |
| .xyz, .biz, .info | 50–70% | Avoid entirely |

*Domain naming:* Use brand variants — `getcompanyname.com`, `trycompanyname.com`, `companynamehq.com`. Avoid dashes and numbers in domain names. The domain should look like a real business, not a burner.

### Domain Age Requirement

1. Register domain
2. Wait **7–14 days** (do nothing — let it age)
3. Configure DNS records
4. Begin warmup tool activation
5. Wait 30 days before first cold send

*Total clock to first cold email: ~45 days from domain registration.*

---

## DNS Configuration (All Three Are Mandatory)

Domains with SPF + DKIM + DMARC achieve **89% average inbox placement**. SPF alone: **61%**. This is not optional.

### SPF

```
# Google Workspace
v=spf1 include:_spf.google.com ~all

# Microsoft 365
v=spf1 include:spf.protection.outlook.com ~all

# Combined (if mixing providers on same domain — not recommended)
v=spf1 include:_spf.google.com include:spf.protection.outlook.com ~all
```

Use `~all` (softfail), not `-all` (hardfail). Hardfail breaks legitimate forwarding and causes false positives.

### DKIM

- Key size: **2048-bit minimum** (1024-bit is deprecated and fails modern filters)
- Configure via your mail provider's admin console (Google Workspace: Admin → Apps → Gmail → Authenticate email)
- Verify with: `nslookup -type=TXT google._domainkey.yourdomain.com`

### DMARC — Progressive Rollout

Do NOT start with `p=reject`. Start permissive and tighten:

```dns
# Weeks 1–4 (monitoring only)
v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com

# Weeks 5–8 (quarantine 50%)
v=DMARC1; p=quarantine; pct=50; rua=mailto:dmarc@yourdomain.com

# Week 9+ (full quarantine)
v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@yourdomain.com
```

Set up a **free DMARC monitoring inbox** (Postmark's DMARC monitor or MXToolbox) to receive and parse the `rua` aggregate reports. You want to see 100% DMARC pass rate before moving to stricter policy.

### Additional DNS

```
# MX records (point to your mail provider)
# For Google Workspace: standard Google MX records

# BIMI (optional but helpful for brand signals in supported clients)
default._bimi.yourdomain.com  TXT  "v=BIMI1; l=https://yourdomain.com/logo.svg"

# Verify no catch-all is enabled — catch-alls collect spam and tank reputation
```

---

## Mail Provider: Google Workspace vs Microsoft 365

*2026 status has changed significantly from prior years.*

### Google Workspace (Post-2025 Crackdown)

**What happened**: Google cracked down on Workspace accounts used for cold outreach. Entire tenants locked when one inbox triggered abuse detection. Connections to Instantly.ai, Smartlead, and shared tracking pixels were cited as triggers.

**New safe limits**: 15–25 emails/inbox/day (down from 40–50 pre-2025).
**Inbox placement**: 94.18%

**Mitigation**:
- One domain per Google Workspace account (never group domains)
- Disable click tracking pixels (plain text links only)
- Keep warmup tool running indefinitely, not just during initial ramp

### Microsoft 365

**March 1, 2026 change**: Deprecated Basic Auth SMTP. Now requires OAuth 2.0. Verify your sending tool (Instantly.ai) has working OAuth 2.0 support before connecting M365 accounts. Refresh tokens expire after 90 days of inactivity — watch for silent auth failures.

**Inbox placement**: 95.38% (marginally better than Google)

### Recommendation: Mix Both

| Setup | Crackdown Survival | Notes |
|---|---|---|
| All Google | ❌ Single point of failure | One flagged tenant = all domains down |
| All Microsoft | ❌ Auth complexity | OAuth refresh failures are silent |
| Mixed (2 Google + 1 Microsoft) | ✅ Redundant | Recommended for 3-domain setup |

---

## Warmup Timeline

*Day 0 = first day warmup tool is active. Cold sending starts on Day 22 at earliest.*

| Phase | Days | Warmup Volume/day | Cold Sends/day | Notes |
|---|---|---|---|---|
| Foundation | 1–7 | 3–10 | 0 | Plain text only. No HTML, no links, no images. |
| Building | 8–14 | 10–25 | 0 | Can introduce simple HTML. Still no outreach. |
| Soft launch | 15–21 | 25–35 | 5–10 | First cold sends — only highest-quality leads. |
| Ramp | 22–30 | 40–50 | 40–50 | Monitor daily. Pause if spam rate spikes. |
| Maintenance | 30+ | 30–50 | 50–75 max | **Warmup never stops.** Run indefinitely. |

**Critical**: Warmup is not a one-time ramp. It runs permanently as reputation maintenance alongside cold sending. Stop it and your domain reputation decays within weeks.

---

## Volume Limits (Hard Ceilings)

| Level | Limit | What Happens If Exceeded |
|---|---|---|
| Per mailbox per day | 50–75 cold emails | Above 150 → 43% higher spam rates (measured) |
| Per domain per day | 150–225 (2–3 mailboxes × 75) | |
| Google Workspace per inbox | 15–25 (post-2025 crackdown) | Tenant lockout risk |
| Daily ramp-up increment | Max +10–15% per day | Sudden volume spikes trigger filters |

*Scale by adding domains and mailboxes — never by pushing volume per account.*

---

## Warmup Tools (2026 Reality Check)

### What's Working

| Tool | Cost | Quality | Notes |
|---|---|---|---|
| **MailReach** | $25/inbox/mo | ⭐⭐⭐⭐⭐ | Best network: 30,000+ real Google Workspace + M365 inboxes only. Has live inbox placement testing. |
| **Instantly.ai** (bundled) | Included | ⭐⭐⭐ | Convenient but low-quality warmup network — custom SMTP inboxes that Gmail largely ignores. Use for convenience, not as sole warmup. |
| **Lemwarm** | $29/inbox/mo | ⭐⭐⭐ | Solid. Best if already using Lemlist. Rigid ramp schedule. |
| **Warmbox** | $15/inbox/mo | ⭐⭐ | Cheaper but smaller network. |
| **Mailreach** wins for quality | — | — | The network quality matters more than the brand. |

### The 2026 Warmup Pool Problem

All warmup tools work by having inboxes in a "pool" send emails to each other and mark them as important/not spam. The problem: **Google and Microsoft have identified these pools** by fingerprinting the behavior patterns (too-perfect open rates, reply patterns, identical sending schedules).

The response: warmup is less effective than it was in 2022-2023, but it's still necessary. The tools that survive are using **real human-registered inboxes** (not synthetic) with varied behavior.

*AI-generated warmup email content*: Providers have gotten better at detecting this. It still works if content is varied enough, but watch for it as a detection vector.

---

## Instantly.ai Specific Setup

For our [[tech-stack]] (Instantly.ai Growth at $47/mo):

```
1. Buy 3 domains (e.g., via Namecheap or Google Domains)
2. Create Google Workspace account per domain ($6/user/mo × 2 users = $12/domain/mo)
3. Connect to Instantly.ai via OAuth (not Basic SMTP)
4. Enable Instantly warmup immediately
5. ALSO connect to MailReach separately ($25/inbox × 6 inboxes = $150/mo) for supplemental warmup
6. Configure warmup schedule: start at 10 emails/day, +5/day per week
7. Set cold sending limits: max 50/inbox/day, never schedule before warmup month completes
```

*Total infrastructure cost for 3-domain setup:*
- 3 domains: ~$30/year ($2.50/mo)
- 6 Google Workspace accounts: ~$36/mo
- Instantly.ai Growth: $47/mo
- MailReach (6 inboxes): $150/mo
- **Total: ~$235/mo for a fully warmed 3-domain cold email infrastructure**

*This cost is the correct fixed cost for the [[deep-dives/smb-audit-report-service]] — update the fixed cost table accordingly.*

---

## Health Signals

### Green (Healthy)

- Warmup open rate: **80%+**
- Cold email open rate: **25–45%**
- Bounce rate: **<2%**
- Spam complaint rate: **<0.1%**
- Google Postmaster Tools domain reputation: **High**
- MX Toolbox blacklist check: clean

### Yellow (Warning — Investigate)

- Warmup open rate: **40–80%**
- Bounce rate: **2–3%**
- Spam complaint rate: **0.1–0.2%**
- Postmaster Tools: **Medium**

*Action: Pause cold sends for 3–5 days. Check list quality. Reduce volume 30%.*

### Red (Stop Immediately)

- Bounce rate: **>3%**
- Spam rate: **>0.3%** (Google's hard threshold; above this triggers enforcement)
- Postmaster Tools: **Low** or **Bad**
- Account suspension warning received
- MX Toolbox showing blacklist listings

*Action: Stop all cold sending on that domain immediately. Do not try to recover by sending fewer emails — stop completely. Begin fresh domain registration.*

### Monitoring Stack

```
1. Google Postmaster Tools (free) — set up immediately, check weekly
   → postmaster.google.com → add your domain → verify via DNS

2. MX Toolbox Blacklist Monitor (free tier available)
   → mxtoolbox.com/blacklists → monitor all 3 domains

3. DMARC aggregate reports → your dmarc@yourdomain.com inbox
   → review weekly for unexpected failing senders

4. Instantly.ai analytics → open rates, reply rates, bounce rates per campaign
```

---

## Recovery Protocol

### Domain Is Flagged (Yellow)

1. Pause all cold sending immediately
2. Continue warmup only for 7–14 days
3. Verify list quality — remove unverified contacts, re-run through NeverBounce
4. Check Postmaster Tools daily
5. Resume at 20% of previous volume when reputation returns to High

### Domain Is Burned (Red / Blacklisted)

| Timeline | Recovery Probability |
|---|---|
| 3-6 months careful nurturing | ~60% reputation recovery |
| 6-12 months if blacklisted | ~40% recovery |
| ISP-level block | Near 0% — abandon |

**Abandon criteria** (start fresh, don't waste time):
- Blacklist removal appeals denied
- Inbox placement stays at 0% after 4+ weeks of warmup-only sending
- Major ISPs (Gmail, Outlook) are completely blocking the domain

Fresh domain costs ~$10 and 45 days. Attempted recovery costs months of your time. The math almost always favors fresh start.

---

## Checklist: Before Sending First Cold Email

```
□ Domain registered (min 7-14 days old)
□ SPF record: valid and returning correct include
□ DKIM: 2048-bit key, verified via nslookup
□ DMARC: p=none with rua address configured
□ Google Postmaster Tools: domain added and verified
□ MX Toolbox blacklist monitor: domain added
□ Mail provider: Google Workspace or Microsoft 365 (not generic hosting)
□ Warmup tool active: minimum 21 days of warmup completed
□ Warmup metrics: open rate 80%+, zero bounces
□ List verified: NeverBounce or ZeroBounce run on target list
□ First send: max 5-10 emails per inbox on day 1 of cold outreach
□ Tracking pixels: DISABLED (use plain text links only)
□ Unsubscribe link: present in every email
□ From name: human name, not brand name ("Tyler at CompanyName" not "CompanyName")
```

---

## Cost Summary for SMB Audit Report Service

Updated fixed costs incorporating proper warmup infrastructure:

| Service | Cost/mo |
|---|---|
| 3 domains (amortized) | ~$2.50 |
| Google Workspace (6 inboxes) | $36 |
| Instantly.ai Growth | $47 |
| MailReach warmup (6 inboxes) | $150 |
| *Email infrastructure total* | *~$235/mo* |

*Previous estimate in [[deep-dives/smb-audit-report-service]] used $47/mo for email — update to $235/mo to reflect proper multi-domain warmup infrastructure. This changes net from ~$1,260/mo to ~$1,115/mo at 21 reports/month. Still excellent margin.*

---

*Last updated: April 13, 2026. Re-validate provider-specific limits quarterly — Google and Microsoft policy changes are frequent.*
