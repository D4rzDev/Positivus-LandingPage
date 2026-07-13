import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-shape-md text-label font-medium transition-all duration-200 ease-emphasized focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Positivus primary: dark ink, light label
        default: "bg-brand-ink text-white hover:bg-brand-ink/90",
        // Green accent
        accent: "bg-brand-green text-brand-ink hover:bg-brand-green-strong",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outlined (bordered) — brand style
        outline:
          "border border-brand-ink bg-transparent text-brand-ink hover:bg-brand-ink hover:text-white",
        secondary:
          "bg-brand-grey text-brand-ink hover:bg-brand-grey-strong",
        ghost: "text-brand-ink hover:bg-brand-grey",
        link: "text-brand-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-shape-sm px-4",
        lg: "h-14 px-8 text-body",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
