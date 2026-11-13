import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Deal = () => {
  return (
    <section id='deal' className='mt-28 px-20'>
        <div className='w-full bg-[#B91C1C] rounded-4xl p-16'>
            <span className='font-metropolisSemiBold text-sm text-[#FDECEC] uppercase tracking-[0.14em]'>Exclusive Deals</span>
            <h2 className='max-w-150 mt-3 font-metropolisBold text-[52px] text-white -tracking-[0.025em]'>Great prices on everything you love</h2>
            <p className='mt-4 font-metropolisRegular text-xl text-[#FDECEC]'>Electronics, fashion, beauty and more delivered fast.</p>
            <button className='h-13 mt-7 px-7 font-metropolisSemiBold text-base text-[#141414] bg-white flex items-center justify-center gap-2 rounded-[14px] card hover:shadow-2xl'>Start shopping <ArrowUpRight color="#141414" strokeWidth={1.5} /></button>
        </div>
    </section>
  )
}

export default Deal