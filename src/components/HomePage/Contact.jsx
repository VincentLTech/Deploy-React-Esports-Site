import React from 'react';
const profile1 = require('../../images/team-member-1.png');
const profile2 = require('../../images/team-member-2.png');
const profile4 = require('../../images/team-member-4.png');
const Contact = () => {
    return (
        <section class="team contact" id="contact">
          <div class="container">
            <h2 class="h2 section-title">Student E-Board Leaders</h2>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile1} alt="profile-img" class="team-crop"/>
                        <center>Soletia</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile2} alt="profile-img" class="team-crop"/>
                        <center>Sasha</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile4} alt="profile-img" class="team-crop"/>
                        <center>John</center>
                    </figure>
                </a>
              </li>
            </ul>
          </div>
        </section>
        
    );
}

export default Contact;    
        