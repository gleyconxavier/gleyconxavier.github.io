import React from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './Animate.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Particles 
        className="particles"
        params={{
          number: {
            value: 1,
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