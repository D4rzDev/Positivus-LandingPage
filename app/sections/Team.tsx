import React from "react"
import Image from "next/image"
import { teams } from "../utils/data"
import { Button } from "@/components/ui/button"
import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          className="w-full"
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies."
        />

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <article
              data-reveal
              key={team.name}
              className="flex flex-col gap-4 rounded-shape-2xl border border-brand-ink bg-white px-8 py-8 shadow-brand transition-transform duration-300 ease-emphasized hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 border-b border-brand-ink/20 pb-4">
                <div className="flex items-end gap-3">
                  <Image src={team.img} width={90} height={90} alt="" aria-hidden="true" className="h-auto w-[70px]" />
                  <div className="flex flex-col">
                    <h3 className="text-title text-brand-ink">{team.name}</h3>
                    <p className="text-body-sm text-brand-ink/70">{team.role}</p>
                  </div>
                </div>
                <a href="#" aria-label={`${team.name} on LinkedIn`} className="shrink-0">
                  <Image src="/social.svg" width={35} height={35} alt="" aria-hidden="true" className="h-[35px] w-[35px]" />
                </a>
              </div>
              <p className="text-body-sm text-brand-ink/80">{team.exp}</p>
            </article>
          ))}
        </div>

        <Button data-reveal size="lg" variant="default" className="self-center md:self-end">
          See all team
        </Button>
      </Container>
    </section>
  )
}
