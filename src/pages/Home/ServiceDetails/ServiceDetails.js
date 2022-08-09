import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../PageTitle/PageTitle';

const ServiceDetails = () => {
    const {serviceid} = useParams();
    return (
        <div className='mx-auto'>
            <PageTitle title="ServiceDetail"></PageTitle>
            <h1>Details:{serviceid}</h1>
            
            <Link to='/checkout' className="hover:text-blue-700 bg-blue-700 p-3 text-white  ">Checkout</Link>
        </div>
    );
};

export default ServiceDetails;