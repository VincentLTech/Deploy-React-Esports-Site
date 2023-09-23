import React from 'react';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')
const profile1 = require('../../images/team-member-13.png');
const profile2 = require('../../images/team-member-1.png');
const profile3 = require('../../images/team-member-14.png');
const profile4 = require('../../images/team-member-2.png');
const profile5 = require('../../images/team-member-6.png');
const Introduction = () => {
    return (
        <section class="team contact" id="contact">
        <div class="container">
          <h2 class="h2 section-title">Thank you</h2>
            <h4>To the first ever Eboard team, I appreciate your hard work completing 
              and organizing all of our most fruitful and lifechanging projects and 
              events. Before I came to the club, I was alone. I had no one to share 
              my hobbies or my goals with. But you guys accepted me and together we 
              built something that will be remembered in Brooklyn College forever 
              for generations to come.
              This club will have future successors and leaders to build this 
              community we made. But the memories of the original founders of 
              this club will always be remembered.</h4>
              <h4>I am forever thankful.</h4>
              <h4><i>-From, Vincent</i></h4>
          <h2 class="h2 section-title">Special Thanks</h2>
          <ul class="team-list">
            <li>
              <a href="#" class="team-member">
                  <figure>
                      <img src={profile1} alt="profile-img" class="team-crop"/>
                      <center><b>President:  Xander</b></center>
                  </figure>
              </a>
            </li>
            <br/>
            <li>
              <a href="#" class="team-member">
                  <figure>
                      <img src={profile2} alt="profile-img" class="team-crop"/>
                      <center><b>Vice President:  Vincent</b></center>
                  </figure>
              </a>
            </li>
            <br/>
            <li>
              <a href="#" class="team-member">
                  <figure>
                      <img src={profile3} alt="profile-img" class="team-crop"/>
                      <center><b>Treasurer:  John</b></center>
                  </figure>
              </a>
            </li>
            <br/>
            <li>
              <a href="#" class="team-member">
                  <figure>
                      <img src={profile4} alt="profile-img" class="team-crop"/>
                      <center><b>Event Coordinator:  Eli</b></center>
                  </figure>
              </a>
            </li>
            <br/>
            <li>
              <a href="#" class="team-member">
                  <figure>
                      <img src={profile5} alt="profile-img" class="team-crop"/>
                      <center><b>Esports Manager:  Eric</b></center>
                  </figure>
              </a>
            </li>
          </ul>
          <br/>
        </div>
      </section>
    );
}

export default Introduction;
