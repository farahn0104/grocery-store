import { Button, Rating } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

export default function WishlistItem() {
    return (
        <div>
            <div className='productRow flex items-center gap-5 pe-2'>

                <div className=" productRow flex items-center gap-5  p-3 border-b border-gray-200">
                    <Link href={'/product/123'} className="img w-[15%] group">
                        <img src="/product13.webp" alt="Product Image" className='w-full transition group-hover:scale-105' />
                    </Link>

                    <div className="info flex flex-col gap-1 w-[80%]">
                        <span className='text-[15px] text-gray-600'>Fortune</span>
                        <Link href={'product/123'} className='mb-2 text-[18px] text-gray-700 font-normal hover:text-primary'>Fortune Sunlite Refined Sunflower Oil 1 L</Link>
                        <Rating name='read-only' readOnly value={5} size='small' />
                        <div className='flex items-center gap-5'>



                            <div className='flex items-center justify-between gap-5'>
                                <span className='text-[#C00000] text-[18px] font-bold'>$25.99</span>
                                <span className='text-[#A4A4A4] line-through text-[18px] font-bold'>$38.10</span>
                            </div>
                            <span className='text-primary font-bold text-[16px]'>14% OFF</span>

                        </div>

                    </div>




                </div>
                <Button
                    className="w-[45px]! h-[45px]! min-w-[45px]! rounded-full! p-0! flex! items-center! justify-center! bg-gray-200! hover:bg-gray-300! active:bg-gray-200!">
                    <IoMdClose size={22} className="text-gray-700" />
                </Button>
            </div>
        </div>
    )
}
