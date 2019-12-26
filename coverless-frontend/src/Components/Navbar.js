import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <Link to="/mybooks"> <button className="btn btn-info"> My Books </button> </Link>
            <Link to="/lists"> <button className="btn btn-info"> Browse Lists </button> </Link>
        </nav>
    )
}

export default Navbar;