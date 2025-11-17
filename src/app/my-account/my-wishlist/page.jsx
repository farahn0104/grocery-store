'use client'
import AccountSidebar from '@/components/AccountSidebar'
import { MyContext } from '@/context/ThemeProvider'
import { Button, Rating } from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import WishlistItem from './WishlistItem'


export default function MyList() {

    return (
        <section className='bg-gray-200 py-8'>
            <div className="container flex gap-5">
                <div className="w-[22%]">
                    <AccountSidebar />
                </div>

                <div className="wrapper w-[60%]">
                    <div className=" bg-white shadow-md rounded-md mb-5">

                        <div className='p-4 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]'>

                            <div className="info">
                                <h4 className='text-[20px] text-gray-600 font-medium'>My List</h4>
                                <p className='text-gray-500 text-[16px]'>There are <span className='text-primary font-bold'> 4 </span> products in your My List</p>
                            </div>
                        </div>

                        <div className='productRow flex flex-col items-center gap-1 pe-2'>

                            <WishlistItem />
                            <WishlistItem />
                            <WishlistItem />
                            <WishlistItem />
                            <WishlistItem />
                            <WishlistItem />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
