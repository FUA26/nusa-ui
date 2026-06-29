# Nusa UI

Nusa UI is a source-first design system and documentation shell built for teams that want polished components without losing ownership of the code.

It combines:

- a shadcn-compatible registry
- Fumadocs-powered documentation
- MDX examples and component previews
- brand-aware metadata, icons, and install flow

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

## Registry

Add components from the registry with the shadcn CLI:

```bash
npx shadcn@latest add https://nusa-ui.vercel.app/r/button.json
```

You can also validate and build the registry locally:

```bash
pnpm registry:validate
pnpm registry:build
```

## Documentation

The docs site includes:

- component pages
- installation instructions
- MDX previews and source blocks
- search, OG images, and LLM export routes

## License

Private repository for internal product development.
