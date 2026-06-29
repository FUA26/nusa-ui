#!/usr/bin/env node

// File system utilities
import fs from "fs"
import path from "path"
import { exec } from "child_process"

// Get component name from command line argument
const componentName = process.argv[2]

// Check if component name is provided
if (!componentName) {
  console.error("Error: Component name is required")
  console.error("Usage: node scripts/migrate-component.js <component-name>")
  process.exit(1)
}

// Path constants for migration
const OLD_REPO = "../nessra-ui"
const OLD_REGISTRY = path.join(OLD_REPO, "registry.json")
const NEW_REGISTRY = "registry"
const OLD_DOCS = path.join(OLD_REPO, "content/docs/components")
const NEW_DOCS = "content/docs/components"

/**
 * Read the old registry.json file from the nessra-ui repository
 * @returns {Object} The parsed registry object
 * @throws {Error} If the registry file doesn't exist or cannot be read
 */
function readOldRegistry() {
  const registryPath = OLD_REGISTRY

  // Check if registry file exists
  if (!fs.existsSync(registryPath)) {
    throw new Error(`Registry file not found: ${registryPath}`)
  }

  try {
    const content = fs.readFileSync(registryPath, "utf-8")
    return JSON.parse(content)
  } catch (error) {
    throw new Error(`Failed to read registry: ${error.message}`)
  }
}

/**
 * Find a component by name in the registry
 * @param {Object} registry - The registry object
 * @param {string} name - The component name to find
 * @returns {Object|undefined} The component object if found, undefined otherwise
 */
function findComponent(registry, name) {
  return registry.items?.find((item) => item.name === name)
}

/**
 * Replace brand references in content string
 * Converts nessra brand references to nusa brand references
 * @param {string} content - The content to replace brand references in
 * @returns {string} The content with brand references replaced
 */
function replaceBrandReferences(content) {
  return (
    content
      // More specific patterns first (URL patterns)
      .replace(/nessra\.vercel\.app/g, "nusa-ui.vercel.app")
      .replace(/nessra-ui\.vercel\.app/g, "nusa-ui.vercel.app")

      // Registry path patterns
      .replace(/registry\/new-york\//g, "registry/")

      // Logo references
      .replace(/nessra-ui-logo/g, "nusa-ui-logo")

      // Code/technical references (snake_case, kebab-case)
      .replace(/nessra_ui/g, "nusa_ui")
      .replace(/nessra-ui/g, "nusa-ui")

      // Constant/uppercase references
      .replace(/NESSRA-UI/g, "NUSA-UI")

      // Title case references
      .replace(/Nessra UI/g, "Nusa UI")
  )
}

// Show migration start message
console.log(`Starting migration for component: ${componentName}`)

// Read the old registry
let registry
try {
  registry = readOldRegistry()
  console.log("Successfully loaded registry from", OLD_REGISTRY)
} catch (error) {
  console.error("Error reading registry:", error.message)
  process.exit(1)
}

// Find the component in the registry
const component = findComponent(registry, componentName)

if (!component) {
  console.error(`Error: Component '${componentName}' not found in registry`)
  process.exit(1)
}

console.log(`Found component: ${componentName}`)
