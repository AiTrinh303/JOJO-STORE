import { useState, useEffect } from "react";
import { EastOutlined as EastOutlinedIcon, WestOutlined as WestOutlinedIcon } from "@mui/icons-material";
import hand_icon from "../../assets/hand_icon.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(calculateCountdown()); // Calculate initial countdown

  const sliderImgs = [
    "https://images.pexels.com/photos/6349554/pexels-photo-6349554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval); // Stop interval when countdown reaches zero
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateCountdown() {
    const targetDate = new Date(); // Current date and time
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now *************
    const difference = targetDate.getTime() - new Date().getTime(); // Difference in milliseconds
    return Math.max(0, Math.floor(difference / 1000)); // Convert to seconds and ensure non-negative
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderImgs.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderImgs.length - 1 ? 0 : currentSlide + 1);
  };

  const formatCountdown = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return `${days}D ${hours}H : ${minutes}M: ${seconds}s`;
  };

  return (
    <div className="slider flex justify-center items-center relative overflow-hidden">
      <div className="container flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {sliderImgs.map((img, index) => (
          <div key={index} className="slide w-full flex-shrink-0">
            <img src={img} alt="" className="w-full" />
            {index === 0 && (
              <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-white text-2xl font-bold mb-2">SEASON SALE</p>
                <h2 className="text-white text-4xl font-bold mb-4">Get 50% off</h2>
                <span className="text-white">End In</span>
                <p className="text-white countdown">{formatCountdown(countdown)}</p>
              </div>
            )}
            {index === 1 && (
              <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-white text-4xl font-bold mb-4">NEW ARRIVALS ONLY</h2>
                <div className="flex items-center mb-4">
                  <div className="hero-hand-icon mr-2">
                    <p className="text-white">New</p>
                    <img src={hand_icon} alt="hand" />
                  </div>
                  <div>
                    <p className="text-white">collections</p>
                    <p className="text-white">for everyone</p>
                  </div>
                </div>
                <button className="hero-latest-btn bg-white text-black px-4 py-2 rounded-full font-bold">Shop now</button>
              </div>
            )}
            {index === 2 && (
              <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-white text-4xl font-bold mb-4">Even more than you expect</h2>
                <p className="text-white">
                  Fashion, Beauty, Sportwear,
                  <br /> Accessories, and more ...
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="icons absolute top-1/2 -translate-y-1/2 flex">
        <div className="icon mr-4 cursor-pointer" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon cursor-pointer" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
