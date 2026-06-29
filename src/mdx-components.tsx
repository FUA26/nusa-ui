import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import { BlocksGrid } from "@/components/blocks-grid"
import { CodeBlockCommand } from "@/components/code-block-command"
import { CodeTabs } from "@/components/code-tabs"
import { ComponentsGrid } from "@/components/components-grid"
import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"
import {
  TabsContent as FumadocsTabsContent,
  TabsList as FumadocsTabsList,
  TabsTrigger as FumadocsTabsTrigger,
} from "fumadocs-ui/components/tabs"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
      <h1
        className={cn(
          "mt-2 scroll-m-28 font-heading text-3xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
      <h2
        className={cn(
          "mt-10 scroll-m-28 font-heading text-xl font-medium tracking-tight first:mt-0 lg:mt-16 [&+.steps]:mt-0! [&+.steps>h3]:mt-4! [&+h3]:mt-6! [&+p]:mt-4!",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <h3
        className={cn(
          "mt-12 scroll-m-28 font-heading text-lg font-normal tracking-tight [&+p]:mt-4!",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
      <h4
        className={cn(
          "mt-8 scroll-m-28 font-heading text-base font-medium tracking-tight",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.ComponentProps<"a">) => (
      <a
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.ComponentProps<"p">) => (
      <p
        className={cn("leading-relaxed not-first:mt-6", className)}
        {...props}
      />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <strong className={cn("font-medium", className)} {...props} />
    ),
    ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
      <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
      <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.ComponentProps<"li">) => (
      <li className={cn("mt-2", className)} {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<"table">) => (
      <div className="no-scrollbar my-6 w-full overflow-y-auto rounded-lg border">
        <table
          className={cn(
            "relative my-0! w-full overflow-hidden border-none bg-transparent! text-sm [&_tbody_tr:last-child]:border-b-0",
            className
          )}
          {...props}
        />
      </div>
    ),
    tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
      <tr className={cn("m-0 border-b", className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<"th">) => (
      <th
        className={cn(
          "px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentProps<"td">) => (
      <td
        className={cn(
          "px-4 py-2 text-left whitespace-nowrap [[align=center]]:text-center [[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => (
      <pre
        className={cn(
          "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-data-highlighted-line:px-0 has-data-line-numbers:px-0 has-data-[slot=tabs]:p-0",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    ),
    figcaption: ({
      className,
      children,
      ...props
    }: React.ComponentProps<"figcaption">) => (
      <figcaption
        className={cn(
          "text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70",
          className
        )}
        {...props}
      >
        {children}
      </figcaption>
    ),
    code: ({
      className,
      __raw__,
      __src__,
      __npm__,
      __yarn__,
      __pnpm__,
      __bun__,
      ...props
    }: React.ComponentProps<"code"> & {
      __raw__?: string
      __src__?: string
      __npm__?: string
      __yarn__?: string
      __pnpm__?: string
      __bun__?: string
    }) => {
      if (typeof props.children === "string") {
        return (
          <code
            className={cn(
              "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] wrap-break-word outline-none",
              className
            )}
            {...props}
          />
        )
      }

      const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__
      if (isNpmCommand) {
        return (
          <CodeBlockCommand
            __npm__={__npm__}
            __yarn__={__yarn__}
            __pnpm__={__pnpm__}
            __bun__={__bun__}
          />
        )
      }

      return (
        <>
          {__raw__ && <CopyButton value={__raw__} />}
          <code {...props} />
        </>
      )
    },
    Image: ({
      src,
      className,
      width,
      height,
      alt,
      ...props
    }: React.ComponentProps<"img">) => (
      <Image
        className={cn("mt-6 rounded-md border", className)}
        src={(src as string) || ""}
        width={Number(width)}
        height={Number(height)}
        alt={alt || ""}
        {...props}
      />
    ),
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
      <Link
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),
    Tabs: CodeTabs,
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof FumadocsTabsList>) => (
      <FumadocsTabsList className={className} {...props} />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof FumadocsTabsTrigger>) => (
      <FumadocsTabsTrigger className={className} {...props} />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof FumadocsTabsContent>) => (
      <FumadocsTabsContent
        className={cn(
          "relative [&_h3.font-heading]:text-base *:[figure]:first:mt-0 [&>.steps]:mt-6",
          className
        )}
        {...props}
      />
    ),
    ComponentsGrid,
    BlocksGrid,
  }
}
