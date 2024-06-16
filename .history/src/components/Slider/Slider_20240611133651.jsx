import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="relative overflow-hidden w-full h-60vh">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <Slide1 image={sliderImgs[0]} />
        <Slide2 image={sliderImgs[1]} />
        <Slide3 image={sliderImgs[2]} />
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10" onClick={prevSlide}>
        <WestOutlinedIcon fontSize="large" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10" onClick={nextSlide}>
        <EastOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Slider;



