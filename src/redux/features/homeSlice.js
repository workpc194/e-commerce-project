import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        productResults: [],
        homeProductResults: [],
        category: [],
        homeCategory: []
    },
    reducers: {
        setProductResult: (state, action) => {
            state.productResults = action.payload
        },
        setHomeProductResult: (state, action) => {
            state.homeProductResults = action.payload
        },
        addProductResult: (state, action) => {
            state.productResults.push(...action.payload)
        },
        setCategories: (state, action) =>{
            state.category = action.payload
        },
        setHomeCategor: (state, action) =>{
            state.homeCategory= action.payload
        }
    }
})

export const { setProductResult, setHomeProductResult ,addProductResult, setCategories, setHomeCategor } = homeSlice.actions
export default homeSlice.reducer