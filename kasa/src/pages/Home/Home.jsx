import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner" 
import "./Home.css"
// import Banner 
//import Cards


function Home() {
  return (
  <section className="homecontainer">
    <Banner />
  </section>
  );
}

export default Home;