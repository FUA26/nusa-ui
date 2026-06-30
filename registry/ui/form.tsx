"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/registry/lib/utils"
import { Label } from "@/registry/ui/label"

interface FormFieldContextValue {
  id: string
  name: string
  errors: string[]
  isTouched: boolean
  isValidating: boolean
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

function useFormField() {
  const ctx = React.useContext(FormFieldContext)
  if (!ctx) throw new Error("useFormField must be used within FormField")
  return ctx
}

function normalizeErrors(errors: unknown[]): string[] {
  return errors
    .map((e) => {
      if (typeof e === "string") return e
      if (e && typeof e === "object" && "message" in e)
        return String((e as { message: unknown }).message)
      return String(e)
    })
    .filter(Boolean)
}

function FormField({
  children,
  name,
  errors = [],
  isTouched = false,
  isValidating = false,
  orientation = "vertical",
  className,
  ...props
}: {
  children: React.ReactNode
  name: string
  errors?: unknown[]
  isTouched?: boolean
  isValidating?: boolean
  orientation?: "vertical" | "horizontal"
} & React.ComponentProps<"div">) {
  const id = React.useId()
  const normalizedErrors = normalizeErrors(errors)

  return (
    <FormFieldContext.Provider
      value={{ id, name, errors: normalizedErrors, isTouched, isValidating }}
    >
      <div
        data-slot="form-field"
        data-orientation={orientation}
        className={cn(
          orientation === "vertical" ? "space-y-2" : "flex items-start gap-3",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </FormFieldContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  const { id, errors, isTouched } = useFormField()
  const hasError = isTouched && errors.length > 0
  return (
    <Label
      data-slot="form-label"
      htmlFor={id}
      data-invalid={hasError || undefined}
      className={cn("data-[invalid]:text-destructive", className)}
      {...props}
    />
  )
}

function FormControl({ children }: { children: React.ReactElement }) {
  const { id, errors, isTouched } = useFormField()
  const hasError = isTouched && errors.length > 0
  return (
    <Slot
      id={id}
      aria-invalid={hasError || undefined}
      aria-describedby={hasError ? `${id}-message` : `${id}-description`}
    >
      {children}
    </Slot>
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { id } = useFormField()
  return (
    <p
      data-slot="form-description"
      id={`${id}-description`}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { id, errors, isTouched } = useFormField()
  if (!isTouched || errors.length === 0) return null
  return (
    <p
      data-slot="form-message"
      id={`${id}-message`}
      role="alert"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {errors.join(", ")}
    </p>
  )
}

function Form({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form data-slot="form" className={cn("space-y-6", className)} {...props} />
  )
}

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
}
