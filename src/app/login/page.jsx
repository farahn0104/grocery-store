'use client'

import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import { Button } from '@mui/material';
import Link from 'next/link';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className='py-10 w-full  bg-gray-100 flex items-center justify-center overflow-hidden relative'>
            <div className="container">
                <div className="bg-white p-10 rounded-lg border border-gray-300 w-[500px] m-auto">
                    <h1 className='text-center text-[20px] font-medium text-gray-800 mb-6'>Login to your Account</h1>


                    <div className="my-4 w-full">
                        <TextField className='w-full' type='email' id="emailField" label="Email..." variant="outlined" />
                    </div>

                    <div className="my-4 w-full relative">
                        <TextField className='w-full' type={showPassword ? "text" : "password"} id="passwordField" label="Password..." variant="outlined" />
                        <IconButton onClick={() => setShowPassword(!showPassword)} className='absolute! top-3 right-2 z-50' aria-label="password" size="small">
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}

                        </IconButton>
                    </div>

                    <div className="py-1">
                        <Link href={'/forgot-password'} className='font-medium text-gray-700 hover:text-primary text-[16px]'>Forgot Password

                        </Link>
                    </div>

                    <div className="w-full my-4 relative">
                        <Button className='w-full btn-g py-4! text-[16px]!' >Login</Button>
                    </div>

                    <div className="text-center text-[15px] text-gray-600 mb-3">
                        <span>Not registered?
                            <Link href={'/register'} className='text-primary hover:text-secondary font-semibold'>Sign Up</Link>
                        </span>
                    </div>
                    <div className="text-center text-[15px] text-gray-600 mb-3">
                        <span>Or continue with social account</span>
                    </div>

                    <div className='flex items-center justify-center'>
                        <Button
                            loading={false}
                            loadingPosition='end'
                            startIcon={<FcGoogle />}
                            variant='outlined'
                            size='large'
                            className='w-full bg-gray-200! text-gray-800! font-semibold! py-3! border! border-gray-300! '
                        >signup with google</Button>
                    </div>


                </div>
            </div>

            <div className="circle1 bg-primary opacity-15 w-[400px] h-[400px] rounded-full absolute -bottom-[100px] -left-[15%]"></div>
            <div className="circle2 bg-primary opacity-15 w-[400px] h-[400px] rounded-full absolute -right-[15%] -top-[100px]"></div>


        </section>
    )
}

