import React from "react";
import "./AboutBanner.css";
import AboutBannerImage from "../../assets/AboutBanner.png";

function AboutBanner() {
    const bannerStyle = {
      backgroundImage: `url(${AboutBannerImage})`,
    };
  
    return <div className="AboutBannerContainer" style={bannerStyle}></div>;
  }

  export default AboutBanner;

