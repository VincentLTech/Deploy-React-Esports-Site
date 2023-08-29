import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const profile1 = require('../../images/team-member-1.png');
const profile2 = require('../../images/team-member-2.png');
const profile3 = require('../../images/team-member-3.png');
const profile4 = require('../../images/team-member-4.png');
const profile5 = require('../../images/team-member-5.png');
const profile6 = require('../../images/team-member-7.png');
const Contact2 = () => {
    return (
        <section class="team" id="team">
          <div class="container">
            <h2 class="h2 section-title">Student E-board Members</h2>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile1} alt="profile-img" class="team-crop"/>
                        <center>Vincent</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile2} alt="profile-img" class="team-crop"/>
                        <center>Eli</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile5} alt="profile-img" class="team-crop"/>
                    <center>Jaun</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                        <img src={profile4} alt="profile-img" class="team-crop"/>
                        <center>Cheng</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile6} alt="profile-img" class="team-crop"/>
                      <center>Darby Tabuteau</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile3} alt="profile-img" class="team-crop"/>
                      <center>Sully</center>
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
            <Link to='/member'><button class="btn btn-primary">View All Members</button></Link>
          </div>
          
        </section>
    );
}

export default Contact2;   
