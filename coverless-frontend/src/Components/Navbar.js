import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <Link to="/mybooks"> <button> My Books </button> </Link>
            <Link to="/"> <button> Browse Lists </button> </Link>
        </nav>
    )
}

export default Navbar;