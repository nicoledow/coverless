import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import BookContainer from './Components/BookContainer';

function App() {
  return (
    <div className="App">
      {/*<Router>*/}
        <Navbar />
    
        <h1>Coverless</h1>
        <h3>Don't pick a book by its cover.</h3>

        <BookContainer />

        {/*<Link to="/users/new"><button>Sign Up</button></Link>
        <Link to="/login"><button>Log In</button></Link>
        <Route exact path="/users/new" component={SignUp} />
        <Route exact path="/login" component={Login} />
  </Router>*/}
    </div>
  );
}

export default App;
