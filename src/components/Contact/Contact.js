import React from 'react';
import emailSvg from './email.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            
            <h1 className="f1 animated flipInY fw2 white-90 pv1 bg-black-80 mb0 lh-title">Contato</h1>
            <h2 className="fw1 animated flipInY f3 white-70 mt3 pv1 bg-black-80 mb4">Vamos conversar?</h2>

            <article className="bg-white tc-ns pa3 pa5-ns br3 mb5">
                <h3 className="f6 f4-l i">Let's talk :)</h3>
                
                <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                    <section className="flex flex-wrap justify-around items-center">
                        <img src={emailSvg} className="mw7-ns w-50-ns" alt="Ilustração utilizando notebook"/>
                        
                        <div className="measure lh-copy w-50-ns f5-m f3-l">
                            <h4>
                                Contatos:
                            </h4>
                            <a href="https://api.whatsapp.com/send?phone=069984265718&text=Olá%20Gleycon%20vi%20seu%20portfólio%20vamos%20conversar?"
                                className="no-underline near-white bg-animate bg-green hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2"
                                target="_blank" rel="noopener noreferrer">
                                <span className="f6 ml3 pr2">Whatsapp</span>
                            </a>
                            <a href="mailto:gleyconxcarlos@gmail.com"
                                className="no-underline near-white bg-animate bg-black hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2"
                                target="_blank" rel="noopener noreferrer" >
                                <span className="f6 ml3 pr2">Email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/gleyconxavier/"
                                className="no-underline near-white bg-animate bg-blue hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2"
                                target="_blank" rel="noopener noreferrer" >
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
