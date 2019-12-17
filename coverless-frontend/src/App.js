import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BookContainer from './Components/BookContainer';
import ListsContainer from './Containers/ListsContainer';
import Header from './Components/Header';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
        <Navbar />
    
        <Header />

        <Router >
          <Route exact path="/" component={ListsContainer} />
          <Route exact path="/books" component={BookContainer} />
        </Router>

    </div>
  );
}

export default App;
