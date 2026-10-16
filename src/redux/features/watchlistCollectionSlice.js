import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchlistItems: JSON.parse(localStorage.getItem('watchlistCollection')) || []
}
export const watchlistCollectionSlice = createSlice({
    name: 'watchlistCollectionSlice',
    initialState,
    reducers: {
        addWatchlistCollection: (state, action) => {
            const alreadyExist = state.watchlistItems.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExist) {
                state.watchlistItems.push(action.payload)
                localStorage.setItem('watchlistCollection', JSON.stringify(state.watchlistItems))
            }
        },
        removeWatchlistCollection: (state, action) => {
            state.watchlistItems = state.watchlistItems.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('watchlistCollection', JSON.stringify(state.watchlistItems))
        }
    }
})

export const { addWatchlistCollection, removeWatchlistCollection } = watchlistCollectionSlice.actions
export default watchlistCollectionSlice.reducer