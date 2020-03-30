import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import QuoteCards from './component/QuoteCard'
import './component/navbar.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteCards/>
    </div>
  );
}

export default App;
