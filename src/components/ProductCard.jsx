import { Heart, Star, ShoppingCart } from 'lucide-react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addWatchlistCollection } from '../redux/features/watchlistCollectionSlice'
import { addCartCollection } from '../redux/features/cartCollectionSlice'

const ProductCard = (item) => {

  const dispatch = useDispatch()

  const addWatchlistButtonClick = (e) => {
    dispatch(addWatchlistCollection(e))
  }

  const addCartButtonClick = (e) => {
    dispatch(addCartCollection(e))
  }

  return (
    <div id='product-card' className='h-96 m-2 rounded-2xl border flex flex-col card'>
      <div className='w-full h-[57%] bg-[#F5F5F5] rounded-t-2xl'>
        <img loading='lazy' src={item.elem.images[0]} alt={item.elem.title} className='w-full h-full object-contain select-none' />
      </div>
      <div className='w-full h-[43%] p-3 bg-white rounded-b-2xl flex flex-col justify-between'>
        <h5 className='uppercase font-metropolisSemiBold text-[#dc2626]'>{item.elem.brand}</h5>
        <h3 className='font-metropolisSemiBold '>{item.elem.title}</h3>
        {item.elem.rating === 1 && item.elem.rating < 2 ? <div className='flex'><span className='text-[#FFFF00]'><Star /></span><span><Star /></span><span><Star /></span><span><Star /></span><span><Star /></span></div> : <></>}
        {item.elem.rating >= 2 && item.elem.rating < 3 ? <div className='flex'><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span><Star /></span><span><Star /></span><span><Star /></span></div> : <></>}
        {item.elem.rating >= 3 && item.elem.rating < 4 ? <div className='flex'><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span><Star /></span><span><Star /></span></div> : <></>}
        {item.elem.rating >= 4 && item.elem.rating < 5 ? <div className='flex'><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span><Star /></span></div> : <></>}
        {item.elem.rating === 5 ? <div className='flex'><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span className='text-[#FFFF00]'><Star /></span><span className=' text-[#FFFF00]'><Star /></span></div> : <></>}
        <h4 className='font-metropolisRegular text-2xl'>${item.elem.price}</h4>
        <div className='w-full flex justify-between items-center'>
          <button onClick={() => addWatchlistButtonClick(item.elem)} className='p-2 w-9 text-lg cursor-pointer font-metropolisBold rounded-2xl bg-[#F5F5F5] hover:text-[#dc2626]/80'><Heart size={20} strokeWidth={2} /></button>
          <button onClick={() => addCartButtonClick(item.elem)} className='p-2 w-37 text-lg font-metropolisMedium rounded-2xl justify-center bg-[#F5F5F5] cursor-pointer items-center flex hover:text-[#dc2626]/80'>Add To Cart<ShoppingCart size={20} strokeWidth={2} /></button>
        </div>
      </div>
    </div >
  )
}

export default ProductCard