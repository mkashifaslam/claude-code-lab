# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a sandbox for learning Claude Code features. Experiments live under `experiments/`, numbered by topic. Breaking things is fine — prefer real implementations over mocks.

## Repository Layout

```
.claude/
  CLAUDE.md           # Project instructions (loaded at session start)
  settings.json       # Allowed Bash commands (git, npm, node, python3, etc.)
  skills/             # Custom slash commands
    explore-feature.md  # /explore-feature <name>
    lab-summary.md      # /lab-summary
experiments/
  01-claude-md/       # CLAUDE.md and memory system
  02-skills/          # Custom slash commands
  03-hooks/           # Lifecycle automation
  04-mcp/             # MCP server integrations
  05-subagents/       # Isolated worker agents
  06-settings/        # Permissions and configuration
  07-claude-api/      # Claude API / Agent SDK
  08-memory/          # Auto memory system
  09-scheduling/      # Loop, schedule, automation
  10-agent-teams/     # Multi-agent collaboration
```

## Conventions

- Each experiment folder gets a `README.md` documenting findings and key insights.
- Keep experiments focused and minimal — prefer clarity to completeness.
- Interesting discoveries should be noted in memory or in the relevant `README.md`.

## Custom Skills

- `/explore-feature <name>` — Research, implement, and document a Claude Code feature in the relevant `experiments/` folder.
- `/lab-summary` — Review completed vs. pending experiments and recommend what to tackle next.
