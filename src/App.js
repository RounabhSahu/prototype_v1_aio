import React, { useEffect, useState, useRef } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import AccountBox from "./components/components/accountBox";

const AppContainer = styled.div`
  width: fit-content;
  
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
    const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false);
    const appContainerRef = useRef(null);

    const toggleAccountBox = () => {
        console.log('account')
        setTimeout(()=>{
            setIsAccountBoxOpen(!isAccountBoxOpen);
        },500)
    };

    useEffect(() => {
        // Disable/enable scrolling when the account box is open/closed
        if (isAccountBoxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Add a click event listener to the document
        const handleClickOutside = (event) => {
            if (appContainerRef.current && !appContainerRef.current.contains(event.target)) {
                // Click occurred outside the AppContainer, close the account box
                toggleAccountBox();
            }
        };

        if (isAccountBoxOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            // Clean up: Re-enable scrolling and remove the click event listener
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isAccountBoxOpen]);

    return (
        <Router>
            <Nav toggleAccountBox={toggleAccountBox}/>
            {isAccountBoxOpen &&
                <div className='bg-black/50 h-screen w-full absolute top-0 z-20 flex justify-center items-center backdrop-blur-lg' >
                    <div ref={appContainerRef} className='flex justify-center items-center w-fit scale-125 ' >
                        <AppContainer>
                            <AccountBox />
                        </AppContainer>
                    </div>
                </div>
            }

            <Routes>
                <Route path={'/'} element={<Home  toggleSignup={toggleAccountBox}/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}
