import React from 'react';
import Book from './Book';
import Hero from './Hero';
import Steps from './Steps';
import Carousel from "./Carousel";
import CountryCarousel from "./CountryCarousel";
import styled from "styled-components";
import AccountBox from "./components/accountBox/index"
const Home = ({toggleSignup}) => {
//     const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
    return (
        <div className='mt-20'>

            <Carousel/>
            <Steps  toggleSignup={toggleSignup}/>
            <Hero/>
            <CountryCarousel/>
            <Book/>


        </div>
    );
};

export default Home;
