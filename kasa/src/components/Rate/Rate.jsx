import React from 'react';
import emptyStar from "../../assets/emptyStar.svg";
import fullStar from "../../assets/fullStar.svg";

function Rate({ score }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rate-comp">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src={fullStar}
                        alt="rating star"
                    />
                ) : ( 
                    //有条件地显示分数星星，满或空取决于道具中props传递的分数, 利用三元运算符condition ternaire
                    <img
                        key={level.toString()}
                        className="star"
                        src={emptyStar}
                        alt="rating star"
                    />
                )
            )}
        </div>

    );
}

export default Rate;