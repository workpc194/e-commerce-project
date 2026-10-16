import { useSelector } from 'react-redux'
import CartProductCard from '../components/CartProductCard'

const CartPage = () => {

    const { cartItems } = useSelector((state) => state.cartCollection)
    let subTotal = 0
    let total = 0

    cartItems.map((elem) => {
        return (
            subTotal = subTotal + elem.price
        )
    })

    if(cartItems.length > 0){
        subTotal = Math.trunc(subTotal)
        total = subTotal + 2
    }



    return (
        (cartItems.length < 1) ? <div className='w-full h-screen flex font-metropolisBold text-3xl items-center justify-center'>No Product in Cart</div>:<div className='w-full h-screen pt-15 px-8 flex items-center cart'>
            <div className='w-[80%] pb-15 h-full overflow-scroll scrollbar-none flex gap-5 flex-wrap justify-center cart-product'>
                {cartItems.map((elem, idx) => {
                    return (
                        <CartProductCard elem={elem} key={idx} />
                    )
                })}
            </div>
            <div className='w-[20%] h-[40%] border-2 rounded-2xl text-center flex flex-col justify-evenly cart-summary'>
                <h3 className='text-3xl font-metropolisSemiBold'>Order Summery</h3>
                <h5 className='text-lg font-metropolisRegular w-full flex justify-evenly'>SubTotal: <p>${subTotal}</p></h5>
                <h5 className='text-lg font-metropolisRegular w-full flex justify-evenly'>Delivery Charges: <p>$2</p></h5>
                <h3 className='text-2xl text-[#dc2626] font-metropolisBold w-full flex justify-evenly'>Total: <p>${total}</p></h3>
            </div>
        </div>
        
    )
}

export default CartPage