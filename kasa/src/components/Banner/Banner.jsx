import React from "react";
import BannerImage from "../../assets/Banner.png";
import "./Banner.css"

function Banner() {
    return (
    <section className="BannerContainer">
        <div className="BannerImage" style={{ backgroundImage: `url(${BannerImage})` }}></div>
        <p className="Bannertext">Chez vous, partout et ailleurs</p>
    </section>
);
}
export default Banner;  