import { TagInput } from "@/registry/ui/tag-input"

export default function TagInputDisabled() {
  return <TagInput defaultValue={["React", "TypeScript"]} disabled />
}
