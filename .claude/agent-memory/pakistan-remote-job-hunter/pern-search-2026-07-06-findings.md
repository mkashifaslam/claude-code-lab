---
name: pern-search-findings-2026-07-06
description: Fresh job search run findings, platform access status, and updated market intelligence for PERN stack roles
metadata:
  type: project
---

# PERN Stack Job Search — 2026-07-06 Findings

**Run Date:** 2026-07-06 05:20 UTC  
**Prior Run:** 2026-06-20 (17 jobs extracted, 2,100+ indexed)  
**This Run:** 12 PERN-aligned jobs extracted, 600+ indexed  
**Market Trend:** Junior supply crisis continues; mid-level roles increasing

## Platform Access Changes Since 2026-06-20

### Now Accessible
- **We Work Remotely:** Now working (was DNS-blocked on 2026-06-20). Largest source this run: 280 jobs indexed, latest post 9 hours ago. Quality: Good (salary often disclosed).
- **Arc.dev, ReactJobs.io, RemoteOK:** Continue accessible (consistent with prior run).

### Still Blocked
- **HN Who's Hiring:** HTTP 429 (rate limited, not DNS). Retry after 24-48 hours. June 2026 thread likely stale.
- **Remotive.io:** HTTP 403 (forbidden, unchanged from prior run). Requires VPN.
- **Work at a Startup:** HTTP 406 (not acceptable, unchanged from prior run). Requires VPN.
- **Turing.com:** Not attempted (Incapsula blocks expected from Pakistan ISPs, unchanged). **PRIORITY:** Access via VPN to create profile at turing.com/developers.

### New Issues
- **LinkedIn:** HTTP 500 (server-side error). Likely transient. Retry 2026-07-07. Historically 4,000+ Node/TS listings.
- **Idealist.org:** Not attempted (similar DNS blocks expected based on prior run).

**Action:** For next run (2026-07-13), prioritize LinkedIn retry + HN rate-limit recovery + Turing.com VPN access.

## Top Immediate Opportunities (July 2026)

### Tier 1: Apply Now
1. **Air Apps — Backend Engineer**
   - Tech: Node.js, TypeScript, PostgreSQL, Microservices (5/8 PERN)
   - Remote: Anywhere in the World
   - Posted: Recent (indexed as current)
   - Link: https://arc.dev/remote-jobs/j/air-apps-backend-engineer-lipkpwv8si
   - Why: Best PERN match this week. Arc.dev vetted. Pakistan-friendly payment.

### Tier 2: Research & Apply
2. **Reveleer — Full Stack AI Engineer**
   - Tech: Full-stack + AI/LLM (need to verify backend is Node.js)
   - Remote: Anywhere in the World
   - Salary: $100K+/year (attractive benchmark)
   - Posted: 4 days ago
   - Link: https://weworkremotely.com/remote-jobs/reveleer-full-stack-ai-engineer
   - Why: US company, strong salary signals international hiring. Research tech stack first.

3. **i6 Group — Tech Lead Full Stack (Node, TypeScript, React)**
   - Tech: Node.js, TypeScript, React (3/8 PERN, no database mentioned)
   - Location: Manchester (verify remote eligibility)
   - Posted: 3 days ago
   - Link: https://jobs.ashbyhq.com/i6/892dc6ec-5ebb-4806-a3dc-012d7d8d1e7f?ref=reactjobs.io
   - Why: Exact tech match (Node + TS + React). Clarify: remote? Pakistan candidates? PostgreSQL?

## Market Intelligence Updates

### Tech Stack Distribution (12 jobs analyzed this run)
- React: 33% | Node.js: 25% | TypeScript: 25% | PostgreSQL: 8% | NestJS: 0%
- **Key:** PostgreSQL still underadvertised (generic "SQL" dominates). NestJS absent (Express/Next.js preferred).

### Experience Level Reality Check
- Junior explicit: 0/12 (0%) — **unchanged crisis**
- Mid-level: 25% (stable increase from 24%)
- Senior: 67% (unchanged from 65%)
- **Implication:** Market skews 2:1 senior-to-mid. Junior roles near-invisible. Consider applying to mid-level roles with "fast learner" messaging or explore Pakistan-first platforms (Rozee.pk, Internshala).

### Salary Benchmarks (New Data This Run)
- US remote roles showing $100K+/year (Reveleer, Close) — suggests global hiring comfort
- Pakistan-remote junior still: $800–$1,500/month USD
- Pakistan-remote mid still: $1,800–$2,500/month USD
- **Inference:** Companies comfortable with $100K/year US can afford $2.5K–$3K/month Pakistan. Negotiation leverage exists.

### Timezone Friendliness
- "Anywhere in the World" policies: 50% of jobs this run (up from implicit prior)
- US-based (EST/CST): 33% — 8–13 hour gap, typical
- Europe-based (GMT): 17% — 4–7 hour overlap, good for async
- **Trend:** Explicit "anywhere" policy becoming more common. Pakistan acceptance still implicit, not advertised.

## Blockers & Workarounds

### LinkedIn HTTP 500 (Transient)
- **Why:** Server-side error, not DNS. Likely temporary.
- **Workaround:** Retry desktop tomorrow, or use mobile app immediately.
- **Expectation:** Restore 4,000+ Node/TS listings when resolved.

### HN Who's Hiring HTTP 429 (Rate Limited)
- **Why:** Too many concurrent requests to HN from environment.
- **Workaround:** Wait 24-48 hours, retry. Check archive for June 2026 thread (likely stale by now).
- **Expectation:** July 1st hiring thread should be available ~2026-07-01 (check news.ycombinator.com/jobs).

### Remotive.io HTTP 403 (Persistent)
- **Why:** Same block as 2026-06-20. Likely ISP-level or Remotive geofencing.
- **Workaround:** VPN to non-Pakistan IP, or Wayback Machine (~7-14 day lag).
- **Expectation:** Low priority; We Work Remotely largely duplicates coverage.

### Work at a Startup HTTP 406 (Persistent)
- **Why:** Same block as prior run. Likely WAF rule or YC-specific access control.
- **Workaround:** VPN, or Wayback Machine (~2-3 week lag, check workatastartup.com archives).
- **Expectation:** Medium priority; YC companies often cross-posted to LinkedIn/AngelList.

### Turing.com Incapsula Block (Not Attempted, High Priority)
- **Why:** Pakistan ISPs commonly blocked by Turing's Incapsula WAF. **This is your best bet for Pakistan-specific hiring.**
- **Workaround:** VPN to non-Pakistan IP **essential**. Alternative: Create profile directly at turing.com/developers (no login wall, profile accepts Pakistan location).
- **Expectation:** After VPN access, search "Node.js", "TypeScript", "PostgreSQL" filters. Weekly refresh. Turing specifically targets Pakistan→US hiring.
- **Action for Next Run:** Make Turing.com VPN access a standing weekly task.

## High-Conviction Recommendations (Updated)

### Immediate (Next 2–3 days)
1. **Apply to Air Apps** (Arc.dev) — best PERN match
2. **Research Reveleer** (We Work Remotely) — verify backend stack, strong salary signal
3. **Reach out to i6 Group** (ReactJobs) — clarify remote + Pakistan + database
4. **Retry LinkedIn** (likely resolved by now)

### This Week (2026-07-06 to 2026-07-10)
5. **Access Turing.com via VPN** — create profile with Pakistan location, search weekly
6. **Retry HN Who's Hiring** (wait 24-48h for rate limit reset)
7. **Expand to Pakistan platforms:** Rozee.pk ("Node.js Developer", "Remote"), Internshala ("Work from Home", "Backend")
8. **Portfolio refresh:** Ensure GitHub features Node.js + PostgreSQL + React + TypeScript, recent commits

### Ongoing (Weekly Cycle, ~Sundays)
9. **Set up platform alerts:** LinkedIn saved search, Arc.dev manual 3-day review, We Work Remotely RSS
10. **Monitor market:** Track if junior supply improves; if not by 2026-07-27, shift to contract/freelance → FT pathway (Upwork, Fiverr)

## Session Notes

- **Search Volume:** 600+ listings indexed across 4 platforms
- **Methodology:** Batch fetch + FTS5 indexing to avoid context-window explosion
- **Extraction Focus:** Explicit remote + PERN stack + posted within 14 days
- **Known Gaps:** NestJS 0% (framework may be niche for PERN stack market); PostgreSQL 8% (hidden in "SQL" ads); junior 0% (crisis ongoing)

## Next Run Target (2026-07-13)

**What to Check:**
1. LinkedIn (should be restored; filter last 7 days)
2. HN Who's Hiring (July thread should exist; scrape remote + backend + node)
3. Arc.dev, ReactJobs.io, We Work Remotely (new 7-day postings)
4. Turing.com via VPN (standing weekly access)
5. Remotive.io via VPN (if time allows)

**Success Metrics:**
- Target: 8+ fresh jobs with 4+ PERN skills, posted <7 days
- If <5 jobs: Widen to 14-day window + mid-level roles
- If market trend shows increasing junior: Continue standing search; else pivot to Pakistan-first platforms

**Recommended Refresh Interval:** Weekly (Sundays, ~02:00 UTC = 07:00 PKT)

---

*Updated: 2026-07-06*  
*Previous Memo: [[pern-search-methodology-2026-06-20]]*
