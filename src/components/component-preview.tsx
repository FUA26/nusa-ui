import * as React from "react"

import { ComponentSource } from "@/components/component-source"
import { ComponentPreviewTabs } from "@/components/component-preview-tabs"
import { Index } from "@/registry/__index__"

export function ComponentPreview({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  name,
  component,
  source,
  sourcePreview,
  ...props
}: React.ComponentProps<"div"> & {
  previewClassName?: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  name?: keyof typeof Index | string
  component?: React.ReactNode
  source?: React.ReactNode
  sourcePreview?: React.ReactNode
}) {
  const previewComponent = name
    ? Index[name as keyof typeof Index]?.component
    : component

  if (!previewComponent) {
    return (
      <div
        className="rounded-xl border border-dashed p-6 text-sm text-muted-foreground"
        {...props}
      >
        Component preview <code>{name ?? "unknown"}</code> was not found.
      </div>
    )
  }

  const previewSource =
    source ??
    (name ? <ComponentSource name={name} collapsible={false} /> : null)
  const previewSourcePreview =
    sourcePreview ??
    (name ? (
      <ComponentSource name={name} collapsible={false} maxLines={3} />
    ) : null)

  return (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      component={previewComponent}
      source={previewSource}
      sourcePreview={previewSourcePreview}
      chromeLessOnMobile={chromeLessOnMobile}
      {...props}
    />
  )
}
