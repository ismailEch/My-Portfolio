import React, { useRef } from "react";
import './WorkEx.css'
import ExCard from "./ExCard/ExCard";
import {WORK_EX} from "../utils/data"
import Slider from "react-slick";

function WorkEx (){
    const slideRef = useRef(); 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:false,
        responsive : [
            {
                breakpoint : 769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll :1
                },
            }
        ]
    }
    return (
        <section className="ex-container">
            <h5>Work Experience</h5>
            <div className="ex-content"> 
            <Slider ref={slideRef} {...settings} >
                {WORK_EX.map((item) =>(
                    <ExCard key={item.title} details={item} />
                ))}
            </Slider>
                
            </div>
        </section>
    );
}

export default WorkEx;
