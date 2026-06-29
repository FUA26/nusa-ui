import Image from "next/image"

import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/favicon-32x32.png"
        alt="Nusa UI"
        width={24}
        height={24}
        className="size-6 rounded-sm"
        priority
      />
      <span className="font-semibold tracking-tight">{SITE_NAME}</span>
    </span>
  )
}
