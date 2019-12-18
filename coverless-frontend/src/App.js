import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BooksContainer from './Containers/BooksContainer';
import ListsContainer from './Containers/ListsContainer';
import Header from './Components/Header';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
        </Router>
        <Header />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentList: state.currentList }
}

export default connect(mapStateToProps)(App);
