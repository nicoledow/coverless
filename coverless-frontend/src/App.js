import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BooksContainer from './Containers/BooksContainer';
import ListsContainer from './Containers/ListsContainer';
import Header from './Components/Header';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        {this.props.currentList === '' ? <ListsContainer /> : <BooksContainer />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentList: state.currentList }
}

export default connect(mapStateToProps)(App);
