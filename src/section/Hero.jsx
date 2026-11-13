import { ArrowUpRight, ShieldCheck, Tag, Truck } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section id='hero' className='px-20 mt-19 pt-4'>
      <div className='bg-[#141414] rounded-4xl grid grid-cols-2 grid-rows-1'>
        <div className='w-full h-auto p-18 hero-left'>
          <div className='py-2 px-3.5 rounded-full border border-white/22 flex gap-2 items-center w-64'>
            <div className='w-2 h-2 bg-[#EF4444] rounded-full'></div>
            <p className='font-metropolisSemiBold text-sm text-[#F6F2DA]'>The NexMall collection</p>
          </div>
          <h1 className='font-metropolisBold text-7xl -tracking-[0.025em] text-white mt-5.5'>Discover your <span className='text-[#EF4444]'>perfect style</span></h1>
          <p className='font-metropolisRegular text-[#CFCBC2] mt-5.5'>Shop the latest trends in electronics, fashion, beauty, and more. Get exclusive deals and fast delivery on all your favourite products.</p>
          <div className='flex gap-3 mt-8 hero-btn-div'>
            <Link to={'/products'} className='flex items-center justify-center bg-[#DC2626] font-metropolisSemiBold text-base text-white rounded-[14px] px-7 py-4.5 cursor-pointer '>Shop Now <ArrowUpRight color="#ffffff" strokeWidth={1.5} /></Link>
            <Link to={'/categories'} className='font-metropolisSemiBold text-base text-white border border-white/30 rounded-[14px] px-7 py-4.5 cursor-pointer hover:border-[#DC2626] hover:text-[#DC2626]'>Browse categories</Link>
          </div>
        </div>
        <div className='w-full h-auto p-6 hero-right'>
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
            modules={[Autoplay, Pagination]}
            className="mySwiper rounded-3xl"
          >
            <SwiperSlide>
              <img src="https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472_1280.jpg" alt="Fashion Sale Image" className='w-full h-full object-cover select-none' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg" alt="Fashion Sale Image" className='w-full h-full object-cover select-none' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg" alt="Fashion Sale Image" className='w-full h-full object-cover select-none' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='heroSecondChild w-full p-7 bg-white border border-[#E8E4DC] rounded-[20px] mt-6 flex items-center justify-evenly'>
            <div className='flex gap-4 pl-11'>
              <span className='flex items-center justify-center bg-[#B91C1C]/10 w-12 h-12 rounded-full'><Truck color="#B91C1C" size={22} strokeWidth={1.8} /></span>
              <div className=''>
                <h5 className='font-metropolisSemiBold text-base text-[#141414]'>Fast delivery</h5>
                <h6 className='font-metropolisRegular text-sm text-[#5C5953]'>Quick shipping on all your favourite products</h6>
              </div>
            </div>
            <div className='flex gap-4 pl-11'>
              <span className='flex items-center justify-center bg-[#B91C1C]/10 w-12 h-12 rounded-full'><ShieldCheck color="#B91C1C" size={22} strokeWidth={1.8} /></span>
              <div className=''>
                <h5 className='font-metropolisSemiBold text-base text-[#141414]'>Quality products</h5>
                <h6 className='font-metropolisRegular text-sm text-[#5C5953]'>Electronis, fashion, beauty and more</h6>
              </div>
            </div>
            <div className='flex gap-4 pl-11'>
              <span className='flex items-center justify-center bg-[#B91C1C]/10 w-12 h-12 rounded-full'><Tag color="#B91C1C" size={22} strokeWidth={1.8} /></span>
              <div className='text-center'>
                <h5 className='font-metropolisSemiBold text-base text-[#141414]'>Great prices</h5>
                <h6 className='font-metropolisRegular text-sm text-[#5C5953]'>Exclusive deals across every category</h6>
              </div>
            </div>
      </div>
    </section>
  )
}

export default Hero