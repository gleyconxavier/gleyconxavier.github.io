import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import toDo from './asana-asana-com.svg';
import bgonWepb from './Images/barbearia-goncalves.webp';
import bgonPng from './Images/barbearia-goncalves-min.PNG';
import mazzaWepb from './Images/mazza-pizarria-wp.webp';
import mazzaPng from './Images/mazza-pizarria-wp-min.png';
import cineartWepb from './Images/cineart-wp.webp';
import cineartPng from './Images/cineart-wp-min.png';
import orcpesWepb from './Images/orçamento-pessoal.webp';
import orcpesPng from './Images/orçamento-pessoal.png';
import petmonitorWepb from './Images/petmonitor.webp';
import petmonitorPng from './Images/petmonitor.png';
import simonWepb from './Images/simon-game.webp';
import simonPng from './Images/simon-game.png';
import smartbrainWepb from './Images/smartbrain-react.webp';
import smartbrainPng from './Images/smartbrain-react.png';
import testereacaoWepb from './Images/testereacao.webp';
import testereacaoPng from './Images/testereacao.png';
import tindogWepb from './Images/tindog-site.webp';
import tindogPng from './Images/tindog-site.png';
import todoWepb from './Images/todo-app.webp';
import todoPng from './Images/todo-app.png';

const Projects = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            
            <h1 className="f1 fw2 animated flipInY white-90 pv1 bg-black-80 mb0 lh-title">Projetos</h1>
            <h2 className="fw1 f3 animated flipInY white-70 mt3 pv1 bg-black-80 mb4">Work Hard</h2>

            <article className="bg-white tc-ns pa3 pa5-ns br3 mb5">
                <h3 className="f6 f4-l i">Meus projetos</h3>
                
                <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                    <section className="flex flex-wrap justify-around items-center">

                        <img src={toDo} className="mw7-ns w-80-ns" alt="Ilustração desenvolvendo software desenvolvimento de sites em Rolim de Moura-RO"/>
                        
                    </section>
                </ScrollAnimation>

            <main className="cf pa2">

                {/* Large */}

                <div className="fl w-100 w-50-ns ph2">

                <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>

                <a href="https://barbeariagoncalves.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                    <picture  className="db w-100">
                            <source srcSet={bgonWepb} type="image/webp"/>
                            <source srcSet={bgonPng} type="image/jpeg"/>
                            <img src="img/bgonJPEG.jpg" alt="Projeto barbearia Gonçalves desenvolvimento de sites em Rolim de Moura-RO" title="Projeto barbearia Gonçalves"/>
                        </picture>
                    
                    <h4>Barbearia Gonçalves</h4>
                    <p>Site institucional, blog e sistema de agendamento.</p>
                </a>
                
                </ScrollAnimation>

                <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>

                    <a href="https://fazer.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                                <source srcSet={todoWepb} type="image/webp"/>
                                <source srcSet={todoPng} type="image/jpeg"/>
                                <img src="img/creakyOldJPEG.jpg" alt="Projeto lista de tarefas desenvolvimento de sites em Rolim de Moura-RO" title="Projeto lista de tarefas"/>
                            </picture>
                        
                        <h4>Lista de Tarefas</h4>
                        <p>App com Api em Heroku e database MongoDb</p>
                    </a>
                    
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>

                    <a href="https://gleyconxavier.github.io/pet-monitor/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={petmonitorWepb} type="image/webp"/>
                            <source srcSet={petmonitorPng} type="image/jpeg"/>
                            <img src="img/petmonitor.jpg" alt="Projeto Pet Monitor desenvolvimento de sites em Rolim de Moura-RO" title="Projeto Pet Monitor"/>
                        </picture>
                        <h4>Pet Monitor</h4>
                        <p>
                            Projeto feito com Material Design e algoritmo para simulação do rastreamento por coordenadas,
                            utilizando a fórmula de Haversine e um algoritmo para variação da posição do pet.
                        </p>
                    </a>

                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>

                    <a href="https://gleyconxavier.github.io/smartbrain/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={smartbrainWepb} type="image/webp"/>
                            <source srcSet={smartbrainPng} type="image/jpeg"/>
                            <img src="img/smartbrain.jpg" alt="Projeto de reconhecimento facial desenvolvimento de sites em Rolim de Moura-RO" title="Projeto de reconhecimento facial desenvolvimento de sites em Rolim de Moura-RO"/>
                        </picture>
                        <h4>Smartbrain</h4>
                        <p>
                            Projeto de reconhecimento facial em imagens, desenvolvido com React em conjunto a API Clarifai, 
                            onde é possível copiar o endereço de qualquer imagem na internet e detectar um rosto nela.
                        </p>
                    </a>

                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>
                    <a href="https://gleyconxavier.github.io/orcamento-pessoal/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={orcpesWepb} type="image/webp"/>
                            <source srcSet={orcpesPng} type="image/jpeg"/>
                            <img src="img/orcpes.jpg" alt="Projeto de orçamento pessoal desenvolvimento de sites em Rolim de Moura-RO" title="Projeto de orçamento pessoal"/>
                        </picture>
                        <h4>Projeto Orçamento Pessoal</h4>
                        <p>Projeto utilizando o local storage do navegador.</p>
                    </a>
                    </ScrollAnimation>

                </div>

                {/* Medium */}

                <div className="fl w-50 w-25-ns ph2">

                    <ScrollAnimation animateIn='fadeIn'
                            animateOut='fadeOut'>
                    <a href="https://resilient-cheek.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={mazzaWepb} type="image/webp"/>
                            <source srcSet={mazzaPng} type="image/jpeg"/>
                            <img src="img/mazza.jpg" alt="Projeto pizarria Mazza desenvolvimento de sites em Rolim de Moura-RO" title="Projeto pizarria Mazza"/>
                        </picture>
                    <h4>Mazza Pizzaria</h4>
                    <p>Criação de site Wordpress.</p>
                    </a>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'
                            animateOut='fadeOut'>
                    <a href="https://gleyconxavier.github.io/tindog/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={tindogWepb} type="image/webp"/>
                            <source srcSet={tindogPng} type="image/jpeg"/>
                            <img src="img/tindog.jpg" alt="Projeto Tindog  desenvolvimento de sites em Rolim de Moura-RO" title="Projeto Tindog"/>
                        </picture>
                        <h4>Tindog</h4>
                        <p>Criação de Landing Page direcionada a promoção de aplicativo de matches para pets.</p>
                    </a>
                    </ScrollAnimation>

                </div>

                {/* Small */}

                <div className="fl w-50 w-25-ns ph2">

                    <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>

                    <a href="https://unmilled-grooves.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={cineartWepb} type="image/webp"/>
                            <source srcSet={cineartPng} type="image/jpeg"/>
                            <img src="img/cineart.jpg" alt="Projeto Cineart  desenvolvimento de sites em Rolim de Moura-RO" title="Projeto Cineart"/>
                        </picture>
                        <h4>Cineart</h4>
                        <p>Desenvolvimento de tema Wordpress.</p>
                    </a>
                    
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>

                    <a href="https://gleyconxavier.github.io/teste-reacao/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={testereacaoWepb} type="image/webp"/>
                            <source srcSet={testereacaoPng} type="image/jpeg"/>
                            <img src="img/testereacao.jpg" alt="Projeto teste de reação  desenvolvimento de sites em Rolim de Moura-RO" title="Projeto teste de reação"/>
                        </picture>
                        <h4>Teste de reação</h4>
                        <p>
                            Cronômetra e marca o melhor tempo de reação em que o usuário clickou na área
                            designada.
                        </p>
                    </a>

                    <a href="https://unmilled-grooves.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className="pv2 pointer grow db no-underline black">
                        <picture  className="db w-100">
                            <source srcSet={simonWepb} type="image/webp"/>
                            <source srcSet={simonPng} type="image/jpeg"/>
                            <img src="img/simon.jpg" alt="Projeto Simon  desenvolvimento de sites em Rolim de Moura-RO" title="Projeto Simon"/>
                        </picture>
                        <h4>Simon</h4>
                        <p>
                            Jogo da memória, o objetivo é lembrar de cada sequência executada
                            pelo algoritmo gerador.
                        </p>
                    </a>
                    
                    </ScrollAnimation>
                </div>

            </main>

            </article>
        </div>
    )
}

export default Projects;