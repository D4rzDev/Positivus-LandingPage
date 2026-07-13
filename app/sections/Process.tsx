"use client"

import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { HiPlus, HiMinus } from "react-icons/hi"
import { process } from "../utils/data"
import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Our Working Process"
          description="Step-by-step guide to achieving your business goals."
        />

        <Accordion.Root type="single" collapsible defaultValue="1" className="flex flex-col gap-6">
          {process.map((proc) => (
            <Accordion.Item
              key={proc.id}
              value={proc.id}
              data-reveal
              className="rounded-shape-2xl border border-brand-ink bg-brand-grey shadow-brand transition-colors data-[state=open]:bg-brand-green"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset md:px-10 md:py-8">
                  <span className="flex items-center gap-5 md:gap-8">
                    <span className="text-2xl font-semibold text-brand-ink md:text-4xl">
                      0{proc.id}
                    </span>
                    <span className="text-title text-brand-ink md:text-title-lg">{proc.name}</span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-ink bg-brand-grey text-brand-ink transition-colors group-data-[state=open]:bg-brand-green md:h-14 md:w-14">
                    <HiPlus className="text-2xl group-data-[state=open]:hidden" />
                    <HiMinus className="hidden text-2xl group-data-[state=open]:block" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="border-t border-brand-ink/20 px-6 pb-6 pt-5 text-body text-brand-ink/80 md:px-10 md:pb-8">
                  {proc.description}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  )
}
