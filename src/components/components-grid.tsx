import Link from "next/link"

const components = [
  { name: "Accordion", href: "/docs/components/accordion" },
  { name: "Alert", href: "/docs/components/alert" },
  { name: "Button", href: "/docs/components/button" },
  { name: "Card", href: "/docs/components/card" },
  { name: "Checkbox", href: "/docs/components/checkbox" },
]

export function ComponentsGrid() {
  return (
    <div className="not-prose grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {components.map((component) => (
        <Link
          key={component.name}
          href={component.href}
          className="text-foreground underline-offset-4 hover:underline"
        >
          {component.name}
        </Link>
      ))}
    </div>
  )
}
