import { notFound } from "next/navigation"
import { generateOGImage } from "fumadocs-ui/og"

import { SITE_NAME } from "@/lib/site"
import { source } from "@/lib/source"

type DocsParams = {
  slug: string[]
}

type RouteProps = {
  params: Promise<DocsParams>
}

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params
  const page = source.getPage(slug)

  if (!page) {
    notFound()
  }

  return generateOGImage({
    title: page.data.title ?? SITE_NAME,
    description: page.data.description,
    site: SITE_NAME,
    primaryColor: "rgba(15, 23, 42, 0.9)",
    primaryTextColor: "rgb(34, 197, 94)",
  })
}
