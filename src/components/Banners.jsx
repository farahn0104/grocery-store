'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Banners() {
    return (
        <section className='py-5 bg-white pt-0'>
            <div className='container'>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={25}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link href={'/'} className="items group overflow-hidden w-full">
                            <img src={'/banner1.png'} className='w-full transition group-hover:scale-105 duration-300 rounded-lg' alt='banner' />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/'} className="items group overflow-hidden w-full">
                            <img src={'/banner2.png'} className='w-full transition group-hover:scale-105 duration-300 rounded-lg' alt='banner' />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href={'/'} className="items group overflow-hidden w-full">
                            <img src={'/banner3.png'} className='w-full transition group-hover:scale-105 duration-300 rounded-lg' alt='banner' />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
