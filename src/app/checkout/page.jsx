'use client'
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import Radio from '@mui/material/Radio'
import Link from 'next/link'
import Image from 'next/image'
import { MyContext } from '@/context/ThemeProvider'

export default function Checkout() {
    const context = useContext(MyContext)

    const handleAddAddress = () => {
        context?.openAddressPanel?.()
    }
    return (
        <section className='bg-gray-200 py-8'>
            <div className="container w-[70%]! m-auto flex gap-5">
                <div className="col1 bg-white shadow-md rounded-md w-[70%] ">
                    <div className="flex items-center justify-between border-b p-5 border-gray-300">
                        <h2 className='text-[18px] font-5 font-medium  text-gray-700'>Select Delivery Address</h2>
                        <Button
                            onClick={handleAddAddress} // Correct - function reference
                            className='border! border-primary! text-primary! capitalize! font-semibold! px-5!'>
                            <FaPlus size={14} className='mr-1!' />
                            add new address
                        </Button>
                    </div>

                    <div className="addressSection flex flex-col gap-3 my-5 p-5 w-full">

                        <label className="address border border-gray-300 p-4 rounded-md bg-[#f4f4f4] flex gap-5">

                            <Radio />

                            <div className="info flex flex-col gap-1 pt-3 text-gray-700 w-60%">
                                <span className='text-[14px] font-medium'>Home</span>
                                <span className='text-[16px] '>Name</span>
                                <p>H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi near govt school</p>
                                <span className='text-[16px] '>+91 77048 00104</span>

                            </div>
                            <div className="btn flex justify-end w-[20%]">
                                <div className="ml-auto">

                                    <Button className='font-bold! uppercase! text-primary!'>edit</Button>
                                </div>
                            </div>


                        </label>

                        <label className="address border border-gray-300 p-4 rounded-md bg-[#f4f4f4] flex gap-5">

                            <Radio />

                            <div className="info flex flex-col gap-1 pt-3 text-gray-700 w-60%">
                                <span className='text-[14px] font-medium'>Home</span>
                                <span className='text-[16px] font-normal'>Name</span>
                                <p>H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi near govt school</p>
                                <span className='text-[16px] '>+91 77048 00104</span>

                            </div>
                            <div className="btn flex justify-end w-[20%]">
                                <div className="ml-auto">

                                    <Button className='font-bold! uppercase! text-primary!'>edit</Button>
                                </div>
                            </div>


                        </label>

                    </div>







                </div>

                <div className="col2 w-[30%]">
                    <div className="bg-white rounded-md shadow-md w-full">
                        <div className="p-5 border-b border-gray-300">
                            <h2 className='text-gray-700 font-medium text-[18px]'>Your Order</h2>
                        </div>

                        <div className='p-4 flex items-center justify-between text-[15px] font-medium text-gray-700 border-b border-gray-300'>
                            <span className='font-semibold'>Product</span>
                            <span className='font-semibold'>Subtotal</span>
                        </div>

                        <div className="flex flex-col gap-1 my-3 scroll scroll-auto max-h-[300px] overflow-y-scroll ">
                            <div className="productRow flex items-center gap-2 py-2 px-3">
                                <div className="image">
                                    <Image width={64} height={64} src="/product1.png" alt="product image" className='object-cover ' />
                                </div>

                                <div className="info text-gray-600 ">
                                    <h4 className='text-[14px] font-medium '>Fortune Sunlite Refi...</h4>
                                    <span>Qty: 1</span>
                                </div>
                                <span className='text-[14px] font-semibold text-gray-600 ml-auto'>$99</span>

                            </div>

                            <div className="productRow flex items-center gap-2 py-2 px-3">
                                <div className="image">
                                    <Image width={64} height={64} src="/product2.png" alt="product image" className='object-cover ' />
                                </div>

                                <div className="info text-gray-600 ">
                                    <h4 className='text-[14px] font-medium '>Fortune Sunlite Refi...</h4>
                                    <span>Qty: 1</span>
                                </div>
                                <span className='text-[14px] font-semibold text-gray-600 ml-auto'>$99</span>

                            </div>

                            <div className="productRow flex items-center gap-2 py-2 px-3">
                                <div className="image">
                                    <Image width={64} height={64} src="/product3.png" alt="product image" className='object-cover ' />
                                </div>

                                <div className="info text-gray-600 ">
                                    <h4 className='text-[14px] font-medium '>Fortune Sunlite Refi...</h4>
                                    <span>Qty: 1</span>
                                </div>
                                <span className='text-[14px] font-semibold text-gray-600 ml-auto'>$99</span>

                            </div>

                            <div className="productRow flex items-center gap-2 py-2 px-3">
                                <div className="image">
                                    <Image width={64} height={64} src="/product11.png" alt="product image" className='object-cover ' />
                                </div>

                                <div className="info text-gray-600 ">
                                    <h4 className='text-[14px] font-medium '>Fortune Sunlite Refi...</h4>
                                    <span>Qty: 1</span>
                                </div>
                                <span className='text-[14px] font-semibold text-gray-600 ml-auto'>$99</span>

                            </div>

                            <div className="productRow flex items-center gap-2 py-2 px-3">
                                <div className="image">
                                    <Image width={64} height={64} src="/product9.png" alt="product image" className='object-cover ' />
                                </div>

                                <div className="info text-gray-600 ">
                                    <h4 className='text-[14px] font-medium '>Fortune Sunlite Refi...</h4>
                                    <span>Qty: 1</span>
                                </div>
                                <span className='text-[14px] font-semibold text-gray-600 ml-auto'>$99</span>

                            </div>

                        </div>

                        <div className="px-5 flex w-full pb-5">
                            <Link href={'/checkout'} className='w-full'>
                                <Button className='btn-g w-full'>Checkout</Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
