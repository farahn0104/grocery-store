'use client'

import ProductZoom from "./ProductZoom";
import Rating from '@mui/material/Rating'
import QuantityBox from "./QuantityBox";
import { Button } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

import { useState } from "react";

export default function ProductDetailsComponent() {
    const [isActiveTab, setIsActiveTab] = useState(1)
    const [value, setValue] = useState(2)

    return (
        <>
            <div className="flex gap-10  items-center">
                <ProductZoom />

                <div className="content w-[50%]">
                    <h1 className="text-[30px] font-bold text-gray-800">Lays American Style Cream & Onion Potato Chips 82 g</h1>
                    <div className="flex items-center gap-4 my-4" >
                        <p className="flex  items-center gap-3  text-[18px] text-gray-500 font-normal">Brand: <span className="font-medium ">lay&apos;s</span></p>
                        <Rating name="read-only" defaultValue={4} readOnly />
                        <span className="text-[18px] font-normal cursor-pointer text-primary hover:text-secondary">Review (0)</span>
                    </div>

                    <div className="flex items-center gap-5 my-4">
                        <div className='flex items-center justify-between gap-4'>
                            <span className='text-[#C00000] text-[23px] font-bold'>$25.99</span>
                            <span className='text-[#A4A4A4] line-through text-[23px] font-bold'>$38.10</span>
                        </div>

                        <p className="flex items-center gap-3 text-gray-600 text[18px] ">Available In Stock:
                            <span className="text-primary font-bold">74,853 Items</span>
                        </p>

                    </div>

                    <p className="text-[16px] text-gray-500 leading-7 font-medium pr-35">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> <br />
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <div className="flex items-center gap-4 mt-8" >
                        <QuantityBox />
                        <Button className="btn-g px-8! h-[45px]! gap-2"><IoCartOutline size={25} />Add to Cart</Button>
                        <Tooltip title='Add to Wishlist' placement="top">
                            <Button className="border! border-gray-300! w-[45px]! text-gray-700! min-w-[45px]! h-[45px]! gap-2 rounded-full! hover:bg-gray-200!">
                                <FaRegHeart size={20} className="text-gray-600" /></Button>

                        </Tooltip>
                    </div>


                </div>

            </div>

            <div className="flex items-center gap-8 mt-8  mb-4">
                <span className={`${isActiveTab === 0 ? 'border-b-2 border-primary text-primary' : 'transition duration-300 text-gray-800'} font-medium cursor-pointer text-[18px] flex pb-1 `}
                    onClick={() => setIsActiveTab(0)}
                >Description</span>
                <span
                    onClick={() => setIsActiveTab(1)}
                    className={`${isActiveTab === 1 ? 'border-b-2 border-primary text-primary' : 'transition duration-300 text-gray-800'} font-medium cursor-pointer text-[18px] flex pb-1 `}
                >
                    Reviews</span>
            </div>
            <div className="pr-30">

                {isActiveTab === 0 ? <p className="mt-5 text-[16px] text-gray-500 leading-7 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /><br />Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> : ''}

                {isActiveTab === 1 ?
                    <div className="reviewSection w-[70%]">
                        <h2 className="text-[18px] font-medium text-gray-700 mb-5">Customer questions & answers</h2>

                        <div className="scroll max-h-[300px] overflow-y-scroll flex flex-col gap-5">

                            <div className="flex gap-4">
                                <div className="imageWrapper">
                                    <div className="flex items-center justify-center w-15 h-15 rounded-full">
                                        <img src={'/profile1.png'} alt="profile image" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="info flex flex-col gap-1  w-[70%]">
                                    <h3 className="tex-[15px] text-gray-700 font-medium">MD MERAJ</h3>
                                    <span className="font-normal text-[14px] text-gray-700">08-11-2025</span>
                                    <p className="mt-1 text-[15px] text-gray-500 leading-6 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                <div className="w-[30%] pe-3 justify-end flex">
                                    <Rating name="read-only" defaultValue={4} readOnly size="small" />
                                </div>

                            </div>

                            <div className="flex gap-4">
                                <div className="imageWrapper">
                                    <div className="flex items-center justify-center w-15 h-15 rounded-full">
                                        <img src={'/profile2.jpg'} alt="profile image" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="info flex flex-col gap-1 w-[70%]">
                                    <h3 className="tex-[15px] text-gray-700 font-medium">MD MERAJ</h3>
                                    <span className="font-normal text-[14px] text-gray-700">08-11-2025</span>
                                    <p className="mt-1 text-[15px] text-gray-500 leading-6 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                <div className="w-[30%] pe-3 justify-end flex">
                                    <Rating name="read-only" defaultValue={4} readOnly size="small" />
                                </div>

                            </div>

                            <div className="flex gap-4">
                                <div className="imageWrapper">
                                    <div className="flex items-center justify-center w-15 h-15 rounded-full">
                                        <img src={'/profile3.png'} alt="profile image" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="info flex flex-col gap-1  w-[70%]">
                                    <h3 className="tex-[15px] text-gray-700 font-medium">MD MERAJ</h3>
                                    <span className="font-normal text-[14px] text-gray-700">08-11-2025</span>
                                    <p className="mt-1 text-[15px] text-gray-500 leading-6 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                <div className="w-[30%] pe-3 justify-end flex">
                                    <Rating name="read-only" defaultValue={4} readOnly size="small" />
                                </div>



                            </div>

                            <div className="flex gap-4">
                                <div className="imageWrapper">
                                    <div className="flex items-center justify-center w-15 h-15 rounded-full">
                                        <img src={'/profile1.png'} alt="profile image" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="info flex flex-col gap-1  w-[70%]">
                                    <h3 className="tex-[15px] text-gray-700 font-medium">MD MERAJ</h3>
                                    <span className="font-normal text-[14px] text-gray-700">08-11-2025</span>
                                    <p className="mt-1 text-[15px] text-gray-500 leading-6 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make va type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                <div className="w-[30%] pe-3 justify-end flex">
                                    <Rating name="read-only" defaultValue={4} readOnly size="small" />
                                </div>
                            </div>

                        </div>

                        <div className="reviewsForm w-[70%] mt-8">
                            <h2 className="text-[18px] font-medium text-gray-700 mb-3">Add a review</h2>
                            <form className="flex flex-col gap-5">
                                <TextField
                                    id="reviewInput"
                                    label='Write a Review'
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                    className="w-full"
                                    defaultValue=''
                                />
                                <Rating
                                    defaultValue={value}
                                    onChange={(event, newValue) => { setValue(newValue) }}
                                />
                                <div className="btnWrapper">
                                    <Button className="btn-g px-5! py-2!">Submit Review</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    : null}
            </div>

            



        </>
    )
}
