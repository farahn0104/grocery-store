import React from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Cart() {
    return (
        <section className='bg-gray-200 py-8'>
            <div className="container">
                <div className='flex w-[80%] m-auto gap-10'>
                    <div className="col1 bg-white rounded-md shadow-md  w-[70%]">
                        <div className="p-5 border-b border-gray-200">
                            <h2 className='text-gray-700 text-5 font-medium'>Your Cart</h2>
                            <p className='text-gray-700 text-[15px] font-normal'>There are <span className='font-bold text-primary'> 7 </span> products in your cart</p>
                        </div>

                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                    </div>

                    <div className="col2 w-[30%]">
                        <div className="bg-white rounded-md shadow-md w-full">
                            <div className="p-5 border-b border-gray-300">
                                <h2 className='text-gray-700 font-medium text-[20px]'>Cart Totals</h2>

                            </div>
                            <div className="info p-4">
                                <div className='flex items-center justify-between text-[17px] font-medium text-gray-700 py-2'>
                                    <span className='font-semibold'>Subtotal</span>
                                    <span className='text-[#CB0000] font-bold'>$2,133</span>
                                </div>
                                <div className='flex items-center justify-between text-[17px] font-medium text-gray-700 py-2'>
                                    <span className='font-semibold'>Shipping</span>
                                    <span className='text-gray-700 font-bold'>Free</span>
                                </div>
                                <div className='flex items-center justify-between text-[17px] font-medium text-gray-700 py-2'>
                                    <span className='font-semibold'>Estimate for</span>
                                    <span className='text-gray-700 font-bold'>India</span>
                                </div>
                                <div className='flex items-center justify-between text-[17px] font-medium text-gray-700 py-2'>
                                    <span className='font-semibold'>Total</span>
                                    <span className='text-[#CB0000] font-bold'>$2,133</span>
                                </div>

                            </div>


                            <div className="px-5 flex w-full pb-5">
                                <Link href={'/checkout'} className='w-full'>
                                    <Button className='btn-g w-full'>Next</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
