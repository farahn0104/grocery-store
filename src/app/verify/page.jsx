'use client'

import React, { useState } from 'react'

import { Button } from '@mui/material';
import OtpBox from '@/components/OtpBox';


export default function Verify() {

    const [otp, setOtp] = useState('');

    const handleChangeOtp = (value) => {
        setOtp(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(otp)

    }
    return (

        <section className='py-20 w-full  bg-gray-100 flex items-center justify-center overflow-hidden relative'>
            <div className="container">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg border border-gray-300 w-[500px] m-auto">

                    <div className="text-center flex flex-col justify-center">
                        <img src="/forgot-password.png" alt="forget password image" className='m-auto' />
                        <h1 className='text-center text-[20px] font-medium text-gray-800 mt-5'>Verify OTP</h1>
                        <span>OTP send to <span className='text-[16px] text-primary'>mdfarhankic85@gmail.com</span></span>
                    </div>

                    <div className="flex items-center justify-center">
                        <OtpBox length={6} onChange={handleChangeOtp} /> </div>


                    <div className="w-full mb-4 relative">
                        <Button type='submit' className='w-full btn-g py-4! text-[16px]!' >Verify</Button>
                    </div>





                </form>
            </div>

            <div className="circle1 bg-primary opacity-15 w-[400px] h-[400px] rounded-full absolute -bottom-[100px] -left-[15%]"></div>
            <div className="circle2 bg-primary opacity-15 w-[400px] h-[400px] rounded-full absolute -right-[15%] -top-[100px]"></div>


        </section>
    )
}

