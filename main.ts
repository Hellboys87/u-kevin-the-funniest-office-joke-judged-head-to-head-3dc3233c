import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Our printer only jams when the deadline is in five minutes, so I've started addressing it as 'sir' and asking permission before every print job.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
