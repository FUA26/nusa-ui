"use client"

import * as React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible.Root>) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible.Root
      className={cn("group/collapsible relative md:-mx-1", className)}
      onOpenChange={setIsOpened}
      open={isOpened}
      {...props}
    >
      <div className="absolute top-2 right-10 z-10 flex items-center">
        <Collapsible.Trigger asChild>
          <Button className="text-muted-foreground" variant="ghost" size="sm">
            {isOpened ? "Collapse" : "Expand"}
          </Button>
        </Collapsible.Trigger>
        <Separator className="mx-1.5 h-4!" orientation="vertical" />
      </div>
      <Collapsible.Content
        className="relative mt-6 h-full overflow-hidden data-[state=closed]:max-h-82 [&>figure]:mt-0 [&>figure]:md:mx-0!"
        forceMount
      >
        {children}
      </Collapsible.Content>
      {!isOpened && (
        <Collapsible.Trigger className="absolute inset-x-0 -bottom-2 flex h-20 cursor-pointer items-center justify-center rounded-b-lg bg-gradient-to-b from-code/50 to-code text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Expand
        </Collapsible.Trigger>
      )}
    </Collapsible.Root>
  )
}
