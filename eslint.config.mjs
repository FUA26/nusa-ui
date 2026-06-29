import nextVitals from "eslint-config-next/core-web-vitals"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".source/**",
    "public/r/**",
    ".claude/**",
    "commitlint.config.js",
    "eslint.config.mjs",
    "lint-staged.config.mjs",
    "next.config.mjs",
    "postcss.config.mjs",
    "prettier.config.mjs",
  ]),
  {
    rules: {
      "react/display-name": "off",
    },
  },
])

export default eslintConfig
