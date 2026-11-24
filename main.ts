// Entry program for the make.fun bounty
// "Promote make.fun's make-your-own-bounty post on X".
//
// The entry itself is a post on X; this repository only hands in its
// address. The grader mounts the repository at the bot dir, runs this
// program, and reads POST.json back from the output dir. So the one job
// here is to deliver POST.json to the output dir byte for byte — but
// first it is checked, so a bad hand-in fails loudly in this run instead
// of silently at the gate: the file must be JSON, and its url must be
// the address of one X post.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The shape of an X post address: https://x.com/<handle>/status/<id>,
// the handle in word characters and the id in digits only.
const statusUrl = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

function fail(message: string): never {
  console.error(`post-x-promote: ${message}`);
  process.exit(1);
}

const sourcePath = join(botDir, 'POST.json');

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch {
  fail(`cannot read ${sourcePath}`);
}

// The gate reads POST.json only up to 16 KiB; a larger file is no entry.
if (raw.length > 16384) {
  fail(`POST.json is ${raw.length} bytes, over the 16384-byte limit`);
}

let post: { url?: unknown };
try {
  post = JSON.parse(raw.toString('utf8'));
} catch {
  fail('POST.json is not valid JSON');
}

if (typeof post.url !== 'string' || !statusUrl.test(post.url)) {
  fail('POST.json must name one X post: {"url": "https://x.com/<handle>/status/<id>"}');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), raw);
console.log(`post-x-promote: handed in ${post.url} (${raw.length} bytes)`);
