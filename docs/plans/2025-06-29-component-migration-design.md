# Component Migration Design: nessra-ui → nusa-ui

**Date:** 2025-06-29  
**Status:** Approved  
**Next Step:** Implementation Plan

## Overview

Migrate all 45+ UI components from the old `nessra-ui` repository to the current `nusa-ui` repository, replacing all brand references and maintaining one git commit per component.

## Requirements

- Migrate all 45+ UI components (skip blocks)
- One git commit per component
- Replace all "nessra-ui" brand references with "nusa-ui"
- Include hooks and example files
- Remove git artifacts (contributors, old docs)
- Maintain component dependencies and registry integrity

## Architecture

### Migration Approach

**Script-Assisted Incremental Migration** - automated script with manual verification between components

### Script Architecture

```
Input: Component name → Process: Copy → Replace → Update → Output: Component + Git commit
```

### Migration Order (Dependency-based)

1. Base utilities (utils, use-mobile hook)
2. Primitive components (button, badge, separator)
3. Form components (input, label, form, select, checkbox)
4. Complex components (data-table, sidebar, date-picker)
5. Specialized components (chart, stat-card)

### Commit Structure

- **Format:** `feat(component-name): add [Component Name] component from nessra-ui migration`
- **Scope:** Component files, examples, documentation, registry.json update
- **Verification:** Manual review of diff before commit

## Brand Replacement Strategy

### Replacement Patterns

- `nessra-ui` → `nusa-ui`
- `nessra_ui` → `nusa_ui`
- `Nessra UI` → `Nusa UI`
- `NESSRA-UI` → `NUSA-UI`

### Replacement Scope

- Code comments and JSDoc
- Documentation files (.mdx)
- Registry entries (homepage, URLs, dependencies)
- Component metadata and descriptions
- Import paths and file references
- Example code snippets

## File Handling

### Source Destinations

- `../nessra-ui/registry/new-york/ui/` → `registry/ui/`
- `../nessra-ui/registry/new-york/hooks/` → `registry/hooks/`
- `../nessra-ui/registry/new-york/examples/` → `registry/examples/`
- `../nessra-ui/content/docs/components/` → `content/docs/components/`

### Files to Skip

- `.github/` (contributors, templates)
- `.git/` references
- `CHANGELOG.md`, `CONTRIBUTING.md`
- Old `CLAUDE.md`, `AGENTS.md`

## Registry Management

### Automatic Updates

- Add component entries from old registry.json
- Update URLs: `https://nessra-ui.vercel.app/r/` → `https://nusa-ui.vercel.app/r/`
- Update project name: "nessra-ui" → "nusa-ui"
- Convert file paths: `registry/new-york/` → `registry/`
- Maintain all component dependencies

### Example Transformation

```json
// Old
{
  "name": "card",
  "homepage": "https://nessra-ui.vercel.app",
  "files": [{"path": "registry/new-york/ui/card.tsx"}],
  "registryDependencies": ["https://nessra-ui.vercel.app/r/utils.json"]
}

// New
{
  "name": "card",
  "homepage": "https://nusa-ui.vercel.app",
  "files": [{"path": "registry/ui/card.tsx"}],
  "registryDependencies": ["https://nusa-ui.vercel.app/r/utils.json"]
}
```

## Script Implementation

### Script Features

- **Command:** `node scripts/migrate-component.js [component-name]`
- **Dry-run mode:** Preview changes without committing
- **Component validation:** Check dependencies exist
- **Brand replacement verification:** Show what was replaced
- **Git safety:** Stop on conflicts, allow manual resolution
- **Logging:** Track all changes for debugging

### Workflow

```
For each component in dependency order:
1. Run migration script with component name
2. Script shows preview of changes
3. Manual review of diff
4. Confirm commit or make adjustments
5. Move to next component
```

### Error Handling

- Skip component if source files missing
- Warn if dependency components not yet migrated
- Stop on git conflicts for manual resolution
- Log all changes for debugging

## Success Criteria

- [ ] All 45+ UI components migrated
- [ ] Zero "nessra-ui" references remain
- [ ] All components have proper git commits
- [ ] Registry.json properly updated
- [ ] All dependencies maintained
- [ ] Component examples and docs included
- [ ] No git artifacts carried over

## Post-Migration

After component migration completion:

- Test component imports and functionality
- Verify registry.json validity
- Update any remaining documentation
- Consider blocks migration (separate project)

---

**Design approved by user. Ready for implementation plan.**
