"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { company } from "../utils/data"
import Container from "../components/Container"

gsap.registerPlugin(useGSAP)

export default function Company() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The track renders the logo set twice; scroll one full set then loop.
        const anim = gsap.to(trackRef.current, {
          xPercent: -50,
          duration: 22,
          ease: "none",
          repeat: -1,
        })
        return () => anim.kill()
      })
      return () => mm.revert()
    },
    { scope: trackRef },
  )

  return (
    <section aria-label="Trusted by leading companies" className="py-8">
      <Container>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div ref={trackRef} className="flex w-max items-center gap-12 md:gap-20">
            {[...company, ...company].map((logo, idx) => (
              <Image
                key={idx}
                src={logo.url}
                width={120}
                height={48}
                alt=""
                aria-hidden="true"
                className="h-8 w-auto shrink-0 opacity-60 grayscale transition md:h-9"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
