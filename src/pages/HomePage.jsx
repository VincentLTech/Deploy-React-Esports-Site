import React from 'react';
import NavBar from '../components/shared/NavBar';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import About2 from '../components/HomePage/About2';
import About3 from '../components/HomePage/About3';
import About4 from '../components/HomePage/About4';
import Gallery from '../components/HomePage/Gallery';
import Contact from '../components/HomePage/Contact';
import Contact2 from '../components/HomePage/Contact2';
import Footer from '../components/shared/Footer';
import Mission from '../components/HomePage/Mission';
import Director from '../components/HomePage/Director';
import '../App.css';

const HomePage = () => {
    return (
        <>
            <div style={{backgroundColor:'black'}}>
                <NavBar/>
                <Hero/>
                <div id="about">
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                <Mission/>
                <div className='flex-fod'>
                        <About/>
                        <About2/>
                        <About3/>
                </div>
                <div className="centering">
                    <About4/>
                </div>
                <Gallery/>
                <div id="contact">
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                <Director/>
                <Contact/>
                <Contact2/>
                <Footer/>
            </div>
            {/* <Contact/>
            <Footer/> */}
        </>
    );
}

export default HomePage;