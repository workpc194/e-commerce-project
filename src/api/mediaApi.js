import axios from "axios"

export const homeDataApi = async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=08')
    const data = res.data
    return data
}

export const CategoriesApi = async () => {
    const res = await axios.get('https://dummyjson.com/products/categories')
    const data = res.data
    return data
}

export const productPageApi = async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=30&skip=0')
    const data = res.data
    return data
}