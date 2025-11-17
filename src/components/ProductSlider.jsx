'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import ProductItems from './ProductItems';
export default function ProductSlider() {
    return (
        <div className='productSlider' >
            <Swiper
                slidesPerView={6}
                loop={true}
                spaceBetween={5}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='py-f3 px-2'>
                    <ProductItems />
                </SwiperSlide>

                <SwiperSlide className='py-3 px-2'>
                    <ProductItems />
                </SwiperSlide>

                <SwiperSlide className='py-3 px-2'>
                    <ProductItems />
                </SwiperSlide>

                <SwiperSlide className='py-3 px-2'>
                    <ProductItems />
                </SwiperSlide>

                <SwiperSlide className='py-3 px-2'>
                    <ProductItems />
                </SwiperSlide>

                <SwiperSlide className='py-3 px-2'>
                    <ProductItems />
                </SwiperSlide>

                <SwiperSlide className='py-3 px-2'>
                    <ProductItems />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
