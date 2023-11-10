import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const profile11 = require('../../images/team-member-11.png');
const profile12 = require('../../images/team-member-12.png');
const profile13 = require('../../images/team-member-13.png');
const profile14 = require('../../images/team-member-14.png');
const profile15 = require('../../images/team-member-15.png');
const profile16 = require('../../images/team-member-16.png');
const profile17 = require('../../images/team-member-17.png');
const profile18 = require('../../images/team-member-18.png');
const profile19 = require('../../images/team-member-19.png');
const profile20 = require('../../images/team-member-20.png');
const Contact2 = () => {
    return (
        <section class="team" id="team">
          <div class="container">
            <h2 class="h2 section-title">Student E-board Members</h2>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile11} alt="profile-img" class="team-crop"/>
                        <center>Vincent</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile12} alt="profile-img" class="team-crop"/>
                        <center>Eli</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile15} alt="profile-img" class="team-crop"/>
                    <center>Raven</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                        <img src={profile14} alt="profile-img" class="team-crop"/>
                        <center>Cheng</center>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile17} alt="profile-img" class="team-crop"/>
                      <center>Darby</center>
                  </figure>
                </a>
              </li>
            </ul>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile13} alt="profile-img" class="team-crop"/>
                      <center>Sully</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile18} alt="profile-img" class="team-crop"/>
                      <center>Juan</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile19} alt="profile-img" class="team-crop"/>
                      <center>Lawrence</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile16} alt="profile-img" class="team-crop"/>
                      <center>Moustafa</center>
                  </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                  <figure>
                    <img src={profile20} alt="profile-img" class="team-crop"/>
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
