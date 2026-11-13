import React from 'react'
import { useSelector } from 'react-redux'
import WatchlistProductCard from '../components/WatchlistProductCard'
import { Link } from 'react-router'

const WatchlistPage = () => {

    const { watchlistItems } = useSelector((state) => state.watchlistCollection)

    return (
        <div id='watchlist-page' className='w-full mt-19 pt-4 px-20'>
            <div className='w-full flex justify-between items-end'>
                <div className=''>
                    <h1 className='font-metropolisBold text-[52px] text-[#141414] tracking-[-0.025em]'>Your Watchlist</h1>
                    <p className='mt-2 font-metropolisRegular text-xs sm:text-[15px] text-[#5C5953]'>items in your watchlist</p>
                </div>
                <Link to={'/products'} className='font-metropolisSemiBold text-xs sm:text-[15px] text-[#141414] hover:text-[#B91C1C]'>&lt; continue shopping</Link>
            </div>
            {(watchlistItems.length < 1) ? <div className='w-full h-screen flex font-metropolisBold text-3xl items-center justify-center'>No Product in Watchlist</div> : <div className='w-full grid grid-cols-4 gap-6 mt-8 container'>
                {watchlistItems.map((elem, idx) => {
                    return (
                        <WatchlistProductCard elem={elem} key={idx} />
                    )
                })}
            </div>}
        </div>
    )
}

export default WatchlistPage