import type { Metadata } from "next"
import { RootProvider } from "fumadocs-ui/provider/next"

import "./globals.css"

import { SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Nusa UI documentation and registry shell.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body suppressHydrationWarning>
        <RootProvider
          theme={{
            enabled: true,
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
          search={{ enabled: true }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
