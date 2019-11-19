import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Gleycon Xavier</h1>

        <Navigation />
      </header>
    </div>
  );
}

export default App;
