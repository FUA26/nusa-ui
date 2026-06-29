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
const OLD_REGISTRY = path.join(OLD_REPO, "registry/new-york")
const NEW_REGISTRY = "registry"
const OLD_DOCS = path.join(OLD_REPO, "content/docs/components")
const NEW_DOCS = "content/docs/components"

// Show migration start message
console.log(`Starting migration for component: ${componentName}`)
