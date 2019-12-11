import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BookContainer from './Containers/BooksContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <h1>Coverless</h1>
      <h3>Don't pick a book by its cover.</h3>

      <BookContainer />    
    </div>
  );
}

export default App;
