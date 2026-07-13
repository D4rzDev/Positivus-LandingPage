import React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

/** Centered, responsive content column shared by every section. */
export default function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1360px] px-5 sm:px-6 lg:px-10", className)}>
      {children}
    </Tag>
  )
}
