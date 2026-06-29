#!/usr/bin/env node

// Get component name from command line argument
const componentName = process.argv[2]

// Check if component name is provided
if (!componentName) {
  console.error("Error: Component name is required")
  console.error("Usage: node scripts/migrate-component.js <component-name>")
  process.exit(1)
}

// Show migration start message
console.log(`Starting migration for component: ${componentName}`)
