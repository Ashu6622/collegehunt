import React, { useState,useEffect } from 'react'
import { MyContext } from '../Context/contextapi';
import { useContext} from 'react';
import { query,collection,orderBy,QuerySnapshot ,onSnapshot} from 'firebase/firestore';
import { DB } from '../Firebase/firebaseConfig';

function PersonalComments({collegeid,currentUser}) {

    const context = useContext(MyContext);
    const {mode} = context;
    const [personalcomment , setpersonalcomment] = useState([]);

    useEffect(()=>{
    
        function getReview(){
    
        try{
          const q = query(
              collection(DB, 'Review'),
              orderBy('time')
          );
          onSnapshot(q,(QuerySnapshot =>{
              let productArray = [];
              QuerySnapshot.forEach((ele) =>{
                if(ele.data().collegeId === collegeid && ele.data().uid === currentUser){
                  productArray.push(ele.data());
                }
              });
              setpersonalcomment(productArray);
    
          }))
        
        }catch(error){
          console.log(error);
        }
      }
      getReview();
    
      },[collegeid])

   

    
  return (
    <div className=' mt-4'>

      <h1 className='md:text-xl sm:text-lg text-xs text-green-500 mb-4'>Your personal comments on this college</h1>

      { personalcomment.length ?  personalcomment?.map((items)=>{
        return(
          <div className={`mb-3 bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200 border-2 ${mode === "dark" ? "bg-gray-900 text-white hover:bg-gray-800": "bg-white text-black"} `}>
          <div className='flex gap-3 justify-between'>
          <p className='md:text-sm text-xs'>{items?.username}</p>
          <p className='md:text-sm text-xs'>{items?.username}</p>

          </div>
          <p className='md:text-lg text-sm'>{items?.review}</p>
         </div>
        )
      }) :  <h1 className='text-red-600 font-bold'>You have not Commented on this college</h1>

      }
        </div>
  )
}

export default PersonalComments