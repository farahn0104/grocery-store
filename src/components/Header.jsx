import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

import Search from './Search'
import Nav from './Nav';


export default function Header() {
    return (
        <>
            <div className="headerWrapper sticky top-0 z-50 bg-white">
                <header className='py-3  border border-gray-200'  >
                    <div className='container flex justify-between items-center'>
                        <div>
                            <Link href={'/'}>
                                <Image src={'/logo.png'} width={226} height={59} alt='logo image' />
                            </Link>
                        </div>

                        <Search placeholder='Search For Order...' width={500} />

                        <div className='flex items-center gap-5'>

                            <div className='flex items-center gap-3'>
                                <Link href={'/login'} className='hover:text-primary'>Login</Link>
                                <span>|</span>
                                <Link href={'/register'} className='hover:text-primary'>Register</Link>
                            </div>
                            <div className='flex items-center gap-8'>
                                <Link href={'/my-account/my-wishlist'} className='relative flex group'>
                                    <span className='bg-[#DC2626] w-6 h-6  flex items-center justify-center rounded-full text-white -top-2.5 -right-[17px]  absolute'>3</span>
                                    <FaRegHeart size={25} className='text-gray-700 group-hover:text-primary' />
                                </Link>

                                <Link href={'/cart'} className='relative flex group'>
                                    <span className='bg-[#DC2626] w-6 h-6  flex items-center justify-center rounded-full text-white -top-2.5 -right-[13px]  absolute'>3</span>
                                    <BiShoppingBag size={30} className='text-gray-700 group-hover:text-primary' />
                                </Link>


                            </div>
                        </div>

                    </div>

                </header>
                <Nav />
            </div>

        </>

    )
}

