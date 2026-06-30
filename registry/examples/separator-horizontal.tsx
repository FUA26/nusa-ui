import { Separator } from "@/registry/ui/separator"

export default function SeparatorHorizontal() {
  return (
    <div className="w-full">
      <div className="text-sm">Content above</div>
      <Separator className="my-4" />
      <div className="text-sm">Content below</div>
    </div>
  )
}
