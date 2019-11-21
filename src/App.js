import React from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <div>
          <Particles className="particles" params={{
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 800
                      }
                    },
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
                    backgroundImage: `url(${logo} )`,
                    backgroundSize: 'cover'
                  }}/>
        </div>
      </header>
      <main>
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;