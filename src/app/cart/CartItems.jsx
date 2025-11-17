'use client'

import { Button, Rating } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io'

export default function CartItems() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleQuantitySelect = (qty) => {
        setQuantity(qty);
        handleClose();
    };

    return (
        <div>
            <div className="productRow flex items-center gap-5  p-5 border-b border-gray-200">
                <Link href={'/product/123'} className="img w-[15%] group">
                    <img src="/product13.webp" alt="Product Image" className='w-full transition group-hover:scale-105' />
                </Link>

                <div className="info flex flex-col gap-2 w-[80%]">
                    <span className='text-[15px] text-gray-600'>Fortune</span>
                    <Link href={'product/123'} className='mb-2 text-[18px] text-gray-700 font-normal hover:text-primary'>Fortune Sunlite Refined Sunflower Oil 1 L</Link>
                    <Rating name='read-only' readOnly value={5} size='small' />
                    <div className='flex items-center gap-5'>

                        <div className="relative">
                            <Button
                                onClick={handleClick}
                                className='bg-gray-200! border! border-gray-300!  text-gray-700! py-[3px]! px-2! capitalize! '>
                                Qty: {quantity} 
                                <IoMdArrowDropdown size={18} />
                            </Button>

                            <Menu
                                id="qtyDrop"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                                {Array.from({ length: 15 }).map((_, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => handleQuantitySelect(index + 1)} 
                                    >
                                        {index + 1}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>

                        <div className='flex items-center justify-between gap-5'>
                            <span className='text-[#C00000] text-[18px] font-bold'>$25.99</span>
                            <span className='text-[#A4A4A4] line-through text-[18px] font-bold'>$38.10</span>
                        </div>
                        <span className='text-primary font-bold text-[16px]'>14% OFF</span>

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