export const SITE_NAME = "Nusa UI"
export const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://nusa-ui.vercel.app"

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`
}
