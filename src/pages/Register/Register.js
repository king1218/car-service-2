import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
  const navigate= useNavigate();
  const navigateLogin=()=>{
    navigate('/login');
  }

   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  
  const handleRegister=event=>{
    event.preventDefault();
    const FristName= event.target.FirstName.value;
    const LastName = event.target.LastName.value;
    const email= event.target.email.value;
    const password = event.target.password.value;
    console.log(FristName,LastName,email,password);
    createUserWithEmailAndPassword(email,password);
   }
    return (
        <div>
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
    <div className="form-group form-check text-center mb-6">
      <p>
        Already have account?<Link onClick={navigateLogin} to='/login'><span className='text-blue-700'>Login </span>  </Link>    </p>
    </div>
    <button type="submit" className="
      w-full
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
      ease-in-out">Register</button>
  </form>
</div>
        </div>
    );
};

export default Register;