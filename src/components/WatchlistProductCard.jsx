import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeWatchlistCollection } from '../redux/features/watchlistCollectionSlice'
import { addCartCollection } from '../redux/features/cartCollectionSlice'

const WatchlistProductCard = (item) => {

  const dispatch = useDispatch()

  const addCartButtonClick = (e) => {
    dispatch(addCartCollection(e))
  }

  const removeWatchlistButtonClick = (e) => {
    dispatch(removeWatchlistCollection(e))
  }

  return (
    <div id='product-card' className='h-129 rounded-2xl border relative border-[#E8E4DC] cursor-pointer group hover:shadow-xl card'>
      <div className='w-full h-75 bg-neutral-100 rounded-t-2xl'>
        <img loading='lazy' src={item.elem.images[0]} alt={item.elem.title} className='w-full h-full object-contain scale-75 select-none group-hover:scale-80' />
      </div>
      <div className=' p-4.5 rounded-b-2xl flex flex-col gap-2'>
        <h5 className='uppercase font-metropolisSemiBold text-[11.5px] text-[#dc2626] tracking-[0.1em]'>{item.elem.brand}</h5>
        <h3 className='font-metropolisSemiBold text-base text-[#141414] min-h-[2.6em]'>{item.elem.title}</h3>
        <div className='flex gap-1.5'>&#x2B50;<span className='font-metropolisSemiBold text-sm text-[#5C5953]'>{item.elem.rating}</span></div>
        <h4 className='font-metropolisBold text-2xl text-[#141414] tracking-[0.01em]'>${item.elem.price}</h4>
        <button onClick={() => addCartButtonClick(item.elem)} className=' px-1.5 h-11.5 bg-[#141414] text-sm font-metropolisSemiBold text-white rounded-xl justify-center cursor-pointer items-center flex gap-2'><ShoppingCart size={18} strokeWidth={1.8} /> Add To Cart</button>
      </div>
      <div className='w-full px-3 flex justify-between items-center absolute top-2 left-0'>
        <span className='px-2.5 py-1.5 font-metropolisSemiBold text-xs text-[#141414] bg-white rounded-[999px] text-center'>{item.elem.availabilityStatus}</span>
        <button onClick={() => removeWatchlistButtonClick(item.elem)} className='w-11 h-11 text-sm text-[#141414] rounded-full cursor-pointer bg-white flex items-center justify-center'><Heart color='#DC2626' fill='#DC2626' size={20} strokeWidth={2} /></button>
      </div>
    </div >
  )
}

export default WatchlistProductCard