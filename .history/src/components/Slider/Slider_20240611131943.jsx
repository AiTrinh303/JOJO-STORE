import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [countdown, setCountdown] = useState(calculateCountdown());

  const sliderImgs = [
    "https://images.pexels.com/photos/6349554/pexels-photo-6349554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderImgs.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderImgs.length - 1 ? 0 : currentSlide + 1);
  };


  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <Slide1 image={sliderImgs[0]}/>
        <Slide2 image={sliderImgs[1]} />
        <Slide3 image={sliderImgs[2]} />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;



