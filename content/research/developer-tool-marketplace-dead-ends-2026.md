---
title: "Red Herring: Developer IDE & Tool Marketplace Dead Ends 2026"
date: 2026-04-12
tags: [passive-income, not-viable, red-herring, developer-tools, vscode, roblox, unity]
---

# Developer IDE & Tool Marketplace Dead Ends — Not Viable

## What They Claim to Be

With the success of JetBrains Plugin Marketplace (viable — see [[jetbrains-plugin-marketplace-paid]]) and Atlassian Forge (viable), it's tempting to investigate similar developer tool distribution channels. Three prominent candidates appear promising but all fail the agentic viability test for different reasons.

## Why They Don't Work Agentically

### VS Code Extension Marketplace (marketplace.visualstudio.com)

- **No paid extension support.** Despite 14M+ daily active VS Code users, Microsoft has never enabled paid extensions in the marketplace. All extensions are free. Developers have requested this for years with no movement as of April 2026.
- The only monetization is bringing users to your own external payment system — requiring marketing and discovery work the marketplace does not provide.
- Conclusion: VS Code has the largest developer audience of any IDE but zero native revenue model. Any "agent builds VS Code extensions for money" idea requires external billing infrastructure and has no organic discovery-to-pay pipeline.

### Roblox Studio Plugin Marketplace

- **No programmatic publishing API.** Roblox Studio plugins are published exclusively through the Studio UI (right-click plugin → "Save to Roblox as Plugin"). There is no CLI, REST API, or headless upload path as of April 2026.
- Feature requests for headless publishing have existed since 2022 (devforum.roblox.com) with no implementation.
- The DevEx rate ($0.0038/Robux) and plugin minimum price ($4.99) are real and the payment system works — the bottleneck is the mandatory Studio GUI upload step.
- Conclusion: Real income potential (Roblox plugin market is large), but the upload step requires a human with Roblox Studio installed. Not agentic.

### Unity Asset Store

- **No submission API.** Unity Asset Store submissions require manual zip upload + web form completion + Unity review (1-5 days per asset). There is no programmatic submission pathway.
- AI-generated content IS allowed on Unity Asset Store with disclosure, which would otherwise make this viable — but the manual submission bottleneck kills agentic viability.
- Revenue split is 70% to creator (Unity takes 30%) on a store with 2M+ users — the marketplace economics are actually good, just not headless.
- Conclusion: Same pattern as Amazon KDP (real income, no submission API). If Unity launches a Publisher API, this becomes viable immediately.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | All three require human-operated GUI steps for each submission |
| Setup effort | 4 | Easy to sign up, hard to automate the publish step |
| Yield potential | 6 | Real income on all three platforms — market size is genuine |
| Risk | 9 | All ToS-compliant; no legal risk |
| **Overall** | **5.25** | Economics are real, but agentic pipeline breaks at the publish step |

## Source

- VS Code Extension Marketplace: https://code.visualstudio.com/api/working-with-extensions/publishing-extension (free only confirmed)
- Roblox Studio plugin publishing: devforum.roblox.com/t/plugin-publishing-in-universe/3178150 (no API confirmed)
- Unity Asset Store: https://support.unity.com/hc/en-us/articles/16456407029524-Can-I-publish-and-sell-content-generated-with-AI-on-the-Asset-Store (AI content allowed, but manual upload)
- Web research: April 2026 platform audits
