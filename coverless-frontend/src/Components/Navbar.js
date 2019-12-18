import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UserBookList from '../Containers/UserBookList';
//import fetchMyBooks from '../actions/getMybooks';

export default class Navbar extends React.Component {

    getMyBooks = () => {
    
    }

    render() {
        return (
            <nav className="navbar navbar-light">
             <Router>
                 <Route exact path="/mybooks" component={UserBookList} />
             <Link to="/mybooks"><button onClick={this.getMyBooks}>My Books</button></Link>
             <button>Browse Lists</button>
             <button>Friends Feed</button>
             </Router>
            </nav>
        )
    }
}

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-light">
//             <button>My Books</button>
//             <button>Browse Lists</button>
//             <button>Friends Feed</button>
//         </nav>
//     )
// }

// export default Navbar;