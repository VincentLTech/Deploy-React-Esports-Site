import React from 'react';
const Compete = require('../../images/Compete.jpg');
const About3 = () => {
    return (
        <section class="about" id="about">
            <div class="containe2">
                <div class="about-content">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZ6kqKRj2h2uNcsYWWS2UfrhrAXl_zhKG7FtDXetWGO46X3A/viewform">

                        <figure class="about-banner">
                            <img src={Compete} alt="profile-img" class="about-img" />
                            <h4 class="about-title">Join The <strong>Team</strong> </h4>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About3;