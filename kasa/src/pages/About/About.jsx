import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import aboutCollapse from "../../assets/aboutCollapse.json";

const About = () =>  {
  // const defaultBackgroundImage = "../../assets/banner_aprops.png"
 
return (
  <>
    <AboutBanner backgroundImage="../../assets/banner_aprops.png" />
    {aboutCollapse.map((rule, id) => (
      <Collapse
        key={id}
        aboutTitle={rule.aboutTitle}
        aboutText={rule.aboutText}      
      />
    ))}
  </>
);
}
export default About;