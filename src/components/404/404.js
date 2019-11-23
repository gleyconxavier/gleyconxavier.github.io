import React from 'react';
import styled, { keyframes } from 'styled-components';
import {flipInY} from 'react-animations';
import ghostSvg from './404.png';
import ScrollAnimation from 'react-animate-on-scroll';

const flipinAnimation = keyframes`${flipInY}`;

const FlipinDiv = styled.div`
  animation: 1s ${flipinAnimation};
`;

const Error = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            
            <FlipinDiv><h1 className="f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Oh não!</h1></FlipinDiv>
            <FlipinDiv><h2 className="fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">A weird ghost appear</h2></FlipinDiv>

            <article className="bg-white tc-ns pa3 pa5-ns br3 mb5">
                <h3 className="f6 f4-l i">"Booo! Página não encontrada"</h3>
                
                <ScrollAnimation animateIn='tada'
                        animateOut='zoomOutDown'>
                    <section className="flex flex-wrap justify-around items-center center">
                        <img src={ghostSvg} class="mw7-ns" alt="Ilustração utilizando notebook"/>
                        
                        <div className="measure lh-copy w-50-ns f5-m f3-l">
                            <p>
                                * A próposito ele gosta de maças *
                            </p>
                        </div>
                    </section>
                </ScrollAnimation>

            </article>
        </div>
    )
}

export default Error;