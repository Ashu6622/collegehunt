import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../Context/contextapi';
import { TiThMenu } from "react-icons/ti";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
function Header() {

  const context = useContext(MyContext);
  const { handleLogout,showSidenav,lightMode,darkMode ,mode} = context;


  const isUser = sessionStorage.getItem("user");

 
  return (
    <div className="bg-gray-800 sticky top-0 z-50">
      <div className="w-full flex justify-between px-6 py-4 items-center select-none">
        <div className="text-white md:text-lg sm:text-sm text-xs font-extrabold ">COLLEGE HUNT</div>
        <div className="sm:flex items-center hidden lg:gap-12 gap-6 text-white">
          <Link to="/">
            <li className="md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none">
              HOME
            </li>
          </Link>
          <Link to="/allcollege">
            <li className="md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none">
              All Colleges
            </li>
          </Link>

           {
            isUser ? <>  <Link to='/profile'><li className='md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none'>PROFILE</li></Link> <button onClick={handleLogout}><li className='md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none'>LOGOUT</li></button>
          </> : 
          
            <>
          <Link to='/login'><li className='md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none'>LOGIN</li></Link>
          <Link to='/signup'><li className='md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none'>SIGNUP</li></Link>
          </>
} 
          <Link to="/addcollege">
            <li className="md:text-lg text-sm p-1 font-semibold duration-500 rounded-md hover:bg-red-500 list-none">
              ADD
            </li>
          </Link>
          <div className="flex">
            {mode === "light" ? <MdWbSunny className="text-xl cursor-pointer" onClick={lightMode} title="light mode"/> : <FaMoon className="text-lg cursor-pointer" onClick={darkMode} title="dark mode"/>}
        </div>
        </div>
        
        <div className="sm:hidden ">
          <TiThMenu onClick={showSidenav} className="text-white text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
