import { Heart, Menu, ShoppingCart, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router"


const Navbar = () => {

    const navLinkRef = useRef()
    const navMenuRef = useRef()
    const navCloseRef = useRef()
    const [number, setNumber] = useState(0)
    const mediaQuery = window.matchMedia("(max-width: 650px)")

    const changeNumber = () => {
        if (number === 0) {
            setNumber(1)
        } else {
            setNumber(0)
        }
    }


    useEffect(() => {
        if (number === 1 && mediaQuery.matches) {
            navLinkRef.current.style.display = 'block'
            navCloseRef.current.style.display = 'flex'
            navMenuRef.current.style.display = 'none'
        } else if (number === 0 && mediaQuery.matches) {
            navLinkRef.current.style.display = 'none'
            navMenuRef.current.style.display = 'flex'
            navCloseRef.current.style.display = 'none'
        }
    }, [number])

    return (
        <>
        <nav className="w-full h-19 bg-[#FBFAF8] flex items-center px-20 justify-between border-b border-[#E8E4DC] fixed top-0 z-10">
            <div className="flex gap-10">
                <a href="#" className="text-[#141414] font-metropolisBold text-2xl tracking-[-0.02em]">NexMall</a>
                <ul id="navFirstUl" className="flex gap-8 items-center">
                    <li className="font-metropolisSemiBold text-base text-[#141414] hover:text-[#B91C1C]"><Link to={'/'}>Home</Link></li>
                    <li className="font-metropolisSemiBold text-base text-[#141414] hover:text-[#B91C1C]"><Link to={'/categories'}>Category</Link></li>
                    <li className="font-metropolisSemiBold text-base text-[#141414] hover:text-[#B91C1C]"><Link to={'/products'}>Product</Link></li>
                </ul>
            </div>
            <ul id="navSecondUl" className="flex items-center gap-6">
                <li><Link to={'/watchlist'}><Heart color="#141414" size={22} strokeWidth={1.8} /></Link></li>
                <li><Link to={'/cart'}><ShoppingCart color="#141414" size={22} strokeWidth={1.8} /></Link></li>
                <li ref={navMenuRef} onClick={changeNumber} className="w-11 h-11 bg-[#141414] rounded-full hidden items-center justify-center"><button href="#"><Menu color="#FBFAF8" size={22} strokeWidth={1.8} /></button></li>
                <li ref={navCloseRef} onClick={changeNumber} className="w-11 h-11 bg-[#141414] rounded-full hidden items-center justify-center"><button href="#"><X color="#FBFAF8" size={22} strokeWidth={1.8} /></button></li>
            </ul>
        </nav>
        {/* Second */}
        <ul id="navThirdUl" ref={navLinkRef} className="hidden w-full px-4 py-3 fixed top-16 bg-[#FBFAF8] z-50">
            <hr />
            <li onClick={changeNumber} className="py-4.5 font-metropolisSemiBold text-xl text-[#141414] hover:text-[#B91C1C]"><Link to={'/'}>Home</Link></li>
            <hr />
            <li onClick={changeNumber} className="py-4.5 font-metropolisSemiBold text-xl text-[#141414] hover:text-[#B91C1C]"><Link to={'/categories'}>Category</Link></li>
            <hr />
            <li onClick={changeNumber} className="py-4.5 font-metropolisSemiBold text-xl text-[#141414] hover:text-[#B91C1C]"><Link to={'/products'}>Product</Link></li>
            <hr />
        </ul>
        </>
    )
}

export default Navbar