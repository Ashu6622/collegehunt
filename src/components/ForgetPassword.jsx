import React from 'react'

import { useContext } from 'react';
import { MyContext } from '../Context/contextapi';
import SideNav from './SideNav';
function ForgetPassword() {

  const context = useContext(MyContext);
  const { resetform,setresetform,resetPassword ,mode ,reseterror} = context;

  return (
    <>
    <SideNav/>
    <div className={ `w-full h-[calc(100vh-60px)] flex justify-center items-center ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
      <div className=' border-2 p-2 rounded-lg'>

        <form action="">
          <div>
          <label htmlFor="" className='md:text-base text-sm'>Email</label>
          <input type="email" className={`border-2 rounded-md w-full px-2 py-1 md:text-xl text-sm md:placeholder:text-lg placeholder:text-sm ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} placeholder='Enter registered email' value={resetform} onChange={(e)=> setresetform(e.target.value)}/>
          {reseterror ? <p className='text-red-600'>Email is required</p> : null}
          </div>
          <div className='text-center mt-4'>
            <button className='bg-blue-400 p-2 rounded-lg text-white md:text-base text-xs' onClick={resetPassword}>Request Email</button>
          </div>
         
        </form>
        
      </div>
    </div>
    </>
  )
}

export default ForgetPassword