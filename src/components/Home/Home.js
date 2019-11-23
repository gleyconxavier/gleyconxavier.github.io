import React from 'react';
import styled, { keyframes } from 'styled-components';
import {flipInY} from 'react-animations';

const flipinAnimation = keyframes`${flipInY}`;

const FlipinDiv = styled.div`
  animation: 1s ${flipinAnimation};
`;

const Home = () => {
    return (

        <div className="tc mt4 mt5-m mt6-l ph4 mw9-ns center">
            <FlipinDiv><h1 className="f1 fw2 white-90 pv1 bg-black-80 mb0 lh-title">Gleycon <span className="white-50">Xavier</span></h1></FlipinDiv>
            <FlipinDiv><h2 className="fw1 f3 white-70 mt3 pv1 bg-black-80 mb4">Web Developer</h2></FlipinDiv>
        </div>
    )
}

export default Home;