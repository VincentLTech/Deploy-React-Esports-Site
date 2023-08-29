import React from 'react';
const Member = require('../../images/Member.jpg');
const About2 = () => {
    return (
        <section class="about" id="about">
            <div class="containe2">
                <div class="about-content">
                    <a href="https://forms.gle/kVmB9CahkDHVXr796">
                    <figure class="about-banner">
                    <img src={Member} alt="profile-img" class="about-img" />
                    <h1 class="about-title">Join Our <strong>Club</strong>  </h1>

                        {/* </img> */}
                    </figure>
                    </a>
                </div>
            
            </div>
        </section>
    );
}

export default About2;