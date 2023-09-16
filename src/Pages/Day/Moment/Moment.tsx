import React, { useEffect, useRef, useMemo } from 'react';
import './Moment.scss';
import { Moment as MomentType } from '../types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Moment = (props: MomentType) => {
    const { imgs, time, description, location } = props;

    const sliderSettings = useMemo(() => {
        return {
            className: "carousel",
            dots: false,
            infinite: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: imgs?.length > 1,
            swipe: true,
            touchMove: true,  
            prevArrow: <></>,
            nextArrow: <></>,
        }
    }, [imgs]);

    return <div className="Moment">
        <Slider {...sliderSettings}>
            {(imgs ?? [1]).map((img,i) => 
                <div key={`slick-${i}`} className="img" style={{width: 230}}>
                    <div className="img-container" style={{width: 200, height: 264}}>
                        <img src={img} />
                    </div>
                </div>
            )}
        </Slider>
        <div className="time">
            <div className="date">{time.date}</div>
            <div className="minute">{time.minute}</div>
        </div>
        <div className="description">{description}</div>
        <div className="location typo-secondary">{location}</div>
    </div>
}

export default Moment;