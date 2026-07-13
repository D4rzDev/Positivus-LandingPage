import React from "react"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { services, type ServiceTheme } from "../utils/data"
import { Button } from "@/components/ui/button"
import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"
import { cn } from "@/lib/utils"

// Static class maps so Tailwind can see every utility at build time.
const themes: Record<
  ServiceTheme,
  { card: string; pill: string; icon: string; link: string; arrow: string }
> = {
  light: {
    card: "bg-brand-grey text-brand-ink",
    pill: "bg-brand-green text-brand-ink",
    icon: "bg-brand-ink text-white",
    link: "text-brand-ink",
    arrow: "#ffffff",
  },
  green: {
    card: "bg-brand-green text-brand-ink",
    pill: "bg-white text-brand-ink",
    icon: "bg-brand-ink text-white",
    link: "text-brand-ink",
    arrow: "#ffffff",
  },
  dark: {
    card: "bg-brand-ink text-white",
    pill: "bg-brand-green text-brand-ink",
    icon: "bg-white text-brand-ink",
    link: "text-white",
    arrow: "#191A23",
  },
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const t = themes[service.theme]
            return (
              <article
                data-reveal
                key={service.id}
                className={cn(
                  "group flex min-h-[280px] items-center justify-between gap-4 rounded-shape-2xl border border-brand-ink p-6 shadow-brand transition-transform duration-300 ease-emphasized hover:-translate-y-1 md:p-8",
                  t.card,
                )}
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <h3 className="text-title-lg leading-tight">
                    {service.titleLines.map((line) => (
                      <span
                        key={line}
                        className={cn("box-decoration-clone rounded-shape-sm px-1", t.pill)}
                      >
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>

                  <a
                    href="#contact"
                    className={cn(
                      "inline-flex items-center gap-3 text-label focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                      t.link,
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45",
                        t.icon,
                      )}
                    >
                      <MdArrowOutward size={20} color={t.arrow} />
                    </span>
                    Learn more
                  </a>
                </div>

                <Image
                  src={service.image}
                  width={210}
                  height={210}
                  alt=""
                  aria-hidden="true"
                  className="hidden h-auto w-32 shrink-0 sm:block lg:w-52"
                />
              </article>
            )
          })}
        </div>

        {/* CTA banner */}
        <div
          data-reveal
          className="flex flex-col items-center gap-8 overflow-hidden rounded-shape-2xl bg-brand-grey p-8 md:flex-row md:justify-between md:p-12"
        >
          <div className="flex max-w-md flex-col items-start gap-6 text-center md:text-left">
            <h3 className="text-title-lg text-brand-ink">Let&rsquo;s make things happen</h3>
            <p className="text-body text-brand-ink/80">
              Contact us today to learn more about how our digital marketing services can help your
              business grow and succeed online.
            </p>
            <Button size="lg">Get your Proposal</Button>
          </div>
          <Image
            src="/serimg.svg"
            width={400}
            height={300}
            alt=""
            aria-hidden="true"
            className="hidden h-auto w-72 md:block lg:w-96"
          />
        </div>
      </Container>
    </section>
  )
}
