import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,img,description,price} = service;
    const navigate = useNavigate();
    const handleserviceDetails=id=>{
        navigate(`/services/${id}`);
    }
    return (
        <div className='mx-auto py-4'  >
           
<div onClick={()=>handleserviceDetails(id)} className="max-w-sm p-2 bg-white rounded-lg border border-gray-200 shadow-md ">
    <div onClick={()=>handleserviceDetails(id)}>
    <img className='rounded-t-lg w-full' src={img} alt="" />
    </div>
    <div className="py-4">
        <div >
            <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
        </div>
        <p className="mb-3 font-normal  text-gray-700 ">{description}</p>
        <button onClick={()=>handleserviceDetails(id)} to='#' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
           {price} $
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
</div>

            
        </div>
    );
};

export default Service;