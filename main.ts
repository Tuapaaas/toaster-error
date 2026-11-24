// The Funniest Toaster Error Message — make.fun entry.
// A kitchen toaster that refuses to believe its own success.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const message =
  "E00: Toast too perfect. Suspecting witchcraft. Ejecting for safety.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), message, "utf8");
