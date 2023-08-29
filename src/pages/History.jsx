import React from 'react';
import NavBar from '../components/shared/NavBar';
import Introduction from '../components/History/Introduction';
import Footer from '../components/shared/Footer';
import '../App.css';

const History = () => {
    return (
        <>
            <div style={{backgroundColor:'black'}}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <NavBar/>
                <Introduction/>
                <Footer/>
            </div>
            {/* <Contact/>
            <Footer/> */}
        </>
    );
}

export default History;