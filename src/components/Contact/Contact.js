import React from 'react';
import styled, { keyframes } from 'styled-components';
import {flipInY} from 'react-animations';
import emailSvg from './email.svg';
import inviteSvg from './invite.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const flipinAnimation = keyframes`${flipInY}`;

const FlipinDiv = styled.div`
  animation: 1s ${flipinAnimation};
`;

const About = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            
            <FlipinDiv><h1 className="f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Contato</h1></FlipinDiv>
            <FlipinDiv><h2 className="fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">Vamos conversar?</h2></FlipinDiv>

            <article className="bg-white tc-ns pa3 pa5-ns br3 mb5">
                <h3 className="f6 f4-l i">Let's talk :)</h3>
                
                <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                    <section className="flex flex-wrap justify-around items-center">
                        <img src={emailSvg} class="mw7-ns w-50-ns" alt="Ilustração utilizando notebook"/>
                        
                        <div className="measure lh-copy w-50-ns f5-m f3-l">
                            <h4>
                                Contatos:
                            </h4>
                            <a href="https://api.whatsapp.com/send?phone=069984068936&text=Olá%20Gleycon%20vi%20seu%20portfólio%20vamos%20conversar?"
                                 className="no-underline near-white bg-animate bg-green hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2">
                                <span className="f6 ml3 pr2">Whatsapp</span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=069984068936&text=Olá%20Gleycon%20vi%20seu%20portfólio%20vamos%20conversar?"
                                 className="no-underline near-white bg-animate bg-black hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2">
                                <span className="f6 ml3 pr2">Email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/gleyconxavier/"
                                 className="no-underline near-white bg-animate bg-blue hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2">
                                <span className="f6 ml3 pr2">LinkedIn</span>
                            </a>
                        </div>
                    </section>
                </ScrollAnimation>

            </article>
        </div>
    )
}

export default About;