import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

import { SiteLogo } from "@/components/site-logo"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <SiteLogo />,
      url: "/",
      transparentMode: "top",
    },
  }
}
