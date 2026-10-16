import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartCollection')) || []
}
export const cartCollectionSlice = createSlice({
    name: 'cartCollectionSlice',
    initialState,
    reducers: {
        addCartCollection: (state, action) => {
            const alreadyExist = state.cartItems.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExist) {
                state.cartItems.push(action.payload)
                localStorage.setItem('cartCollection', JSON.stringify(state.cartItems))
            }
        },
        removeCartCollection: (state, action) => {
            state.cartItems = state.cartItems.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('cartCollection', JSON.stringify(state.cartItems))
        }
    }
})

export const { addCartCollection, removeCartCollection } = cartCollectionSlice.actions
export default cartCollectionSlice.reducer