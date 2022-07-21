import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
        <Services></Services>
        <Exparts></Exparts>
        <Footer></Footer>
        </div>
    );
};

export default Home;