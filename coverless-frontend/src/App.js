import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BooksContainer from './Containers/BooksContainer';
import FriendsContainer from './Containers/FriendsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <h1>Coverless</h1>
      <h3>Don't pick a book by its cover.</h3>

      <BooksContainer />
      <FriendsContainer />
    </div>
  );
}

export default App;
