import React from 'react';
import aboutImage from '../../resources/about-image.png';
import './About.scss';

const About = () => {
    return (
        <div className='p-5 row'>
            <div className='col-xl-4 col-md-12 d-flex justify-content-end'>
                <img className = 'about-image' src = {aboutImage} alt=""/>
            </div>
            <div className='col-xl-4 col-md-12 d-flex flex-column justify-content-center about-description'>
                <h2>About</h2>
                <p className = 'mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto facere, nam deserunt consectetur minus vero nihil aliquid eveniet quibusdam, eius earum delectus placeat repudiandae odit et perferendis dolores itaque ex, eligendi vel impedit deleniti libero voluptatem! Quisquam, tenetur quod.</p>
            </div>
            <div className="col-xl-4 col-md-12 d-flex flex-column justify-content-center about-extra-description">
                <h5>Let's collaborate</h5>
                <p>I'm open for collaborations. I can made for you great web designs, portfolios, landing pages and much others at good price.</p>
                <a id = 'about' href="">Hire me 🠚</a>
            </div>
        </div>
    );
};

export default About;