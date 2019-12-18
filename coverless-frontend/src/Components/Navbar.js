import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import UserBookList from '../Containers/UserBookList';
//import fetchMyBooks from '../actions/getMybooks';

export default class Navbar extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-light">
             <button>My Books</button>
             <button>Browse Lists</button>
             <button>Friends Feed</button>
            </nav>
        )
    }
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