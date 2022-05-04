import React from 'react';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/404/404';
import {Switch, Router, BrowserRouter, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Particles from 'react-particles-js';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './Animate.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <BrowserRouter>
          <Router basename={process.env.PUBLIC_URL} history={history}>
              <Navigation />
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/Skills" component={Skills} />
                <Route path="/Projects" component={Projects} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path='*' exact={true} component={Error} />
              </Switch>
              <Footer />
          </ Router>
        </BrowserRouter>
      </main>   
    </div>
  );
}

export default App;
