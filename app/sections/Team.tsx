import React from 'react'
import { teams } from '../utils/data'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Team() {
  return (
    <div className=' flex flex-col items-center w-full gap-10'>
        <div className=' flex flex-col items-center gap-5 md:w-[500px]'>
           <h1 className=' text-3xl font font-semibold bg-bgGreen rounded-md p-2'>Team</h1>
            <p className=' text-sm text-center'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>
       
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            {teams.map(( team) => (
                <div className=' flex flex-col w-full p-8 rounded-3xl border-[1px] border-black border-b-4'>
                    <div className=' flex items-start justify-between pb-4 border-b-[1px] border-black'>
                        <div className=' flex items-end gap-3'>
                            <Image src={team.img} width={90} height={90}  alt="Team Member" />
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' text-lg font-semibold'>{team.name}</h1>
                                <p className=' text-sm'>{team.role}</p>
                            </div>
                        </div>
                        <Image src='/social.svg' width={35} height={35} alt='Social'/>
                    </div>
                    <p className=' text-sm pt-4'>{team.exp}</p>
                </div>
            ))}
            
        </div>
        <Button size='lg'>See all Teams</Button>
    </div>
  )
}
