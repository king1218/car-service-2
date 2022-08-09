
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../Register/SocialLogIn/SocialLogIn';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';


const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location =useLocation();
  let errormassege;
  const [agree,setAgree]=useState();

  let from = location.state?.from?.pathname || "/";
  const handleLoginForm =event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email ,password);
   if(email && password){
    signInWithEmailAndPassword(email,password);
   }
 
   setAgree(!agree);
  }
  const navigateToReguster=event=>{
    navigate('/register');
  }
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  
  const ResetPassword= async ()=>{
    const email = emailRef.current.value;
   await setAgree(!agree);

    if(email)
    { 
      await sendPasswordResetEmail(email);
      toast('Email Sent');
     
    }
    else{
      toast('Please Enter Your Email');
    }
  

  }

  if (user) {
    navigate(from, { replace: true });

  }
  if(error){
    // setAgree(!agree);
    errormassege = <p className='text-red-500'>Error: {error?.message}!! </p>;
  }
  if (loading||sending) {
    return <Loading></Loading>;
  }
  
   else{
    return (
      <div >
        <PageTitle title="Login"></PageTitle>
         <div className="mx-auto  mt-10 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
<form onSubmit={handleLoginForm}>
  <div className="form-group mb-6">
    <label  htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
    <input ref={emailRef} type="email" className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
      aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group mb-6">
    <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
    <input ref={passwordRef} type="password" className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="exampleInputPassword2"
      placeholder="Password"/>
       <div className='mt-4'>
       <button onClick={ResetPassword} 
      className=" text-blue-600  hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
      password?</button>
       </div>
  </div>
  <div className="f mb-6">
  <div className="form-check  ">
      <div className='flex justify-center' > 
      <input onClick={()=>setAgree(!agree)} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label className={agree? 'form-check-label inline-block text-green-500':'form-check-label inline-block text-red-500'} for="flexCheckDefault">
      Agree with <span className='text-blue-500 cursor-pointer'>terms <span className={agree?'text-green-500':'text-red-500'}>&</span> conditions</span>
      </label>
      </div>
    </div>
   
  </div>
  <button type="submit" className={
    agree?
     `w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-160
      ease-in-out`:'uppercase px-6  py-2.5 font-medium text-xs text-white bg-blue-300 rounded focus:outline-none w-full cursor-not-allowed'} disabled={!agree} >Login</button>
  <p onClick={navigateToReguster} className="text-gray-800 mt-6 text-center">Not a member? <a href="#!"
      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
  </p>
 
  
    
        
</form>
{
  errormassege
}


<SocialLogIn></SocialLogIn>
     </div>
     <ToastContainer />
      </div>
  );

   } 
};

export default Login;