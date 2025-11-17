'use client'
// import React, { useRef, useState } from 'react';
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

// import './styles.css';

export default function HomeSlider() {
    return (
        <div className='homeSlider bg-white'>
            <div className="container">
                <Swiper
                    loop={true}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={'/slide1.png'} width={1344} height={514} alt='Slide1' className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={'/slide1.png'} width={1344} height={514} alt='Slide1' className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={'/slide1.png'} width={1344} height={514} alt='Slide1' className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={'/slide1.png'} width={1344} height={514} alt='Slide1' className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={'/slide1.png'} width={1344} height={514} alt='Slide1' className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <Image src={'/slide1.png'} width={1344} height={514} alt='Slide1' className='w-full' />
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>

        </div>
    )
}

