import React, { useState } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountBox from "./components/components/accountBox";
import styled from "styled-components";
// import { ThemeProvider } from "@material-tailwind/react";
export default function App() {
    const HomePage = () => { // Rename the custom component
        const AppContainer = styled.div`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `;

        return (
            <Router>
                {/*<div className=''>*/}
                {/*    <AppContainer>*/}
                {/*        <AccountBox />*/}
                {/*    </AppContainer>*/}
                {/*</div>*/}
                <Nav/>

                <Routes>
                    <Route path={'/'} element={<HomePage />} /> {/* Use the renamed component */}
                </Routes>
                <Footer/>
            </Router>
        );
    }

    // ...
}
