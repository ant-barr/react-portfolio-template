import React from "react";
import IMG_9352 from '../assets/images/IMG_9352.jpg'

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={IMG_9352} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
        
          </div>
          <h1>Johnny Baker</h1>
          <p>Tattoo Artist</p>

          <div className="mobile_social_icons">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;