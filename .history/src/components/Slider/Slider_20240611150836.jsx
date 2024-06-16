// import { useState } from "react";
// import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
// import Slide1 from './Slide1';
// import Slide2 from './Slide2';
// import Slide3 from './Slide3';
// import "./Slider.scss";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const sliderImgs = [
//     "https://images.pexels.com/photos/6349554/pexels-photo-6349554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   ];

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? sliderImgs.length - 1 : currentSlide - 1);
//   };

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === sliderImgs.length - 1 ? 0 : currentSlide + 1);
//   };

//   return (
//     <div className="slider relative overflow-hidden w-full h-80vh">
//       <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         <Slide1 image={sliderImgs[0]} />
//         <Slide2 image={sliderImgs[1]} />
//         <Slide3 image={sliderImgs[2]} />
//       </div>

//       <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10" onClick={prevSlide}>
//         <WestOutlinedIcon fontSize="large" />
//       </div>
//       <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10" onClick={nextSlide}>
//         <EastOutlinedIcon fontSize="large" />
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import "./Slider.scss";

const Slider = () => {
  const sliderRef = useRef(null);

  const sliderImgs = [
    "https://images.pexels.com/photos/6349554/pexels-photo-6349554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider relative overflow-hidden w-full h-80vh">
      <Slider ref={sliderRef} {...settings}>
        {sliderImgs.map((image, index) => (
          <div key={index}>
            {index === 0 && <Slide1 image={image} />}
            {index === 1 && <Slide2 image={image} />}
            {index === 2 && <Slide3 image={image} />}
          </div>
        ))}
      </Slider>
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




