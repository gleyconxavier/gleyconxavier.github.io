import React from 'react';
import './Navigation.css';
import logo from '../../logo.svg';
import {FaGithubAlt} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import {rotateInUpRight} from 'react-animations';
import 'tachyons';

const rotateInUpRightAnimation = keyframes`${rotateInUpRight}`;

const RotInUpRight = styled.div`
  animation: 1s ${rotateInUpRightAnimation};
`;

const Navigation = () => {
    return (
        <nav>

<RotInUpRight><header class="sans-serif">
                <div>
                    <div class="bg-black-30">
                    <nav class="dt w-100 mw8 center"> 
                        <div class="dtc w2 v-mid pa3">
                            <a href="/" class="dib w2 h2 ba b--white-90 grow-large border-box">
                            <img src={logo} className="App-logo" alt="logo" />
                            </a>
                        </div>
                        <div class="dtc v-mid b3-white tr pa2">
                            <a class="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" href="/" ><FaGithubAlt /></a> 
                            <a class="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" href="/" ><FaLinkedin /></a> 
                        </div>
                    </nav>
                    </div>
                </div>
            </header></RotInUpRight>
        
        </nav>
    );
}

export default Navigation;