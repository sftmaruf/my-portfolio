import React from 'react';
import { faHtml5, faJs, faJava, faReact, faCss3, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.scss';

const Skills = () => {
    return (
        <div className='skills-container'>
            <h2  style = {{ fontFamily: "'Poppins', sans-serif"}} className='text-center'>Skills</h2>
            <div className='d-flex flex-wrap justify-content-around mt-5'>
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faHtml5} />
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faCss3} />
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faJs} />
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faReact} />
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faNodeJs} />
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faJava} />
                <img className = 'brand-icon' src="https://img.icons8.com/color/48/000000/mongodb.png" />
                <img className = 'brand-icon' src="https://img.icons8.com/color/48/000000/c-programming.png"/>
                <img className = 'brand-icon' src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png"/>
                <FontAwesomeIcon className='fa-3x brand-icon' icon={faGithub} />
            </div>
        </div>
    );
};

export default Skills;