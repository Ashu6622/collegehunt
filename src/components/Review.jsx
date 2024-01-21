import React, { useRef } from 'react';
import { MyContext } from '../Context/contextapi';
import { useContext ,useState} from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
function Review({collegeid}) {


  const context = useContext(MyContext);
  const {collegeReview,setcollegeReview,addReview,storeReview,setuniqueId,mode,reviewerror,UpdateComment,DeleteComment,isUpdate,updateId,updateText,setupdateText,DoneUpdation} = context;

  setuniqueId(collegeid);

 


  return (
    <div className="mt-8 select-none">
      <div>
        <h1 className='md:text-xl font-bold text-xs'>
          Comments

        </h1>
        <div className='mt-4 mb-2'>
        <textarea className={`md:p-2 p-1 border-2 rounded-lg w-full md:text-base ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"} `} placeholder='Write...' type="text" value={collegeReview.review} onChange={(e)=> setcollegeReview({...collegeReview,review:e.target.value})}/>
        {reviewerror ? <p className='text-red-600'>Field is empty</p>:null}
        </div>
        <div>
          <button className='md:py-2 md:px-6 py-1 px-2 rounded-md md:text-lg text-xs  text-white bg-green-600' onClick={addReview}>Add Review</button>
        </div>

        <div className='mt-6'>

      {storeReview?.map((items)=>{
        return(
         <div className={`w-[100%] mb-3 bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200 border-2 ${mode === "dark" ? "bg-gray-900 text-white hover:bg-gray-800": "bg-white text-black"} `}>
          <div className='flex gap-3 justify-between'>
          <p className='md:text-sm text-xs'>{items?.username}</p>
          <p className='md:text-sm text-xs'>{new Date(items?.time).toLocaleString()}</p>

          </div>
          <div className='flex sm:justify-between sm:flex-row flex-col'>
            {isUpdate && items.id === updateId ? <textarea className={`w-[90%] md:p-2 p-1 ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} autoFocus value={updateText} onChange={(e)=>{setupdateText(e.target.value)}}/>  : <p className='w-[90%] md:text-lg text-sm text-justify' style={{wordWrap:"break-word"}}>{items?.review}</p> }
          
          <div className='flex gap-2'>
            { isUpdate && items.id === updateId  ? <FaCheckCircle className='text-blue-600' onClick={()=>{ DoneUpdation(items)}}/> :  <FaPen className='text-green-600' onClick={()=>{ UpdateComment(items)}}/> }
         
          <MdDelete className='text-red-600 text-xl' onClick={()=>{ DeleteComment(items)}}/>
          </div>
          </div>
         </div>
        )
      })

      }
        </div>
      </div>
    </div>
  )
}

export default Review