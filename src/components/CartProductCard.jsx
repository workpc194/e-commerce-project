import { Heart, ShoppingCart, Star, Trash } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeCartCollection } from '../redux/features/cartCollectionSlice'
import { addWatchlistCollection } from '../redux/features/watchlistCollectionSlice'

const CartProductCard = (item) => {

    const dispatch = useDispatch()

    const addWatchlistButtonClick = (e) => {
        dispatch(addWatchlistCollection(e))
    }

    const removeCartButtonClick = (e) => {
        dispatch(removeCartCollection(e))
    }

    return (
        <div id='cart-product' className='w-full flex items-center gap-6 p-5 bg-white border border-[#E8E4DC] rounded-xl'>
            <div className='w-32 h-32 rounded-[14px] bg-neutral-100'>
                <img loading='lazy' src={item.elem.images[0]} alt={item.elem.title} className='w-full h-full rounded-[14px] object-contain' />
            </div>
            <div className='w-full h-32 flex flex-col'>
                <div className='w-full flex justify-between'>
                    <div className=''>
                        <span className='uppercase font-metropolisSemiBold text-[11.5px] text-[#B91C1C] '>{item.elem.brand}</span>
                        <h3 className='font-metropolisSemiBold text-lg text-[#141414] mt-1'>{item.elem.title}</h3>
                        <span className='font-metropolisSemiBold tetx-[13px] text-[#1F6F43]'>{item.elem.availabilityStatus}</span>
                    </div>
                    <div className='font-metropolisBold text-xl text-[#141414]'>${item.elem.price}</div>
                </div >
                <div className='w-full flex justify-between'>
                    {/* <input type="number" className='w-29 h-11 rounded-xl bg-[#FBFAF8] select-none' /> */}
                    <div className='flex gap-4'>
                        <button onClick={() => { addWatchlistButtonClick(item.elem) }} className='py-3 rounded-[14px] font-metropolisSemiBold text-[#141414] flex items-center gap2 cursor-pointer'><Heart strokeWidth={1.8} size={18} />Watchlist</button>
                        <button onClick={() => { removeCartButtonClick(item.elem) }} className='py-3 rounded-[14px] font-metropolisSemiBold text-[#B91C1C] flex items-center gap-2 cursor-pointer'><Trash strokeWidth={1.8} size={18} />Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard