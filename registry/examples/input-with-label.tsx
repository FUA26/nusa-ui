import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export default function InputWithLabel() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" placeholder="Enter your name" />
    </div>
  )
}
