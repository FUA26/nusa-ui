import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>Hidden content</CollapsibleContent>
    </Collapsible>
  )
}
