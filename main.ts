import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke: setup (printer jams at the deadline) + turn (treat it like a boss).
const joke =
  "Our printer only jams when the deadline is five minutes away, so now I address it as 'sir' and ask permission before every print job.";

// Gate: entry must be a single non-empty line of 1-200 characters.
const line = joke.trim();
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(
    `Invalid entry: ${line.length} characters (must be 1-200, single line)`,
  );
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
