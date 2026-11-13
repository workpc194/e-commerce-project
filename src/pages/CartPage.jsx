import { useSelector } from 'react-redux'
import CartProductCard from '../components/CartProductCard'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const CartPage = () => {

    const { cartItems } = useSelector((state) => state.cartCollection)
    let subTotal = 0
    let total = 0

    cartItems.map((elem) => {
        return (
            subTotal = subTotal + elem.price
        )
    })

    if (cartItems.length > 0) {
        // subTotal = Math.trunc(subTotal)
        subTotal = Number(subTotal.toFixed(2))
        total = subTotal + 2
        total = Number(total.toFixed(2))
    }



    return (
        <div id='cart-page' className='w-full mt-19 pt-4 px-20'>
            <div className='w-full flex justify-between items-end'>
                <div className=''>
                    <h1 className='font-metropolisBold text-[52px] text-[#141414] tracking-[-0.025em]'>Your Cart</h1>
                    <p className='mt-2 font-metropolisRegular text-xs sm:text-[15px] text-[#5C5953]'>{cartItems.length} items in your watchlist</p>
                </div>
                <Link to={'/products'} className='font-metropolisSemiBold text-xs sm:text-[15px] text-[#141414] hover:text-[#B91C1C]'>&lt; continue shopping</Link>
            </div>
            {(cartItems.length < 1) ? <div className='w-full h-screen flex font-metropolisBold text-3xl items-center justify-center'>No Product in Cart</div> : <div className='w-full mt-8 flex gap-4 flex-col items-center justify-center cart-product'>
                {cartItems.map((item, idx) => {
                    return (
                        <CartProductCard elem={item} key={idx} />
                    )
                })}
            </div>}
            <div className='max-w-95 p-8 bg-white mt-4 border border-[#E8E4DC] rounded-3xl flex flex-col items-center justify-evenly cart-summary'>
                <h2 className='font-metropolisBold text-[22px] text-[#141414]'>Order Summery</h2>
                <div className='w-full mt-5 flex justify-between'>
                    <span className='font-metropolisRegular text-base text-[#5C5953] '>Subtotal</span>
                    <span className='font-metropolisSemiBold text-base text-[#141414] '>${subTotal}</span>
                </div>
                <div className='w-full flex justify-between'>
                    <span className='font-metropolisRegular text-base text-[#5C5953] '>Delivery charges</span>
                    <span className='font-metropolisSemiBold text-base text-[#141414] '>$2.00</span>
                </div>
                <hr className='my-5 text-[#E8E4DC]' />
                <div className='w-full flex justify-between'>
                    <span className='font-metropolisRegular text-base text-[#5C5953] '>Total</span>
                    <span className='font-metropolisBold text-3xl text-[#B91C1C] tracking-[0.02em]'>${total}</span>
                </div>
                <button onClick={()=>{
                    alert('Work in Progress')
                }} className='w-full h-14 flex items-center justify-center gap-2 font-metropolisSemiBold text-base text-white bg-[#DC2626] rounded-[14px]'>Proceed to checkout <ArrowRight strokeWidth={2} size={18} /></button>
            </div>
        </div>

    )
}

export default CartPage