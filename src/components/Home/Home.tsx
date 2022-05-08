import React from 'react';
import emailSvg from "../../pages/contact/email.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    return (

        <div className="flex flex-wrap tc mt6-l ph4 w-100">
          <div className={"w-100"}>
            <div className="w-60">
              <h1 className="f1 animated flipInY fw2 white-90 pv1 mb0 lh-title">Gleycon <span className="white-50">Xavier</span></h1>
              <h2 className="fw1 animated flipInY f4 white-70 mt3 pv1 mb4">Software Developer</h2>
              <h3 className="fw1 animated flipInY f2 white-90 mt3 pv1 mb4">Site em manutenção</h3>
            </div>
          </div>

          <div className={"flex flex-wrap w-100 justify-end"}>
            <div className="w-70">
              <ScrollAnimation animateIn='bounceInLeft'
                               animateOut='bounceOutRight'>
                <section className="flex flex-wrap justify-around items-center">
                  {/*<img src={emailSvg} className="mw7-ns w-50-ns" alt="Ilustração utilizando notebook"/>*/}

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
                    <a href="https://www.linkedin.com/in/gleyconxavier/"
                       className="no-underline near-white bg-animate bg-blue hover-bg-gray inline-flex pointer items-center ma2 tc br2 pa2"
                       target="_blank" rel="noopener noreferrer" >
                      <span className="f6 ml3 pr2">LinkedIn</span>
                    </a>
                  </div>
                </section>
              </ScrollAnimation>
            </div>
          </div>
        </div>
    )
}

export default Home;
