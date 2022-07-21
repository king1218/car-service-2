import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceid} = useParams();
    return (
        <div>
            <h1>Details:{serviceid}</h1>
        </div>
    );
};

export default ServiceDetails;