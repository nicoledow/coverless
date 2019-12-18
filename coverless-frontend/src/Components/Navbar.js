import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import ListsContainer from '../Containers/ListsContainer';
import MyBooksContainer from '../Containers/MyBooksContainer';
import BooksContainer from '../Containers/BooksContainer';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-light">
            <Link to="/mybooks"> <button> My Books </button> </Link>
            <Link to="/"> <button> Browse Lists </button> </Link>
        </nav>
        <Switch>
          <Route exact path='/' component={ListsContainer} />
          <Route path='/mybooks' component={MyBooksContainer} />
          <Route path='/books' component={BooksContainer} />
        </Switch> 
        </div>
    )
}

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-light">
//             <Router>
//             <Link to="/mybooks"><button>My Books</button></Link>
//             <button>Browse Lists</button>
//             <button>Friends Feed</button>
//             </Router>
//         </nav>
//     )
// }

// export default Navbar;