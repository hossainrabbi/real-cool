import React from 'react';
import Benefits from '../components/Benefits/Benefits';
import Header from '../components/Header';
import Reviews from '../components/Reviews/Reviews';
import Services from '../components/Services/Services';
import Suburbs from '../components/Suburbs';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Suburbs />
            <Benefits />
            <Reviews />
        </>
    );
};

export default Home;
