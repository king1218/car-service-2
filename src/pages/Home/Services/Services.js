import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services,setServeices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServeices(data));
    },[])
    return (
        <div id='services'>
            <h1  className='text-center text-3xl text-blue-500 my-10 font-bold '>Our Services</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                    >
                    
                </Service>)
            }
            </div>
         
        </div>
    );
};

export default Services;