import React from "react";
import "./AboutBanner.css";


const AboutBanner = ({ backgroundImage }) => {
    const bannerStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  
    return <div className="aboutBackground wh-msk" style={bannerStyle}></div>;
  };
export default AboutBanner;