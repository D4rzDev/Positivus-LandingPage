import React from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
]

const socials = [
  { src: "/in.svg", label: "LinkedIn" },
  { src: "/fb.svg", label: "Facebook" },
  { src: "/tw.svg", label: "Twitter" },
]

export default function Footer() {
  return (
    <footer className="mt-section">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="rounded-t-shape-2xl bg-brand-ink px-6 py-12 text-white md:px-16 md:py-16">
          {/* Top row */}
          <div className="flex flex-col items-center gap-10 border-b border-white/15 pb-10 lg:flex-row lg:items-center lg:justify-between">
            <Image src="/logowhite.svg" width={200} height={40} alt="Positivus" className="h-auto w-40" />
            <nav aria-label="Footer">
              <ul className="flex flex-col items-center gap-6 text-body underline-offset-4 lg:flex-row lg:gap-10">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-brand-green hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href="#" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full bg-white transition-transform hover:-translate-y-0.5">
                    <Image src={s.src} width={20} height={20} alt="" aria-hidden="true" className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle row */}
          <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col items-center gap-6 lg:items-start">
              <h2 className="w-fit rounded-shape-sm bg-brand-green px-2 py-1 text-title text-brand-ink">
                Contact us:
              </h2>
              <address className="flex flex-col items-center gap-3 text-body not-italic lg:items-start">
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p className="text-center lg:text-left">
                  Address: 1234 Main St<br />
                  Moonstone City, Stardust State 12345
                </p>
              </address>
            </div>

            <form className="flex w-full max-w-xl flex-col gap-4 rounded-shape-lg bg-brand-ink-soft p-6 sm:flex-row md:p-8">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Email"
                className="h-14 border-white/40 bg-transparent text-white placeholder:text-white/60"
              />
              <Button type="submit" variant="accent" size="lg" className="shrink-0">
                Subscribe to news
              </Button>
            </form>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-3 border-t border-white/15 pt-8 text-center text-body-sm text-white/80 md:flex-row md:justify-between">
            <p>© 2024 Positivus. All Rights Reserved.</p>
            <p>
              Developed by Darel Honrejas · Designed by{" "}
              <a href="https://www.figma.com/@olgaaverchenko" className="underline hover:text-brand-green">
                Olga
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
