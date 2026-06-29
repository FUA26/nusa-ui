import { ArrowRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  )
}

function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}

function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}

function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}

function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}

function ButtonLink() {
  return <Button variant="link">Link</Button>
}

function ButtonIcon() {
  return (
    <Button size="icon">
      <ArrowRight />
    </Button>
  )
}

function ButtonWithIcon() {
  return (
    <Button>
      Next
      <ArrowRight />
    </Button>
  )
}

function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Loading
    </Button>
  )
}

export const Index = {
  "button-demo": {
    component: <ButtonDemo />,
  },
  "button-secondary": {
    component: <ButtonSecondary />,
  },
  "button-destructive": {
    component: <ButtonDestructive />,
  },
  "button-outline": {
    component: <ButtonOutline />,
  },
  "button-ghost": {
    component: <ButtonGhost />,
  },
  "button-link": {
    component: <ButtonLink />,
  },
  "button-icon": {
    component: <ButtonIcon />,
  },
  "button-with-icon": {
    component: <ButtonWithIcon />,
  },
  "button-loading": {
    component: <ButtonLoading />,
  },
} as const
