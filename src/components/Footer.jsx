'use client'

import React, { useContext, useState } from 'react'
import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
// import {  } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import Link from 'next/link';
import { IoChatboxOutline } from 'react-icons/io5';
import { Button } from '@mui/material';
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';
import { MyContext } from '@/context/ThemeProvider';
import TextField from '@mui/material/TextField';
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Footer() {
    const context = useContext(MyContext)
    const [phone, setPhone] = useState('')

    //  Drawer close handler
    const handleCloseDrawer = () => {
        context?.closeAddressPanel?.()
    }

    return (

        <>
            <footer className='bg-[#fafafa] py-8 pb-0'>
                <div className="container">

                    <div className="flex items-center justify-center gap-5 py-3 lg:py-8 pb-0 px-0 lg:px-5">
                        <div className="col flex items-center justify-center flex-col group">
                            <LiaShippingFastSolid className='text-[40px] transition-all duration-300 duration-300 hover:text-primary duration-300 hover:-translate-y-1' />
                            <h3 className='text-[16px] font-medium mt-3'>Free Shipping</h3>
                            <p className='text-[12px] font-medium text-gray-700'>For all orders over $100</p>
                        </div>

                        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 px-0 lg:px-5">
                            <div className="col flex items-center justify-center flex-col group">
                                <PiKeyReturnLight className='text-[40px] transition-all duration-300 duration-300 hover:text-primary duration-300 hover:-translate-y-1' />
                                <h3 className='text-[16px] font-medium mt-3'>30 Days return policy</h3>
                                <p className='text-[12px] font-medium text-gray-700'>For an Exchange Product</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 px-0 lg:px-5">
                            <div className="col flex items-center justify-center flex-col group">
                                <BsWallet2 className='text-[40px] transition-all duration-300 duration-300 hover:text-primary duration-300 hover:-translate-y-1' />
                                <h3 className='text-[16px] font-medium mt-3'>Secured Payment  </h3>
                                <p className='text-[12px] font-medium text-gray-700'>Payment Cards Accepted</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 px-0 lg:px-5">
                            <div className="col flex items-center justify-center flex-col group">
                                <LiaGiftSolid className='text-[40px] transition-all duration-300 duration-300 hover:text-primary duration-300 hover:-translate-y-1' />
                                <h3 className='text-[16px] font-medium mt-3'>Special Gifts</h3>
                                <p className='text-[12px] font-medium text-gray-700'>Our First Product Order</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 px-0 lg:px-5">
                            <div className="col flex items-center justify-center flex-col group">
                                <BiSupport className='text-[40px] transition-all duration-300 duration-300 hover:text-primary duration-300 hover:-translate-y-1' />
                                <h3 className='text-[16px] font-medium mt-3'>Support 24/7</h3>
                                <p className='text-[12px] font-medium text-gray-700'>Contact us Anytime</p>
                            </div>
                        </div>


                    </div>
                    <hr />
                    <div className="flex justify-between py-8">
                        <div className="col1 w-[20%] flex flex-col gap-4 border-r border-gray-400">
                            <h3 className='text-[20px] text-gray-700 font-medium '>Contact Us</h3>
                            <p className='text-[14px] font-normal '>BroBazar - Mega Super Store<br /> 507-Union Trade Centre France</p>
                            <Link href="mailto:mdfarhankic85@gmail.com" className='text-gray-700 font-medium text-[16px] hover:text-primary duration-300'>mdfarhankic85@gmail.com</Link>
                            <span className='text-[25px] font-bold text-primary'>(+91) 7704800104</span>

                            <div className="flex items-center gap-3">

                                <IoChatboxOutline className='text-[40px] text-primary' />
                                <span className='text-16 font-medium text-gray-700    '>Online Chat<br />Get Expert Help</span>
                            </div>
                        </div>

                        <div className="col2 w-[35%] flex justify-between gap-5 ps-10">
                            <div className="box">
                                <h3 className='text-[25px] text-gray-700 font-medium'>Products</h3>
                                <ul className='list mt-5'>
                                    <li className='duration-300 list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Prices drop</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>New Products</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Best Sales</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Contact Us</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Site Map</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Stores</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="box">
                                <h3 className='text-[25px] text-gray-700 font-medium'>Our Company</h3>
                                <ul className='list mt-5'>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Delivery</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Legal Notice</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Terms and conditions of use</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>About us</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Secure payment</Link>
                                    </li>
                                    <li className='duration-300  list-none text-[14px] w-full mb-2'>
                                        <Link href={'/'} className='hover:text-primary font-medium text-gray-500 link'>Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col3 w-[45%] ps-20">
                            <h3 className='text-[25px] text-gray-700 font-medium'>Subscribe to newsletter</h3>
                            <p className='tex-[14px] mt-3'>Subscribe to our latest newsletter to get news about special discounts.</p>
                            <form className='flex flex-col gap-5 w-[500px] mt-5'>
                                <input type="email" className='w-full h-10 bg-white border border-gray-300 outline-none rounded-lg px-4' placeholder='Your Email Address...' />
                                <div className='btn'>
                                    <Button className='btn-g uppercase'>subscribe</Button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

                <div className="bottomer border-t border-gray-300 py-3 ">
                    <div className="container flex items-center justify-between">

                        <div className='social flex items-center gap-2'>
                            <Link href={'/'} className='flex items-center justify-center text-gray-600 bg-white border border-gray-300 rounded-full  h-10 w-10 hover:bg-primary hover:text-white duration-300 group transition'>
                                <FaFacebook size={20} className='text-gray-600 group-hover:text-white' />
                            </Link>

                            <Link href={'/'} className='flex items-center justify-center text-gray-600 bg-white border border-gray-300 rounded-full  h-10 w-10 hover:bg-primary hover:text-white duration-300 group transition'>
                                <FaYoutube size={20} className='text-gray-600 group-hover:text-white' />
                            </Link>

                            <Link href={'/'} className='flex items-center justify-center text-gray-600 bg-white border border-gray-300 rounded-full  h-10 w-10 hover:bg-primary hover:text-white duration-300 group transition'>
                                <FaPinterest size={20} className='text-gray-600 group-hover:text-white' />
                            </Link>

                            <Link href={'/'} className='flex items-center justify-center text-gray-600 bg-white border border-gray-300 rounded-full  h-10 w-10 hover:bg-primary hover:text-white duration-300 group transition'>
                                <FaInstagram size={20} className='text-gray-600 group-hover:text-white' />
                            </Link>
                        </div>

                        <div className='text-center text-[16px]'>
                            <span className='text-gray-700'>&copy; Ecommerce Template</span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <img src={'/carte_bleue.png'} alt='image' />
                            <img src={'/visa.png'} alt='image' />
                            <img src={'/master_card.png'} alt='image' />
                            <img src={'/american_express.png'} alt='image' />
                            <img src={'/paypal.png'} alt='image' />
                        </div>


                    </div>
                </div>

            </footer>

            <Drawer
                open={context?.isOpenAddressBox} //0 Correct - state use karo
                onClose={handleCloseDrawer} //0 Correct - function pass karo
                anchor='right'
            >
                <form className='p-5 w-[450px]'>
                    <h3 className='text-gray-700 font-medium text-[18px]'>Add Delivery Address</h3>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="form-group w-full">
                            <TextField className='w-full' label='Address Line 1' variant='outlined' size='small' />
                        </div>
                        <div className="form-group w-full">
                            <TextField className='w-full' label='City' variant='outlined' size='small' />
                        </div>
                        <div className="form-group w-full">

                            <TextField className='w-full' label='State' variant='outlined' size='small' />
                        </div>
                        <div className="form-group w-full">
                            <TextField type='number' className='w-full' label='Pincode' variant='outlined' size='small' />
                        </div>
                        <div className="form-group w-full">
                            <TextField className='w-full' label='Country' variant='outlined' size='small' />
                        </div>
                        <div className="form-group w-full">
                            <PhoneInput
                                defaultCountry='in'
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                className='w-full!'
                            />
                        </div>
                        <div className="form-group w-full">
                            <TextField className='w-full' label='Landmark' variant='outlined' size='small' />
                        </div>

                        <div className="form-group w-full">
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Address Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="home" control={<Radio />} label="Home" />
                                    <FormControlLabel value="office" control={<Radio />} label="Office" />
                                </RadioGroup>
                            </FormControl>

                        </div>

                        <div className="form-group w-full">
                            <Button className='btn-g uppercase w-full!'>Save</Button>
                        </div>



                    </div>
                </form>
            </Drawer>
        </>

    )
}

