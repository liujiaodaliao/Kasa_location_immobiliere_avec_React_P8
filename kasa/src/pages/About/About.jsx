import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import aboutCollapse from "../../assets/aboutCollapse.json";

const About = () =>  {
 
return (
  <>
    <AboutBanner backgroundImage="../../assets/banner_aprops.png" />
    {aboutCollapse.map((item, id) => (
      <Collapse
        key={id}
        aboutTitle={item.aboutTitle}
        aboutText={item.aboutText}   
      />
    ))}
  </>
);
}
export default About;