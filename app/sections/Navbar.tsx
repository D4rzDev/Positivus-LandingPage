import React from 'react'
import Image from 'next/image';
import { CiMenuBurger } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className=' sticky top-0 flex items-center h-20 p-4 bg-white md:p-8'>
        <div className=' flex flex-row items-center justify-between w-full'>
            <Image src='/logo.svg' width={200} height={200} alt='logo' className=' w-28'/>
            <ul className=' hidden md:flex items-center gap-4 text-sm'>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Use Cases</a>
                <a href="">Price</a>
                <Button className=' bg-white text-black border-[1px] border-black'>Request a Qoute</Button>
            </ul>
            <MdMenu size={20} color='black' className=' md:hidden'/>
        </div>
    </nav>
  )
}
