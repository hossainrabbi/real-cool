import React from 'react';
import Benefits from '../components/Benefits/Benefits';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Reviews from '../components/Reviews/Reviews';
import Services from '../components/Services/Services';
import Suburbs from '../components/Suburbs/Suburbs';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Services />
            <Suburbs />
            <Benefits />
            <Reviews />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
