import React from 'react'
import { useNavigate } from 'react-router-dom';

function Nopage() {
  
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }


  return (
    <div className='container mx-auto'>
      <div className='mt-[40px]'>
        <h1 className='text-center text-3xl'>(404) Page Not Found</h1>
        <p className='text-center underline cursor-pointer text-red-800' onClick={goBack}>Go Back to previous page</p>
      </div>
    </div>
  )
}

export default Nopage