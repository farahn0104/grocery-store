'use client'
import AccountSidebar from '@/components/AccountSidebar'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css';
import { Collapse } from 'react-collapse';

export default function MyAccount() {
    const [phone, setPhone] = useState('')
    const [isOpenChangePasswordBox, setIsOpenChangePasswordBox] = useState(false)
    return (
        <section className='bg-gray-200 py-8'>
            <div className="container flex gap-5">
                <div className="w-[20%]">
                    <AccountSidebar />
                </div>
                <div className="wrapper w-[50%]">
                    <div className="bg-white shadow-md rounded-md mb-5">
                        <div className='p-4 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]'>

                            <div className="info">
                                <h4 className='text-[20px] text-gray-600 font-medium'>My Profile</h4>
                                <p className='text-gray-500 text-[16px]'>All your account information in one place</p>
                            </div>
                            <Button
                                onClick={() => setIsOpenChangePasswordBox(!isOpenChangePasswordBox)}
                                className='btn-border-g px-5!'>Change Password</Button>
                        </div>
                        <form className='p-5'>
                            <div className="grid grid-cols-2 gap-5 mb-5">

                                <div className="form-group">
                                    <TextField id='fullName' label='Full Name...' variant='outlined' size='small' className='w-full!' />
                                </div>
                                <div className="form-group">
                                    <TextField type='email' id='email' label='Email...' variant='outlined' size='small' className='w-full!' />
                                </div>
                                <div className="form-group w-full">
                                    <PhoneInput
                                        defaultCountry='in'
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                        className='w-full!'
                                    />
                                </div>
                            </div>
                            <Button type='submit' className='btn-g'>Submit</Button>
                        </form>
                    </div>

                    <Collapse isOpened={isOpenChangePasswordBox}>
                        {/* setIsOpenChangePasswordBox */}
                        {/* onClick={() => setIsOpenRatingFilter(!isOpenRatingFilter)} */}
                        <div className="bg-white shadow-md rounded-md">
                            <div className='p-4 flex items-center justify-between border-b border-[rgba(0,0,0,0.2)]'>

                                <div className="info">
                                    <h4 className='text-[20px] text-gray-600 font-medium'>Change Password</h4>
                                    <p className='text-gray-500 text-[15px]'>Update your password</p>
                                </div>

                            </div>

                            <form className='p-5'>
                                <div className="grid grid-cols-2 gap-5 mb-5">

                                    <div className="form-group">
                                        <TextField id='oldPassword' label='Old Password...' variant='outlined' size='small' className='w-full!' />
                                    </div>
                                    <div className="form-group">
                                        <TextField id='newPassword' label='New Password...' variant='outlined' size='small' className='w-full!' />
                                    </div>
                                    <div className="form-group">
                                        <TextField id='confirmPassword' label='Confirm Password...' variant='outlined' size='small' className='w-full!' />
                                    </div>

                                </div>
                                <Button type='submit' className='btn-g'>Change Password</Button>
                            </form>

                        </div>

                    </Collapse>

                </div>
            </div>

        </section>
    )
}
