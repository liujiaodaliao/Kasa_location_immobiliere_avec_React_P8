import React from "react";
import "./AboutBanner.css";
import PropTypes from "prop-types";
import AboutBannerImage from "../../assets/AboutBanner.png";


function AboutBanner() {
    const bannerStyle = {
      backgroundImage: `url(${AboutBannerImage})`,
    };
  
    return <div className="AboutBannerContainer" style={bannerStyle}></div>;
  }
  
  AboutBanner.propTypes = {
    backgroundImage: PropTypes.string.isRequired, // 如果需要，可以添加这个属性
  };

  export default AboutBanner;

