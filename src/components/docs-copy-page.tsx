"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import {
  Bot,
  Check,
  ChevronDown,
  Code2,
  Copy,
  MessageSquareText,
  Sparkles,
} from "lucide-react"
import * as React from "react"
import { DropdownMenu } from "radix-ui"

import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm looking at this @nusa-ui documentation: ${url}. Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`
  )}`
}

type DocsCopyPageProps = React.ComponentProps<"div"> & {
  page: string
  url: string
}

export function DocsCopyPage({
  page,
  url,
  className,
  ...props
}: DocsCopyPageProps) {
  const { slug } = useParams<{ slug?: string[] }>()
  const [isCopied, setIsCopied] = React.useState(false)

  React.useEffect(() => {
    if (!isCopied) return

    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isCopied])

  if (!slug) return null

  const menuItems = [
    {
      label: "View as Markdown",
      href: `/llms.mdx/docs/${slug.join("/")}`,
      icon: <Code2 className="size-3.5" />,
    },
    {
      label: "Open in ChatGPT",
      href: getPromptUrl("https://chatgpt.com", url),
      icon: <MessageSquareText className="size-3.5" />,
    },
    {
      label: "Open in Claude",
      href: getPromptUrl("https://claude.ai/new", url),
      icon: <Bot className="size-3.5" />,
    },
    {
      label: "Open in v0",
      href: getPromptUrl("https://v0.dev", url),
      icon: <Sparkles className="size-3.5" />,
    },
  ]

  return (
    <div className={cn("relative flex items-center", className)} {...props}>
      <Button
        variant="secondary"
        size="sm"
        className="h-8 rounded-e-none border-e-0 text-xs"
        onClick={() => {
          copyToClipboardWithMeta(page)
          setIsCopied(true)
        }}
      >
        {isCopied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5" />
        )}
        Copy Page
      </Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            size="icon-sm"
            variant="secondary"
            className="size-8 rounded-s-none border-s border-s-foreground/10"
          >
            <ChevronDown />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            sideOffset={8}
            className="z-50 min-w-52 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
          >
            {menuItems.map((menuItem) => (
              <DropdownMenu.Item key={menuItem.label} asChild>
                <Link
                  href={menuItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none hover:bg-muted focus:bg-muted"
                >
                  {menuItem.icon}
                  {menuItem.label}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
