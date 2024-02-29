import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { fileURLToPath } from 'url';

// Assuming you're using ESM. If you're using CommonJS, you'd adjust how you handle __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Zod schemas for validation
const ProjectConfigSchema = z.object({
  name: z.string(),
  iconOption: z.string().optional(),
  appLink: z.string().url().optional(),
});

const TaskConfigSchema = z.object({
  name: z.string(),
  link: z.string().url(),
  iconOption: z.string().url(),
  actionPluginId: z.string(),
});

const PluginConfigSchema = z.object({
  project: ProjectConfigSchema,
  task: TaskConfigSchema,
});

async function validateConfigsInDirectory(directory: string): Promise<void> {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await validateConfigsInDirectory(fullPath); 
    } else if (entry.isFile() && entry.name === 'plugin-config.yml') {
      await validateConfigFile(fullPath);
    }
  }
}

async function validateConfigFile(filePath: string): Promise<void> {
  try {
    const configFileContent = await fs.readFile(filePath, 'utf8');
    const config = JSON.parse(configFileContent);
    PluginConfigSchema.parse(config); 
    console.log(`Config in ${filePath} is valid.`);
  } catch (error) {
    console.error(`Validation error in ${filePath}:`, error);
    throw error; 
  }
}

async function main() {
  // Construct the path to the packages directory
  const packagesDir = path.join(__dirname, '..', 'packages'); // Adjust based on actual script location
  await validateConfigsInDirectory(packagesDir);
}

main();

