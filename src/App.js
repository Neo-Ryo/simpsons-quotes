import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import QuoteList from './component/QuoteList'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteList/>
    </div>
  );
}

export default App;
