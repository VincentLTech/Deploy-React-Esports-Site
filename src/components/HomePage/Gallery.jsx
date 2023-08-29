import React from 'react';
const image1 = require('../../images/gallery-img-1.jpg');
const image2 = require('../../images/gallery-img-2.jpg');
const image3 = require('../../images/gallery-img-3.jpg');
const image4 = require('../../images/gallery-img-4.jpg');
const image5 = require('../../images/gallery-img-5.jpg');
const Gallery = () => {
    return (
        <section class="gallery">
          <div class="container">
            <ul class="gallery-list has-scrollbar">
              <li>
                <figure class="gallery-item">
                    <img src={image1} alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure class="gallery-item">
                    <img src={image2} alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure class="gallery-item">
                    <img src={image3} alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure class="gallery-item">
                    <img src={image4} alt="profile-img" />
                </figure>
              </li>
              <li>
                <figure class="gallery-item">
                    <img src={image5} alt="profile-img" />
                </figure>
              </li>
            </ul>
          </div>
        </section>
    );
}

export default Gallery;
  
        
        
        