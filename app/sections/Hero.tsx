import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Container from "../components/Container"

export default function Hero() {
  return (
    <section className="pt-8 md:pt-12">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-8">
          <h1 data-reveal className="text-display-lg text-brand-ink">
            Navigating the digital landscape for success
          </h1>

          {/* Illustration on compact screens sits between headline and copy */}
          <div data-reveal className="w-full lg:hidden">
            <Image
              src="/hero.svg"
              width={600}
              height={515}
              alt="Illustration of a marketing team collaborating"
              className="mx-auto h-auto w-full max-w-md"
              priority
            />
          </div>

          <p data-reveal className="max-w-lg text-body-lg text-brand-ink/80">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>

          <div data-reveal>
            <Button size="lg">Book a Consultation</Button>
          </div>
        </div>

        <div data-reveal className="hidden lg:block">
          <Image
            src="/hero.svg"
            width={600}
            height={515}
            alt="Illustration of a marketing team collaborating"
            className="h-auto w-full"
            priority
          />
        </div>
      </Container>
    </section>
  )
}
