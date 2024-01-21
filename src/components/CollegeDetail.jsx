import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context/contextapi';
import Review from './Review';
import SideNav from './SideNav';

function CollegeDetail() {
    const {id} = useParams();
    const context = useContext(MyContext);
    const {collegeList, mode} = context;

    const filteredCollege = collegeList?.filter((items)=> items.id === id) ;
   

  return (
    <>
    <SideNav/>
   
    <div className={` min-h-screen select-none ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"} `}>
        <div className='w-full sm:p-6 p-1'>

           <div className=''>
            <div className=' mx-auto max-w-[800px] max-h-[460px] overflow-hidden rounded-xl'>
                <img className='w-full h-auto ' src={filteredCollege[0]?.imageURL} alt="" />

            </div>
            <div className='text-center font-bold mt-2'>
                <h1 className='sm:text-lg text-sm'>{filteredCollege[0]?.collegeName}</h1>
                <h1 className='sm:text-lg text-sm'>Course : {filteredCollege[0]?.course}</h1>
                <h1 className='sm:text-lg text-sm'>{filteredCollege[0]?.collegeType} college</h1>
                <h1 className='sm:text-lg text-sm'>Location : {filteredCollege[0]?.location}</h1>
            </div>
            </div>

            <div>
                <Review collegeid={id}/>

            </div>

        </div>
    </div>
    </>
  )
}

export default CollegeDetail