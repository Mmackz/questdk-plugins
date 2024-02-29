const fs = require("fs/promises");
const path = require("path");
const zod = require("zod");
const yaml = require("js-yaml");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);
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

async function getNewPackages(): Promise<string[]> {
  const { stdout, stderr } = await execAsync(
    "git diff --diff-filter=A --name-only main...HEAD packages/",
  );
  if (stderr) {
    throw new Error(`Error getting new packages: ${stderr}`);
  }
  return stdout
    .split("\n")
    .filter((path: string) => path.trim() !== "")
    .map((path: string) => path.trim());
}

async function validateNewPackagesHaveDetails(
  newPackagesPaths: string[],
): Promise<void> {
  const newPackageDirs = newPackagesPaths.filter((path) =>
    /packages\/[^\/]+\/?$/.test(path),
  ); // Adjust regex as needed

  for (const packageDir of newPackageDirs) {
    const detailsPath = path.join(packageDir, "plugin-details.yml");
    try {
      await fs.access(detailsPath);
      console.log(`Valid: ${detailsPath} exists.`);
    } catch (error) {
      throw new Error(
        `Missing plugin-details.yml in new package: ${packageDir}`,
      );
    }
  }
}

async function validateConfigFile(filePath: string): Promise<void> {
  try {
    const configFileContent = await fs.readFile(filePath, "utf8");
    const config = yaml.load(configFileContent); // Changed to use yaml.load for YAML content
    PluginConfigSchema.parse(config);
    console.log(`Config in ${filePath} is valid.`);
  } catch (error) {
    console.error(`Error validating config in ${filePath}:`, error);
    process.exit(1);
  }
}

async function validateConfigsInDirectory(directory: string): Promise<void> {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await validateConfigsInDirectory(fullPath);
    } else if (entry.isFile() && entry.name === "plugin-details.yml") {
      console.log(`Plugin details found!!, Validating ${fullPath}`);
      await validateConfigFile(fullPath);
    }
  }
}

async function main() {
  const newPackagesPaths = await getNewPackages();
  if (newPackagesPaths.length) {
    await validateNewPackagesHaveDetails(newPackagesPaths);
  }

  const packagesDir = path.join(__dirname, "../..", "packages"); // Adjust if necessary to point to your packages directory
  console.log(`Validating plugin-details.yml files in ${packagesDir}`);
  await validateConfigsInDirectory(packagesDir);
}

main();
