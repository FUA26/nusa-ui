import * as React from "react"

export interface RegistryEntry {
  name: string
  component: React.LazyExoticComponent<React.ComponentType<unknown>>
  files: string[]
}

export const Index: Record<string, RegistryEntry> = {
  // Accordion examples
  "accordion-demo": {
    name: "accordion-demo",
    component: React.lazy(() => import("./examples/accordion-demo")),
    files: ["registry/examples/accordion-demo.tsx"],
  },
  "accordion-multiple": {
    name: "accordion-multiple",
    component: React.lazy(() => import("./examples/accordion-multiple")),
    files: ["registry/examples/accordion-multiple.tsx"],
  },

  // Alert examples
  "alert-demo": {
    name: "alert-demo",
    component: React.lazy(() => import("./examples/alert-demo")),
    files: ["registry/examples/alert-demo.tsx"],
  },
  "alert-destructive": {
    name: "alert-destructive",
    component: React.lazy(() => import("./examples/alert-destructive")),
    files: ["registry/examples/alert-destructive.tsx"],
  },

  // Alert Dialog examples
  "alert-dialog-delete": {
    name: "alert-dialog-delete",
    component: React.lazy(() => import("./examples/alert-dialog-delete")),
    files: ["registry/examples/alert-dialog-delete.tsx"],
  },
  "alert-dialog-demo": {
    name: "alert-dialog-demo",
    component: React.lazy(() => import("./examples/alert-dialog-demo")),
    files: ["registry/examples/alert-dialog-demo.tsx"],
  },

  // Aspect Ratio examples
  "aspect-ratio-demo": {
    name: "aspect-ratio-demo",
    component: React.lazy(() => import("./examples/aspect-ratio-demo")),
    files: ["registry/examples/aspect-ratio-demo.tsx"],
  },

  // Avatar examples
  "avatar-demo": {
    name: "avatar-demo",
    component: React.lazy(() => import("./examples/avatar-demo")),
    files: ["registry/examples/avatar-demo.tsx"],
  },
  "avatar-fallback": {
    name: "avatar-fallback",
    component: React.lazy(() => import("./examples/avatar-fallback")),
    files: ["registry/examples/avatar-fallback.tsx"],
  },
  "avatar-sizes": {
    name: "avatar-sizes",
    component: React.lazy(() => import("./examples/avatar-sizes")),
    files: ["registry/examples/avatar-sizes.tsx"],
  },

  // Badge examples
  "badge-default": {
    name: "badge-default",
    component: React.lazy(() => import("./examples/badge-default")),
    files: ["registry/examples/badge-default.tsx"],
  },
  "badge-demo": {
    name: "badge-demo",
    component: React.lazy(() => import("./examples/badge-demo")),
    files: ["registry/examples/badge-demo.tsx"],
  },
  "badge-destructive": {
    name: "badge-destructive",
    component: React.lazy(() => import("./examples/badge-destructive")),
    files: ["registry/examples/badge-destructive.tsx"],
  },
  "badge-outline": {
    name: "badge-outline",
    component: React.lazy(() => import("./examples/badge-outline")),
    files: ["registry/examples/badge-outline.tsx"],
  },
  "badge-secondary": {
    name: "badge-secondary",
    component: React.lazy(() => import("./examples/badge-secondary")),
    files: ["registry/examples/badge-secondary.tsx"],
  },
  "badge-with-icon": {
    name: "badge-with-icon",
    component: React.lazy(() => import("./examples/badge-with-icon")),
    files: ["registry/examples/badge-with-icon.tsx"],
  },

  // Breadcrumb examples
  "breadcrumb-demo": {
    name: "breadcrumb-demo",
    component: React.lazy(() => import("./examples/breadcrumb-demo")),
    files: ["registry/examples/breadcrumb-demo.tsx"],
  },

  // Button examples
  "button-demo": {
    name: "button-demo",
    component: React.lazy(() => import("./examples/button-demo")),
    files: ["registry/examples/button-demo.tsx"],
  },
  "button-destructive": {
    name: "button-destructive",
    component: React.lazy(() => import("./examples/button-destructive")),
    files: ["registry/examples/button-destructive.tsx"],
  },
  "button-ghost": {
    name: "button-ghost",
    component: React.lazy(() => import("./examples/button-ghost")),
    files: ["registry/examples/button-ghost.tsx"],
  },
  "button-group-demo": {
    name: "button-group-demo",
    component: React.lazy(() => import("./examples/button-group-demo")),
    files: ["registry/examples/button-group-demo.tsx"],
  },
  "button-group-vertical": {
    name: "button-group-vertical",
    component: React.lazy(() => import("./examples/button-group-vertical")),
    files: ["registry/examples/button-group-vertical.tsx"],
  },
  "button-group-with-icons": {
    name: "button-group-with-icons",
    component: React.lazy(() => import("./examples/button-group-with-icons")),
    files: ["registry/examples/button-group-with-icons.tsx"],
  },
  "button-icon": {
    name: "button-icon",
    component: React.lazy(() => import("./examples/button-icon")),
    files: ["registry/examples/button-icon.tsx"],
  },
  "button-link": {
    name: "button-link",
    component: React.lazy(() => import("./examples/button-link")),
    files: ["registry/examples/button-link.tsx"],
  },
  "button-loading": {
    name: "button-loading",
    component: React.lazy(() => import("./examples/button-loading")),
    files: ["registry/examples/button-loading.tsx"],
  },
  "button-outline": {
    name: "button-outline",
    component: React.lazy(() => import("./examples/button-outline")),
    files: ["registry/examples/button-outline.tsx"],
  },
  "button-secondary": {
    name: "button-secondary",
    component: React.lazy(() => import("./examples/button-secondary")),
    files: ["registry/examples/button-secondary.tsx"],
  },
  "button-with-icon": {
    name: "button-with-icon",
    component: React.lazy(() => import("./examples/button-with-icon")),
    files: ["registry/examples/button-with-icon.tsx"],
  },

  // Calendar examples
  "calendar-demo": {
    name: "calendar-demo",
    component: React.lazy(() => import("./examples/calendar-demo")),
    files: ["registry/examples/calendar-demo.tsx"],
  },
  "calendar-multiple-months": {
    name: "calendar-multiple-months",
    component: React.lazy(() => import("./examples/calendar-multiple-months")),
    files: ["registry/examples/calendar-multiple-months.tsx"],
  },
  "calendar-with-dropdown": {
    name: "calendar-with-dropdown",
    component: React.lazy(() => import("./examples/calendar-with-dropdown")),
    files: ["registry/examples/calendar-with-dropdown.tsx"],
  },
  "calendar-with-range": {
    name: "calendar-with-range",
    component: React.lazy(() => import("./examples/calendar-with-range")),
    files: ["registry/examples/calendar-with-range.tsx"],
  },

  // Card examples
  "card-demo": {
    name: "card-demo",
    component: React.lazy(() => import("./examples/card-demo")),
    files: ["registry/examples/card-demo.tsx"],
  },
  "card-simple": {
    name: "card-simple",
    component: React.lazy(() => import("./examples/card-simple")),
    files: ["registry/examples/card-simple.tsx"],
  },

  // Chart examples
  "chart-area": {
    name: "chart-area",
    component: React.lazy(() => import("./examples/chart-area")),
    files: ["registry/examples/chart-area.tsx"],
  },
  "chart-demo": {
    name: "chart-demo",
    component: React.lazy(() => import("./examples/chart-demo")),
    files: ["registry/examples/chart-demo.tsx"],
  },
  "chart-line": {
    name: "chart-line",
    component: React.lazy(() => import("./examples/chart-line")),
    files: ["registry/examples/chart-line.tsx"],
  },
  "chart-pie": {
    name: "chart-pie",
    component: React.lazy(() => import("./examples/chart-pie")),
    files: ["registry/examples/chart-pie.tsx"],
  },
  "chart-radar": {
    name: "chart-radar",
    component: React.lazy(() => import("./examples/chart-radar")),
    files: ["registry/examples/chart-radar.tsx"],
  },
  "chart-with-legend": {
    name: "chart-with-legend",
    component: React.lazy(() => import("./examples/chart-with-legend")),
    files: ["registry/examples/chart-with-legend.tsx"],
  },

  // Checkbox examples
  "checkbox-demo": {
    name: "checkbox-demo",
    component: React.lazy(() => import("./examples/checkbox-demo")),
    files: ["registry/examples/checkbox-demo.tsx"],
  },
  "checkbox-disabled": {
    name: "checkbox-disabled",
    component: React.lazy(() => import("./examples/checkbox-disabled")),
    files: ["registry/examples/checkbox-disabled.tsx"],
  },
  "checkbox-with-label": {
    name: "checkbox-with-label",
    component: React.lazy(() => import("./examples/checkbox-with-label")),
    files: ["registry/examples/checkbox-with-label.tsx"],
  },
  "checkbox-with-text": {
    name: "checkbox-with-text",
    component: React.lazy(() => import("./examples/checkbox-with-text")),
    files: ["registry/examples/checkbox-with-text.tsx"],
  },

  // Code examples
  "code-block-demo": {
    name: "code-block-demo",
    component: React.lazy(() => import("./examples/code-block-demo")),
    files: ["registry/examples/code-block-demo.tsx"],
  },
  "code-block-line-numbers": {
    name: "code-block-line-numbers",
    component: React.lazy(() => import("./examples/code-block-line-numbers")),
    files: ["registry/examples/code-block-line-numbers.tsx"],
  },
  "code-block-simple": {
    name: "code-block-simple",
    component: React.lazy(() => import("./examples/code-block-simple")),
    files: ["registry/examples/code-block-simple.tsx"],
  },

  // Collapsible examples
  "collapsible-demo": {
    name: "collapsible-demo",
    component: React.lazy(() => import("./examples/collapsible-demo")),
    files: ["registry/examples/collapsible-demo.tsx"],
  },

  // Combobox examples
  "combobox-clear": {
    name: "combobox-clear",
    component: React.lazy(() => import("./examples/combobox-clear")),
    files: ["registry/examples/combobox-clear.tsx"],
  },
  "combobox-demo": {
    name: "combobox-demo",
    component: React.lazy(() => import("./examples/combobox-demo")),
    files: ["registry/examples/combobox-demo.tsx"],
  },
  "combobox-multiple": {
    name: "combobox-multiple",
    component: React.lazy(() => import("./examples/combobox-multiple")),
    files: ["registry/examples/combobox-multiple.tsx"],
  },
  "combobox-objects": {
    name: "combobox-objects",
    component: React.lazy(() => import("./examples/combobox-objects")),
    files: ["registry/examples/combobox-objects.tsx"],
  },

  // Command examples
  "command-demo": {
    name: "command-demo",
    component: React.lazy(() => import("./examples/command-demo")),
    files: ["registry/examples/command-demo.tsx"],
  },
  "command-dialog": {
    name: "command-dialog",
    component: React.lazy(() => import("./examples/command-dialog")),
    files: ["registry/examples/command-dialog.tsx"],
  },

  // Copy examples
  "copy-button-custom": {
    name: "copy-button-custom",
    component: React.lazy(() => import("./examples/copy-button-custom")),
    files: ["registry/examples/copy-button-custom.tsx"],
  },
  "copy-button-demo": {
    name: "copy-button-demo",
    component: React.lazy(() => import("./examples/copy-button-demo")),
    files: ["registry/examples/copy-button-demo.tsx"],
  },
  "copy-button-with-text": {
    name: "copy-button-with-text",
    component: React.lazy(() => import("./examples/copy-button-with-text")),
    files: ["registry/examples/copy-button-with-text.tsx"],
  },

  // Data Table examples
  "data-table-advanced": {
    name: "data-table-advanced",
    component: React.lazy(() => import("./examples/data-table-advanced")),
    files: ["registry/examples/data-table-advanced.tsx"],
  },
  "data-table-demo": {
    name: "data-table-demo",
    component: React.lazy(() => import("./examples/data-table-demo")),
    files: ["registry/examples/data-table-demo.tsx"],
  },
  "data-table-loading": {
    name: "data-table-loading",
    component: React.lazy(() => import("./examples/data-table-loading")),
    files: ["registry/examples/data-table-loading.tsx"],
  },

  // Date examples
  "date-picker-demo": {
    name: "date-picker-demo",
    component: React.lazy(() => import("./examples/date-picker-demo")),
    files: ["registry/examples/date-picker-demo.tsx"],
  },
  "date-picker-dob": {
    name: "date-picker-dob",
    component: React.lazy(() => import("./examples/date-picker-dob")),
    files: ["registry/examples/date-picker-dob.tsx"],
  },
  "date-picker-with-presets": {
    name: "date-picker-with-presets",
    component: React.lazy(() => import("./examples/date-picker-with-presets")),
    files: ["registry/examples/date-picker-with-presets.tsx"],
  },
  "date-picker-with-range": {
    name: "date-picker-with-range",
    component: React.lazy(() => import("./examples/date-picker-with-range")),
    files: ["registry/examples/date-picker-with-range.tsx"],
  },

  // Dialog examples
  "dialog-basic": {
    name: "dialog-basic",
    component: React.lazy(() => import("./examples/dialog-basic")),
    files: ["registry/examples/dialog-basic.tsx"],
  },
  "dialog-demo": {
    name: "dialog-demo",
    component: React.lazy(() => import("./examples/dialog-demo")),
    files: ["registry/examples/dialog-demo.tsx"],
  },

  // Drawer examples
  "drawer-demo": {
    name: "drawer-demo",
    component: React.lazy(() => import("./examples/drawer-demo")),
    files: ["registry/examples/drawer-demo.tsx"],
  },

  // Dropdown Menu examples
  "dropdown-menu-checkboxes": {
    name: "dropdown-menu-checkboxes",
    component: React.lazy(() => import("./examples/dropdown-menu-checkboxes")),
    files: ["registry/examples/dropdown-menu-checkboxes.tsx"],
  },
  "dropdown-menu-demo": {
    name: "dropdown-menu-demo",
    component: React.lazy(() => import("./examples/dropdown-menu-demo")),
    files: ["registry/examples/dropdown-menu-demo.tsx"],
  },
  "dropdown-menu-radio": {
    name: "dropdown-menu-radio",
    component: React.lazy(() => import("./examples/dropdown-menu-radio")),
    files: ["registry/examples/dropdown-menu-radio.tsx"],
  },
  "dropdown-menu-with-icons": {
    name: "dropdown-menu-with-icons",
    component: React.lazy(() => import("./examples/dropdown-menu-with-icons")),
    files: ["registry/examples/dropdown-menu-with-icons.tsx"],
  },

  // Empty examples
  "empty-demo": {
    name: "empty-demo",
    component: React.lazy(() => import("./examples/empty-demo")),
    files: ["registry/examples/empty-demo.tsx"],
  },
  "empty-icon": {
    name: "empty-icon",
    component: React.lazy(() => import("./examples/empty-icon")),
    files: ["registry/examples/empty-icon.tsx"],
  },

  // Field examples
  "field-demo": {
    name: "field-demo",
    component: React.lazy(() => import("./examples/field-demo")),
    files: ["registry/examples/field-demo.tsx"],
  },
  "field-horizontal": {
    name: "field-horizontal",
    component: React.lazy(() => import("./examples/field-horizontal")),
    files: ["registry/examples/field-horizontal.tsx"],
  },
  "field-with-error": {
    name: "field-with-error",
    component: React.lazy(() => import("./examples/field-with-error")),
    files: ["registry/examples/field-with-error.tsx"],
  },

  // Form examples
  "form-array": {
    name: "form-array",
    component: React.lazy(() => import("./examples/form-array")),
    files: ["registry/examples/form-array.tsx"],
  },
  "form-demo": {
    name: "form-demo",
    component: React.lazy(() => import("./examples/form-demo")),
    files: ["registry/examples/form-demo.tsx"],
  },
  "form-fields": {
    name: "form-fields",
    component: React.lazy(() => import("./examples/form-fields")),
    files: ["registry/examples/form-fields.tsx"],
  },
  "form-validation": {
    name: "form-validation",
    component: React.lazy(() => import("./examples/form-validation")),
    files: ["registry/examples/form-validation.tsx"],
  },

  // Hover Card examples
  "hover-card-demo": {
    name: "hover-card-demo",
    component: React.lazy(() => import("./examples/hover-card-demo")),
    files: ["registry/examples/hover-card-demo.tsx"],
  },

  // Input examples
  "input-default": {
    name: "input-default",
    component: React.lazy(() => import("./examples/input-default")),
    files: ["registry/examples/input-default.tsx"],
  },
  "input-demo": {
    name: "input-demo",
    component: React.lazy(() => import("./examples/input-demo")),
    files: ["registry/examples/input-demo.tsx"],
  },
  "input-disabled": {
    name: "input-disabled",
    component: React.lazy(() => import("./examples/input-disabled")),
    files: ["registry/examples/input-disabled.tsx"],
  },
  "input-file": {
    name: "input-file",
    component: React.lazy(() => import("./examples/input-file")),
    files: ["registry/examples/input-file.tsx"],
  },
  "input-group-button": {
    name: "input-group-button",
    component: React.lazy(() => import("./examples/input-group-button")),
    files: ["registry/examples/input-group-button.tsx"],
  },
  "input-group-demo": {
    name: "input-group-demo",
    component: React.lazy(() => import("./examples/input-group-demo")),
    files: ["registry/examples/input-group-demo.tsx"],
  },
  "input-group-text": {
    name: "input-group-text",
    component: React.lazy(() => import("./examples/input-group-text")),
    files: ["registry/examples/input-group-text.tsx"],
  },
  "input-otp-controlled": {
    name: "input-otp-controlled",
    component: React.lazy(() => import("./examples/input-otp-controlled")),
    files: ["registry/examples/input-otp-controlled.tsx"],
  },
  "input-otp-demo": {
    name: "input-otp-demo",
    component: React.lazy(() => import("./examples/input-otp-demo")),
    files: ["registry/examples/input-otp-demo.tsx"],
  },
  "input-otp-pattern": {
    name: "input-otp-pattern",
    component: React.lazy(() => import("./examples/input-otp-pattern")),
    files: ["registry/examples/input-otp-pattern.tsx"],
  },
  "input-otp-separator": {
    name: "input-otp-separator",
    component: React.lazy(() => import("./examples/input-otp-separator")),
    files: ["registry/examples/input-otp-separator.tsx"],
  },
  "input-with-button": {
    name: "input-with-button",
    component: React.lazy(() => import("./examples/input-with-button")),
    files: ["registry/examples/input-with-button.tsx"],
  },
  "input-with-label": {
    name: "input-with-label",
    component: React.lazy(() => import("./examples/input-with-label")),
    files: ["registry/examples/input-with-label.tsx"],
  },

  // Label examples
  "label-demo": {
    name: "label-demo",
    component: React.lazy(() => import("./examples/label-demo")),
    files: ["registry/examples/label-demo.tsx"],
  },
  "label-with-checkbox": {
    name: "label-with-checkbox",
    component: React.lazy(() => import("./examples/label-with-checkbox")),
    files: ["registry/examples/label-with-checkbox.tsx"],
  },
  "label-with-input": {
    name: "label-with-input",
    component: React.lazy(() => import("./examples/label-with-input")),
    files: ["registry/examples/label-with-input.tsx"],
  },

  // Number examples
  "number-input-controlled": {
    name: "number-input-controlled",
    component: React.lazy(() => import("./examples/number-input-controlled")),
    files: ["registry/examples/number-input-controlled.tsx"],
  },
  "number-input-demo": {
    name: "number-input-demo",
    component: React.lazy(() => import("./examples/number-input-demo")),
    files: ["registry/examples/number-input-demo.tsx"],
  },
  "number-input-disabled": {
    name: "number-input-disabled",
    component: React.lazy(() => import("./examples/number-input-disabled")),
    files: ["registry/examples/number-input-disabled.tsx"],
  },
  "number-input-step": {
    name: "number-input-step",
    component: React.lazy(() => import("./examples/number-input-step")),
    files: ["registry/examples/number-input-step.tsx"],
  },

  // Pagination examples
  "pagination-demo": {
    name: "pagination-demo",
    component: React.lazy(() => import("./examples/pagination-demo")),
    files: ["registry/examples/pagination-demo.tsx"],
  },

  // Popover examples
  "popover-demo": {
    name: "popover-demo",
    component: React.lazy(() => import("./examples/popover-demo")),
    files: ["registry/examples/popover-demo.tsx"],
  },

  // Progress examples
  "progress-demo": {
    name: "progress-demo",
    component: React.lazy(() => import("./examples/progress-demo")),
    files: ["registry/examples/progress-demo.tsx"],
  },

  // Radio Group examples
  "radio-group-demo": {
    name: "radio-group-demo",
    component: React.lazy(() => import("./examples/radio-group-demo")),
    files: ["registry/examples/radio-group-demo.tsx"],
  },

  // Scroll Area examples
  "scroll-area-demo": {
    name: "scroll-area-demo",
    component: React.lazy(() => import("./examples/scroll-area-demo")),
    files: ["registry/examples/scroll-area-demo.tsx"],
  },

  // Select examples
  "select-demo": {
    name: "select-demo",
    component: React.lazy(() => import("./examples/select-demo")),
    files: ["registry/examples/select-demo.tsx"],
  },
  "select-with-groups": {
    name: "select-with-groups",
    component: React.lazy(() => import("./examples/select-with-groups")),
    files: ["registry/examples/select-with-groups.tsx"],
  },

  // Separator examples
  "separator-demo": {
    name: "separator-demo",
    component: React.lazy(() => import("./examples/separator-demo")),
    files: ["registry/examples/separator-demo.tsx"],
  },
  "separator-horizontal": {
    name: "separator-horizontal",
    component: React.lazy(() => import("./examples/separator-horizontal")),
    files: ["registry/examples/separator-horizontal.tsx"],
  },
  "separator-vertical": {
    name: "separator-vertical",
    component: React.lazy(() => import("./examples/separator-vertical")),
    files: ["registry/examples/separator-vertical.tsx"],
  },

  // Sheet examples
  "sheet-demo": {
    name: "sheet-demo",
    component: React.lazy(() => import("./examples/sheet-demo")),
    files: ["registry/examples/sheet-demo.tsx"],
  },
  "sheet-side": {
    name: "sheet-side",
    component: React.lazy(() => import("./examples/sheet-side")),
    files: ["registry/examples/sheet-side.tsx"],
  },

  // Sidebar examples
  "sidebar-demo": {
    name: "sidebar-demo",
    component: React.lazy(() => import("./examples/sidebar-demo")),
    files: ["registry/examples/sidebar-demo.tsx"],
  },

  // Skeleton examples
  "skeleton-card": {
    name: "skeleton-card",
    component: React.lazy(() => import("./examples/skeleton-card")),
    files: ["registry/examples/skeleton-card.tsx"],
  },
  "skeleton-demo": {
    name: "skeleton-demo",
    component: React.lazy(() => import("./examples/skeleton-demo")),
    files: ["registry/examples/skeleton-demo.tsx"],
  },

  // Slider examples
  "slider-demo": {
    name: "slider-demo",
    component: React.lazy(() => import("./examples/slider-demo")),
    files: ["registry/examples/slider-demo.tsx"],
  },

  // Sonner examples
  "sonner-demo": {
    name: "sonner-demo",
    component: React.lazy(() => import("./examples/sonner-demo")),
    files: ["registry/examples/sonner-demo.tsx"],
  },
  "sonner-types": {
    name: "sonner-types",
    component: React.lazy(() => import("./examples/sonner-types")),
    files: ["registry/examples/sonner-types.tsx"],
  },

  // Spinner examples
  "spinner-button": {
    name: "spinner-button",
    component: React.lazy(() => import("./examples/spinner-button")),
    files: ["registry/examples/spinner-button.tsx"],
  },
  "spinner-demo": {
    name: "spinner-demo",
    component: React.lazy(() => import("./examples/spinner-demo")),
    files: ["registry/examples/spinner-demo.tsx"],
  },
  "spinner-sizes": {
    name: "spinner-sizes",
    component: React.lazy(() => import("./examples/spinner-sizes")),
    files: ["registry/examples/spinner-sizes.tsx"],
  },

  // Stat examples
  "stat-card-basic": {
    name: "stat-card-basic",
    component: React.lazy(() => import("./examples/stat-card-basic")),
    files: ["registry/examples/stat-card-basic.tsx"],
  },
  "stat-card-demo": {
    name: "stat-card-demo",
    component: React.lazy(() => import("./examples/stat-card-demo")),
    files: ["registry/examples/stat-card-demo.tsx"],
  },
  "stat-card-grid": {
    name: "stat-card-grid",
    component: React.lazy(() => import("./examples/stat-card-grid")),
    files: ["registry/examples/stat-card-grid.tsx"],
  },
  "stat-card-negative-trend": {
    name: "stat-card-negative-trend",
    component: React.lazy(() => import("./examples/stat-card-negative-trend")),
    files: ["registry/examples/stat-card-negative-trend.tsx"],
  },
  "stat-card-with-icon": {
    name: "stat-card-with-icon",
    component: React.lazy(() => import("./examples/stat-card-with-icon")),
    files: ["registry/examples/stat-card-with-icon.tsx"],
  },
  "stat-card-with-trend": {
    name: "stat-card-with-trend",
    component: React.lazy(() => import("./examples/stat-card-with-trend")),
    files: ["registry/examples/stat-card-with-trend.tsx"],
  },

  // Switch examples
  "switch-demo": {
    name: "switch-demo",
    component: React.lazy(() => import("./examples/switch-demo")),
    files: ["registry/examples/switch-demo.tsx"],
  },
  "switch-disabled": {
    name: "switch-disabled",
    component: React.lazy(() => import("./examples/switch-disabled")),
    files: ["registry/examples/switch-disabled.tsx"],
  },
  "switch-with-label": {
    name: "switch-with-label",
    component: React.lazy(() => import("./examples/switch-with-label")),
    files: ["registry/examples/switch-with-label.tsx"],
  },

  // Table examples
  "table-demo": {
    name: "table-demo",
    component: React.lazy(() => import("./examples/table-demo")),
    files: ["registry/examples/table-demo.tsx"],
  },

  // Tabs examples
  "tabs-demo": {
    name: "tabs-demo",
    component: React.lazy(() => import("./examples/tabs-demo")),
    files: ["registry/examples/tabs-demo.tsx"],
  },
  "tabs-underline": {
    name: "tabs-underline",
    component: React.lazy(() => import("./examples/tabs-underline")),
    files: ["registry/examples/tabs-underline.tsx"],
  },
  "tabs-with-cards": {
    name: "tabs-with-cards",
    component: React.lazy(() => import("./examples/tabs-with-cards")),
    files: ["registry/examples/tabs-with-cards.tsx"],
  },

  // Tag examples
  "tag-input-controlled": {
    name: "tag-input-controlled",
    component: React.lazy(() => import("./examples/tag-input-controlled")),
    files: ["registry/examples/tag-input-controlled.tsx"],
  },
  "tag-input-demo": {
    name: "tag-input-demo",
    component: React.lazy(() => import("./examples/tag-input-demo")),
    files: ["registry/examples/tag-input-demo.tsx"],
  },
  "tag-input-disabled": {
    name: "tag-input-disabled",
    component: React.lazy(() => import("./examples/tag-input-disabled")),
    files: ["registry/examples/tag-input-disabled.tsx"],
  },
  "tag-input-max": {
    name: "tag-input-max",
    component: React.lazy(() => import("./examples/tag-input-max")),
    files: ["registry/examples/tag-input-max.tsx"],
  },

  // Textarea examples
  "textarea-default": {
    name: "textarea-default",
    component: React.lazy(() => import("./examples/textarea-default")),
    files: ["registry/examples/textarea-default.tsx"],
  },
  "textarea-demo": {
    name: "textarea-demo",
    component: React.lazy(() => import("./examples/textarea-demo")),
    files: ["registry/examples/textarea-demo.tsx"],
  },
  "textarea-disabled": {
    name: "textarea-disabled",
    component: React.lazy(() => import("./examples/textarea-disabled")),
    files: ["registry/examples/textarea-disabled.tsx"],
  },
  "textarea-with-label": {
    name: "textarea-with-label",
    component: React.lazy(() => import("./examples/textarea-with-label")),
    files: ["registry/examples/textarea-with-label.tsx"],
  },
  "textarea-with-text": {
    name: "textarea-with-text",
    component: React.lazy(() => import("./examples/textarea-with-text")),
    files: ["registry/examples/textarea-with-text.tsx"],
  },

  // Toggle examples
  "toggle-demo": {
    name: "toggle-demo",
    component: React.lazy(() => import("./examples/toggle-demo")),
    files: ["registry/examples/toggle-demo.tsx"],
  },
  "toggle-disabled": {
    name: "toggle-disabled",
    component: React.lazy(() => import("./examples/toggle-disabled")),
    files: ["registry/examples/toggle-disabled.tsx"],
  },
  "toggle-outline": {
    name: "toggle-outline",
    component: React.lazy(() => import("./examples/toggle-outline")),
    files: ["registry/examples/toggle-outline.tsx"],
  },
  "toggle-with-text": {
    name: "toggle-with-text",
    component: React.lazy(() => import("./examples/toggle-with-text")),
    files: ["registry/examples/toggle-with-text.tsx"],
  },

  // Toggle Group examples
  "toggle-group-demo": {
    name: "toggle-group-demo",
    component: React.lazy(() => import("./examples/toggle-group-demo")),
    files: ["registry/examples/toggle-group-demo.tsx"],
  },
  "toggle-group-outline": {
    name: "toggle-group-outline",
    component: React.lazy(() => import("./examples/toggle-group-outline")),
    files: ["registry/examples/toggle-group-outline.tsx"],
  },
  "toggle-group-single": {
    name: "toggle-group-single",
    component: React.lazy(() => import("./examples/toggle-group-single")),
    files: ["registry/examples/toggle-group-single.tsx"],
  },

  // Tooltip examples
  "tooltip-demo": {
    name: "tooltip-demo",
    component: React.lazy(() => import("./examples/tooltip-demo")),
    files: ["registry/examples/tooltip-demo.tsx"],
  },

  // Typography examples
  "typography-demo": {
    name: "typography-demo",
    component: React.lazy(() => import("./examples/typography-demo")),
    files: ["registry/examples/typography-demo.tsx"],
  },
}
