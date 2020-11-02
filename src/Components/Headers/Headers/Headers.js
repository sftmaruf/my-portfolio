import React from 'react';
import MainBanner from '../MainBanner/MainBanner';
import Navbar from '../Navbar/Navbar';

const Headers = () => {
    return (
        <div className = "container">
            <Navbar></Navbar>
            <MainBanner></MainBanner>
        </div>
    );
};

export default Headers;