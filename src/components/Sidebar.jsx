'use client'

import React, { useState } from 'react'
import { Collapse } from 'react-collapse';

import { Button } from '@mui/material';
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import 'react-range-slider-input/dist/style.css'
import { IoIosStar } from "react-icons/io";
import RangeSlider from 'react-range-slider-input'

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function Sidebar() {
    const [price, setPrice] = useState([0, 30000])
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
    const [isOpenRatingFilter, setIsOpenRatingFilter] = useState(true)

    return (
        <aside className='sticky top-[150px] flex flex-col gap-5'>
            <div className='box'>
                <div className='flex items-center justify-between mb-4'>
                    <h3 className='font-semibold text-gray-700 text-[16px]'>Shop by Category</h3>
                    <Button onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
                        className=' min-w-[35px]! min-h-[35px]! rounded-full! hover:bg-gray-200! not-visited:text-gray-800!'>
                        {isOpenCategoryFilter ? <LiaAngleDownSolid
                            className='text-gray-800!' size={20} /> : <LiaAngleUpSolid className='text-gray-800' size={20} />}
                    </Button>
                </div>

                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll overflow-scroll max-h-[250px] ">

                        <FormGroup className=' '>
                            <FormControlLabel control={<Checkbox />} label="Fruits & Vegitables" />
                            <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
                            <FormControlLabel control={<Checkbox />} label="Breaksfast & Dairy" />
                            <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
                            <FormControlLabel control={<Checkbox />} label="Fruits Beverages" />
                            <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
                            <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />
                        </FormGroup>
                    </div>
                </Collapse>
            </div>

            <div className='flex items-center justify-between mb-2'>
                <h3 className='font-semibold text-gray-700 text-[16px]'>Filter by Price</h3>
            </div>

            <RangeSlider
                value={price}
                onInput={setPrice}
                min={0}
                max={30000}
                setp={5}
            />

            <div className='flex items-center justify-between pt-0'>
                <span className='text-gray-700 text-[14px]'>${price[0]}</span>
                <span className='text-gray-700 text-[14px]'>${price[1]}</span>
            </div>

            <div className='box'>
                <div className='flex items-center justify-between mb-4'>
                    <h3 className='font-semibold text-gray-700 text-[16px]'>Filter by Rating</h3>
                    <Button onClick={() => setIsOpenRatingFilter(!isOpenRatingFilter)}
                        className=' min-w-[35px]! min-h-[35px]! rounded-full! hover:bg-gray-200! not-visited:text-gray-800!'>
                        {isOpenRatingFilter ? <LiaAngleDownSolid
                            className='text-gray-800!' size={20} /> : <LiaAngleUpSolid className='text-gray-800' size={20} />}
                    </Button>
                </div>

                <Collapse isOpened={isOpenRatingFilter}>
                    <div className="scroll overflow-scroll max-h-[250px] ratingFilter">
                        <div className="flex flex-col items-center">
                            <div className="item flex items-center gap-1 w-full">
                                <Checkbox {...label} />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                            </div>

                            <div className="item flex items-center gap-1 w-full">
                                <Checkbox {...label} />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />

                            </div>

                            <div className="item flex items-center gap-1 w-full">
                                <Checkbox {...label} />

                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />

                            </div>

                            <div className="item flex items-center gap-1 w-full">
                                <Checkbox {...label} />
                                <IoIosStar size={20} className='text-[#ffc107]' />
                                <IoIosStar size={20} className='text-[#ffc107]' />

                            </div>

                            <div className="item flex items-center gap-1 w-full">
                                <Checkbox {...label} />
                                <IoIosStar size={20} className='text-[#ffc107]' />

                            </div>
                        </div>

                    </div>
                </Collapse>
            </div>

        </aside>
    )
}
