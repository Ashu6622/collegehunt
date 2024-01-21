import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { collection,addDoc,Timestamp, getDocs,query,onSnapshot,orderBy ,deleteDoc,doc,updateDoc } from 'firebase/firestore';
import { DB } from '../Firebase/firebaseConfig';
import { auth } from '../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import swal from 'sweetalert';


export const MyContext = createContext();

function Contextapi({children}) {

  const [loading , setloading] = useState();
  const [mode , setmode] = useState("light");
  const navigate = useNavigate();

  
 
  const [addcollegeForm ,setaddcollegeForm] = useState({
    collegeName:"",
    location:"",
    course:"",
    imageURL:"",
    collegeType:"",
    uid:"",
    time: Timestamp.now(),
    // date: new Date(),
  })
  const [signupForm ,setsignupForm] = useState({
    name:"",
    email:"",
    password:"",
    date: new Date(),
  })
  const [loginForm ,setloginForm] = useState({
    email:"",
    password:"",
    date: new Date(),
  })

  const [collegeList , setcollegeList] = useState([]);
  const [currentUser, setcurrentUser] = useState([]);
  const [uniqueId,setuniqueId] = useState("");
  const [collegeReview , setcollegeReview] = useState({
    username:"",
    uid:"",
    collegeId:"",
    review:"",
    time: new Date().getTime(),
  });



  // Code of adding college ------------------------------>

  async function handleSubmit(e){
    e.preventDefault();

    if(addcollegeForm.collegeName === "" || addcollegeForm.collegeType === "" || addcollegeForm.location === "" || addcollegeForm.imageURL === "" || addcollegeForm.course === ""){
      alert("All feilds are required");
      return;
    }

   try {

    const user = JSON.parse(sessionStorage.getItem("user"));
   
    addcollegeForm.uid = user?.userId;

     const response = collection(DB,"CollegeList");
     const data = await addDoc(response,addcollegeForm);

     swal({
      title: "College Added",
      icon: "success",
      button: "Ok",
      timer: 3000
    });

    navigate('/');

     setaddcollegeForm({
      collegeName:"",
      location:"",
      course:"",
      imageURL:"",
      collegeType:"",
      uid:"",
     
    })

   } 
   catch (error) {
    console.log(error);
   }
  }

  const [filteredList,setfilteredList] = useState([]);

  // Code for displaying college data on Website---------------------->


  useEffect(()=>{

    function showData(){

    try{
      const q = query(
          collection(DB, 'CollegeList'),
          // orderBy('time')
      );
      const data = onSnapshot(q,(QuerySnapshot =>{
          let productArray = [];
          QuerySnapshot.forEach((ele) =>{
              productArray.push({...ele.data(),id: ele.id});
          });
          setcollegeList(productArray);
          setfilteredList(productArray);

      }))
    }catch(error){
      console.log(error);
    }
  }
  showData();

  },[])

  const [signuperror , setsignuperror] = useState(false);
  const [passlen , setpasslen] = useState(false);

  // Code of User signIn using email and password----------------->
  
  async function handleSignup(e){
    e.preventDefault();

    setsignuperror(false);
    setpasslen(false);

    if(signupForm.email === "" || signupForm.name === "" || signupForm.password === ""){
        setsignuperror(true);
        return;
    }

    if(signupForm.password.length < 6){
      setpasslen(true);
      return;
    }

    try {

      const value = await createUserWithEmailAndPassword(auth,signupForm.email,signupForm.password);
     
      let createUser = {
        name:signupForm.name,
        email:value.user.email,
        userId:value.user.uid,
        date: new Date(),
      }

      const response = collection(DB,"Users");
      await addDoc(response,createUser);


      swal({
        title: "You are Successfully SignedIn",
        icon: "success",
        button: "Ok",
        timer: 3000
      });

      setsignupForm({
        name:"",
        email:"",
        password:""
      });

      
    } catch (error) {
      swal({
        text:`${error}`,
        icon: "warning",
        button: "Ok",
        timer: 3000
      });
    }
  }

  const [loginerror1 , setloginerror1] = useState(false);
  const [loginerror2 , setloginerror2] = useState(false);

  // Code of user login using email and password----------------->

  async function handleLogin(e){
    e.preventDefault();

    setloginerror1(false);
    setloginerror2(false);

    if(loginForm.email === ""){
        setloginerror1(true);
        return;
    }
    
    if(loginForm.password === ""){
        setloginerror2(true);
        return;
    }

    setloginerror1(false);
    setloginerror2(false);
    
    try {

      const response = await signInWithEmailAndPassword(auth,loginForm.email,loginForm.password);


      const temp = collection(DB,"Users");
      const data = await getDocs(temp);
      
    
      data?.docs?.forEach((items)=>{
        if(items.data().userId === response.user.uid){
          sessionStorage.setItem("user" , JSON.stringify(items.data()));
        }
      })

      const tempUser = JSON.parse(sessionStorage.getItem("user"));

      swal({
        title: `Welcome`,
        text: `${tempUser.name}`,
        icon: "success",
        timer:2000
      });
      
      setTimeout(()=>{
      navigate('/')
      },2000);

      
      setloginForm({
        email:"",
        password:""
      });

    } catch (error) {
      swal({
        title:`User not found`,
        text:`Check email and password entered`,
        icon:"warning",
        timer: 10000,
        button: "Ok"
      })
     
    }
  }

  function handleLogout(){
    sessionStorage.removeItem("user");
    navigate('/login')
  }

  const [reviewerror , setreviewerror] = useState(false);

  // Adding Review of the college------------------------------------->

  async function addReview(){

    setreviewerror(false);
    if(collegeReview.review === ""){
      setreviewerror(true);
      return;
    }
    setreviewerror(false);

    const user = JSON.parse(sessionStorage.getItem("user"));


    if(user === null){
   
     navigate('/login')
      return;
    }


    collegeReview.username = user.name;
    collegeReview.uid = user.userId;
    collegeReview.collegeId = uniqueId

    const response = collection(DB,"Review");
    const temp = await addDoc(response,collegeReview);

    swal({
      title: "Added",
      icon: "success",
      button: "ok",
      timer: "2000"
    });

    setcollegeReview({
      username:"",
      uid:"",
      collegeId:"",
      review:"",
      time: new Date().getTime(),
    });
    
  }

  // Getting Review of the colleges------------------------------>

    const [storeReview,setstoreReview] = useState([]);

  useEffect(()=>{

    function getReview(){

    try{
      const q = query(
          collection(DB, 'Review'),
          orderBy('time')
      );
      onSnapshot(q,(QuerySnapshot =>{
       
        let reviewArray = [];
         QuerySnapshot.forEach((ele) => {
          if(ele.data().collegeId === uniqueId){
             let obj = {
              id : ele.id,
              ...ele.data(),
             }
             reviewArray.push(obj);
            
             
         }})
          setstoreReview(reviewArray);

      }))
    
    }catch(error){
      console.log(error);
    }
  }
  getReview();

  },[uniqueId])


  // Delete Comment Code--------------------------------->

 async function DeleteComment(items){

   let user = JSON.parse(sessionStorage.getItem("user"));

   if(user === null){
   
    navigate('/login')
     return;
   }
  

   if(user.userId === items.uid){

      try{
        const reviewRef = collection(DB,"Review");
        await deleteDoc(doc(reviewRef,items.id));
        
  
        swal({
          title:"Deleted",
          button:"ok",
          timer:"1500"
        })
  
      }catch(error){
        console.log(error)
  
      }
    }
    else{
      swal({
        text:"you can't delete other comments",
        button:"Ok",
        timer:2000
       })
    }
    }

  // Update Comment Code-------------------------------------->

  const [isUpdate , setisUpdate] = useState(false);
  const [updateId , setupdateId] = useState(null);

  const [updateText , setupdateText] = useState("");

  function UpdateComment(items){

    let user = JSON.parse(sessionStorage.getItem("user"));

    if(user === null){
   
      navigate('/login')
       return;
     }

    if(user.userId === items.uid){

      setisUpdate(true);
      setupdateId(items?.id);
      setupdateText(items?.review);
    }else{
      swal({
        text:"you can't update other comments",
        button:"Ok",
        timer:2000
       })
    }


  }

  async function DoneUpdation(){

    let user = JSON.parse(sessionStorage.getItem("user"));

    if(user === null){
   
      navigate('/login')
       return;
     }
  

    if(updateText !== ""){

    try{

      const reviewRef = doc(DB,"Review",updateId);
      await updateDoc(reviewRef,{
        username:user.name,
        uid:user.userId,
        collegeId:uniqueId,
        review:updateText,
        time: new Date().getTime(),
      });
      swal({
        title: "Updated",
        icon: "success",
        button: "ok",
        timer: "2000"
      });
  
    }catch(error){
      swal({
        title: "Error",
        icon: "danger",
        button: "ok",
        timer: "2000"
      });
    }
  }

    setisUpdate(false);
  }
  


  

  const [resetform , setresetform] = useState("");
  const [reseterror , setreseterror] = useState(false);


  // Code for email request for reseting password-------------------------->

  async function resetPassword(e){
    
    e.preventDefault();

    setreseterror(false);

    if(resetform === ""){
      setreseterror(true);
      return;
    }
    setreseterror(false);
   

    try {
      await sendPasswordResetEmail(auth,resetform);
     swal({
      title:"Email is send",
      icon:"success",
      button:"Ok",
      timer:5000
     })
  
    } catch {
      swal({
        title:"Invalid email",
        text:"Enter Register Email",
        icon:"warning",
        button:"Ok",
        timer:5000
       })
    }
    setresetform("");
  }

  // Code for college search filter------------------------------->

  function searchCollege(e){

    const filter = filteredList?.filter((items)=> items.collegeName.toLowerCase().includes(e.toLowerCase()));

    setcollegeList(filter);


  }

  const [selectcategory , setselectcategory] = useState("All");

  function filtercourse(e){

    setselectcategory(e.target.innerText);

    if(e.target.innerText === "All"){
      setcollegeList(filteredList);
      return;
    }


    const temp = e.target.innerText;
    console.log(temp);
    const filter = filteredList?.filter((items)=> items.course.toLowerCase().includes(temp.toLowerCase()));
    console.log(filter);
    setcollegeList(filter);
}

// Code to show and hide sidenav-------------------->

const [sidenav,setsidenav] = useState(false);

function showSidenav(){

  setsidenav(!sidenav);

}




// Light mode and Dark Mode -------------------->

function lightMode(){
  setmode("dark");
}
function darkMode(){
  setmode("light");
}


  return (
    <MyContext.Provider value={{addcollegeForm,setaddcollegeForm ,handleSubmit,signupForm ,setsignupForm,handleSignup ,loginForm,setloginForm,handleLogin,collegeList,handleLogout,currentUser,addReview,collegeReview,setcollegeReview,storeReview,setuniqueId,resetform , setresetform,resetPassword,searchCollege,filtercourse,selectcategory,setselectcategory,filteredList,sidenav,showSidenav,mode,setmode,lightMode,darkMode , signuperror,setsignuperror,passlen,setpasslen,loginerror1 ,loginerror2 , reseterror,reviewerror , DeleteComment,UpdateComment,isUpdate,updateId,updateText,setupdateText,DoneUpdation}}>
        {children}
    </MyContext.Provider>
  )
}

export default Contextapi