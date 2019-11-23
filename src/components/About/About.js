import React from 'react';
import styled, { keyframes } from 'styled-components';
import {flipInY} from 'react-animations';
import startupSvg from './startup.svg';
import todoSvg from './to-do-list.svg';
import gradSvg from './graduating.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const flipinAnimation = keyframes`${flipInY}`;

const FlipinDiv = styled.div`
  animation: 1s ${flipinAnimation};
`;

const About = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            
            <FlipinDiv><h1 className="f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Um pouco sobre <span className="white-50">mim</span></h1></FlipinDiv>
            <FlipinDiv><h2 className="fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">Quem sou eu?</h2></FlipinDiv>

            <article className="bg-white tc-ns pa3 pa5-ns br3 mb5">
                <h3 className="f6 f4-l i">Long history short</h3>
                
                <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                    <section className="flex flex-wrap justify-around items-center">
                        <img src={startupSvg} className="mw7-ns w-50-ns" alt="Ilustração utilizando notebook"/>
                        
                        <div className="measure lh-copy w-50-ns f5-m f3-l">
                            <p>
                                Atuei em diversas áreas, dei aulas sobre informática, atuei como técnico em informática,
                                mas embora sabia que minha vocação estava na área de tecnologia da informação, ainda não tinha certeza 
                                se estes eram os nichos que queria percorrer ao longo da vida.
                            </p>
                            <p>
                                Então o tempo passou e tive meu primeiro contato com a programação, com as linguagens Java e Ruby,
                                embora conseguisse realizar algoritmos simples, não conseguia entender como aplicar aquilo e então 
                                fui perdendo o interesse por não conseguir chegar em lugar algum, afinal não possuia nenhum mentor.
                            </p>
                        </div>
                    </section>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft'>
                    <section className="flex flex-wrap flex-row-reverse justify-around items-center">
                        <img src={todoSvg} className="mw7-ns w-50-ns" alt="Ilustração lista de tarefas"/>
                        <div className="measure lh-copy w-50-ns f5-m f3-l">
                            <p>
                                Muito tempo depois e por sorte, acabei conhecendo o Curso em Vídeo e pude conhecer o desenvolvimento 
                                web, que me chamou atenção , afinal, como assim programar e poder ver o resultado na hora? A partir daí
                                montei um cronograma e não parei mais, passei a ler documentações, ler código de outros desenvolvedores,
                                realizei cursos na Udemy e pratiquei muito, muito mesmo.
                            </p>
                        </div>
                    </section>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                    <section className="flex flex-wrap justify-around items-center">
                        <img src={gradSvg} className="mw7-ns w-50-ns" alt="Ilustração graduando"/>
                        <div className="measure lh-copy w-50-ns f5-m f3-l">
                            <p>
                                Dentro deste tempo, finalmente decidi que queria cursar o ensino superior dentro da área de tecnologia da informação,
                                então hoje sou graduando em análise e desenvolvimento de sistemas, não vou mentir por trás deste resumo houve muito
                                esforço e ainda há! Mas quando fazemos o que amamos tudo isso se torna divertido.
                            </p>
                        </div>
                    </section>
                </ScrollAnimation>

            </article>
        </div>
    )
}

export default About;