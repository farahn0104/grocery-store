'use client'
import { Button } from '@mui/material'
import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function AddressBox() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="addressBox w-full p-4 bg-[#fafafa border rounded-md border-[rgba(0,0,0,0.2)] flex items-center justify-between">
            <div className="info w-[80%]  ">
                <span className='inline-block bg-gray-200 text-[15px] p-2 rounded-md py-1'>Home</span>
                <h3 className='uppercase py-1 text-[18px] text-gray-700 font-medium'>Farhan Ansari +91 77048 00104</h3>
                <p className='text-[14px] text-gray-600'>H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi 110053</p>
            </div>
            <div className="action relative">
                <Button
                    onClick={handleClick}
                    className='w-12! h-12! min-w-12! rounded-full! text-gray-700!'>
                    <HiOutlineDotsVertical size={25} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>

                </Menu>


            </div>

        </div>
    )
}
