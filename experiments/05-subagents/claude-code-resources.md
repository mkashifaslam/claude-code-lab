# Claude Code Ecosystem — Top GitHub Repositories

> Generated: 2026-06-14

## Quick Reference Table

| # | Repository | Category | ⭐ | Description | Updated |
|---|-----------|----------|----|-------------|---------|
| 1 | [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Meta/Curated List | 46.4K | Curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code | 2026-06-14 |
| 2 | [claude-howto](https://github.com/luongnv89/claude-howto) | Guides & Tutorials | 37.1K | Visual, example-driven guide to Claude Code from basic concepts to advanced agents with copy-paste templates | 2026-06-14 |
| 3 | [awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | Subagents | 21.7K | Collection of 100+ specialized Claude Code subagents covering wide range of development use cases | 2026-06-14 |
| 4 | [claude-skills](https://github.com/alirezarezvani/claude-skills) | Skills & Commands | 18K | 337 Claude Code skills, 30+ agents, 70+ custom commands, 330+ skills for multiple coding agents | 2026-06-14 |
| 5 | [claude-context](https://github.com/zilliztech/claude-context) | MCP Integration | 11.8K | Code search MCP for Claude Code — make entire codebase the context for any coding agent | 2026-06-14 |
| 6 | [claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery) | Hooks | 3.7K | Implements all 13 hook events with logging, security enhancements, and dangerous command blocks | 2026-06-14 |
| 7 | [commands](https://github.com/wshobson/commands) | Skills & Commands | 2.5K | Production-ready slash commands for Claude Code with structured workflows | 2026-06-13 |
| 8 | [claude-code-mcp](https://github.com/steipete/claude-code-mcp) | MCP Integration | 1.3K | Claude Code as one-shot MCP server — agent within an agent architecture | 2026-06-11 |
| 9 | [Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite) | Skills & Commands | 1.3K | 216+ slash commands, 12 Claude Code skills, 54 AI agents, automated software engineering workflows | 2026-06-12 |
| 10 | [claude-code-subagents](https://github.com/0xfurai/claude-code-subagents) | Subagents | 928 | 100+ production-ready development subagents for entire SDLC coverage | 2026-06-13 |
| 11 | [claude-code-hooks](https://github.com/karanb192/claude-code-hooks) | Hooks | 421 | Growing collection of useful Claude Code hooks — copy, paste, customize | 2026-06-13 |
| 12 | [awesome-claude-md](https://github.com/josix/awesome-claude-md) | CLAUDE.md Patterns | 368 | Curated exemplary CLAUDE.md files and onboarding patterns with analyses and best practices | 2026-06-14 |
| 13 | [claude-code-best-practices](https://github.com/awattar/claude-code-best-practices) | Best Practices | 183 | Best practices, patterns, and examples for terminal-native AI with project awareness | 2026-06-13 |
| 14 | [claude-code-handbook](https://github.com/ThamJiaHe/claude-code-handbook) | Best Practices | 171 | Comprehensive guide for professional Claude Standard prompts with MCP, Skills, Superpowers | 2026-06-12 |

---

## By Extension Point

### Skills & Slash Commands

**Top Repositories:**
- **[claude-skills](https://github.com/alirezarezvani/claude-skills)** (18K stars) — Largest collection: 337 skills, 70+ custom commands, 30+ complete agents. Covers engineering, marketing, product, compliance, finance. Cross-compatible with Codex, Gemini CLI, Cursor.
- **[Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite)** (1.3K stars) — 216+ slash commands organized by workflow: code review, feature creation, security auditing, architectural analysis. Professional-grade, structured prompts.
- **[commands](https://github.com/wshobson/commands)** (2.5K stars) — 50+ production-ready commands with clear documentation and real use cases.

**Best Practices:**
- Skills stored in `.claude/skills/` as SKILL.md files (markdown with prompt + execution instructions).
- Use `/explore-feature <name>` pattern for context-aware skill discovery.
- Include examples in skill descriptions for better Claude reasoning.
- Prefer declarative skills (CLAUDE.md) over imperative hooks when possible.

### Subagents

**Top Repositories:**
- **[awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** (21.7K stars) — 100+ specialized agents; best for learning agent composition patterns.
- **[claude-code-subagents](https://github.com/0xfurai/claude-code-subagents)** (928 stars) — Production-ready agents with full SDLC coverage; ready-to-deploy with minimal customization.
- **[claude-code-subagents](https://github.com/rshah515/claude-code-subagents)** (60 stars) — 133+ subagents with clear isolation and role definitions.

**Best Practices:**
- Place subagents in `~/.claude/agents/` directory.
- Scope each agent with clear role, tool set, and behavior prompt.
- Use agent-assembler pattern to dynamically generate team based on tech stack.
- Isolate agents to prevent state leakage between sessions.

### Hooks (Lifecycle Automation)

**Top Repositories:**
- **[claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)** (3.7K stars) — Most comprehensive: implements all 13 hook events with logging, security patterns, and dangerous command blocks. **Reference implementation.**
- **[claude-code-hooks](https://github.com/karanb192/claude-code-hooks)** (421 stars) — Practical, copy-paste collection. Good for quick onboarding.

**Best Practices:**
- Hook events: `PreToolUse`, `PostToolUse`, `PreExecution`, `PostExecution`, `PreEdit`, `PostEdit`, notification hooks.
- Compile TypeScript hooks before deploying: `npm run build` → copy `dist/` to `.claude/hooks/`.
- Configure matchers and commands in `.claude/settings.json`.
- Verify blocked/allowed patterns after deployment; hooks run with shell privileges.
- Use pre-hooks for validation/blocking; post-hooks for cleanup/notifications.

### MCP Server Integrations

**Top Repositories:**
- **[claude-context](https://github.com/zilliztech/claude-context)** (11.8K stars) — Code search MCP. Enables entire codebase as context; most useful for large monorepos. **Essential for scaling.**
- **[claude-code-mcp](https://github.com/steipete/claude-code-mcp)** (1.3K stars) — Claude Code as MCP server; enables agent-in-agent patterns for complex orchestration.

**Best Practices:**
- Use `claude mcp add` to register MCP servers.
- Claude Code supports HTTP transport; Claude Desktop requires Docker-based setup.
- Pair with GitHub MCP for issue/PR integration (official `github/github-mcp-server`).
- Use `claude-context` for codebase indexing in large repos; reduces context window waste.

### CLAUDE.md Patterns

**Top Repositories:**
- **[awesome-claude-md](https://github.com/josix/awesome-claude-md)** (368 stars) — Curated exemplary CLAUDE.md files from real projects. **Best reference for patterns.**
- **[claude-howto](https://github.com/luongnv89/claude-howto)** (37.1K stars) — Full guide with worked examples showing CLAUDE.md at different scopes (repo root, minimal, context-engineering, boundary specs, directory conventions).

**Best Practices:**
- CLAUDE.md hierarchy: global (`~/.claude/CLAUDE.md`), project root (version-controlled), subdirectory-specific.
- Include domain expertise, tech stack, operating principles, quick references.
- Use `## 📌 Quick Reference` sections for processor-specific patterns, output formats, code standards.
- Load supplementary guides on-demand (avoid context bloat): `Load when needed: path/to/reference.md`.
- Keep project CLAUDE.md in git; auto-memory persists separately in `.claude/projects/.../memory/`.

---

## Community Insights

### Trends

The Claude Code ecosystem is maturing rapidly (46K+ stars on meta-repos). Three dominant patterns emerge:

1. **Skill/Command Proliferation:** 300+ community skills exist. Collections like `claude-skills` and `Claude-Command-Suite` are becoming standard references. The shift from `.claude/commands/` to `.claude/skills/SKILL.md` reflects standardization toward markdown-first, declarative design.

2. **Subagent Architecture as Default:** Communities organize development as specialized agent teams (100+ repos). Early adopters use agent-assembler patterns to dynamically compose teams per project. This suggests subagents will become the primary abstraction for complex work.

3. **Hooks as Safety/Automation Layer:** `claude-code-hooks-mastery` (3.7K stars) demonstrates hooks are no longer experimental. All 13 hook events are well-documented and widely used for pre-flight validation, dangerous command blocking, and notification automation.

### Ecosystem Gaps

- **Hook Patterns Library:** Few repos document reusable hook patterns (validation, notification, context injection). `claude-code-hooks-mastery` is the only reference implementation.
- **Agent Composition Frameworks:** No standard for dynamic agent assembly based on project context. `mylee04/claude-code-subagents` attempts this; needs more community work.
- **CLAUDE.md Templates for Domains:** Few curated domain-specific CLAUDE.md templates (FinTech, AI/ML, DevOps). Opportunity for ecosystem specialization.
- **MCP Server Standardization:** Only 2 major Claude Code–specific MCP servers exist. GitHub MCP is official; others are community-driven. Need more integrations with common tools (Jira, Slack, databases).
- **Testing & Validation:** No widespread practices for validating skills, hooks, or agents before production use. Opportunity for testing frameworks.

### Recommendations

1. **For Learners:** Start with [claude-howto](https://github.com/luongnv89/claude-howto) (37K stars, best intro) → [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) (meta-repo) → specialized repos.
2. **For Hook Development:** Reference [claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery); compile TS before deploying.
3. **For Large Projects:** Pair [claude-context](https://github.com/zilliztech/claude-context) MCP with [awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) for scaling.
4. **For CLAUDE.md:** Study [awesome-claude-md](https://github.com/josix/awesome-claude-md) patterns; adopt hierarchical scoping (global → project → directory).

---

## Evaluation Summary

- **Repos Evaluated:** 27 (across all searches)
- **Repos Included:** 14 (score ≥8/10; active within 6 months)
- **Excluded:** 13 (archived, inactive >6mo, or single-author hobby projects with <50 stars)
- **Categories Represented:** 6/6 (skills, subagents, hooks, MCP, CLAUDE.md, best-practices)

---

*Compiled from GitHub search (June 2026) using queries: claude code skills, subagents, hooks, MCP, CLAUDE.md, best practices. Each repo verified via `gh repo view` for current stats and README sampling.*
