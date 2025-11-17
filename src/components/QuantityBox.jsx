'use client'

import { Button } from '@mui/material'
import React, { useState } from 'react'
import { LiaAngleDownSolid, LiaAngleUpSolid } from 'react-icons/lia'

export default function QuantityBox() {
    const [qtyValue, setQtyValue] = useState(1)

    // Handle Quantity Change
    const handleQtyValue = (type) => {
        if (type === "inc") {
            setQtyValue(prev => prev + 1)
        } else if (type === "dec") {
            setQtyValue(prev => (prev > 1 ? prev - 1 : 1)) // ❗ 1 se kam nahi hoga
        }
    }

    return (
        <div className='qtyBox border border-gray-300 rounded-md  flex items-center gap-1 w-20 h-[45px]'>
            <input type="number" value={qtyValue} className='w-full border-0  outline-none ps-4 h-full font-[14px] text-gray-800 relative' />
            <div className="flex flex-col  top-1 right-0 h-full">
                <Button
                    onClick={() => handleQtyValue("inc")}
                    className='w-[30px]!  min-w-[30px]! h-[22px]! text-gray-800!  '
                >
                    <LiaAngleUpSolid size={20} />
                </Button>
                <Button
                    onClick={() => handleQtyValue("dec")}
                    className='w-[30px]! min-w-[30px]! h-[22px]! text-gray-800!  '
                >
                    <LiaAngleDownSolid size={20} />
                </Button>
            </div>
        </div>
    )
}

