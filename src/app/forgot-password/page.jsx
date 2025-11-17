'use client'

import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { GoArrowLeft } from "react-icons/go";
import Link from 'next/link';

export default function ForgotPassword() {
    return (

        <section className='py-20 w-full  bg-gray-100 flex items-center justify-center overflow-hidden relative'>
            <div className="container">
                <div className="bg-white p-10 rounded-lg border border-gray-300 w-[500px] m-auto">

                    <div className="text-center flex flex-col justify-center">
                        <img src="/forgot-password.png" alt="forget password image" className='m-auto' />
                        <h1 className='text-center text-[20px] font-medium text-gray-800 mb-6 mt-5'>Forget Password</h1>
                    </div>


                    <div className="my-4 w-full">
                        <TextField className='w-full' type='email' id="emailField" label="Email..." variant="outlined" />
                    </div>

                    <div className="w-full my-4 relative">

                        <Link href={'/verify'} className='w-full'>
                            <Button className='w-full btn-g py-4! text-[16px]!' >Forgot Password</Button>
                        </Link>
                    </div>

                    <div className="text-center flex">
                        <Link href={'/login'} className='flex gap-1 m-auto items-center text-center text-[15px] text-primary hover:text-secondary font-semibold'>
                            <GoArrowLeft size={20} />
                            Back to Login</Link>
                    </div>


                </div>
            </div>

            <div className="circle1 bg-primary opacity-15 w-[400px] h-[400px] rounded-full absolute -bottom-[100px] -left-[15%]"></div>
            <div className="circle2 bg-primary opacity-15 w-[400px] h-[400px] rounded-full absolute -right-[15%] -top-[100px]"></div>


        </section>
    )
}

