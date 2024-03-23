import React from 'react'
import Image from 'next/image'
import { services } from '../utils/data'
import { MdArrowOutward } from "react-icons/md";
import { Button } from '@/components/ui/button';

export default function Services() {
  return (
    <div className=' flex flex-col items-center justify-center gap-10'>
        <div className=' flex flex-col items-center gap-5 md:w-[500px]'>
            <h1 className=' text-3xl font font-semibold bg-bgGreen rounded-md p-2'>Services</h1>
            <p className=' text-sm text-center'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
        
        <div className=' grid grid-cols-1 gap-8 md:grid-cols-2'>
            { services.map(( service, idx) => (
            <div className={` flex items-center justify-between gap-10 text-${service.text} bg-${service.color} border-b-4 border-black w-full h-full p-8 rounded-2xl shadow-xl`} key={service.id}>
                <div className=' flex flex-col gap-24'>
                    <h1 className={`text-xl font-semibold rounded-md `}>{service.name}</h1>
                    <div className={`grid place-items-center h-10 w-10 rounded-full bg-${service.icon}`}>
                        <MdArrowOutward size={20} color={service.iconColor}/>
                    </div>
                </div>
                <Image src={service.image} width={150} height={150} alt="Service" />
            </div>
        ))}
        </div>
        <div className=' flex flex-row items-center w-full gap-4 p-8 bg-bgGrey rounded-xl'>
            <div className=' flex flex-col items-start gap-4 w-full'>
                <h1 className=' text-lg font-semibold'>Let’s make things happen</h1>
                <p className=' text-sm lg:w-[500px]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <Button size='lg'>Get your Proposal</Button>
            </div>
            <Image src='/serimg.svg' width={250} height={250} alt='img' className=' hidden md:flex lg:w-[400px]'/>
           
        </div>
    </div>
  )
}
