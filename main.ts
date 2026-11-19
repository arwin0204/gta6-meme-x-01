// gta6-meme-x-01 — main.ts
// Copies POST.json (the X post address for this entry) into the output
// directory, byte for byte, so the house can read it and build the dossier
// of the post from X. Node 22, standard library only, no network.
// Deterministic: the same POST.json always produces the same output bytes,
// so the two harness runs agree.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

// The harness writes its dossier to /output after the runs; this program
// puts POST.json there first. The output directory comes from
// MAKEFUN_OUTPUT_DIR when set, else /output when it exists, else ./output.
function outputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR;
  if (env && env.length > 0) return env;
  if (existsSync("/output")) return "/output";
  return join(HERE, "output");
}

function main(): void {
  const src = join(HERE, "POST.json");
  const raw = readFileSync(src);
  const post = JSON.parse(raw.toString("utf8"));
  if (typeof post !== "object" || post === null || typeof post.url !== "string") {
    throw new Error('POST.json must be a JSON object with a string "url"');
  }
  const out = outputDir();
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "POST.json"), raw);
}

main();
