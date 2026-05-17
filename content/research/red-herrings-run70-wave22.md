---
title: "Red Herring: Run 70 Wave 22 Bundle"
date: 2026-05-17
tags: [passive-income, not-viable, red-herring, closed-beta, human-operated, affiliate]
---

# Run 70 Wave 22 Bundle — Not Viable

Sources: YouTube (Travis Nicholson n0phBDPz8z0 + Chris Koerner bAzg8BugEVY, May 2026), Web (zeroclick.ai + Axon402), HN (48151058 Sx package manager, 48153009 Seekon.me)

---

## 1. ZeroClick — AI Ad Network for Chatbots (Closed Beta)

### What It Claims to Be
ZeroClick (zeroclick.ai), founded by Honey co-founder Ryan Hudson and backed by $55M, is a CPC ad network that embeds "reasoning-time advertising" into AI chatbot responses. Publishers integrate a REST API or MCP server and earn per-click from advertisers. Partners include Dappier, Inline, and Sleek.

### Why It Doesn't Work Agentically
- **Invite-only closed beta.** Publisher access requires requesting an invite at developer.zeroclick.ai — not self-service. No autonomous agent can register without a human going through a partnership call process.
- **No disclosed rates or traffic minimums.** CPM/CPC figures are only shared post-interview. The implied traffic bar (serving "millions of users" in current integrations) suggests large platforms only.
- **Incomplete payment details.** Currency, payout schedule, and minimum threshold are not publicly documented.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Closed beta requires human partnership call to access |
| Setup effort | 3 | Invite-only gate; no self-service path exists today |
| Yield potential | 6 | Well-funded, real CPC model — could be strong if open |
| Risk | 8 | Legitimate funded company, low risk |
| **Overall** | **5.25** | Revisit when publisher program opens self-service access |

### Source
https://zeroclick.ai / https://developer.zeroclick.ai (May 2026)

---

## 2. Axon402 — Agent-to-Agent Payment Rails (Unverified Platform)

### What It Claims to Be
A Reddit r/SideProject post (1tcxgyv, score 23) described "a way for AI agents to buy and sell paid APIs/tools" — referenced under the name Axon402. The pitch: agents transact for APIs, data, files, compute autonomously using structured payments.

### Why It Doesn't Work Agentically
- **Platform cannot be verified to exist.** Axon402.com loads a minimal console interface with no indexable content. No documentation, no marketplace, no GitHub, no HN thread, no tech media coverage found.
- **Indistinguishable from x402 ecosystem.** The mechanism described (agents paying for APIs via structured HTTP payments) is identical to the x402 protocol (Coinbase-backed, already documented in library as x402-boring-utility-data-apis). This may be a new branding for an x402 wrapper, not a distinct platform.
- **Earn-side cold-start applies regardless.** Even if the platform exists, it would face the same buyer-discovery problem as all 14+ x402/MonkePay/Nightmarket variants in our library.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Mechanism is sound if platform exists; unverified |
| Setup effort | 6 | API-based if real |
| Yield potential | 3 | Cold-start problem; no documented buyers |
| Risk | 7 | Unclear |
| **Overall** | **5.25** | Unverifiable; cross-reference with x402-boring-utility-data-apis if confirmed |

### Source
r/SideProject 1tcxgyv (May 2026); axon402.com (May 2026)

---

## 3. Productized Design/Service Agency (DesignJoy Pattern)

### What It Claims to Be
Chris Koerner's interview with DesignJoy founder Brett Williams (bAzg8BugEVY, 421K+ views) frames productized service subscriptions as "the most profitable solo business" — unlimited design/development/copy work via monthly subscription, no calls, no proposals. Brett nets $60-80K/month solo. Koerner extrapolates to AI-accelerated variants: AI dev agency retainer ($10-20K/mo), AI copywriting subscription, thumbnail design subscription.

### Why It Doesn't Work Agentically
- **Human skill is the product.** DesignJoy's value is Brett Williams' design judgment. AI tools (Claude for UX, Midjourney for assets) accelerate output but a human operator is irreducibly central to quality control and client communication.
- **Client relationship is non-agentic.** The subscription model requires a human to acquire clients, respond to feedback, and manage relationships. No autonomous agent can replicate this without a human in the loop for quality decisions.
- **Agency-bottleneck pattern.** Same structural failure as n8n-ad-creative-agency-client-gate, n8n-smb-video-production-service, and every other "AI-accelerated service agency" we've evaluated.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Human judgment and client relationship are core to the product |
| Setup effort | 5 | Build a site + acquire first clients — manageable but human-driven |
| Yield potential | 9 | Verified $60-200K/mo is real — but only with a skilled human |
| Risk | 9 | Legitimate business model |
| **Overall** | **6.25** | Above overall threshold but fails agentic viability (2 < 6 cutoff) |

### Source
YouTube: Chris Koerner / The Koerner Office (bAzg8BugEVY, 421K views, April 2026)

---

## 4. Travis Nicholson Gumroad Digital Products (Human-Curated)

### What It Claims to Be
"The Lazy Way I Make Money With AI" (n0phBDPz8z0, 126K views) — using ChatGPT to create simple digital products (prompt packs, guides), listing on Gumroad, and driving traffic via Medium articles. Claims $3,000+/month steady state, $26K+ lifetime.

### Why It Doesn't Work Agentically
- **Explicitly not agentic.** The presenter actively frames this as "no agents, no APIs, no Zapier" — a human-with-AI-tools workflow requiring personal curation and niche selection.
- **Gumroad listing is already covered.** The gumroad-cli-digital-product-factory VIABLE report (8.0/10) covers fully headless Gumroad product creation via CLI v0.5.0. Travis Nicholson's workflow is a less-automated version of something we already have at higher agentic fidelity.
- **Medium traffic sourcing is not agentic.** Medium's distribution algorithm suppresses content identified as auto-posted. Human-curated article writing for organic reach is not an autonomous mechanism.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Human niche selection + writing + quality control required |
| Setup effort | 8 | Very simple for a human |
| Yield potential | 6 | $3K/mo is achievable but requires human curation |
| Risk | 9 | Legitimate |
| **Overall** | **6.5** | Above overall threshold but fails agentic viability (3 < 6 cutoff); superseded by gumroad-cli-digital-product-factory |

### Source
YouTube: Travis Nicholson (n0phBDPz8z0, 126K views, May 2026)

---

## 5. Sx — Package Manager for AI Skills/MCPs (Infrastructure, No Income Mechanism)

### What It Claims to Be
Show HN: Sx (48151058, 48 pts) — an open-source package manager for AI skills, MCPs, and commands. Think npm but for agent skills. GitHub: sleuth-io/sx.

### Why It Doesn't Work Agentically
- **Infrastructure tool, not income mechanism.** Sx helps developers install/manage agent skills locally. No marketplace, no revenue sharing, no paid tier. It's the equivalent of evaluating npm as a passive income source.
- **Useful for agent builders, not for earning.** Could be a useful developer tool for implementing our VIABLE strategies, but generates no income itself.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | No income pathway at all |
| Setup effort | N/A | |
| Yield potential | 1 | Zero |
| Risk | 10 | Open-source, MIT |
| **Overall** | **3.25** | Infrastructure tool only |

### Source
HN 48151058 (May 2026) — https://github.com/sleuth-io/sx
