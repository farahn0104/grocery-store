'use client'

import AccountSidebar from '@/components/AccountSidebar'
import { Button, Pagination } from '@mui/material'

import { FaAngleDown } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import TableRow from './tableRow'
import OrderRow from './tableRow'
import Search from '@/components/Search'

export default function MyOrders() {



    return (
        <section className='bg-gray-200 py-8'>
            <div className="container flex gap-5">
                <div className="w-[20%]">
                    <AccountSidebar />
                </div>
                <div className="wrapper w-[80%]">
                    <div className="bg-white shadow-md rounded-md mb-5 p-5">
                        <div className="flex items-center justify-between">

                            <div className="info">
                                <h1 className='text-[22px] font-semibold text-gray-600'>Orders</h1>
                                <p className='text-gray-500'>There is <span className='text-primary font-bold'> 5 </span>Orders</p>
                            </div>
                            <Search placeholder='Search Order...' width={300} />
                        </div>




                        <div className="overflow-x-auto w-full mt-5 scroll">
                            <table className='w-full'>
                                <thead className='bg-gray-200'>
                                    <tr className='text-left text-gray-700 font-semibold text-[14px]'>
                                        <th className='px-4 py-3 whitespace-nowrap'></th>

                                        <th className=' px-4 py-3 whitespace-nowrap'>Order Id</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Customer</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Payment Id</th>

                                        <th className=' px-4 py-3 whitespace-nowrap'>Phone Number</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Address</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Pin Code</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Total Amount</th>

                                        <th className=' px-4 py-3 whitespace-nowrap'>User Id</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Order Status</th>
                                        <th className=' px-4 py-3 whitespace-nowrap'>Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <OrderRow />
                                    <OrderRow />
                                    <OrderRow />
                                    <OrderRow />
                                    <OrderRow />


                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-center mt-5 py-5">
                            <Pagination count={10} showFirstButton showLastButton />
                        </div>



                    </div>



                </div>
            </div>

        </section>
    )
}
