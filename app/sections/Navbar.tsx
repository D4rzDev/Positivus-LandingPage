"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { MdMenu, MdClose } from "react-icons/md"
import { Button } from "@/components/ui/button"

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-[1360px] items-center justify-between px-5 sm:px-6 lg:px-10">
        <a href="#main" aria-label="Positivus home" className="shrink-0">
          <Image src="/logo.svg" width={200} height={40} alt="Positivus" className="w-28 md:w-36" priority />
        </a>

        <ul className="hidden items-center gap-8 text-label md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-shape-sm px-1 py-1 text-brand-ink/80 transition-colors hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button variant="outline" size="lg">
              Request a Quote
            </Button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-12 w-12 place-items-center rounded-shape-sm text-brand-ink transition-colors hover:bg-brand-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          {open ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* scrim */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-20 z-30 bg-brand-ink/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <div
          className={`fixed inset-x-0 top-20 z-40 origin-top border-b border-border bg-background px-5 pb-8 pt-2 shadow-xl transition-all duration-300 ease-emphasized ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 text-title">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-shape-md px-4 py-3 text-brand-ink transition-colors hover:bg-brand-grey"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="lg" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Request a Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
