import { Button } from "@/registry/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  )
}
