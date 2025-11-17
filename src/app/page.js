import React from 'react'

import HomeSlider from '../components/HomeSlider'
import CategorySlider from '../components/CategorySlider'
import PopularProducts from '@/components/PopularProducts'

import Banners from '@/components/Banners'


import { MdOutlineArrowRightAlt } from "react-icons/md";
import ProductRow from '@/components/ProductRow'


export default function page() {
  return (
    <>
      <div className='sliderWrapper bg-[#F1F1F1] py-5 pb-0'>
        <HomeSlider />
        <CategorySlider />
        <PopularProducts />
        <Banners />

        <ProductRow title='Latest Product' />
        <ProductRow title='Feature Product' />
        <ProductRow title='Brakefast & Dairy' />



      </div>
    </>
  )
}
