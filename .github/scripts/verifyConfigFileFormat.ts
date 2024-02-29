const fs = require('fs/promises');
const path = require('path');
const zod = require('zod');
const yaml = require('js-yaml');

const { z } = zod;

// Define your Zod schemas as before
const ProjectConfigSchema = z.object({
  name: z.string(),
  iconOption: z.string().url().optional(),
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
    } else if (entry.isFile() && entry.name === 'plugin-details.yml') { 
      console.log(`Plugin details found!!, Validating ${fullPath}`);
      await validateConfigFile(fullPath);
    }
  }
}

async function main() {
  const packagesDir = path.join(__dirname, '../..', 'packages'); // Adjust if necessary to point to your packages directory
  console.log(`Validating plugin-details.yml files in ${packagesDir}`)
  await validateConfigsInDirectory(packagesDir);
}

main();
