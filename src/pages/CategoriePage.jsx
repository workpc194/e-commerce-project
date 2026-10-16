import { setCategories } from '../redux/features/homeSlice'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../components/CategoryCard'
import { CategoriesApi } from '../api/mediaApi'

const CategoriePage = () => {

    const dispatch = useDispatch()
    const { category } = useSelector((store) => store.homeSlice)

    let categoryData = []
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

    const getdata = async () => {
        let categoryResponce = await CategoriesApi()
        categoryData = categoryResponce.map((item) => ({
            name: item.name,
            url: item.url
        }))
        categoryImages.map((item, idx) => {
            categoryData[idx].image = item
        })
        dispatch(setCategories(categoryData))
    }

    getdata()

    return (
        <div className='w-full min-h-screen py-16 px-8 container'>
            {(category.length < 1) ? <h1 className='text-3xl font-metropolisBold'>Loading Categories...</h1> : category.map((elem, idx) => {
                return <CategoryCard elem={elem} key={idx} />
            })}
        </div>
    )
}

export default CategoriePage