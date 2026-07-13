"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Contact Us"
          description="Connect with us: let's discuss your digital marketing needs."
        />

        <div className="relative overflow-hidden rounded-shape-2xl bg-brand-grey px-6 py-10 md:px-16 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 lg:max-w-md">
              <RadioGroup defaultValue="quote" className="flex items-center gap-8" aria-label="Reason for contact">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="hi" id="r-hi" />
                  <Label htmlFor="r-hi" className="text-body">Say Hi</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="quote" id="r-quote" />
                  <Label htmlFor="r-quote" className="text-body">Get a Quote</Label>
                </div>
              </RadioGroup>

              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-body">Name</Label>
                <Input id="name" name="name" autoComplete="name" placeholder="Name" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-body">
                  Email<span className="text-destructive"> *</span>
                </Label>
                <Input id="email" name="email" type="email" required autoComplete="email" placeholder="email@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-body">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Message" />
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full">
                Send Message
              </Button>

              {sent && (
                <p role="status" className="text-body-sm text-brand-ink">
                  Thanks — we&rsquo;ll be in touch shortly.
                </p>
              )}
            </form>

            <Image
              src="/contact.png"
              width={400}
              height={550}
              alt=""
              aria-hidden="true"
              className="pointer-events-none hidden h-auto w-72 lg:block xl:w-80"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
