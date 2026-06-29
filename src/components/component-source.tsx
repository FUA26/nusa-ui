import * as React from "react"

export function ComponentSource({
  className,
  ...props
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
  maxLines?: number
}) {
  return <div className={className} {...props} />
}
