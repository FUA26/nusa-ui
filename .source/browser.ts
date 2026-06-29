// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser"
import type * as Config from "../source.config"

const create = browser<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {}
  }
>()
const browserCollections = {
  docs: create.doc("docs", {
    "(root)/blocks.mdx": () =>
      import("../content/docs/(root)/blocks.mdx?collection=docs"),
    "(root)/components.mdx": () =>
      import("../content/docs/(root)/components.mdx?collection=docs"),
    "(root)/get-started.mdx": () =>
      import("../content/docs/(root)/get-started.mdx?collection=docs"),
    "(root)/index.mdx": () =>
      import("../content/docs/(root)/index.mdx?collection=docs"),
    "(root)/mcp.mdx": () =>
      import("../content/docs/(root)/mcp.mdx?collection=docs"),
    "(root)/styling.mdx": () =>
      import("../content/docs/(root)/styling.mdx?collection=docs"),
    "blocks/forgot-password-form.mdx": () =>
      import("../content/docs/blocks/forgot-password-form.mdx?collection=docs"),
    "blocks/reset-password-form.mdx": () =>
      import("../content/docs/blocks/reset-password-form.mdx?collection=docs"),
    "blocks/signin-form.mdx": () =>
      import("../content/docs/blocks/signin-form.mdx?collection=docs"),
    "blocks/signup-form.mdx": () =>
      import("../content/docs/blocks/signup-form.mdx?collection=docs"),
    "components/accordion.mdx": () =>
      import("../content/docs/components/accordion.mdx?collection=docs"),
    "components/alert.mdx": () =>
      import("../content/docs/components/alert.mdx?collection=docs"),
    "components/button.mdx": () =>
      import("../content/docs/components/button.mdx?collection=docs"),
    "components/card.mdx": () =>
      import("../content/docs/components/card.mdx?collection=docs"),
    "components/checkbox.mdx": () =>
      import("../content/docs/components/checkbox.mdx?collection=docs"),
  }),
}
export default browserCollections
