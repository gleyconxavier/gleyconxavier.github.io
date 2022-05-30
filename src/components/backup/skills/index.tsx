import React from 'react';
import coding from './coding.svg';
import './Skills.css';

const Skills = () => {
  return (
    
    <div className="mt4 mt5-m mt6-l ph4 mw9-ns center">

      <h1 className="tc f1 animated flipInY fw2 white-90 pv1 bg-black-80 mb0 lh-title">Skills</h1>
      <h2 className="tc fw1 animated flipInY f3 white-70 mt3 pv1 bg-black-80 mb4">Habilidades que cultivei</h2>

      
      <article className="mb5">
            
        <section className="bg-white sans-serif br3 flex flex-wrap pb5">
          <div className="center pa3 pa5-ns mw9 pt5-ns">
            <h3 className="f6 tc f5-l i">
              "Se eu tivesse oito horas para derrubar uma árvore, passaria seis afiando meu machado."<br></br>
              <span className="black-80 fw3 garamond">-Abraham Lincoln</span>
            </h3>

            <img className="mw7-ns" src={coding} alt="Homem programando"/>

            <div className="pa4">
              <p className="f5-m f3-l lh-copy measure i bl bw1 b--gold mb4">
                Conheci o desenvolvimento web em setembro de 2018 e não parei mais.
              </p>
            </div>

            <ScrollAnimation className="f3-m measure lh-copy f5-m f3-l" animateIn='bounceInLeft'
            animateOut='bounceOutRight'>
              <p>Minhas principais habilidades giram em torno da stack MERN, também tive contato com Laravel e Wordpress</p>
              <p>Ou seja estou ativamente utilizando MongoDB, Express, React.js, Node.js em minhas criações
                que vão desde One Pages, sites institucionais, sites de classificados, até API RESTful.</p>
              <p>Evoluindo com os desafios de cada novo projeto.</p>
            </ScrollAnimation>
          </div>
          
        </section>
        
      </article>
      
    </div>
  );
}

export default Skills;
