import { promises as fs } from 'fs';
const path = require('path');
import { z } from 'zod';
import yaml from 'js-yaml';

// Define your Zod schemas as before
const ProjectConfigSchema = z.object({
  name: z.string(),
  iconOption: z.string().optional(),
  appLink: z.string().url().optional(),
});

const TaskConfigSchema = z.object({
  name: z.string(),
  link: z.string().url(),
  iconOption: z.string(), // Note: Adjusted to remove .url() validation for iconOption based on your schema
  actionPluginId: z.string(),
});

const PluginConfigSchema = z.object({
  project: ProjectConfigSchema,
  task: TaskConfigSchema,
});

async function validateConfigFile(filePath: string): Promise<void> {
  try {
    const configFileContent = await fs.readFile(filePath, 'utf8');
    const config = yaml.load(configFileContent); // Changed to use yaml.load for YAML content
    PluginConfigSchema.parse(config);
    console.log(`Config in ${filePath} is valid.`);
  } catch (error) {
    console.error(`Validation error in ${filePath}:`, error);
    throw error;
  }
}

async function validateConfigsInDirectory(directory: string): Promise<void> {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await validateConfigsInDirectory(fullPath);
    } else if (entry.isFile() && entry.name === 'plugin-config.yml') { // Ensure the file name matches
      await validateConfigFile(fullPath);
    }
  }
}

async function main() {
  const packagesDir = path.join(__dirname, '..', 'packages'); // Adjust if necessary to point to your packages directory
  await validateConfigsInDirectory(packagesDir);
}

main().catch(console.error);
