import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/ui/command"

export default function CommandDemo() {
  return (
    <Command>
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>Open</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
