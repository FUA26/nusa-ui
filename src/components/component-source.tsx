import * as React from "react"
import path from "node:path"
import { readFile } from "node:fs/promises"

import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper"
import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"
import { highlightCode } from "@/lib/highlight-code"

async function resolveSourcePath({
  name,
  src,
}: {
  name?: string
  src?: string
}) {
  const root = process.cwd()
  const candidates = [] as string[]

  if (src) {
    candidates.push(path.isAbsolute(src) ? src : path.join(root, src))
  }

  if (name) {
    candidates.push(
      path.join(root, "registry", "examples", `${name}.tsx`),
      path.join(root, "registry", "ui", `${name}.tsx`)
    )
  }

  for (const candidate of candidates) {
    try {
      await readFile(candidate, "utf8")
      return candidate
    } catch {
      // Continue searching.
    }
  }

  return null
}

export async function ComponentSource({
  className,
  name,
  src,
  title,
  language = "tsx",
  collapsible = true,
  maxLines,
  ...props
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
  maxLines?: number
}) {
  const sourcePath = await resolveSourcePath({ name, src })

  if (!sourcePath) {
    return (
      <div
        className={cn(
          "rounded-xl border p-4 text-sm text-muted-foreground",
          className
        )}
        {...props}
      >
        Source file for <code>{name ?? src ?? "unknown"}</code> was not found.
      </div>
    )
  }

  const raw = await readFile(sourcePath, "utf8")
  const code = maxLines ? raw.split(/\r?\n/).slice(0, maxLines).join("\n") : raw
  const highlighted = await highlightCode(code, language)
  const resolvedTitle =
    title ?? path.relative(process.cwd(), sourcePath).replace(/\\/g, "/")
  const figure = (
    <figure
      className={cn(className)}
      data-rehype-pretty-code-figure=""
      {...props}
    >
      <figcaption
        className="flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70"
        data-rehype-pretty-code-title=""
        data-language={language}
        data-theme="github-dark github-light"
      >
        {resolvedTitle}
      </figcaption>
      <CopyButton value={code} />
      <div dangerouslySetInnerHTML={{ __html: highlighted }} />
    </figure>
  )

  if (!collapsible) {
    return figure
  }

  return <CodeCollapsibleWrapper>{figure}</CodeCollapsibleWrapper>
}
