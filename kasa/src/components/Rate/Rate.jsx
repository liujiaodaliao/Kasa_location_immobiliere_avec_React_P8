import React from 'react';
import emptyStar from "../../assets/emptyStar.svg";
import fullStar from "../../assets/fullStar.svg";
import "./Rate.css"

function Rate({ score }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rateContainer">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()} className="stars" src={fullStar} 
                        alt="rating stars"/>
                ) : (
                    //有条件地显示分数星星，满或空取决于道具中props传递的分数, 利用三元运算符condition ternaire
                    <img
                        key={level.toString()} className="stars" src={emptyStar}  
                        alt="rating stars"/>
                )
            )}
        </div>
    );
}

export default Rate;