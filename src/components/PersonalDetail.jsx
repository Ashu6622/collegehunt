import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context/contextapi';
import Review from './Review';
import PersonalComments from './PersonalComments';
function PersonalDetail() {
    const {id} = useParams();
    const context = useContext(MyContext);
    const {filteredList , mode} = context;

  const currentUser = JSON.parse(sessionStorage.getItem("user"));

    const filteredCollege = filteredList?.filter((items)=> items.id === id) ;


  return (
    <div className={`min-h-screen ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
        <div className='w-full sm:p-6 p-1 '>

           <div className=''>
            <div className='w-[50%] h-[55%] mx-auto'>
                <img className='w-full h-auto' src={filteredCollege[0]?.imageURL} alt="" />

            </div>
            <div className='text-center font-bold mt-2'>
                <h1 className='sm:text-lg text-sm'>{filteredCollege[0]?.collegeName}</h1>
                <h1 className='sm:text-lg text-sm'>Course : {filteredCollege[0]?.course}</h1>
                <h1 className='sm:text-lg text-sm'>{filteredCollege[0]?.collegeType} college</h1>
                <h1 className='sm:text-lg text-sm'>Location : {filteredCollege[0]?.location}</h1>
            </div>
            </div>

            <div>
                <PersonalComments collegeid={id} currentUser={currentUser.userId}/>

            </div>

        </div>
    </div>
  )
}

export default PersonalDetail