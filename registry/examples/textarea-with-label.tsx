import { Textarea } from "@/registry/ui/textarea"
import { Label } from "@/registry/ui/label"

export default function TextareaWithLabel() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  )
}
