import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../Context/contextapi";
function Instruction() {
  const [instruct, setinstruct] = useState(false);

  const context = useContext(MyContext);
  const { mode } = context;

  function showAccordian() {
    setinstruct(!instruct);
   
  }

  return (
    <div
      className={`${
        mode === "dark" ? "bg-[#191c20] text-white" : "bg-white text-black"
      }`}
    >
      <div className="select-none rounded-xl border-2 overflow-hidden">
        <div
          className={`flex justify-center items-center gap-2 duration-500 hover:bg-gray-400 cursor-pointer ${ mode === "dark" ?  "bg-gray-600 text-white"  : "bg-gray-200 text-black"
          } ${instruct ? "bg-gray-500" : null} `}
          onClick={showAccordian}
        >
          <h1 className="md:text-2xl sm:lg text-sm">Instructions</h1>
          {instruct ? (
            <IoMdArrowDropup className="text-3xl" />
          ) : (
            <IoMdArrowDropdown className="text-3xl" />
          )}
        </div>
        <ul
          className={` ${
            instruct ? "block" : "hidden"
          }`}
        >
          <li className={`${mode === "dark" ?  " bg-gray-700 hover:bg-gray-400 text-white" : "bg-white text-black hover:bg-gray-200" } text-center p-1 md:text-base text-xs pt-3`}> This is the website where you can give review of college</li>
          <li className={`${mode === "dark" ?  " bg-gray-700 hover:bg-gray-400 text-white" : "bg-white text-black hover:bg-gray-200" } text-center p-1 md:text-base text-xs`}>You can also add colleges</li>
          <li className={`${mode === "dark" ?  " bg-gray-700 hover:bg-gray-400 text-white" : "bg-white text-black hover:bg-gray-200" } text-center p-1 md:text-base text-xs`}>First you have to get registered by signing up in this website</li>
          <li className={`${mode === "dark" ?  " bg-gray-700 hover:bg-gray-400 text-white" : "bg-white text-black hover:bg-gray-200" } text-center p-1 md:text-base text-xs`}>Without signing up you can not add college or review</li>
         
        </ul>
      </div>
    </div>
  );
}

export default Instruction;
