import React from 'react';
import PageTitle from '../../PageTitle/PageTitle';

import Footer from '../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';



const Home = () => {
    return (
       
        <>
      <PageTitle title="Home"></PageTitle>
        <Banner></Banner>
        <Services></Services>
        <Exparts></Exparts>
        <Footer></Footer>
        </>
    );
};

export default Home;