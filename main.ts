// The Funniest Office Joke — one-line entry for
// u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.
//
// Writes a single office joke (1-200 characters) to /output/entry.txt.
// The joke: an out-of-office reply meant to escape meetings ends up
// scheduling a meeting about itself.

import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const joke =
  "I set my out-of-office to 'in a meeting' so people would stop inviting me to meetings — now I have a meeting about my out-of-office.";

const chars = [...joke].length;
if (chars < 1 || chars > 200 || joke.trim() !== joke) {
  throw new Error(`joke must be 1-200 non-blank characters, got ${chars}`);
}

// Punchline sits in the final clause: the escape from meetings becomes
// a meeting. No trailing newline — the file is exactly the joke text.
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
