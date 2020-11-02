import React from 'react';
import Card from '../Card/Card';

const Projects = () => {

    const projects = [
        { image: 'https://iili.io/389T6F.png', github: 'https://github.com/sftmaruf/design-agency-client', website: 'https://design-agency-own.web.app' },
        { image: 'https://iili.io/3827fI.png', github: 'https://github.com/sftmaruf/volunteer-network-client', website: 'https://volunteer-network-own.firebaseapp.com/' },
        { image: 'https://iili.io/3824qB.png', github: 'https://github.com/sftmaruf/TRAVEL-GURU', website: 'https://travel-guru-own.firebaseapp.com' }

    ]

    return (
        <div id = 'projects' className='mt-5'>
            <h2  style = {{ fontFamily: "'Poppins', sans-serif"}} className='text-center'>Projects</h2>
            <div className='d-flex justify-content-center flex-wrap mt-2'>
                {
                    projects.map(project => <Card project={project}></Card>)
                }
            </div>
        </div>
    );
};

export default Projects;