import React from 'react'
import { MyContext } from '../Context/contextapi';
import { useContext } from 'react';

function Filtercourse() {

    const context = useContext(MyContext);
    const {filtercourse,selectcategory,setselectcategory,mode} = context;

    const courseName = ['All' , 'BTech',"MTech" , 'MBBS', 'Parmacy','BBA','BCA'];

   
  return (
    <div className={`sticky md:top-[64px] sm:top-[60px] top-[52px] z-40 ${mode === "dark" ? "bg-[#3a3a3a] text-white": " bg-slate-500 text-white"}`}>
        <div className='flex flex-wrap sm:gap-4 gap-1 py-3   justify-center'>
            {
                courseName?.map((items)=>{
                    return(

                        <button key={items} className={`text-white md:text-base text-xs py-1 px-2 border-2 rounded-md hover:bg-slate-900 hover:text-white ${selectcategory === items ? 'bg-slate-900' : null}`} onClick={filtercourse}>{items}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Filtercourse