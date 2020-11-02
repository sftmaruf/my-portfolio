import React from 'react';
import './Navbar.scss';

const Navbar = () => {

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const navbar = document.getElementById('navbar');

        if (scroll > 40) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('container');
        }

        if (scroll < 40) {
            navbar.classList.remove('scrolled');
            navbar.classList.add('container');
        }
    })

    return (
        <nav id = 'navbar' className="container navbar fixed-top navbar-expand-lg navbar-dark">
            <a style={{ fontFamily: "'Poppins', sans-serif" }} className="navbar-brand" href="#home">Programmer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item active mr-5">
                        <a className="nav-link" href="#home">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#Blogs">Blogs</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;