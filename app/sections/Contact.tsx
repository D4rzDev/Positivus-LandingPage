"use client"
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

 

export default function Contact() {
   
  return (
    <div className=' flex flex-col items-center gap-10 w-full'>
        <div className=' flex flex-col items-center gap-5 md:w-[500px]'>
            <h1 className=' text-3xl font font-semibold bg-bgGreen rounded-md p-2'>Contact Us</h1>
            <p className=' text-sm text-center'>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
        
        <div className=' flex flex-col items-center justify-center gap-10 bg-bgGrey p-10 w-full rounded-3xl'>
            <div>
                <RadioGroup defaultValue="comfortable" className=' flex items-center gap-5'>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1" className=' text-lg'>Say Hi</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2" className=' text-lg'>Get a Qoute</Label>
                </div>
               
                </RadioGroup>
            </div>
            <div className=' flex items-center justify-between w-full'>
                <form action="" className=' flex flex-col gap-4 w-full lg:w-[500px] text-lg'>
                    <div>
                        <label htmlFor="">Name</label>
                        <Input placeholder='Name' className=' text-sm'/>
                    </div>
                    <div>
                        <label htmlFor="">Email*</label>
                        <Input placeholder='Name' className=' text-sm'/>
                    </div>
                    <div>
                    <label htmlFor="">Message</label>
                    <Textarea placeholder='Message' className=' text-sm'/>
                    </div>
                    <Button size='lg' className=' mt-6'>Send A Message</Button>
                </form>
                <Image src='/contact.png' width={250} height={250} alt='Contact Image' className=' hidden lg:flex'/>
            </div>
            
        </div>
    </div>
  )
}
