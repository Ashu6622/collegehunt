import React from 'react'
import { MyContext } from '../Context/contextapi'
import { useContext } from 'react'
import SideNav from './SideNav';
import AddInstruct from './AddInstruct';


function AddCollege() {

  const context = useContext(MyContext);

  const {setaddcollegeForm , addcollegeForm , handleSubmit , mode} = context;

  
  
  return (
    <>
    <SideNav/>
    <AddInstruct/>
    <div className={`w-full sm:p-0 p-2 h-[calc(100vh-60px)] flex justify-center items-center ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`}>
    <div className=' border-2 p-4 rounded-lg'>

      <form action="" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="" className='text-md'>Name of College</label>
        <input type="text" className={`border-2 rounded-md w-full px-2 py-1 md:text-lg text-sm ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={addcollegeForm.collegeName} onChange={(e)=> setaddcollegeForm({...addcollegeForm,collegeName:e.target.value})}/>
        </div>
        <div className='mt-6'>
        <label htmlFor="" className='text-md'>College Image Link</label>
        <input type="text" className={`border-2 rounded-md w-full px-2 py-1 md:text-lg text-sm ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={addcollegeForm.imageURL} onChange={(e)=> setaddcollegeForm({...addcollegeForm,imageURL:e.target.value})}/>
        </div>
        <div className='mt-6'>
        <label htmlFor="" className='text-md'>Location of College (city)</label>
        <input type="text" className={`border-2 rounded-md w-full px-2 py-1 md:text-lg text-sm ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={addcollegeForm.location} onChange={(e)=> setaddcollegeForm({...addcollegeForm , location:e.target.value})}/>
        </div>
        <div className='mt-6'>
        <label htmlFor="" className='text-md '>Course Name</label>
        <div className='mt-1'>
         <select name="" id="" className={`border-2 rounded-md w-full px-2 py-1 md:text-lg text-sm ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={addcollegeForm.course}  onChange={(e)=> setaddcollegeForm({...addcollegeForm,course:e.target.value})}>
            <option selected>--Select--</option>
            <option value="btech">Btech/BE</option>
            <option value="mtech">Mtech/ME</option>
            <option value="mbbs">Medical/MBBS</option>
            <option value="parmacy">Parmacy</option>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
            <option value="bba">BBA</option>
            <option value="mba">MBA</option>
          </select>
        </div>
        </div>
        <div className='mt-6'>
          <label htmlFor="">Type</label>
          <div className='mt-1'>
          <select name="" id="" className={`border-2 rounded-md w-full px-2 py-1 md:text-lg text-sm ${mode === "dark" ? "bg-[#191c20] text-white": "bg-white text-black"}`} value={addcollegeForm.collegeType} onChange={(e)=> setaddcollegeForm({...addcollegeForm,collegeType:e.target.value})}>
          <option selected>--Select--</option>
            <option value="private">Private</option>
            <option value="goverment">Goverment</option>
          </select>
          </div>
        <div/>

        </div>
        <div className='text-center mt-4'>
          <button className='bg-blue-400 py-2 px-4 rounded-lg text-white'>ADD</button>
        </div>

       
       
      </form>
      
    </div>
  </div>
  </>
  )
}

export default AddCollege