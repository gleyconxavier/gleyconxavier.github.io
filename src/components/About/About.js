import React from 'react';
import styled, { keyframes } from 'styled-components';
import {flipInY} from 'react-animations';
import about from './to-do-list.svg';

const flipinAnimation = keyframes`${flipInY}`;

const FlipinDiv = styled.div`
  animation: 1s ${flipinAnimation};
`;

const About = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4">
            <FlipinDiv><h1 className="f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Um pouco sobre <span className="white-50">mim</span></h1></FlipinDiv>
            <FlipinDiv><h2 className="fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">Quem sou eu?</h2></FlipinDiv>
            <article class="bg-white pa3 pa5-ns">
                <h1 class="f6">Long history short</h1>
                <img src={about} class="w-100 f5 measure" alt="Photo of outer space"/>
                <p class="measure lh-copy">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p class="measure lh-copy">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </article>
        </div>
    )
}

export default About;