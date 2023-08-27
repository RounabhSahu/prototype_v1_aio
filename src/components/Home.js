import React from 'react';
import Book from './Book';
import Hero from './Hero';
import Nav from './Nav';
import Footer from './Footer';
import Steps from './Steps';
import Carousel from "./Carousel";
const Home = () => {
    return (
        <div className='mt-20'>
            <Carousel/>
            <Steps/>
            <Hero/>
            <Book/>
        </div>
    );
};

export default Home;
