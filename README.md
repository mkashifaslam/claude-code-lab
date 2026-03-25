# Claude Code Lab

A hands-on learning workspace for mastering Claude Code features.

## Structure

```
claude-code-lab/
├── .claude/
│   ├── CLAUDE.md          # Lab instructions for Claude
│   ├── settings.json      # Project permissions
│   ├── skills/            # Custom slash commands
│   │   ├── explore-feature.md   # /explore-feature <name>
│   │   └── lab-summary.md       # /lab-summary
│   └── agents/            # Custom subagent definitions (future)
├── experiments/
│   ├── 01-claude-md/      # CLAUDE.md and memory system
│   ├── 02-skills/         # Custom slash commands
│   ├── 03-hooks/          # Lifecycle automation
│   ├── 04-mcp/            # MCP server integrations
│   ├── 05-subagents/      # Isolated worker agents
│   ├── 06-settings/       # Permissions and configuration
│   ├── 07-claude-api/     # Claude API / Agent SDK
│   ├── 08-memory/         # Auto memory system
│   ├── 09-scheduling/     # Loop, schedule, automation
│   └── 10-agent-teams/    # Multi-agent collaboration
└── README.md
```

## Learning Path

1. **CLAUDE.md** — Start here. Understand how context is injected at session start.
2. **Skills** — Build reusable slash commands for common workflows.
3. **Hooks** — Add lifecycle automation (format on save, notifications, guards).
4. **MCP Servers** — Connect Claude to external systems.
5. **Subagents** — Delegate work to isolated agents, manage context.
6. **Settings** — Permissions, modes, environment variables.
7. **Claude API** — Build programmatic agents with the SDK.
8. **Memory** — Understand auto memory and how it persists across sessions.
9. **Scheduling** — Automate recurring tasks.
10. **Agent Teams** — Multi-agent collaboration on complex problems.

## Custom Skills

- `/explore-feature <name>` — Research and document a specific feature
- `/lab-summary` — See progress across all experiments
