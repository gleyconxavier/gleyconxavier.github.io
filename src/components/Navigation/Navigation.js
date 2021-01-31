import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import Home from '../Home/Home';
import {FaGithubAlt} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import 'tachyons';

const Navigation = () => {
    return (
        <nav>

                <header className="sans-serif">
                    <div className="bg-black-30 dt w-100 center"> 
                        <div className="dtc w2 v-mid pa3">
                            <Link to={Home} className="dib w2 h2 ba b--white-90 grow-large border-box">
                            <img src={logo} className="App-logo" alt="logo" />
                            </Link>
                        </div>
                        <div className="dtc v-mid b3-white tr pa2">
                            <a className="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" target="_blank" rel="noopener noreferrer" href="https://github.com/gleyconxavier" ><FaGithubAlt /></a> 
                            <a className="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/gleyconxavier" ><FaLinkedin /></a> 
                        </div>
                    </div>
                </header>
        
        </nav>
    );
}

export default Navigation;
