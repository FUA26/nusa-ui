import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert"

export default function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>This is a neutral alert.</AlertDescription>
    </Alert>
  )
}
