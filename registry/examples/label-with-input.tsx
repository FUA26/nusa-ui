import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export default function LabelWithInput() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  )
}
