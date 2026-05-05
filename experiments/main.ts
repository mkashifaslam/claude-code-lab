// @ts-ignore
import process from "process";
import { HookInput, validateHook } from "./03-hooks/validate-bash";

const input: HookInput = {
  tool_name: "Bash",
  tool_input: {
    command: "rm -rf /",
  },
}

validateHook(JSON.stringify(input)).catch((err) => {
  console.error("Hook error:", err);
  process.exit(1);
});
