import Link from "next/link"

import { HomeLayout } from "fumadocs-ui/layouts/home"

import { Button } from "@/components/ui/button"
import { baseOptions } from "@/lib/layout.shared"

export default function Page() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Nusa UI registry shell
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                A focused design system for teams that ship with source code.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Nusa UI brings docs, registry installs, and MDX content into one
                controlled surface. The experience stays clean, the source stays
                yours, and the rollout stays easy to reason about.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/docs">Explore documentation</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/docs/get-started">Start with install flow</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border bg-card/90 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium text-muted-foreground">
                Built for the current phase
              </div>
              <ul className="flex flex-col gap-3 text-sm leading-6">
                <li>Brand-first docs shell with Nusa UI identity</li>
                <li>Registry delivery for shadcn-compatible installs</li>
                <li>
                  MDX pages, previews, and code examples with parity in mind
                </li>
                <li>
                  Search, OG, and export routes wired for the docs surface
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  )
}
