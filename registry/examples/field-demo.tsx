import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"

export default function FieldDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="Enter your username" />
      <FieldDescription>This is your public display name.</FieldDescription>
    </Field>
  )
}
