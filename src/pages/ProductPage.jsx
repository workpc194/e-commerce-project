import React from 'react'
import { productPageApi } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setProductResult } from '../redux/features/homeSlice'
import ProductCard from '../components/ProductCard'
import { Heading1 } from 'lucide-react'

const ProductPage = () => {

    const dispatch = useDispatch()
    const { productResults } = useSelector((store) => store.homeSlice)

    let productPageData = []

    const getData = async () => {
        let productResponce = await productPageApi()
        productPageData = productResponce.products.map((item) => ({
            id: item.id,
            availabilityStatus: item.availabilityStatus,
            brand: item.brand,
            category: item.category,
            description: item.description,
            images: item.images,
            price: item.price,
            rating: item.rating,
            reviews: item.reviews.length,
            shippingInfo: item.shippingInformation,
            stock: item.stock,
            title: item.title,
        }))
        dispatch(setProductResult(productPageData))
    }
    getData()

    return (
        <div className='w-full min-h-screen py-16 px-8 container'>
            {(productResults.length < 1)? <h1 className='text-3xl font-metropolisBold'>Loading Products...</h1> : productResults.map((elem, idx) => {
                return <ProductCard elem={elem} key={idx} />
            })}
        </div>
    )
}

export default ProductPage