import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import '../static/play.css';

// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')
const Xander = require('../images/Xander.png');
const Sasha = require('../images/Sasha.png');
const Soletia = require('../images/Soletia.png');
const notJohn = require('../images/notJohn.png');
const Vincent = require('../images/Vincent.png');
const Eli = require('../images/Eli.png');
const Juan = require('../images/Juan.png');
const Cheng = require('../images/Cheng.png');
const Sully = require('../images/Sully.png');
const Raven = require('../images/Raven.png');
const Lawrence = require('../images/Lawrence.png');
const Moustafa = require('../images/Moustafa.png');
const Albert = require('../images/Albert.png');

const Members = () => {
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
          <h2 class="h2 section-title">Contacts</h2>
          <ul class="team-list">
            <div class="box">
              <center>
                <img src={Xander} alt="profile-img" class="team-crop"/>
                <h1>Alexander</h1>
                <p>Role: Director</p>
                <p>Orzaidus@gmail.com</p>
                <p>(917) 744-5995</p>
              </center>
            </div>
            <div class="box">
              <center>
                <img src={Sasha} alt="profile-img" class="team-crop"/>
                <h1>Sasha</h1>
                <p>Role: President</p>
                <p>sasha.calderon91@bcmail.cuny.edu</p>
                <p>(845) 707-5782</p>
              </center>
            </div>
            <div class="box">
              <center><img src={Soletia} alt="profile-img" class="team-crop"/></center>
              <h1>Soletia</h1>
              <p>Role: Vice President</p>
              <p>Email: Soletia00@gmail.com</p>
              <p>Phone: (347) 962-5443</p>
            </div>
          </ul>
          <ul class="team-list">
            <div class="box">
              <center><img src={notJohn} alt="profile-img" class="team-crop"/></center>
              <h1>John</h1>
              <p>Role: Treasurer</p>
              <p>johnfjp99@gmail.com</p>
              <br/>
              {/* <p>Phone: (123) 456-7890</p> */}
            </div>
            <div class="box">
                <center><img src={Vincent} alt="profile-img" class="team-crop"/></center>
                <h1>Vincent</h1>
                <p>Role: Alumni Advisor</p>
                <p>electricplasma411@gmail.com</p>
                <p>(917) 370-6277</p>
              </div>
              <div class="box">
                <center><img src={Eli} alt="profile-img" class="team-crop"/></center>
                <h1>Eli</h1>
                <p>Role: Event Coordinator</p>
                <p>Ekutsenok3@gmail.com</p>
                <p>(347) 325-4934</p>
              </div>
            
          </ul>
          {/* <h2 class="h2 section-title">Student E-board Members</h2> */}
            <ul class="team-list">
              <div class="box">
                <center><img src={Juan} alt="profile-img" class="team-crop"/></center>
                <h1>Juan</h1>
                <p>Role: Secretary</p>
                <p>juan25.jt1@gmail.com</p>
                <p>(347) 303-0660</p>
              </div>
              <div class="box">
                <center><img src={Cheng} alt="profile-img" class="team-crop"/></center>
                <h1>Cheng</h1>
                <p>Role: Social Media Manager</p>
                <p>Cheng.Chen14@bcmail.cuny.edu</p>
                <p>(123) 456-7890</p>
              </div>
              <div class="box">
                <center><img src={Sully} alt="profile-img" class="team-crop"/></center>
                <h1>Sully</h1>
                <p>Role: Event Coordinator</p>
                <p>shlomo.orenstein13@gmail.com</p>
                <p>(917) 962-7741</p>    
              </div>
              
              
            </ul>
            <ul class="team-list">
            <div class="box">
                <center><img src={Raven} alt="profile-img" class="team-crop"/></center>
                <h1>Raven</h1>
                <p>Role: Esports Manager</p>
                <p>ravenpacheco2004@gmail.com </p>
                <p>(347) 780-5995</p>    
              </div>
              <div class="box">
                <center><img src={Lawrence} alt="profile-img" class="team-crop"/></center>
                <h1>Lawrence</h1>
                <p>Role: Event Coordinator</p>
                <p>lawrencetsivinsky@gmail.com</p>
                <p>(347) 981-3356</p>    
              </div>
              <div class="box">
                <center><img src={Moustafa} alt="profile-img" class="team-crop"/></center>
                <h1>Moustafa</h1>
                <p>Role: Esports Manager</p>
                <p>salemmmoustafa@gmail.com</p>
                <p>(347) 662-5350</p>    
              </div>
              </ul>
            <div class="container">
              <Link smooth to='/#contact'><button class="btn btn-primary">Return</button></Link>
            </div>
        <Footer/>
      </div>
    );
}

export default Members;