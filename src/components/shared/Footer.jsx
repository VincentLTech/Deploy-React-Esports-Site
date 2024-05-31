import React from 'react';
import '../../../src/App.css';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const Discord = require('../../images/DiscordIcon.jpg');
const Instagram = require('../../images/InstagramLogo.png');
const Twitter = require('../../images/TwitterLogo.png');
const Footer = () => {
    return (
        <footer>
            
            <div class="footer-top">
                
                <div class="container">
                    <div class="footer-brand-wrapper">
                        <div class="footer-menu-wrapper">
                            <ul class="footer-menu-list">
                                {/* <li>
                                    <a href="#hero" class="footer-menu-link">Home</a>
                                </li>
                                <li>
                                    <a href="#about" class="footer-menu-link">About</a>
                                </li>
                                <li>
                                    <a href="#" class="footer-menu-link">Contact</a>
                                </li> */}
                                <li>
                                    <HashLink smooth to='/history' class="footer-menu-link">Special Thanks</HashLink>
                                    {/* <a href="" class="footer-menu-link">Special Thanks</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <div class="footer-brand-wrapper">
                        <div class="footer-menu-wrapper">
                            <ul class="footer-menu-list">   
                                <li>
                                    <a href="https://www.twitch.tv/cunybcesports" class="footer-social-link"><ion-icon name="logo-twitch"></ion-icon></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/cunybcesports" class="footer-social-link"><ion-icon name="logo-instagram"></ion-icon></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/CUNYbcesports" class="footer-social-link"><ion-icon name="logo-twitter"></ion-icon></a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/rKMTVrcW" class="footer-social-link"><ion-icon name="logo-discord"></ion-icon></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
