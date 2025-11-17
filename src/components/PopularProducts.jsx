'use client'
import { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ProductSlider from './ProductSlider';

export default function PopularProducts() {
    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <section className='bg-white py-8 pb-0'>
            <div className="container ">
                <div className="flex items-center justify-between mb-5">

                    <div className="col1 w-[30%]">
                        <h2 className='text-gray-800 font-medium text-[20px]'>Popular Products</h2>
                        <p className='text-[14px] text-gray-800'>Do not miss the current offers</p>
                    </div>

                    <div className='col2 w-[70%] flex justify-end items-center '>

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Meats & Seafood" />
                            <Tab label="Breaksfast & Dairy" />
                            <Tab label="Breads & Bakery" />
                            <Tab label="Beverages" />
                            <Tab label="Frozen Foods" />
                            <Tab label="Biscuits & Snacks" />
                            <Tab label="Staples" />
                            <Tab label="Grocery & Staples" />
                            <Tab label="Baby & Pregnancy" />
                            <Tab label="Healthcare" />
                        </Tabs>

                    </div>
                </div>

                <ProductSlider />
            </div>
        </section>
    )
}
