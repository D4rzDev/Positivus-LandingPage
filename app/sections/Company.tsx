import React from 'react'
import { company } from '../utils/data'
import Image from 'next/image'

export default function Company() {
  return (
    <div className=' grid grid-cols-3 place-items-center gap-6 md:grid-cols-6'>
        { company.map((logo, idx) => (
            <div key={idx}>
                <Image src={logo.url} width={100} height={100} alt='company' className=' w-20 grayscale'/>
            </div>
        ))}
    </div>
  )
}
