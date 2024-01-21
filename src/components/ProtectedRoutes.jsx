import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({children}) {

  const isUser = sessionStorage.getItem("user");
  console.log(isUser);

  if(isUser){
    return children;
  }
  else{
    return <Navigate to='/login'/>
  }

 
}

export default ProtectedRoutes