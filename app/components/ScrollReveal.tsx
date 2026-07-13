"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Global, declarative scroll animator.
 *
 * Any element tagged `data-reveal` fades and rises into view when scrolled to.
 * Each element gets its own trigger so it eases in smoothly and consistently
 * the moment it enters — rather than a shared batch that can clump on fast
 * scroll. Elements that share a parent (grids, lists) get a small, bounded
 * cascade for polish.
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

      // Position of each element among its reveal-siblings, so grids/lists
      // cascade gently while standalone elements animate with no delay.
      const groupIndex = new Map<Element, number>()

      items.forEach((el) => {
        const parent = el.parentElement
        const i = parent ? groupIndex.get(parent) ?? 0 : 0
        if (parent) groupIndex.set(parent, i + 1)

        // Cap the cascade so a large grid never leaves the last card waiting.
        const delay = Math.min(i, 3) * 0.09

        gsap.set(el, { y: 24, opacity: 0, willChange: "transform, opacity" })

        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onComplete: () => gsap.set(el, { clearProps: "willChange" }),
        })
      })

      // Ensure triggers measure correct positions after fonts/images settle.
      ScrollTrigger.refresh()
    })

    return () => mm.revert()
  })

  return null
}
