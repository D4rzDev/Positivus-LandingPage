import React from 'react'
import { studies } from '../utils/data'
import { MdArrowOutward } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Case() {
  return (
    <div className=' flex flex-col items-center justify-center gap-10'>
         <div className=' flex flex-col items-center gap-5 md:w-[500px]'>
            <h1 className=' text-3xl font font-semibold bg-bgGreen rounded-md p-2'>Case Studies</h1>
            <p className=' text-sm text-center'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>

        <div className=' flex w-full bg-bgDark rounded-2xl md:flex lg:py-10'>
            <div className=' grid grid-cols-1 md:grid-cols-3'>
                    {studies.map((study, index) => (
                    <div key={index} className=" w-full ">
                            <div className="flex flex-col h-full justify-between gap-6 p-8 text-white">
                                <h1 className=' text-lg md:text-sm'>{study.content}</h1>
                                <div className=' flex items-center gap-2'>
                                    <p className=' text-green text-lg'>Learn More</p>
                                    <MdArrowOutward size={25} color='#B9FF66'/>
                                </div>
                            </div>
                    </div>
                    ))}
            </div>

        </div>
       
        <div className=' w-full hidden'>
            <Carousel
                className="w-full"
                >
                <CarouselContent className=' flex gap-2 px-6'>
                    {studies.map((study, index) => (
                    <CarouselItem key={index} className=" w-full bg-bgDark rounded-2xl">
                        <div className="p-1">
                            <div className="flex flex-col aspect-square justify-between p-8 text-white">
                                <h1 className=' text-lg'>{study.content}</h1>
                                <div className=' flex items-center gap-2'>
                                    <p className=' text-green text-lg'>Learn More</p>
                                    <MdArrowOutward size={25} color='#B9FF66'/>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    </div>
  )
}
