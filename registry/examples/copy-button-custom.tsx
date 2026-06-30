import { CopyButton } from "@/registry/ui/copy-button"

export default function CopyButtonCustom() {
  return (
    <CopyButton value="secret-api-key-123" size="sm">
      Copy API Key
    </CopyButton>
  )
}
