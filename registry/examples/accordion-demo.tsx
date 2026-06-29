import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question one?</AccordionTrigger>
        <AccordionContent>Answer one.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
