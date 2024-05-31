import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const Xander = require('../../images/Xander.png');
const Director = () => {
    return (
        <section class="team" id="team">
            <div class="container">
            <h2 class="h2 section-title">BCEG Staff</h2>
            <ul class="team-list">
            <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={Xander} alt="profile-img" class="team-crop"/>
                        <center>Alexander</center>
                    </figure>
                </a>
              </li>
              {/* <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile3} alt="profile-img" class="team-crop"/>
                      <center>Moustafa Salem</center>
                  </figure>
                </a>
              </li> */}
            </ul>
          </div>
          
        </section>
    );
}

export default Director;   
