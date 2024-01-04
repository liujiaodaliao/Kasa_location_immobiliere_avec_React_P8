import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import aboutCollapse from "../../assets/aboutcollapse.json";

function About() {
 
return (
  <>
    <AboutBanner />
    {aboutCollapse.map((rule, id) => (
      <Collapse
        key={id}
        aboutTitle={rule.aboutTitle}
        aboutText={rule.aboutText}
        aboutStyle="about-style"       //？？
      />
    ))}
  </>
);
}
export default About;