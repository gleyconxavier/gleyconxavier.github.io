import React from 'react';
import styled, { keyframes } from 'styled-components';
import {flipInY} from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import coding from './coding.svg';
import './Skills.css';

const flipinAnimation = keyframes`${flipInY}`;

const FlipinDiv = styled.div`
  animation: 1s ${flipinAnimation};
`;

const Skills = () => {
  return (
    
    <div className="tc mt4 mt5-m mt6-l ph4">
            <FlipinDiv><h1 className="f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Skills</h1></FlipinDiv>
            <FlipinDiv><h2 className="fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">Habilidades que cultivei</h2></FlipinDiv>

            
            <article>
            
        <header class="bg-white sans-serif">
          <div class="mw9 center pa4 pt5-ns ph7-l">
            <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                Uma breve história...
              </span>
            </h3>

            <img src={coding} />

            <div class="pa4 ph7-l mw9-l center">
              <p class="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">
                Conheci o desenvolvimento web em setembro de 2018 e não parei mais.
              </p>
            </div>

            <ScrollAnimation animateIn='bounceInLeft'
            animateOut='bounceOutRight'>
            <p>Minhas principais habilidades giram em torno da stack MERN, também tive contato com Laravel e Wordpress</p>
            <p>Ou seja estou ativamente utilizando MongoDB, Express, React.js, Node.js em minhas criações.</p>
            <p>Evoluindo a cada novo projeto.</p>
            </ScrollAnimation>
          </div>
          
        </header>
        
      </article>
      
    </div>
  );
}

export default Skills;