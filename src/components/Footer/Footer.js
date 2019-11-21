import React from 'react';
import {MdPermIdentity} from 'react-icons/md';
import {GoHome} from 'react-icons/go';
import {FaCode} from 'react-icons/fa';
import {IoMdFolderOpen} from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
import {rotateInDownLeft} from 'react-animations';
import './Footer.css';
import 'tachyons';

const rotateInDownLeftAnimation = keyframes`${rotateInDownLeft}`;

const RotInDownleft = styled.div`
  animation: 1s ${rotateInDownLeftAnimation};
`;

const Footer = () => {
    return (

        <RotInDownleft>
            <footer class="sans-serif">
                    <div class="bg-black-30">
                        <nav class="dt mw8 center"> 
                            <div class="dtc v-mid b3-white">
                                <a class="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" href="/" ><GoHome /></a> 
                                <a class="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" href="/skills" ><FaCode /></a> 
                                <a class="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" href="/projects" ><IoMdFolderOpen /></a> 
                                <a class="f3 f1-ns fw4 hover-white no-underline white-70 dn dib pv2 ph3" href="/about" ><MdPermIdentity /></a> 
                                <a class="f3 f1-ns fw4 hover-white no-underline white-70 dib pv2 ph3" href="/contact" ><AiOutlineMail /></a> 
                            </div>
                        </nav>
                    </div>
            </footer>
        </RotInDownleft>
    );
}

export default Footer;