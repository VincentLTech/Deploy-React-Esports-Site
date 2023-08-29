import React from 'react';
const profile1 = require('../../images/team-member-11.png');
const profile2 = require('../../images/team-member-12.png');
const profile3 = require('../../images/team-member-13.png');
const profile4 = require('../../images/team-member-14.png');
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
                        <img src={profile3} alt="profile-img" class="team-crop"/>
                        <center>Alexander</center>
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
        