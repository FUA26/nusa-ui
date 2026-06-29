import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"

import { Folder, Item } from "@/components/sidebar-components"
import { baseOptions } from "@/lib/layout.shared"
import { source } from "@/lib/source"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{ components: { Folder, Item } }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  )
}
