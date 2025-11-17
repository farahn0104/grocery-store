import Link from 'next/link'
import React from 'react'

import { FaAngleDown } from "react-icons/fa6";

export default function Nav() {
    return (
        <nav className=''>
            <div className='container flex items-center justify-between gap-5 py-3 fon '>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/'}>Home</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Fruits & Vegetables</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Meats & Seafood</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Breaksfast & Dairy</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Bread & Bakery</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Bevarages</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Frozen Foods</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Biscuits & Sncack</Link>
                <Link className='duration-300 hover:text-primary text-[17px] text-gray-800 font-medium' href={'/products'}>Grocery & Staples</Link>
                <div className='relative group'>
                    <span className='flex items-center gap-1 cursor-pointer duration-300 hover:text-primary text-[17px] text-gray-800 font-medium'>More
                        <FaAngleDown size={18} />
                        <div className='w-[200px] invisible  group-hover:visible opacity-0 transition group-hover:opacity-100 dropdown-menu flex flex-col absolute top-full right-0 bg-white shadow-md rounded-md overflow-hidden pt-4'>
                            <Link className='flex py-2 px-3 duration-300 hover:text-primary text-[14px] text-gray-800 font-medium' href={'/products'}>Frozen Foods</Link>
                            <Link className='flex py-2 px-3 duration-300 hover:text-primary text-[14px] text-gray-800 font-medium' href={'/products'}>Bevarages</Link>
                            <Link className='flex py-2 px-3 duration-300 hover:text-primary text-[14px] text-gray-800 font-medium' href={'/products'}>Fruits & Vegitables</Link>
                            <Link className='flex py-2 px-3 duration-300 hover:text-primary text-[14px] text-gray-800 font-medium' href={'/products'}>Meats & Seafood</Link>
                            <Link className='flex py-2 px-3 duration-300 hover:text-primary text-[14px] text-gray-800 font-medium' href={'/products'}>Bread & Bakery</Link>

                        </div>
                    </span>
                </div>
            </div>
        </nav>
    )
}

