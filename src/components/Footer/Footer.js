import React from 'react';
import {MdPermIdentity} from 'react-icons/md';
import {GoHome} from 'react-icons/go';
import {FaCode} from 'react-icons/fa';
import {IoMdFolderOpen} from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
import {rotateInDownLeft} from 'react-animations';
import {Link} from 'react-router-dom';
import './Footer.css';
import 'tachyons';

const rotateInDownLeftAnimation = keyframes`${rotateInDownLeft}`;

const RotInDownleft = styled.div`
  animation: 2s ${rotateInDownLeftAnimation};
`;

const Footer = () => {
    return (

        <RotInDownleft >
            <footer>
                    <div className="bg-black-30">
                        <nav className="dt mw8 center tc"> 
                            <div className="dtc b3-white sans-serif">
                                <Link className="f3 f1-ns fw4 hover-white no-underline white-70 dib pv2 ph3" to="/" >
                                    <GoHome className="icon-hide absolute-ns"/>
                                    <p className="icon-text helvetica f3-ns dn dib-ns">Home</p>
                                </Link> 
                                <Link class="f3 f1-ns fw4 hover-white no-underline white-70 dib pv2 ph3" to="/skills" >
                                    <FaCode className="icon-hide absolute-ns"/>
                                    <p className="icon-text helvetica f3-ns dn dib-ns">Skills</p>
                                </Link> 
                                <Link class="f3 f1-ns fw4 hover-white no-underline white-70 dib pv2 ph3" to="/projects" >
                                    <IoMdFolderOpen className="icon-hide absolute-ns"/>
                                    <p className="icon-text helvetica f3-ns dn dib-ns">Jobs</p>
                                </Link> 
                                <Link class="f3 f1-ns fw4 hover-white no-underline white-70 dib pv2 ph3" to="/about" >
                                    <MdPermIdentity className="icon-hide absolute-ns"/>
                                    <p className="icon-text helvetica f3-ns dn dib-ns">Sobre</p>
                                </Link> 
                                <Link class="f3 f1-ns fw4 hover-white no-underline white-70 dib pv2 ph3" to="/contact" >
                                    <AiOutlineMail className="icon-hide absolute-ns"/>
                                    <p className="icon-text helvetica f3-ns dn dib-ns">Contato</p>
                                </Link> 
                            </div>
                        </nav>
                    </div>
            </footer>
        </RotInDownleft>
    );
}

export default Footer;