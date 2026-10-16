import { Search, ShoppingCart, Heart, Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {

    const navLinkRef = useRef()
    const navMenuRef = useRef()
    const [number, setNumber] = useState(0)
    const mediaQuery = window.matchMedia("(max-width: 700px)")

    const changeNumber = () => {
        if (number === 0) {
            setNumber(1)
        } else {
            setNumber(0)
        }
        console.log(number);

    }

    useEffect(() => {
        const handleClick = () => {
            changeNumber()
        }

        navMenuRef.current.addEventListener('click', handleClick)

        return () => {
            navMenuRef.current.removeEventListener('click', handleClick)
        }
    }, [number])

    useEffect(() => {
        if (number === 1 && mediaQuery.matches) {
            navLinkRef.current.style.display = 'block'
        } else if (number === 0 && mediaQuery.matches) {
            navLinkRef.current.style.display = 'none'
        }
    }, [number])

    return (
        <div id='navbar' className='w-full fixed z-10 bg-white opacity-95'>
            <div className='w-full h-14 flex justify-between items-center px-10'>
                <h1 className='text-2xl font-metropolisBold'><Link to={'/'}>NexMall</Link></h1>
                <div id='nav-link' ref={navLinkRef} className='w-64'>
                    <ul className='w-full flex items-center justify-evenly'>
                        <li className='text-lg font-metropolisRegular hover:text-[#dc2626]'><Link to={'/'}>Home</Link></li>
                        <li className='text-lg font-metropolisRegular hover:text-[#dc2626]'><Link to={'/products'}>Product</Link></li>
                        <li className='text-lg font-metropolisRegular hover:text-[#dc2626]'><Link to={'/categories'}>Categories</Link></li>
                    </ul>
                </div>
                <div className='w-46'>
                    <ul className='w-full flex items-center justify-evenly'>
                        {/* <li className='p-2 text-lg rounded-2xl hover:bg-[#F5F5F5]/80'><Search size={20} strokeWidth={2} /></li> */}
                        <li className='p-2 text-lg rounded-2xl hover:bg-[#F5F5F5]/80'><Link to={'/watchlist'}><Heart size={20} strokeWidth={2} /></Link></li>
                        <li className='p-2 text-lg rounded-2xl hover:bg-[#F5F5F5]/80'><Link to={'/cart'}><ShoppingCart size={20} strokeWidth={2} /></Link></li>
                        <li id='nav-menu' ref={navMenuRef} className='p-2 text-lg hidden rounded-2xl hover:bg-[#F5F5F5]/80'><Menu size={20} strokeWidth={2} /></li>
                    </ul>
                </div>
            </div>
            <hr className='mx-10' />
        </div>
    )
}

export default Navbar