import React from 'react';
import './Navigation.css';
import logo from '../../logo.svg';
import Tachyons from 'tachyons';

const Navigation = () => {
    return (
        <nav className="navbar">

            <header class="sans-serif">
                <div>
                    <div class="bg-black-50 pb5 pb6-m pb7-l">
                    <nav class="dt w-100 mw8 center"> 
                        <div class="dtc w2 v-mid pa3">
                            <a href="/" class="dib w3 h3 ba b--white-90 grow-large border-box">
                            <img src={logo} className="App-logo" alt="logo" />
                            </a>
                        </div>
                        <div class="rotate-20 dtc v-mid b3-white tr pa4">
                            <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Início</a> 
                            <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Serviços</a> 
                            <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Projetos</a> 
                            <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Sobre mim</a> 
                            <a class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Contato</a> 
                        </div>
                    </nav> 
                    <div class="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">Gleycon Xavier</h1>
                        <h2 class="fw1 f3 white-80 mt3 mb4">Front-End developer</h2>
                        <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
                        <span class="dib v-mid ph3 white-70 mb3">ou</span>
                        <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Secondary call to action</a>
                    </div>
                    </div>
                </div> 
            </header>
        
        </nav>
    );
}

export default Navigation;