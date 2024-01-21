import React from 'react'
import { IoSearch } from "react-icons/io5";
import { MyContext } from '../Context/contextapi';
import { useContext } from 'react';

function SearchCollege() {

    const context = useContext(MyContext);
    const {searchCollege,mode} = context;
  return (
    <div className={`${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
        <div className='flex justify-center p-2'>
            <div className='border-2 flex items-center px-2 rounded-lg md:w-[50%] w-[90%]'>
                <IoSearch className='text-2xl'/>
            <input type="text" className={`p-1 sm:text-base text-xs rounded-lg px-3 w-full outline-none ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} placeholder='Search...' onChange={(e)=> searchCollege(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default SearchCollege