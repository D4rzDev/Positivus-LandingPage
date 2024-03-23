import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <div className=' flex flex-col items-center justify-center gap-10 px-6 md:px-8 pt-12 w-screen bg-bgDark text-white'>
        <div className=' flex flex-col items-center justify-between gap-8 w-full lg:flex-row'>
            <Image src='/logowhite.svg' width={200} height={200} alt='logo' color='white'/>
            <ul className=' flex flex-col items-center gap-4 text-lg lg:flex-row'>
                <li>About Us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
            </ul>
            <div className='hidden lg:flex items-center justify-center gap-4'>
                <Image src='/in.svg' width={30} height={30} alt='social'/>
                <Image src='/fb.svg' width={30} height={30} alt='social'/>
                <Image src='/tw.svg' width={30} height={30} alt='social'/>
            </div>
        </div>
        <div className=' flex flex-col items-center gap-8 justify-between w-full lg:flex-row'>
            <div className=' flex flex-col items-center lg:items-start gap-8'>
                <h1 className=' text-xl font font-semibold m-2 text-black bg-bgGreen rounded-md p-2'>Contact Us</h1>
                <div className=' flex flex-col items-center justify-center gap-4 text-lg text-center lg:items-start lg:text-start'>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p >Address: 1234 Main St Moonstone City, Stardust State 12345</p>
                </div>
            </div>
        
            <div className=' flex flex-col gap-4 w-full bg-[#292A32] p-6 rounded-xl lg:w-[500px]'>
                <Input placeholder=' Name' className=' bg-[#292A32]'/>
                <Button size='lg' className=' bg-bgGreen text-black hover:bg-bgGreen'>Subscribe to our Newsletter</Button>
            </div>
        </div>
        
        <div className=' flex items-center justify-center gap-4 lg:hidden'>
            <Image src='/in.svg' width={30} height={30} alt='social'/>
            <Image src='/fb.svg' width={30} height={30} alt='social'/>
            <Image src='/tw.svg' width={30} height={30} alt='social'/>
        </div>
        <div className=' flex flex-col items-center justify-center gap-4 w-full p-10 border-t-[1px] border-white text-center'>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <p>Developed By: Darel Honrejas</p>
            <a href="https://www.figma.com/@olgaaverchenko">Designed By: Olga</a>
        </div>
    </div>
  )
}
