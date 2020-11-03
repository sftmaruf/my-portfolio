import React from 'react';
import aboutImage from '../../resources/about-image.png';
import './About.scss';

const About = () => {
    return (
        <div id='about' className='p-5 row'>
            <div className='col-xl-4 col-md-12 d-flex justify-content-end'>
                <img className='about-image' src={aboutImage} alt="" />
            </div>
            <div className='col-xl-4 col-md-12 d-flex flex-column justify-content-center about-description'>
                <h2>About</h2>
                <p className='mt-4'>In my memories, I remember when I was a Tech addicted I was thinking about how the software is made for tech devices. And then after immense searching for the first time, I become familiar with the term 'Programming Language'.
                <br /><br/>
                This enthusiasm for technology brings me to the software engineering field. And now it became my passion and also my career for the rest of my life.
                <br /><br/>
                Still, there's certainly yet more to learn and I commit to myself for learning lifelong.
                </p>
            </div>
            <div className="col-xl-4 col-md-12 d-flex flex-column justify-content-center about-extra-description">
                <h5>Let's collaborate</h5>
                <p>I'm open for collaborations. I can made for you great web designs, portfolios, landing pages and much others at good price.</p>
                <a href="#home">Hire me 🠚</a>
            </div>
        </div>
    );
};

export default About;