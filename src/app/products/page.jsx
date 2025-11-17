'use client'
import Sidebar from '@/components/Sidebar'
import { Button } from '@mui/material'
import { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItems from '@/components/ProductItems';

import Pagination from '@mui/material/Pagination';

export default function Products() {
  const [sortBy, setSortBy] = useState('name, A to Z')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className='py-5 bg-white'>
      <div className='container flex gap-4'>
        <div className='sidebarWrapper w-[18%] '>
          <Sidebar />
        </div>

        <div className="rightContent w-[82%]">
          <div className=" top-strip bg-[#f1f1f1] bg-opacity-100 sticky top-[134px] z-49 w-full p-2 rounded-md h-12 flex items-center justify-between px-4">
            <span className='text-[14px] text-gray-700 font-medium'>There are 25 Products.</span>
            <div className="flex items-center gap-3 ">
              <span className='text-[15px] text-gray-700 font-medium'>Sort by</span>

              <div className='relative'>
                <Button onClick={handleClick} className='absolute bg-white! capitalize! text-gray-900! px-3! py-1!'>{sortBy}</Button>
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
                  <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Price, Low to High</MenuItem>
                  <MenuItem onClick={handleClose}>Price, High to Low</MenuItem>
                </Menu>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-5 gap-5 py-5">
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
          </div>

          <div className="flex items-center justify-center mt-5">
            <Pagination count={10} showFirstButton showLastButton />
          </div>

        </div>
      </div>
    </section>
  )
}
