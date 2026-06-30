import { Switch } from "@/registry/ui/switch"
import { Label } from "@/registry/ui/label"

export default function SwitchWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  )
}
