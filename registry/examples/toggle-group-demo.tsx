import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  )
}
