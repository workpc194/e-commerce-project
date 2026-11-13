import { ArrowUpRight } from "lucide-react"
import CategoryCard from "../components/CategoryCard"
import { useDispatch, useSelector } from "react-redux"
import { CategoriesApi } from '../api/mediaApi';
import { setCategories, setHomeCategor } from '../redux/features/homeSlice'
import { useEffect } from "react";
import { Link } from "react-router";
import CategoryLoadingCard from "../components/CategoryLodingCard";


const Category = () => {

    const dispatch = useDispatch()
    const { category, homeCategory } = useSelector((store) => store.homeSlice)

    let categoryData = []
    let homeCategoryData = []
    let categoryImages = [
        'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
        'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp',
        'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp',
        'https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp',
        'https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp',
        'https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp',
        'https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp',
        'https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp',
        'https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp',
        'https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp',
        'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp',
        'https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp',
        'https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp',
        'https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp',
        'https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp',
        'https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp',
        'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp',
        'https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp',
        'https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/2.webp',
        "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp",
        'https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp',
        'https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp'
    ]
    const number = [1,2,3,4]

    const getData = async () => {
        try {
            let categoryResponce = await CategoriesApi()
            categoryData = categoryResponce.map((item) => ({
                name: item.name,
                url: item.url
            }))
            categoryImages.map((item, idx) => {
                categoryData[idx].image = item
            })
            dispatch(setCategories(categoryData))
            homeCategoryData = category.slice(0, 4)
            dispatch(setHomeCategor(homeCategoryData))
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        if(homeCategory.length < 1) {
            getData()
        }
    })

    return (
        <section id="category" className="px-20 pt-28">
            <div>
                <span className="font-metropolisSemiBold text-sm tracking-[0.14em] text-[#B91C1C]">Browse</span>
                <div className="flex items-center justify-between">
                    <h2 className="font-metropolisBold text-[44px] text-[#141414] tracking-[-0.02em]">Our categories</h2>
                    <Link to={'/categories'} className="flex items-center gap-1.5 font-metropolisSemiBold text-base group hover:text-[#B91C1C]">view all <ArrowUpRight size={20} className="text-[#141414] group-hover:text-[#B91C1C]" strokeWidth={1.5} /></Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 grid-rows-1 gap-6 mt-8">
                {homeCategory.length < 1 ? number.map((_, idx)=>{
                    return <CategoryLoadingCard key={idx} />
                }) : homeCategory.map((item, idx) => {
                    return <CategoryCard elem={item} key={idx} />
                })}
            </div>
        </section>
    )
}

export default Category