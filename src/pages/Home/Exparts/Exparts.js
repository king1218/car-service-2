import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';

const Exparts = () => {
    const [exparts,setExpats]=useState([]);
    useEffect(()=>{
        fetch('exparts.json')
        .then(res=>res.json())
        .then(data=> setExpats(data));
    },[])
    return (
        <div>
            <h1 className='text-center text-3xl text-blue-500 my-10 font-bold '>Our Exparts</h1>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2  container mx-auto '>
                
            {
                exparts.map(expart => <Expart
                    key={expart.id}
                    expart={expart}
                    >
                    
                </Expart>)
            }
            </div>
        </div>
    );
};

export default Exparts;