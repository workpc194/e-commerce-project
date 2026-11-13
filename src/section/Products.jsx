import { ArrowUpRight } from 'lucide-react'
import { homeDataApi } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeProductResult } from '../redux/features/homeSlice'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'
import { Link } from 'react-router'
import ProductLoadingCard from '../components/ProductLoadingCard'

const Products = () => {

    const dispatch = useDispatch()
    const { homeProductResults } = useSelector((store) => store.homeSlice)
    const number = [1,2,3,4]

    let homeProductData = []

    const getData = async () => {
        try {
            let productResponce = await homeDataApi()
            homeProductData = productResponce.products.map((item) => ({
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
            dispatch(setHomeProductResult(homeProductData))
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section id='product' className="px-20 pt-28">
            <div>
                <span className="font-metropolisSemiBold text-sm tracking-[0.14em] text-[#B91C1C]">Browse</span>
                <div className="flex items-center justify-between">
                    <h2 className="font-metropolisBold text-[44px] text-[#141414] tracking-[-0.02em]">Our Products</h2>
                    <Link to={'/products'} className="flex items-center gap-1.5 font-metropolisSemiBold text-base group hover:text-[#B91C1C]">view all <ArrowUpRight size={20} className="text-[#141414] group-hover:text-[#B91C1C]" strokeWidth={1.5} /></Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 gap-6 mt-8">
                {homeProductResults.length < 1 ? number.map((_, idx)=>{
                    return <ProductLoadingCard key={idx} />
                }) : homeProductResults.map((item, idx) => {
                    return <ProductCard elem={item} key={idx} />
                })}
            </div>
        </section>
    )
}

export default Products