import React from 'react';
const Discord = require('../../images/Discord.jpg');
const About3 = () => {
    return (
        <section class="about" id="about">
            <div class="containe2">
                <div class="about-content">
                    <a href="https://discord.gg/rKMTVrcW">

                        <figure class="about-banner">
                            <img src={Discord} alt="profile-img" class="about-img" />
                            <h4 class="about-title">Join The <strong>Discord</strong> </h4>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About3;