import { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import hand_icon from "../../assets/hand_icon.png";
import "./Slider.scss";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(calculateCountdown()); // Calculate initial countdown

  const sliderImgs = [
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6349554/pexels-photo-6349554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
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
    <div className="slider">

      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        
        {/* Slider 1 */}          
          <div className="slide">
            <img src={sliderImgs[0]} alt="" />
            <div className="slide3">
              <p>SEASON SALE</p>
              <h2>Get 50% off</h2>
              <span>End In</span>
              <p className= "countdown">{formatCountdown(countdown)}</p>
            </div>
          </div>
        </div>

        {/* Slider 2 */}
        <div className="slide">
          <img src={sliderImgs[1]} alt="" />
          <div className="slide1">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="hand" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <button className="hero-latest-btn">
              <div>Shop now</div>
            </button>
          </div> 
        </div>       

        {/* Slider 3 */}       
          <div className="slide">
            <img src={sliderImgs[1]} alt="" />
            <div className="slide2">
              <h2>Even more than you expect</h2>
              <p>
                  Fashion, Beauty, Sportwear,
                  <br/> Accessories, and more ...
              </p>
            </div> 
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
