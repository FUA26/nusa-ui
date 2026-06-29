import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page"

import { getMDXComponents } from "@/mdx-components"
import { absoluteUrl, SITE_NAME } from "@/lib/site"
import { getPageImage, source } from "@/lib/source"

type DocsParams = {
  slug?: string[]
}

type PageProps = {
  params: Promise<DocsParams>
}

function resolvePath(slug?: string[]) {
  return slug?.length ? `/docs/${slug.join("/")}` : "/docs"
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = source.getPage(slug)

  if (!page) {
    return {}
  }

  const pathname = resolvePath(slug)
  const image = getPageImage(page)

  return {
    title: page.data.title ?? SITE_NAME,
    description: page.data.description,
    alternates: {
      canonical: absoluteUrl(pathname),
    },
    openGraph: {
      title: page.data.title ?? SITE_NAME,
      description: page.data.description,
      url: absoluteUrl(pathname),
      images: [absoluteUrl(image.url)],
    },
  }
}

export async function generateStaticParams() {
  return source.generateParams()
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const page = source.getPage(slug)

  if (!page) {
    notFound()
  }

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  )
}
