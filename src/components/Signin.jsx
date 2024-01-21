import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../Context/contextapi'
import SideNav from './SideNav'


function Signin() {
  const context = useContext(MyContext)
  const {signupForm ,setsignupForm,handleSignup,mode,signuperror,passlen} = context;

  return (
    <>
    <SideNav/>
    <div className={`w-full h-[calc(100vh-60px)] flex justify-center items-center ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
    <div className=' border-2 p-2 rounded-lg'>

      <form action="" onSubmit={handleSignup}>
        <div>
        <label htmlFor="" className='text-md'>Name</label>
        <input type="text" className={`border-2 rounded-md w-full px-2 py-1 text-xl ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={signupForm.name} onChange={(e)=> setsignupForm({...signupForm,name:e.target.value})}/>
        { signuperror ?  <p className='text-red-600'>Field is empty</p> : null}
       
        </div>
        <div className='mt-6'>
        <label htmlFor="" className='text-md'>Email</label>
        <input type="email" className={`border-2 rounded-md w-full px-2 py-1 text-xl ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={signupForm.email} onChange={(e)=> setsignupForm({...signupForm,email:e.target.value})}/>
        { signuperror ?  <p className='text-red-600'>Field is empty</p> : null}
        </div>
        <div className='mt-6'>
        <label htmlFor="" className='text-md '>Set Password</label>
        <input type="text" className={`border-2 rounded-md w-full px-2 py-1 text-xl ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={signupForm.password} onChange={(e)=> setsignupForm({...signupForm,password:e.target.value})} />
        { signuperror || passlen ?  <p className='text-red-600'>Minimum 6 character</p> : null}
        </div>
        <div className='text-center mt-4'>
          <button className='bg-blue-400 py-2 px-4 rounded-lg text-white'>Signup</button>
        </div>
       
      </form>
      
    </div>
  </div>
  </>
  )
}

export default Signin