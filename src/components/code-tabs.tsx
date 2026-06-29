"use client"

import * as React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const INSTALL_TYPE_KEY = "nusa-ui-install-type"

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [installationType, setInstallationType] = React.useState<
    "pnpm" | "npm" | "yarn" | "bun"
  >("pnpm")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setMounted(true)
      const stored = localStorage.getItem(INSTALL_TYPE_KEY) as
        "pnpm" | "npm" | "yarn" | "bun" | null
      if (stored && ["pnpm", "npm", "yarn", "bun"].includes(stored)) {
        setInstallationType(stored)
      }
    }, 0)

    return () => window.clearTimeout(timer)
  }, [])

  const handleValueChange = (value: string) => {
    const type = value as "pnpm" | "npm" | "yarn" | "bun"
    setInstallationType(type)
    localStorage.setItem(INSTALL_TYPE_KEY, type)
  }

  if (!mounted) {
    return (
      <Tabs value="pnpm" className="relative mt-6 w-full gap-4">
        {children}
      </Tabs>
    )
  }

  return (
    <Tabs
      value={installationType}
      onValueChange={handleValueChange}
      className="relative mt-6 w-full gap-4"
    >
      {children}
    </Tabs>
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
