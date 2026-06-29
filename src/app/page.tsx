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
              Fumadocs registry shell
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                Nusa UI docs, registry, and install flow in one place.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Phase 2 puts the docs system in place first: navigation, MDX
                pages, search, OG images, and LLM exports. Brand and contributor
                details from the reference stay out of the output.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/docs">Open docs</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/docs/get-started">Get started</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border bg-card/90 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium text-muted-foreground">
                What ships in phase 2
              </div>
              <ul className="flex flex-col gap-3 text-sm leading-6">
                <li>Docs routing and Fumadocs layout</li>
                <li>MDX content for root pages and component indexes</li>
                <li>Search, OG, and LLM export routes</li>
                <li>Brand cleanup to Nusa UI</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  )
}
