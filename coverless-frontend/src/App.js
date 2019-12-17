import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BookContainer from './Components/BookContainer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    
        <Navbar />
    
        <Header />

        <BookContainer />

    </div>
  );
}

export default App;
