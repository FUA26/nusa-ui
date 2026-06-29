"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "fumadocs-ui/components/ui/collapsible"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible
      className={cn("group/collapsible relative md:-mx-1", className)}
      onOpenChange={setIsOpened}
      open={isOpened}
      {...props}
    >
      <div className="absolute top-2 right-10 z-10 flex items-center">
        <CollapsibleTrigger asChild>
          <Button className="text-muted-foreground" variant="ghost" size="sm">
            {isOpened ? "Collapse" : "Expand"}
          </Button>
        </CollapsibleTrigger>
        <div className="mx-1.5 h-4 w-px bg-border" />
      </div>
      <CollapsibleContent
        className="relative mt-6 h-full overflow-hidden data-[state=closed]:max-h-82 [&>figure]:mt-0 [&>figure]:md:mx-0!"
        forceMount
      >
        {children}
      </CollapsibleContent>
      {!isOpened && (
        <CollapsibleTrigger className="from-code/50 to-code absolute inset-x-0 -bottom-2 flex h-20 cursor-pointer items-center justify-center rounded-b-lg bg-gradient-to-b text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Expand
        </CollapsibleTrigger>
      )}
    </Collapsible>
  )
}
