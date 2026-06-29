import * as React from "react"

import {
  Tabs as FumadocsTabs,
  TabsContent as FumadocsTabsContent,
  TabsList as FumadocsTabsList,
  TabsTrigger as FumadocsTabsTrigger,
  type TabsProps,
} from "fumadocs-ui/components/ui/tabs"
import { cn } from "@/lib/utils"

export type { TabsProps }

export function Tabs({
  ref,
  groupId,
  persist,
  updateAnchor,
  defaultValue,
  value,
  onValueChange,
  ...props
}: TabsProps) {
  return (
    <FumadocsTabs
      ref={ref}
      groupId={groupId}
      persist={persist}
      updateAnchor={updateAnchor}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      {...props}
    />
  )
}

export function TabsList({
  className,
  variant = "underline",
  ...props
}: React.ComponentProps<typeof FumadocsTabsList> & {
  variant?: "default" | "underline"
}) {
  return (
    <FumadocsTabsList
      className={cn(
        variant === "underline" &&
          "rounded-none border-b border-border/50 bg-transparent p-0",
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof FumadocsTabsTrigger>) {
  return <FumadocsTabsTrigger className={className} {...props} />
}

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof FumadocsTabsContent>) {
  return <FumadocsTabsContent className={className} {...props} />
}
