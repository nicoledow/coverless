import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ListsContainer from './Containers/ListsContainer';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksContainer from './Containers/BooksContainer';
import MyBooksContainer from './Containers/MyBooksContainer';

class App extends React.Component {

  

  render() {
    return (
      <div className="App container-fluid">
        <h1>Coverless</h1>
        <h2>Don't pick a book by its cover.</h2>
        <Router>
        <Navbar />      
        <Switch>
          <Route exact path='/' component={ListsContainer} />
          <Route path='/mybooks' component={MyBooksContainer} />
          <Route path='/books' component={BooksContainer} />
        </Switch> 
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentList: state.currentList }
}

export default connect(mapStateToProps)(App);
