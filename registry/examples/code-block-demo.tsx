import { CodeBlock } from "@/registry/ui/code-block"

const code = `import { Button } from "@/registry/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`

export default function CodeBlockDemo() {
  return <CodeBlock code={code} language="tsx" />
}
