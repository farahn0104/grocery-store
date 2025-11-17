'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';

import Image from "next/image";

export default function ProductZoom() {
    const [slideIndex, setSlideIndex] = useState(0)

    const zoomSliderBig = useRef(null)
    const zoomSliderSmall = useRef(null)


    const goToSlide = (index) => {
        setSlideIndex(index)
        zoomSliderBig.current.swiper.slideTo(index)   // ✅ Now works
        zoomSliderSmall.current.swiper.slideTo(index)
    }
    return (
        <div className="imageWrapper w-[30%] ">

            <div className="sliderWrapper border border-gray-300 rounded-lg overflow-hidden">
                <Swiper ref={zoomSliderBig} className="bigSlider">
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={"/productImage1.jpg"}
                            />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={"/productImage2.jpg"}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={"/productImage3.jpg"}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom
                                zoomType="hover"
                                zoomScale={1}
                                src={"/productImage4.jpg"}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="smallSliderWrapper pt-4">
                <Swiper
                    ref={zoomSliderSmall}
                    slidesPerView={5}
                    spaceBetween={10}
                    className="smallSlider">

                    <SwiperSlide>
                        <div onClick={() => goToSlide(0)} className={`item  ${slideIndex === 0 ? 'border-gray-500' : 'border-gray-300'} border p-3  cursor-pointer rounded-lg`}>
                            <Image width={80} height={80} src={"/productImage1.jpg"} alt="Product image " className="w-full" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div onClick={() => goToSlide(1)} className={`item  ${slideIndex === 1 ? 'border-gray-500' : 'border-gray-300'} border p-3  cursor-pointer rounded-lg`}>
                            <Image width={80} height={80} src={"/productImage2.jpg"} alt="Product image " className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div onClick={() => goToSlide(2)} className={`item  ${slideIndex === 2 ? 'border-gray-500' : 'border-gray-300'} border p-3  cursor-pointer rounded-lg`}>
                            <Image width={80} height={80} src={"/productImage3.jpg"} alt="Product image " className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div onClick={() => goToSlide(3)} className={`item  ${slideIndex === 3 ? 'border-gray-500' : 'border-gray-300'} border p-3  cursor-pointer rounded-lg`}>
                            <Image width={80} height={80} src={"/productImage4.jpg"} alt="Product image " className="w-full" />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}
