#!/usr/bin/env node

// @ts-ignore
import process from "process";

interface ToolInput {
  command?: string;
}

export interface HookInput {
  tool_name?: string;
  tool_input?: ToolInput;
}

const BLOCKED_PATTERNS = [
  { pattern: /\brm\s+-rf\s+\//, message: "Blocking dangerous rm -rf / command" },
  { pattern: /\bsudo\s+rm/, message: "Blocking sudo rm command" },
];

async function getInput(testInput?: string): Promise<string> {

  // Use testInput if provided, otherwise read from stdin
  if (testInput) {
    return testInput;
  }

  // Read JSON from stdin
  const chunks: string[] = [];
  process.stdin.setEncoding("utf8");

  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  return chunks.join("");
}

export async function validateHook(hookInputStr?: string) {
  let input: HookInput = {};

  const inputString = await getInput(hookInputStr);

  try {
    input = JSON.parse(inputString);
  } catch (err) {
    process.exit(0);
  }

  const toolName = input.tool_name || "";
  if (toolName !== "Bash") {
    process.exit(0);
  }

  const command = input.tool_input?.command || "";

  for (const { pattern, message } of BLOCKED_PATTERNS) {
    if (pattern.test(command)) {
      process.stdout.write(JSON.stringify({ decision: "block", reason: message }) + "\n");
      process.exit(2);
    }
  }

  process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
  process.exit(0);
}

validateHook().catch((err) => {
  console.error("Hook error:", err);
  process.exit(1); // Exit 1 = general error
});
