import React from 'react'
import { process } from '../utils/data'
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Process() {
  return (
    <div className=' flex flex-col items-center gap-10'>
        <div className=' flex flex-col items-center gap-5 md:w-[500px]'>
           <h1 className=' text-3xl font font-semibold bg-bgGreen rounded-md p-2'>Our Working Process</h1>
          <p className=' text-sm text-center'>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        
        <div className='grid grid-cols-1 gap-5 w-full'>
            {process.map(( proc) => (
                <div key={proc.id}>
                    <div className=' flex items-center w-full bg-bgGrey px-8 h-28 rounded-full border-b-4 border-t-2 border-black' >
                    <div className=' flex items-center justify-between w-full'>
                        <div className=' flex items-center gap-4'>
                            <h1 className=' text-2xl font-semibold'>0{proc.id}</h1>
                            <h1 className=' text-lg'>{proc.name}</h1>
                        </div>
                        <AiOutlinePlusCircle size={25}/>
                    </div>

                </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}
