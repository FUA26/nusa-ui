import { source } from "@/lib/source"

export const revalidate = false

type DocsParams = {
  slug?: string[]
}

type RouteProps = {
  params: Promise<DocsParams>
}

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params
  const page = source.getPage(slug)

  if (!page) {
    return new Response("Not found", { status: 404 })
  }

  const title = page.data.title ? `# ${page.data.title}\n\n` : ""
  const description = page.data.description
    ? `${page.data.description}\n\n`
    : ""
  const markdown = await page.data.getText("processed")

  return new Response(`${title}${description}${markdown}`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  })
}
