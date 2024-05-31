import React from 'react';
const Moustafa = require('../../images/Moustafa.png');
const Eli = require('../../images/Eli.png');
const notJohn = require('../../images/notJohn.png');
const Contact = () => {
    return (
        <section class="team contact" id="contact">
          <div class="container">
            <h2 class="h2 section-title">Student E-Board Leaders</h2>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={Eli} alt="profile-img" class="team-crop"/>
                        <center>Eli</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={Moustafa} alt="profile-img" class="team-crop"/>
                        <center>Moustafa</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={notJohn} alt="profile-img" class="team-crop"/>
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
        