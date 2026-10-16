
import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='w-full px-10 bg-black text-[#F5F5F5]'>
            <div className='w-full h-[70%] py-7 flex justify-between container'>
                <div className=' h-full'>
                    <h1 className='text-3xl font-metropolisBold'><Link to={'/'}>NexMall</Link></h1>
                    <p className='text-lg font-metropolisRegular opacity-65'>Your ultimate shopping destination for quality products at great prices.</p>
                </div>
                <div className=' h-full '>
                    <h1 className='text-3xl font-metropolisBold'>Quick Links</h1>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'/'}>Home</Link></h6>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'/products'}>Products</Link></h6>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'/cart'}>Cart</Link></h6>
                </div>
                <div className=' h-full '>
                    <h1 className='text-3xl font-metropolisBold'>Categories</h1>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'/products'}>SmartPhones</Link></h6>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'/products'}>Laptop</Link></h6>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'/products'}>Men's Clothes</Link></h6>
                </div>
                <div className=' h-full '>
                    <h1 className='text-3xl font-metropolisBold'>Contact</h1>
                    <h6 className='text-lg font-metropolisRegular opacity-65'>Email: nomitool1419@gmail.com</h6>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'https://wa.me/923183815505'} target='_blank' >Phone: 03183815505</Link></h6>
                    <h6 className='text-lg font-metropolisRegular opacity-65'><Link to={'https://github.com/workpc194'} target='_blank'>Github</Link></h6>
                </div>
            </div>
            <hr className='h-0.25' />
            <p className='text-lg text-center leading-20 font-metropolisRegular opacity-65'>&copy; 2024 NexMall. All rights reserved.</p>
        </div>
    )
}

export default Footer