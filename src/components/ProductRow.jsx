import React from 'react'
import ProductSlider from './ProductSlider'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'

export default function ProductRow({ title }) {
    return (
        <section className='bg-white py-3'>
            <div className='container'>
                <div className="flex items-center justify-between mb-5">
                    <h2 className='text-gray-800 font-medium text-[20px]'>{title}</h2>
                    <Link href={'/'} className='flex items-center text-[15px] text-gray-700 gap-1 font-medium hover:text-primary duration-300 '>
                        View All
                        <MdOutlineArrowRightAlt size={25} />
                    </Link>
                </div>
                <ProductSlider />
            </div>
        </section>
    )
}

