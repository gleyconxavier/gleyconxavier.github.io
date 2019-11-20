import React from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Services from './components/Services/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <div className="particles">
        <Particles params={{
                  particles: {
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 5
                      }
                    }
                  }
                }}
                style={{
                  width: '100%',
                  backgroundImage: `url(${logo})`,
                  backgroundSize: 'cover'
                }}/>
        <Services />
        </div>
      </header>
    </div>
  );
}

export default App;