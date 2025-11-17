import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
export default function ProductItems() {
    return (
        <div className=' productItems shadow-md w-full bg-white rounded-md'>
            <Link href={'/product/123'} className="img overflow-hidden group flex p-3">
                <Image src={'/product1.png'} className='duration-300 transition group-hover:scale-105' alt='product1 image' width={192} height={172} />
            </Link>
            <div className="info p-3 flex flex-col gap-1">
                <span className='text-[14px] text-gray-700 '>Bingo</span>
                <Link href={'/product/123'} className='hover:text-primary text-[15px] text-gray-800 font-medium'>100 Percent Apple Juice – 64 floz Bottle</Link>
                <Rating name="read-only" value={4} size='small' readOnly />
                
                <div className='flex items-center justify-between'>
                    <span className='text-[#C00000] text-[17px] font-semibold'>$25.99</span>
                    <span className='text-[#A4A4A4] line-through text-[17px] font-semibold'>$38.10</span>
                </div>
                <Button className='btn-border-g'>Add to Cart</Button>
            </div>
        </div>
    )
}
