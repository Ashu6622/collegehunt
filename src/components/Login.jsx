import React from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/contextapi'
import { useContext } from 'react'
import SideNav from './SideNav'

function Login() {

  const context = useContext(MyContext);

  const {loginForm,setloginForm,handleLogin,mode,loginerror1,loginerror2} = context;

  return (
    <>
    <SideNav/>
    <div className={`w-full h-[calc(100vh-60px)] flex justify-center items-center ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
      <div className=' border-2 p-2 rounded-lg sm:w-[330px] w-[260px]'>

        <form action="">
          <div>
          <label htmlFor="" className='text-md'>Email</label>
          <input type="email" className={`border-2 rounded-md w-full px-2 py-1 text-xl ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={loginForm.email} onChange={(e)=> setloginForm({...loginForm,email:e.target.value})}/>
          {loginerror1 ? <p className='text-red-600'>Field is required</p> : null}
          </div>
          <div className='mt-6'>
          <label htmlFor="" className='text-md '>Password</label>
          <input type="text" className={`border-2 rounded-md w-full px-2 py-1 text-xl ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={loginForm.password} onChange={(e)=> setloginForm({...loginForm,password:e.target.value})}/>
          {loginerror2 ? <p className='text-red-600'>Field is required</p> : null}
          </div>
          <div className='text-center mt-4'>
            <button className='bg-blue-400 p-2 rounded-lg text-white' onClick={handleLogin}>LOGIN</button>
          </div>
          <div className='mt-4'>
            <h1> <Link to='/forgetpassword'><span className='text-blue-600 underline text-md'>Forget Password?</span></Link></h1>
          </div>
          <div className='flex gap-2 mt-2'>
            <h1>Don't have account create one </h1>
             <Link to='/signup'><li className='list-none text-red-600 underline'>SignUp</li></Link> 
          </div>
        </form>
        
      </div>
    </div>
    </>
  )
}

export default Login