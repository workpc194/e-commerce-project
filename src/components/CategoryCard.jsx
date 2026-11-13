import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const CategoryCard = (item) => {
    
    return (
        <div id='category-card' className='h-111 group hover:shadow-xl border border-[#E8E4DC] rounded-2xl cursor-pointer card'>
            <div className='w-full h-94 rounded-t-2xl flex items-center justify-center bg-neutral-100'>
                <img loading='lazy' src={item.elem.image} alt={`${item.elem.name} Category Image`} className='group-hover:scale-80 scale-75 rounded-2xl object-cover select-none' />
            </div>
            <hr className='text-[#E8E4DC]' />
            <div className='flex items-center justify-between p-4.5'>
                <h5 className='text-lg font-metropolisSemiBold text-[#141414] group-hover:text-[#DC2626]'>{item.elem.name}</h5>
                <a onClick={()=>{
                    alert('Work in Progress')
                }} className='w-8 h-8 flex items-center justify-center bg-[#141414] rounded-full'><ArrowUpRight color="#ffffff" strokeWidth={2} /></a>
            </div>
        </div>
    )
}

export default CategoryCard