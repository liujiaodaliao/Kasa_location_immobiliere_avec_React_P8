import React from 'react'
import { useState } from "react";
import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";
import "./Carrousel.css"

function Carrousel({ slides }) {
    //定义初始状态和页数
    const [current, setCurrent] = useState(0);
    const length = slides.length; //创建数据返回长度控制轮播图,也就是页数
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        // on repart au premier slide quand on arrive au dernier 下一页
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        // on repart au dernier slide quand on est au premier 上一页
    };

    return (
        <section id="carrousel-container">
            {length > 1 && (
                //Affichage des flèches
                <img
                 onClick={prevSlide} className="leftArrow" src={left} alt="left"
                />
            )}
            {length > 1 && (
                <img 
                    onClick={nextSlide} className="rightArrow" src={right} alt="right"
                />
            )}
            {slides.map((slide, index) => (
                <div
                    key={index} 
                    // mise en place du slider avec affichage conditionnel condition ternaire 当前索引等于当前遍历索引时才渲染，类名加active，渲染图片，页码
                    className={current === index ? "slider active-ani" : "slider"}
                >
                    {index === current && <img src={slide} alt="appart à louer" />}
                    {index === current && (
                        <span className="number">
                            {current + 1}/{length}
                        </span>
                        // 底部显示当前所在页数
                    )}
                </div>
            ))}
        </section>
    );
}

export default Carrousel;