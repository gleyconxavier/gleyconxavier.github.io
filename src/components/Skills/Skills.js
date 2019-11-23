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
    
    <div className="mt4 mt5-m mt6-l ph4 mw9-ns center">

      <FlipinDiv><h1 className="tc f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Skills</h1></FlipinDiv>
      <FlipinDiv><h2 className="tc fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">Habilidades que cultivei</h2></FlipinDiv>

      
      <article className="mb5">
            
        <section class="bg-white sans-serif br3 flex flex-wrap pb5">
          <div class="center pa3 pa5-ns mw9 pt5-ns">
            <h3 className="f6 tc f5-l i">
              "Se eu tivesse oito horas para derrubar uma árvore, passaria seis afiando meu machado."<br></br>
              <span className="black-80 fw3 garamond">-Abraham Lincoln</span>
            </h3>

            <img className="mw7-ns" src={coding} alt="Homem programando"/>

            <div class="pa4">
              <p class="f5-m f3-l lh-copy measure i bl bw1 b--gold mb4">
                Conheci o desenvolvimento web em setembro de 2018 e não parei mais.
              </p>
            </div>

            <ScrollAnimation className="f3-m measure lh-copy f5-m f3-l" animateIn='bounceInLeft'
            animateOut='bounceOutRight'>
              <p>Minhas principais habilidades giram em torno da stack MERN, também tive contato com Laravel e Wordpress</p>
              <p>Ou seja estou ativamente utilizando MongoDB, Express, React.js, Node.js em minhas criações
                que vão desde One Pages, sites institucionais, sites de classificados, até API RESTful.</p>
              <p>Evoluindo coms os desafios de cada novo projeto.</p>
            </ScrollAnimation>
          </div>
          
        </section>
        
      </article>
      
    </div>
  );
}

export default Skills;