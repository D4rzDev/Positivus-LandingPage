import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Register the project's custom fontSize tokens so tailwind-merge treats them as
// font-size utilities. Without this it can't tell `text-body` (size) from
// `text-white` (color) and collapses them into one conflict group — which was
// silently stripping the color off buttons and making their labels invisible.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-lg",
            "display-md",
            "headline",
            "title-lg",
            "title",
            "body-lg",
            "body",
            "body-sm",
            "label",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
