import React from 'react'
import { useSelector } from 'react-redux'
import WatchlistProductCard from '../components/watchlistProductCard'

const WatchlistPage = () => {

    const { watchlistItems } = useSelector((state) => state.watchlistCollection)

    return (
        (watchlistItems.length < 1)? <div className='w-full min-h-screen flex font-metropolisBold text-3xl items-center justify-center'>No Product in Watchlist</div> : <div className='w-full py-16 min-h-screen px-10 gap-5 container'>
            {watchlistItems.map((elem, idx) => {
                return (
                    <WatchlistProductCard elem={elem} key={idx} />
                )
            })}
        </div>
    )
}

export default WatchlistPage