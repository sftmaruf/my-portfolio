import React from 'react';
import './MainBanner.scss';
import bannerpicture from '../../../resources/IMG_1006.JPG';
import TypingEffect from '../TypingEffect/TypingEffect';
import Summary from '../Summary/Summary';

const MainBanner = () => {
    return (
        <div className='mainbanner-container row'>
            <div className='banner-writing col-xl-5'>
                <h1>Md. Shafayet Maruf</h1>
                <TypingEffect></TypingEffect>
                <Summary></Summary>
            </div>
            <div className = 'image col-xl-7 col-md-0'>
            </div>
        </div>
    );
};

export default MainBanner;