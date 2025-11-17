
'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

export default function OrderRow() {
    const [expandIndex, setExpandIndex] = useState(false)
    return (
        <>

            <tr className='text-gray-600 font-medium text-[14px] hover:bg-gray-50'>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap font-bold'>
                    <Button
                        onClick={() => setExpandIndex(!expandIndex)}
                        className='min-w-10! h-10! w-10! rounded-full! bg-gray-100!  text-black! hover:bg-gray-200!'>
                        <FaAngleDown size={25} className={`transition-all duration-300 ${expandIndex ? 'rotate-180' : ''} text-gray-500`} />
                    </Button>
                </td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap font-bold'>#12345</td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>
                    <div className="flex items-center gap-3 max-w-[300px]">
                        <div className="rounded-full w-12 h-12 overflow-hidden">
                            <img src="/profile4.jpg" alt="Profile Image" />
                        </div>
                        <div className="info flex flex-col ">
                            <span className='text-gray-800 text-[14px]'>Dr. Ernest Fritsch-Shanahan</span>
                            <span className='text-gray-500 text-[14px]'>august17@hotmail.com</span>
                        </div>
                    </div>
                </td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>pay_RLSUjirStvN9Zu</td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>+91 77048 00104</td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 '>
                    <div className="w-[350px] py-3">
                        <span className='bg-gray-200 rounded-md px-2 py-1 border-b border-[rgba(0,0,0,0.2)]'>Home</span>
                        <p className='mt-2'>H No 222 Street No 6 Adarsh Mohalla Delhi near govt school Delhi India</p>
                    </div>
                </td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>110053</td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>$530</td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap text-primary font-bold'>#67ced8a3d9ec6f3a176344cf</td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>
                    <span className='text-white bg-primary px-5 py-2 rounded-3xl'>confirm</span>
                </td>
                <td className='border-b border-[rgba(0,0,0,0.2)] px-4 py-2 whitespace-nowrap'>
                    <div className="flex items-center gap-1">

                        <MdDateRange size={20} />
                        10-11-2025
                    </div>
                </td>

            </tr>

            {expandIndex ?
                <tr className='bg-gray-100'>
                    <td className='p-5' colSpan={4}>
                        <div className='flex items-center gap-3'>
                            <div className="img w-20 h-20 overflow-hidden rounded-md">
                                <img src="/profile5.webp" alt="profile 7 image" className='object-cover w-full h-full' />
                            </div>
                            <div className="info flex flex-col">
                                <h2 className='text-gray-900 text-[15px] font-medium'>Tasty Metal Shirt</h2>
                                <span className='text-[13px] font-semibold text-gray-600'>Shoes</span>
                                <span className='text-[13px] font-semibold text-gray-600'>Unit Price: $410.00</span>
                            </div>
                        </div>
                    </td>

                    <td className='p-5' colSpan={1}>
                        X2
                    </td>
                    <td className='p-5' colSpan={1}>
                        <span className='text-gray-950 font-medium'>$802</span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                :
                null
            }


        </>
    )
}
