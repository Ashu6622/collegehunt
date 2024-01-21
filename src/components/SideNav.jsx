import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../Context/contextapi';
import { Link } from 'react-router-dom';
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
function SideNav() {

  const context = useContext(MyContext);
  const { handleLogout,sidenav,lightMode,darkMode,mode} = context;


  const isUser = sessionStorage.getItem("user");
  



  return (
    <div className='sm:hidden'>
      <div className={` h-[calc(100%-50px)] ${sidenav ? "w-[130px]" : "w-0"} transition-all duration-500 fixed top-[52px] left-0 z-40  overflow-hidden bg-gray-800 select-none`}>
        <ul className='text-white'>
        <Link to="/">
            <li className="sm:text-base text-xs  p-1 pl-4 font-semibold duration-500 rounded-md  hover:bg-red-500 list-none mt-5">
              HOME
            </li>
          </Link>
          <Link to="/allcollege">
            <li className="sm:text-base text-xs p-1 pl-4 font-semibold duration-500 rounded-md  hover:bg-red-500 list-none mt-5">
              All College
            </li>
          </Link>

           {
            isUser ?  <button onClick={handleLogout}><li className='sm:text-base text-xs p-1 pl-4 font-semibold duration-500 rounded-md  hover:bg-red-500 list-none mt-5'>LOGOUT</li></button> : 
          
            <>
          <Link to='/login'><li className='sm:text-base text-xs p-1 pl-4 font-semibold duration-500 rounded-md  hover:bg-red-500 list-none mt-5'>LOGIN</li></Link>
          <Link to='/signup'><li className='sm:text-base text-xs p-1 pl-4 font-semibold duration-500 rounded-md  hover:bg-red-500 list-none mt-5'>SIGNUP</li></Link>
          </>
} 
          <Link to="/addcollege">
            <li className="sm:text-base text-xs p-1 pl-4 font-semibold duration-500 rounded-md  hover:bg-red-500 list-none mt-5">
              ADD
            </li>
          </Link>

          <div className="flex pl-4 mt-4">
            {mode === "light" ? <MdWbSunny className="text-xl cursor-pointer" onClick={lightMode} title="light mode"/> : <FaMoon className="text-lg cursor-pointer" onClick={darkMode} title="dark mode"/>}
        </div>

        </ul>
      </div>
    </div>
  )
}

export default SideNav