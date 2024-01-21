import React from "react";
import { MyContext } from "../Context/contextapi";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

function CollegeCard() {
  const context = useContext(MyContext);
  const { collegeList,mode } = context;

  return (
    <>
    <SideNav/>
    <div className={`flex min-h-[551px] md:gap-8 gap-4 flex-wrap justify-center  py-12 select-none ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
      {collegeList.length ?  collegeList?.map((items) => {
        return (
          <div key={items?.id} className="border-2 sm:w-1/5 w-[130px] lg:h-[350px] md:h-[270px]  h-[190px] p-1 rounded">
          <Link to={`/detail/${items.id}`}>
            <div className="w-full border-2 lg:h-[250px] md:h-[150px] h-[100px] overflow-hidden">
              <img
                className="w-[100%] h-[100%] object-cover hover:scale-110 duration-300"
                src={items?.imageURL}
                alt=""
              />
            </div>
          </Link>
          <div className="mt-3">
            <h1 className="md:text-base text-xs truncate">{items?.collegeName}</h1>
            <p className="md:text-sm text-xs truncate">{items?.course.toUpperCase()}</p>
            <p className="md:text-sm text-xs truncate">{items?.location}</p>
          </div>
        </div>
        );
      }) : <h1 className="sm:text-lg text-sm">No college To Show</h1>}
    </div>
    </>
  );
}

export default CollegeCard;
