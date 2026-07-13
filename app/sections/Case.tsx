import React from "react"
import { MdArrowOutward } from "react-icons/md"
import { studies } from "../utils/data"
import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"

export default function Case() {
  return (
    <section id="cases" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Case Studies"
          description="Explore real-life examples of our proven digital marketing success through our case studies."
        />

        <div
          data-reveal
          className="grid grid-cols-1 divide-y divide-white/20 rounded-shape-2xl bg-brand-ink px-6 py-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-0 md:py-14"
        >
          {studies.map((study, index) => (
            <article key={index} className="flex flex-col gap-5 px-2 py-8 md:px-12 md:py-0">
              <p className="text-body text-white">{study.content}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-label text-brand-green transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
              >
                Learn more
                <MdArrowOutward size={22} />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
