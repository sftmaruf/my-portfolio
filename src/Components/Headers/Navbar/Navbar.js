import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item active mr-5">
                        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#">Skills</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#">Blogs</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;