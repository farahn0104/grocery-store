'use client'
import React, { useState } from 'react'

export default function OtpBox({ length, onChange }) {
    const [otp, setOtp] = useState(new Array(length).fill(''));

    const handleChange = (e, index) => {
        const value = e.target.value

        if (isNaN(value)) return false

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1); 
        setOtp(newOtp);

        onChange(newOtp.join(''))

        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus()
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').trim();
        if (isNaN(pasteData)) return false;
        
        const pasteArray = pasteData.split('').slice(0, length);
        const newOtp = [...otp];
        
        pasteArray.forEach((char, index) => {
            if (index < length) {
                newOtp[index] = char;
            }
        });
        
        setOtp(newOtp);
        onChange(newOtp.join(''));
        
        // Focus on last filled input
        const lastFilledIndex = Math.min(pasteArray.length - 1, length - 1);
        document.getElementById(`otp-input-${lastFilledIndex}`).focus();
    }

    return (
        <div className='flex items-center justify-center gap-5 my-8'>
            {otp.map((data, index) => {
                return (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleChange(e, index)} 
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        className='w-[35px] h-[35px] sm:w-[55px] sm:h-[55px] text-center text-[17px] rounded-md border border-gray-300 focus:border-gray-500 focus:outline-none'
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                    />
                )
            })}
        </div>
    )
}