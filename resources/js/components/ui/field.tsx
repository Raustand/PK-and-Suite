import * as React from "react"
import { cn } from "@/lib/utils"

export function FieldGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-4", className)} {...props} />
  )
}

export function FieldSet({
  className,
  ...props
}: React.HTMLAttributes<HTMLFieldSetElement>) {
  return (
    <fieldset className={cn("space-y-4", className)} {...props} />
  )
}

export function FieldLegend({
  className,
  ...props
}: React.HTMLAttributes<HTMLLegendElement>) {
  return (
    <legend className={cn("text-sm font-medium", className)} {...props} />
  )
}

export function FieldDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
}

export function FieldSeparator() {
  return <hr className="my-6 border-border" />
}

export function FieldLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  )
}

export function Field({
  orientation = "vertical",
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "vertical" | "horizontal"
}) {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? "flex items-center gap-3"
          : "space-y-2",
        className
      )}
      {...props}
    />
  )
}
