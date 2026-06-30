import { AspectRatio } from "@/registry/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <div className="h-full w-full bg-muted" />
    </AspectRatio>
  )
}
