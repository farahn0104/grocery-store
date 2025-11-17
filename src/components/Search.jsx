import React from 'react'
import { IoSearch } from "react-icons/io5";


export default function Search({placeholder,width}) {
    return (
        <div className={`relative search w-[${width}px] rounded-md h-[50px]  bg-[#E6E6E6] border border-gray-300 duration-300 hover:border-gray-400`}>
            <input type="text" className='w-full h-full outline-none border-0 px-4'  placeholder={placeholder}/>
            <button className='w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 absolute top-1 right-2 z-40 duration-300'>
                <IoSearch size={30} className='' />
            </button>
        </div>
    )
}
