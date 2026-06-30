import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="one">
      <RadioGroupItem value="one" />
      <RadioGroupItem value="two" />
    </RadioGroup>
  )
}
