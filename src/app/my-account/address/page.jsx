'use client'
import AccountSidebar from '@/components/AccountSidebar'
import { MyContext } from '@/context/ThemeProvider'
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import AddressBox from './AddressBox'

export default function Address() {
    const context = useContext(MyContext)

    const handleAddAddress = () => {
        context?.openAddressPanel?.()
    }
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
                                <h4 className='text-[20px] text-gray-600 font-medium'>Address</h4>
                                <p className='text-gray-500 text-[16px]'>Manage Your Addresses</p>
                            </div>
                            <Button
                                onClick={handleAddAddress} // Correct - function reference
                                className='border! border-primary! text-primary! capitalize! font-semibold! px-5!'>
                                <FaPlus size={14} className='mr-1!' />
                                add address
                            </Button>
                        </div>
                        <div className="flex flex-col gap-3 p-5">
                            <AddressBox />
                            <AddressBox />
                            <AddressBox />
                            <AddressBox />
                            <AddressBox />
                            <AddressBox />
                            <AddressBox />
                            <AddressBox />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
