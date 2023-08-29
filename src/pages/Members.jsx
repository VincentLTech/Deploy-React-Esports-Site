import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import '../static/play.css';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')
const profile1 = require('../images/team-member-11.png');
const profile2 = require('../images/team-member-12.png');
const profile3 = require('../images/team-member-13.png');
const profile4 = require('../images/team-member-14.png');
const profile11 = require('../images/team-member-1.png');
const profile12 = require('../images/team-member-2.png');
const profile13 = require('../images/team-member-3.png');
const profile14 = require('../images/team-member-4.png');
const profile15 = require('../images/team-member-5.png');
const profile16 = require('../images/team-member-7.png');

const Xander = () => {
    return (
      <div style={{backgroundColor:'black'}}>
          <NavBar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 class="h2 section-title">Student E-Board Leaders</h2>
          <ul class="team-list">
            <div class="contact-card">
              <center><img src={profile4} alt="profile-img" class="team-crop"/></center>
              <h1>John</h1>
              <p>Role: Treasurer</p>
              <p>Email: johnfjp99@gmail.com</p>
              {/* <p>Phone: (123) 456-7890</p> */}
            </div>
            <div class="contact-card">
              <center><img src={profile3} alt="profile-img" class="team-crop"/></center>
              <h1>Alexander K. Raff</h1>
              <p>Role: Director</p>
              <p>Email: Orzaidus@gmail.com</p>
              <p>Phone: (917) 744-5995</p>
            </div>
            <div class="contact-card">
            <center><img src={profile2} alt="profile-img" class="team-crop"/></center>
              <h1>Sasha</h1>
              <p>Role: President</p>
              <p>Email: sasha.calderon91@bcmail.cuny.edu</p>
              <p>Phone: (845) 707-5782</p>
            </div>
            <div class="contact-card">
              <center><img src={profile1} alt="profile-img" class="team-crop"/></center>
              <h1>Soletia</h1>
              <p>Role: Vice President</p>
              <p>Email: Soletia00@gmail.com</p>
              <p>Phone: (347) 962-5443</p>
            </div>
           
            
          </ul>
          <h2 class="h2 section-title">Student E-board Members</h2>
            <ul class="team-list">
              
              <div class="contact-card">
                <center><img src={profile12} alt="profile-img" class="team-crop"/></center>
                <h1>Eli</h1>
                <p>Role: Event Coordinator</p>
                <p>Email: Ekutsenok3@gmail.com</p>
                <p>Phone: (347) 325-4934</p>
              </div>
              <div class="contact-card">
                <center><img src={profile15} alt="profile-img" class="team-crop"/></center>
                <h1>Juan</h1>
                <p>Role: Administrator</p>
                <p>Email: juan25.jt1@gmail.com</p>
                <p>Phone: (347) 303-0660</p>
              </div>
              <div class="contact-card">
                <center><img src={profile11} alt="profile-img" class="team-crop"/></center>
                <h1>Vincent Lau</h1>
                <p>Role: Alumni Advisor</p>
                <p>Email: electricplasma411@gmail.com</p>
                <p>Phone: (917) 370-6277</p>
                
              </div>
              <div class="contact-card">
                <center><img src={profile14} alt="profile-img" class="team-crop"/></center>
                <h1>Cheng</h1>
                <p>Role: Social Media Manager</p>
                <p>Email: Cheng.Chen14@bcmail.cuny.edu</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div class="contact-card">
                <center><img src={profile13} alt="profile-img" class="team-crop"/></center>
                <h1>Sully</h1>
                <p>Role: Event Coordinator</p>
                <p>Email: shlomo.orenstein13@gmail.com</p>
                <p>Phone: (917) 962-7741</p>    
              </div>
              <div class="contact-card">
                <center><img src={profile16} alt="profile-img" class="team-crop"/></center>
                <h1>Darby Tabuteau</h1>
                <p>Role: Esports Manager</p>
                <p>Email: darbyt43@gmail.com </p>
                <p>Phone: (917) 618-8725</p>    
              </div>
              {/* <div class="contact-card">
                <center><img src={profile13} alt="profile-img" class="team-crop"/></center>
                <h1>Moustafa Salem</h1>
                <p>Role: Esports Manager</p>
                <p>Email: salemmmoustafa@gmail.com</p>
                <p>Phone: (347) 662-5350</p>    
              </div> */}

            </ul>
            <div class="container">
              <Link smooth to='/#contact'><button class="btn btn-primary">Return</button></Link>
            </div>
        <Footer/>
      </div>
    );
}

export default Xander;