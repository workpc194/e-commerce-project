import React from 'react'
import { productPageApi } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setProductResult } from '../redux/features/homeSlice'
import ProductCard from '../components/ProductCard'
import ProductLoadingCard from '../components/ProductLoadingCard'

const ProductPage = () => {

    const dispatch = useDispatch()
    const { productResults } = useSelector((store) => store.homeSlice)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

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
        <div id='product-page' className='w-full mt-19 pt-4 px-20'>
            <div>
                <p className='font-metropolisRegular text-sm text-[#5C5953]'>Home / <span className='font-metropolisSemiBold text-[#141414]'>Products</span></p>
                <div className='flex justify-between'>
                    <h1 className='font-metropolisBold text-[52px] tracking-[-0.025em] text-[#141414]'>All products</h1>
                    <p className='font-metropolisRegular text-[15px] text-[#5C5953]'>{productResults.length} products</p>
                </div>
            </div>
            <div className='w-full grid grid-cols-4 gap-6 mt-8 container'>
                {/* <h1 className='text-3xl font-metropolisBold'>Loading Products...</h1> */}
                {(productResults.length < 1) ? numbers.map((_NEVER, idx)=>{
                    return <ProductLoadingCard key={idx} />
                }) : productResults.map((elem, idx) => {
                    return <ProductCard elem={elem} key={idx} />
                })}
            </div>
        </div>
    )
}

export default ProductPage