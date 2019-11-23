import React from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Particles
        className="particles"
        params={{
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800
              }
            },
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1"
                }
              }
            }
          }}
          style={{
            backgroundImage: `url(${logo} )`,
            backgroundSize: 'cover'
          }}
        />
      </header>
      <main>
        
      </main>
      <footer>       
        <Footer />
      </footer>
    </div>
  );
}

export default App;