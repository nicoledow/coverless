import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import UserBookList from './Containers/UserBookList';
import ListsContainer from './Containers/ListsContainer';
import Header from './Components/Header';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BooksContainer from './Containers/BooksContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Navbar />
          <Header />
          <Router >
            <Route exact path="/" component={ListsContainer} />
            <Route exact path="/mybooks" component={UserBookList} />
            <Route exact path="/books" component={BooksContainer} />
          </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentList: state.currentList }
}

export default connect(mapStateToProps)(App);
