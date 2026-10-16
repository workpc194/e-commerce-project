import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CategoriesApi, homeDataApi } from '../api/mediaApi';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setHomeCategor, setHomeProductResult, } from '../redux/features/homeSlice'
import { MoveUpRight } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { Link } from 'react-router';

const HomePage = () => {

  const dispatch = useDispatch()
  const { homeProductResults, category, homeCategory } = useSelector((store) => store.homeSlice)

  let homeProductData = []
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

  const getData = async () => {
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
  }
  getData()


  return (
    <>
      {/* Home Page Swiper Slide */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img loading='lazy' src="https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472_1280.jpg" alt="Fashion Sale Image" className='w-full h-full object-cover select-none' />
        </SwiperSlide>
        <SwiperSlide>
          <img loading='lazy' src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg" alt="Fashion Sale Image" className='w-full h-full object-cover select-none' />
        </SwiperSlide>
        <SwiperSlide>
          <img loading='lazy' src="https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg" alt="Fashion Sale Image" className='w-full h-full object-cover select-none' />
        </SwiperSlide>
      </Swiper>
      {/* Home Page Swiper Slide Text */}
      <div className='pl-10 w-[45%] absolute top-[25%] z-2'>
        <h2 className='text-[6vw] font-metropolisBold text-[#F5F5F5]'>Discover Your Perfect Style</h2>
        <p className='text-[1.65vw] font-metropolisRegular text-[#F5F5F5]'>Shop the latest trends in electronics, fashion, beauty, and more. Get exclusive deals and fast delivery on all your favorite products.</p>
        <Link to={'/products'} >
          <button className='w-[10vw] text-[1.5vw] py-2 mt-4 border-2 cursor-pointer rounded-xl text-[#F5F5F5] hover:bg-black/30 hover:text-[#dc2626]'>Shop Now</button>
        </Link>
      </div>
      {/* Home Page Categories */}
      <div className='w-full p-10'>
        <div className='w-full flex justify-between'>
          <h4 className='text-[2.5vw] font-metropolisSemiBold'>Our Categories</h4>
          <Link to={'/categories'}>
            <h6 className='text-xl flex'>View All<MoveUpRight /></h6>
          </Link>
        </div>
        <div className='w-full container'>
          {homeCategory.map((elem, idx) => {
            return <CategoryCard elem={elem} key={idx} />
          })}
        </div>
      </div>
      {/* Home Page Products */}
      <div className='w-full p-10'>
        <div className='w-full flex justify-between'>
          <h4 className='text-[2.5vw] font-metropolisSemiBold'>Trending Products</h4>
          <Link to={'/products'} >
            <h6 className='text-xl flex'>View All<MoveUpRight /></h6>
          </Link>
        </div>
        <div className='w-full container'>
          {homeProductResults.map((elem, idx) => {
            return <ProductCard elem={elem} key={idx} />
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage