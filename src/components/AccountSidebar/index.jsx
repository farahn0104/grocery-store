'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { BsBagCheck } from 'react-icons/bs';
import { FaCloudUploadAlt, FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FiMapPin } from "react-icons/fi";
import { IoMdLogOut } from 'react-icons/io';
import { usePathname } from 'next/navigation';


export default function AccountSidebar() {
    const Navlinks = [
        {
            name: 'My Profile',
            href: '/my-account',
            icon: <FaRegUser size={20} />
        },
        {
            name: 'Address',
            href: '/my-account/address',
            icon: <FiMapPin size={20} />
        },
        {
            name: 'My Wishlist',
            href: '/my-account/my-wishlist',
            icon: <FaRegHeart size={20} />
        },
        {
            name: 'My Orders',
            href: '/my-account/my-orders',
            icon: <BsBagCheck size={20} />
        },
        {
            name: 'Logout',
            href: '/logout',
            icon: <IoMdLogOut size={20} />
        },
    ]
    const pathName = usePathname()

    return (
        <aside className='accountSidebar w-full bg-white shadow-md rounded-md '>
            <div className="profileSection py-5  pb-0">
                <div className="profileImage w-25 m-auto h-25 rounded-full overflow-hidden relative group">
                    <img src={'/profile4.jpg'} alt="profile image" className='w-full h-full object-cover' />
                    <div className="absolute overlay w-full h-full rounded-full bg-[rgba(0,0,0,0.7)] z-50 top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <FaCloudUploadAlt size={30} className='text-white!' />
                        <input type="file" className='w-full h-full absolute top-0 left-0 z-50 cursor-pointer opacity-0' />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <h4 className='text-[18px] font-semibold text-gray-700 '>Farhan Ansari</h4>
                    <p className='text-[14px] font-semibold text-gray-600 '>mdfarhankic85@gmail.com</p>
                </div>

                <div className="bg-[#f1f1f1] mt-4 flex flex-col MyActive">
                    {
                        Navlinks.map((item, index) => {
                            const isActive = pathName === item.href
                            return (
                                <Link key={index} href={item.href} className='flex'>
                                    <Button className={`${isActive ? 'active' : null} text-gray-600! capitalize! w-full! justify-start! px-5! py-2! gap-2 text-[15px]! font-semibold!`}>
                                        {item.icon}
                                        {item.name}
                                    </Button>
                                </Link>
                            )
                        })
                    }

                    {/* <Link href={'/my-account'} className='flex'>
                        <Button className='text-gray-600! capitalize! w-full! justify-start! px-5! py-2! gap-2 text-[15px]! font-semibold!'>
                            <FiMapPin size={20} />
                            Address
                        </Button>
                    </Link>
                    <Link href={'/my-account'} className='flex'>
                        <Button className='text-gray-600! capitalize! w-full! justify-start! px-5! py-2! gap-2 text-[15px]! font-semibold!'>
                            <FaRegHeart size={20} />
                            My List
                        </Button>
                    </Link>
                    <Link href={'/my-account'} className='flex'>
                        <Button className='text-gray-600! capitalize! w-full! justify-start! px-5! py-2! gap-2 text-[15px]! font-semibold!'>
                            <BsBagCheck size={20} />
                            My Orders
                        </Button>
                    </Link> 

                    <Button className='text-gray-600! capitalize! w-full! justify-start! px-5! py-2! gap-2 text-[15px]! font-semibold!'>
                        <IoMdLogOut size={20} />
                        Logout
                    </Button>
                        */}

                </div>

            </div>

        </aside>
    )
}
