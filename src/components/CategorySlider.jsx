'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// import required modules

export default function CategorySlider() {
    return (
        <div className='py-4 bg-white group-hover:bg-gray-100'>
            <div className="container">

                <Swiper slidesPerView={10}
                    loop={true}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link href={'/products'} className='group' >
                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat1.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Fruits & Vegitables</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >
                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat2.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Meats & Seafood</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat3.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Breaksfast &
                                Dairy</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat4.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Breads &
                                Bakery</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat5.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Beverages</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat6.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Frozen
                                Foods</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat7.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Biscuits &
                                Snacks</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat8.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Grocery &
                                Staples</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat9.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Baby &
                                Pregnancy</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat10.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Healthcare</h4>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/products'} className='group' >

                            <div className='py-5 h-[110px] bg-white w-full rounded-md  flex items-center justify-center group-hover:bg-gray-100 transition shadow-md'>
                                <Image src={'/cat5.png'} width={66} height={66} alt='category1' className='transition group-hover:scale-105 duration-300' />
                            </div>
                            <h4 className='group-hover:text-primary mt-3 text-gray-700 text-[15px] font-medium text-center'>Bevarges</h4>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
