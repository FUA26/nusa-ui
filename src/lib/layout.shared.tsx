import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

import { SITE_NAME } from "./site"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: SITE_NAME,
      url: "/",
      transparentMode: "top",
    },
  }
}
