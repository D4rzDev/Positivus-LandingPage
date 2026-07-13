import React from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  title: string
  description?: string
  align?: "start" | "center"
  className?: string
}

/**
 * Positivus section header: a green "pill" title beside supporting copy.
 * Stacks on compact screens, sits side-by-side from the medium breakpoint.
 */
export default function SectionHeading({
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-center",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <h2 className="w-fit rounded-shape-sm bg-brand-green px-2 py-1 text-headline text-brand-ink">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-body text-brand-ink/70">{description}</p>
      )}
    </div>
  )
}
