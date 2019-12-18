import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import ListsContainer from '../Containers/ListsContainer';
import MyBooksContainer from '../Containers/MyBooksContainer';
import BooksContainer from '../Containers/BooksContainer';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <Link to="/mybooks"> <button> My Books </button> </Link>
            <Link to="/"> <button> Browse Lists </button> </Link>
        </nav>
    )
}

export default Navbar;