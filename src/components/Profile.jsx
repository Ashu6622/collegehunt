import React from 'react'
import { MyContext } from "../Context/contextapi";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Profile = () => {

  const currentUser = JSON.parse(sessionStorage.getItem("user"));
  const context = useContext(MyContext);
  const { filteredList,mode } = context;

  const filter = filteredList?.filter((items)=> items?.uid === currentUser?.userId);
  console.log(filter);


  return (
    <div className={`h-screen ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"} p-4`}>
      <div>
        <h1 className='text-xs italic'>Hi {currentUser.name}</h1>
        <h1 className='text-xs italic'>Registered Email : {currentUser.email}</h1>
        {
          filter.length?   <h1 className='text-center md:text-xl sm:text-lg text-xs text-blue-600 mt-4 font-bold'>Here are the colleges which you have added</h1> : <h1 className='text-center md:text-xl sm:text-sm text-xs text-blue-600 mt-4font-bold'>You have not added any college yet</h1>
        }
      

        <div className='flex gap-8 flex-wrap justify-center py-8'>

        {filter?.map((items) => {
        return (
          <div key={items?.id} className="border-2 sm:w-1/5 w-[130px] lg:h-[350px] md:h-[270px]  h-[190px] p-1 rounded">
          <Link to={`/personalcollegedetail/${items.id}`}>
            <div className="w-full border-2 lg:h-[250px] md:h-[150px] h-[100px] overflow-hidden">
              <img
                className="w-[100%] h-[100%] object-cover hover:scale-110 duration-300"
                src={items?.imageURL}
                alt=""
              />
            </div>
          </Link>
          <div className="mt-3">
            <h1 className="md:text-base text-xs">{items?.collegeName}</h1>
            <p className="md:text-sm text-xs">{items?.course.toUpperCase()}</p>
            <p className="md:text-sm text-xs">{items?.location}</p>
          </div>
        </div>
        );
      })}

        </div>



      </div>
    </div>
  )
}

export default Profile