import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location =useLocation();
    let from = location.state?.from?.pathname || "/";
    let errormassege;


    
    if (error||error1) {
        
         errormassege= <div className='my-4'>
            <p className='text-red-500'>Error: {error?.message} {error1?.message}</p>
            
          </div>
    
      }

      if (user||user1) {
        navigate(from, { replace: true });
    
      }
    //   spineer
      if (loading||loading1) {
        return <Loading></Loading>;
      }
      else{
        return (
            
       
            <div>
                 <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                {errormassege}
              
         <div>
         
          
         <button
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-700"
              
              
              >
                {/* <!-- Facebook --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  /></svg>Continue with Facebook
              </button>
    
              <button
                onClick={()=> signInWithGoogle()}
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-blue-300"
                >
               
             <img className='h-5 w-5 mr-4' src="https://i.ibb.co/31bXb1n/cdnlogo-com-goolge-icon.png" alt="" />  Continue with Google
              </button>
              <button
              onClick={() =>signInWithGithub()}
                className="px-7 mt-4 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-gray-600">
               
             <img className='h-5 w-5 mr-4' src="https://i.ibb.co/8xMCX1j/5847f98fcef1014c0b5e48c0.png" alt="" />  Continue with Github
              </button>
          </div>    
            </div>
        );
      }
   
};

export default SocialLogIn;