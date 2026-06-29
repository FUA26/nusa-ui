const config = {
  "*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css,scss,yml,yaml}": ["prettier --write"],
}

export default config
