import { Checkbox } from "@/registry/ui/checkbox"
import { Label } from "@/registry/ui/label"

export default function CheckboxWithText() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="news" />
      <Label htmlFor="news">Subscribe to updates</Label>
    </div>
  )
}
