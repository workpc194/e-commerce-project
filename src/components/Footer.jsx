import { Mail } from "lucide-react"
import { Link } from "react-router"


const Footer = () => {
    return (
        <footer id="footer" className="w-full px-20 pt-18 bg-[#141414] rounded-t-4xl mt-28">
            <div className='flex gap-12 mb-12'>
                <div className='max-w-91'>
                    <Link to={'/'} className='font-metropolisBold text-2xl tracking-[-0.02em] text-white'>NexMall</Link>
                    <p className='mt-4 font-metropolisRegular text-[15px] text-[#B8B4AB]'>Your ultimate shopping destination for quality products at great prices.</p>
                </div>
                <div className='w-full grid grid-cols-3 grid-rows-1 gap-12'>
                    <div className='flex flex-col'>
                        <h3 className='font-metropolisSemiBold text-[13px] tracking-[0.12em] text-white uppercase'>Quick Links</h3>
                        <Link className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 mt-3 hover:text-white' to={'/'}>Home</Link>
                        <Link className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 hover:text-white' to={'/products'}>Products</Link>
                        <Link className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 hover:text-white' to={'/categories'}>Category</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-metropolisSemiBold text-[13px] tracking-[0.12em] text-white uppercase'>Categories</h3>
                        <Link className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 mt-3 hover:text-white' to={'/products'}>Smartphones</Link>
                        <Link className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 hover:text-white' to={'/products'}>Laptops</Link>
                        <Link className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 hover:text-white' to={'/products'}>Men's shirts</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-metropolisSemiBold text-[13px] tracking-[0.12em] text-white uppercase'>Contact</h3>
                        <a className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 mt-3 flex gap-2.5 items-center hover:text-white' href="mailto:nomitool1419@gmail.com" target="_blank"> nomitool1419@gmail.com</a>
                        <a className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 flex gap-2.5 items-center hover:text-white' href="https://wa.me/923183815505" target="_blank">03183815505</a>
                        <a className='font-metropolisRegular text-[15px] text-[#B8B4AB] py-2 flex gap-2.5 items-center hover:text-white' href="https://github.com/workpc194" target="_blank">Github</a>
                    </div>
                </div>
            </div>
            <hr className="text-[#5C5953]" />
            <p className="py-6 font-metropolisRegular text-sm text-[#9A968E]">&copy; 2026 NexMall. All rights reserved.</p>
        </footer>
    )
}

export default Footer