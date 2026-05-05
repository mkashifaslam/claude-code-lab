#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHook = validateHook;
// @ts-ignore
const process_1 = __importDefault(require("process"));
const BLOCKED_PATTERNS = [
    { pattern: /\brm\s+-rf\s+\//, message: "Blocking dangerous rm -rf / command" },
    { pattern: /\bsudo\s+rm/, message: "Blocking sudo rm command" },
];
function getInput(testInput) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        // Use testInput if provided, otherwise read from stdin
        if (testInput) {
            return testInput;
        }
        // Read JSON from stdin
        const chunks = [];
        process_1.default.stdin.setEncoding("utf8");
        try {
            for (var _d = true, _e = __asyncValues(process_1.default.stdin), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                _c = _f.value;
                _d = false;
                const chunk = _c;
                chunks.push(chunk);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return chunks.join("");
    });
}
function validateHook(hookInputStr) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        let input = {};
        const inputString = yield getInput(hookInputStr);
        try {
            input = JSON.parse(inputString);
        }
        catch (err) {
            process_1.default.exit(0);
        }
        const toolName = input.tool_name || "";
        if (toolName !== "Bash") {
            process_1.default.exit(0);
        }
        const command = ((_a = input.tool_input) === null || _a === void 0 ? void 0 : _a.command) || "";
        for (const { pattern, message } of BLOCKED_PATTERNS) {
            if (pattern.test(command)) {
                process_1.default.stdout.write(JSON.stringify({ decision: "block", reason: message }) + "\n");
                process_1.default.exit(2);
            }
        }
        process_1.default.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
        process_1.default.exit(0);
    });
}
validateHook().catch((err) => {
    console.error("Hook error:", err);
    process_1.default.exit(1); // Exit 1 = general error
});