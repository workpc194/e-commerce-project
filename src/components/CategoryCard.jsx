import React from 'react'

const CategoryCard = (item) => {
    return (
        <div id='category-card' className='h-96 rounded-2xl m-2 pb-6 border cursor-pointer flex flex-col items-center justify-between card'>
            <div className='w-full h-[90%] bg-[#F5F5F5] rounded-t-2xl'>
                <img loading='lazy' src={item.elem.image} alt={`${item.elem.name} Category Image`} className='w-full h-[70%] rounded-2xl object-contain select-none' />
            </div>
            <h5 className='text-lg font-metropolisMedium'>{item.elem.name}</h5>
        </div>
    )
}

export default CategoryCard