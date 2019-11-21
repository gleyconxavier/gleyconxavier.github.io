import React from 'react';
import {MdPermIdentity} from 'react-icons/md';
import {GoHome} from 'react-icons/go';
import {FaCode} from 'react-icons/fa';
import {IoMdFolderOpen} from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
// import './Footer.css';
import logo from '../../logo.svg';
import 'tachyons';

const Footer = () => {
    return (

            <footer class="sans-serif">
                    <div class="bg-black-50 pb5 pb6-m pb7-l">
                        <nav class="dt w-100 mw8 center"> 
                            <div class="rotate-20 dtc v-mid b3-white tr pa4">
                                <a class="f1 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" ><GoHome /></a> 
                                <a class="f1 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/skills" ><FaCode /></a> 
                                <a class="f1 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/projects" ><IoMdFolderOpen /></a> 
                                <a class="f1 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/about" ><MdPermIdentity /></a> 
                                <a class="f1 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3" href="/contact" ><AiOutlineMail /></a> 
                            </div>
                        </nav>
                    </div>
            </footer>
                    
    );
}

export default Footer;