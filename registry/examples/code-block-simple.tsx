import { CodeBlock } from "@/registry/ui/code-block"

const code = `npm install nusa-ui`

export default function CodeBlockSimple() {
  return <CodeBlock code={code} language="bash" />
}
