---
name: deploy-hook
description: Compile a TypeScript hook source file and deploy it to .claude/hooks/
---

Deploy the TypeScript hook: $ARGUMENTS

The argument is the hook name (e.g. `validate-bash` — no path or extension needed).

Source files live in `experiments/03-hooks/<name>.ts`.
Compiled output lands at `dist/03-hooks/<name>.js` (tsconfig rootDir=experiments, outDir=dist).

Follow these steps exactly:

1. **Compile** — run `npm run build` from the project root. Stop and report any TypeScript errors.

2. **Deploy** — use the Write tool to overwrite `.claude/hooks/<name>.js` with the content of `dist/03-hooks/<name>.js`. Do not use `cp` (it prompts interactively).

3. **Verify** — run test cases against the deployed file using `node .claude/hooks/<name>.js` with piped JSON input:
   - A safe/benign command (expect `{"decision":"allow"}`, exit 0)
   - Each blocked pattern defined in the source (expect `{"decision":"block","reason":"..."}`, exit 2)

4. **Report** — summarize results in a table: test input | JSON output | exit code | status.

If the hook name is omitted, ask the user which hook to deploy before proceeding.
