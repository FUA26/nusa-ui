import * as React from "react"

import { ComponentPreviewTabs } from "@/components/component-preview-tabs"

export function ComponentPreview({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  sourcePreview,
  ...props
}: React.ComponentProps<"div"> & {
  previewClassName?: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
  sourcePreview?: React.ReactNode
}) {
  return (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      component={component}
      source={source}
      sourcePreview={sourcePreview}
      chromeLessOnMobile={chromeLessOnMobile}
      {...props}
    />
  )
}
