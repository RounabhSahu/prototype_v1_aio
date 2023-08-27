import React, { useState } from 'react';
import Book from './components/Book';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from "@material-tailwind/react";
export default function App() {


    return (

        <Router>
            <Nav/>
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
            <Footer/>
        </Router>
    );
}
