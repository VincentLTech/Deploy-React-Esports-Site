import React from 'react';
const Stream = require('../../images/Stream.jpg');
const About = () => {
    return (
        <section class="about" id="about">
            <div class="containe2">
                <div class="about-content">
                    <a href="https://www.twitch.tv/cunybcesports">
                    <figure class="about-banner">
                        <img src={Stream} alt="profile-img" class="about-img"/>
                        <h1 class="about-title">Watch Our <strong>Stream</strong> </h1>
                        {/* </img> */}
                    </figure>
                    </a>
                </div>
            
            </div>
        </section>
    );
}

export default About;

        