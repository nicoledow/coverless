import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ListsContainer from './Containers/ListsContainer';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksContainer from './Containers/BooksContainer';
import MyBooksContainer from './Containers/MyBooksContainer';
import ReadBooksContainer from './Containers/ReadBooksContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Coverless</h1>
        <h2>Don't pick a book by its cover.</h2>
        <Router>
        <Navbar />   
        <Switch>
          <Route exact path='/' component={ListsContainer} />
          <Route exact path='/mybooks' component={MyBooksContainer} />
          <Route exact path='/books' component={BooksContainer} />
          <Route exact path='/books/read' component={ReadBooksContainer} />
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
