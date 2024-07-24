#!/usr/bin/env node
import $, { CommandBuilder } from "dax-sh";
import { existsSync } from "node:fs";
import cleanDirectory from "./clean.js";
const out = "dist/react";

if (existsSync(out)) {
  await cleanDirectory(out);
}

await $.sleep(1000);
await $`tsc -p ./build/react-tsconfig.json`;
await $.sleep(2000);
await $`pnpm babel opt/tsc --config-file ./build/babel.config-react.json --out-dir ${out}`;
await $.sleep(2000);
await $`rm -r opt`;
