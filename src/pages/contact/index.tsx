import React from 'react';
import emailSvg from './email.svg';

const Contact = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            
            <h1 className="f1 fw2 animated flipInY white-90 pv1 mb0 lh-title">Contato</h1>
            <h2 className="f3 fw1 animated flipInY white-70 mt3 pv1 mb4">Vamos conversar?</h2>

            <article className="tc-ns pa3 pa5-ns br3 mb5 center">
                <h3 className="f6 f4-l white-90 i">Let's talk :)</h3>
                
                <div>
                    <section className="flex flex-wrap justify-around items-center">
                        <img src={emailSvg} className="mw7-ns w-50-ns" alt="Ilustração utilizando notebook"/>
                        
                        <div className="measure white-90 lh-copy w-50-ns f5-m f3-l">
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
                            <a href="src/pages/contact/index.tsx"
                                className="no-underline near-white bg-animate bg-blue hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2"
                                target="_blank" rel="noopener noreferrer" >
                                <span className="f6 ml3 pr2">LinkedIn</span>
                            </a>
                        </div>
                    </section>
                </div>

            </article>
        </div>
    )
}

export default Contact;
