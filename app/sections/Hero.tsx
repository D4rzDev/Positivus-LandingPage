import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className=' flex items-center justify-center'>
        <div className=' flex flex-col justify-center gap-6 lg:w-[500px]'>
            <h1 className=' text-5xl font-semibold md:text-4xl'>Navigating the digital landscape for success</h1>
            <Image src='/hero.svg' width={500} height={500} alt='img' className=' md:hidden '/>
            <p className=' text-sm '>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <Button size='lg' className=' md:w-48'>Book a Consultation</Button>
        </div>
          <Image src='/hero.svg' width={350} height={350} alt='img' className=' hidden md:flex lg:w-[600px]'/>
    </div>
  )
}
