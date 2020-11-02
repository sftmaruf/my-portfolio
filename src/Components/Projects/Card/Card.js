import React from 'react';
import './Card.scss';

const Card = ({project}) => {
    const {image, github, website} = project;

    return (
            <div className='project-details-container m-5'>
                <img className='project-image' src={image} alt="" />
                <div className='image-description'>
                    <div className = 'd-flex flex-column'>
                        <a href = {github} className='m-2 btn btn-dark'>Github</a>
                        <a href = {website} className='m-2 btn btn-dark'>Website</a>
                    </div>
                </div>
            </div>
    );
};

export default Card;
