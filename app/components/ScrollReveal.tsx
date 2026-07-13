"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Global, declarative scroll animator.
 *
 * Any element tagged `data-reveal` fades and rises into view when scrolled to.
 * Elements that enter together are staggered (via ScrollTrigger.batch), which
 * gives grids and lists a natural cascade without per-component wiring.
 *
 * Motion is fully disabled under `prefers-reduced-motion` (Material 3 / WCAG),
 * where content is shown immediately with no transform.
 */
export default function ScrollReveal() {
  useGSAP(() => {
    // Signal to CSS that JS is active so [data-reveal] can start hidden
    // without risking a permanently-blank page if JS never loads.
    document.documentElement.classList.add("js")

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]")
      gsap.set(items, { y: 32, opacity: 0 })

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
          }),
      })

      ScrollTrigger.refresh()
    })

    return () => mm.revert()
  })

  return null
}
