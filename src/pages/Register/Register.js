import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogIn from './SocialLogIn/SocialLogIn';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
const Register = () => {
  const navigate= useNavigate();
  const navigateLogin=()=>{
    navigate('/login');
  }
   const [agree,setAgree]=useState();

   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let errormassege;
// if (user){
//   
// }  
  const handleRegister=async (event)=>{
    event.preventDefault();
    const FristName= event.target.FirstName.value;
    const LastName = event.target.LastName.value;
    const FullName = FristName+''+LastName;
    const email= event.target.email.value;
    const password = event.target.password.value;
    console.log(FristName,LastName,email,password);
    await createUserWithEmailAndPassword(email,password);
    await updateProfile({displayName:FullName});
   setAgree(!agree);
   navigate('/');
    
   }
   if(error||updateError){
    // setAgree(!agree);
    errormassege = <p className='text-red-500'>Error: {error?.message}!! </p>;
  }
   if (loading||updating) {
    return <Loading></Loading>;
  }
  else{
    return (
        <div>
          <PageTitle title="Register"></PageTitle>
           <div className="mx-auto lg:mt-20 mt-10 block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form onSubmit={handleRegister}>
    <div className="grid grid-cols-2 gap-4">
      <div className="form-group mb-6">
        <input type="text" name='FirstName' className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First name"/>
      </div>
      <div className="form-group mb-6">
        <input type="text" name='LastName' className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Last name"/>
      </div>
    </div>
    <div className="form-group mb-6">
      <input type="email" name='email' className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        placeholder="Email address"/>
    </div>
    <div className="form-group mb-6">
      <input type="password" name='password' className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        placeholder="Password"/>
    </div>
    
    <div className="form-check  ">
      <div className='flex justify-center' > 
      <input onClick={()=>setAgree(!agree)} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label className={agree? 'form-check-label inline-block text-green-500':'form-check-label inline-block text-red-500'} for="flexCheckDefault">
      Agree with <span className='text-blue-500 cursor-pointer'>terms <span className={agree?'text-green-500':'text-red-500'}>&</span> conditions</span>
      </label>
      </div>
    </div>
    <div className="form-group form-check text-center my-6">
      <p>
        Already have account?<Link onClick={navigateLogin} to='/login'><span className='text-blue-700'>Login </span>  </Link>    </p>
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
      ease-in-out`:'uppercase px-6  py-2.5 font-medium text-xs text-white bg-blue-300 rounded focus:outline-none w-full cursor-not-allowed'} disabled={!agree} >Register</button>
  </form>
  {
  errormassege
}
  <SocialLogIn></SocialLogIn>
</div>
        </div>
    );
  }
};

export default Register;