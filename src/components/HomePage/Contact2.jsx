import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const Vincent = require('../../images/Vincent.png');
const Juan = require('../../images/Juan.png');
const Sully = require('../../images/Sully.png');
const Cheng = require('../../images/Cheng.png');
const Raven = require('../../images/Raven.png');
const Lawrence = require('../../images/Lawrence.png');
const Albert = require('../../images/Albert.png');
const Contact2 = () => {
    return (
        <section class="team" id="team">
          <div class="container">
            <h2 class="h2 section-title">Student E-board Members</h2>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={Vincent} alt="profile-img" class="team-crop"/>
                        <center>Vincent</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={Raven} alt="profile-img" class="team-crop"/>
                    <center>Raven</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                        <img src={Cheng} alt="profile-img" class="team-crop"/>
                        <center>Cheng</center>
                    </figure>
                </a>
              </li>
              <li>
              </li>
            </ul>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={Sully} alt="profile-img" class="team-crop"/>
                      <center>Sully</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={Juan} alt="profile-img" class="team-crop"/>
                      <center>Juan</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={Lawrence} alt="profile-img" class="team-crop"/>
                      <center>Lawrence</center>
                  </figure>
                </a>
              </li>
              <li>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={Albert} alt="profile-img" class="team-crop"/>
                      <center>Albert</center>
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
