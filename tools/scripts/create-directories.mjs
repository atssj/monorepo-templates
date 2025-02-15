#!/usr/bin/env zx

import { $, echo, fs } from "zx";
import chalk from "chalk";

const projectName = (await $`cat package.json | grep "name" | cut -d'"' -f4`).stdout.trim();

echo(chalk.blue(`** Project Name: ${projectName} **`));

const dirs = [
  "apps",
  "apps/shop",
  "apps/admin",
  "apps/api",
  "libs/shared",
  "libs/features",
  "libs/data-access",
  "packages/design-system",
  "packages/config",
  // "ai/prompts/feature-generation",
  // "ai/prompts/code-generation",
  // "ai/prompts/testing",
  // "ai/agents/developer-agent",
  // "ai/agents/designer-agent",
  // "ai/agents/tester-agent",
  // "ai/models/fine-tuned",
  // "ai/models/configs",
  "tools/scripts",
  "tools/ci-cd",
];

for (const dir of dirs) {
  try {
    await $`mkdir -p ${dir}`;
    echo(chalk.green(`✔ Created directory: ${dir}`));
  } catch (error) {
    echo(chalk.red(`✖ Error creating directory: ${dir}`), error);
  }
}

echo(chalk.yellow("Folder structure created successfully."))
