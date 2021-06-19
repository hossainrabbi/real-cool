import React from 'react';
import Benefits from '../components/Benefits/Benefits';
import Header from '../components/Header';
import Services from '../components/Services/Services';
import Suburbs from '../components/Suburbs';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Suburbs />
            <Benefits />
        </>
    );
};

export default Home;
