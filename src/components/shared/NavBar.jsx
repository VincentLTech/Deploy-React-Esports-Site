import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const main_logo = require('../../images/main_logo.png');

const NavBar = () => {
    return (
        <header class="header">
            <div class="overlay" data-overlay></div>
                <div class="container">
                    <img src={main_logo} alt="profile-img" className='logo-img'/>
                    <nav class="navbar" data-nav>   
                        <ul class="navbar-list">
                            <li>
                                <HashLink smooth to='/#hero' class="navbar-link" href="#">Home</HashLink>
                                {/* <a href="#hero" class="navbar-link">Home</a> */}
                            </li>
                            <li>
                                <HashLink smooth to='/#about' class="navbar-link" href="#">About</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to='/#contact' class="navbar-link" href="#">Contact</HashLink>
                            </li>
                            <li>
                                <a href="https://discord.gg/rKMTVrcW" class="navbar-link">Discord</a>
                            </li>

                        </ul>
                    </nav>
                    <div class="header-actions">
                        <button class="btn-sign_in">
                        <span><a href="https://forms.gle/kVmB9CahkDHVXr796">Join Us</a></span>
                        </button>
                    </div>
                </div>
        </header>
    );
}

export default NavBar;