import { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import hand_icon from "../assets/hand_icon.png";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState(calculateCountdown());

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    const difference = targetDate.getTime() - new Date().getTime();
    return Math.max(0, Math.floor(difference / 1000));
  }

  

  const formatCountdown = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return `${days}D ${hours}H : ${minutes}M : ${seconds}s`;
  };

  return (
    <div className="relative w-screen h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >


        {/* Slider 1 */}
        <div className="relative flex flex-col items-center justify-center w-screen h-full">
          <img
            src={sliderImgs[0]}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[100px] text-lg font-bold bg-transparent p-4 rounded-md">
            <p className="text-black text-2xl font-medium">SEASON SALE</p>
            <h2 className="mt-6 text-black text-5xl font-semibold">Get 50% off</h2>
            <span className="mt-12 text-gray-500 text-xl">End In</span>
            <p className="countdown mt-12 text-red-600 text-2xl font-bold">{formatCountdown(countdown)}</p>
          </div>
        </div>        
      </div>

        {/* Slider 2 */}
        <div className="relative flex flex-col items-center justify-center w-screen h-full">
          <img
            src={sliderImgs[1]}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[180px] left-5 text-gray-700 text-lg font-bold bg-transparent p-4 rounded-md">
            <h2 className="text-black text-xl font-semibold">NEW ARRIVALS ONLY</h2>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-black text-5xl font-bold">New</p>
              <img src={hand_icon} alt="hand" className="w-[105px]" />
            </div>
            <p className="text-black text-5xl font-bold">collections</p>
            <p className="text-black text-5xl font-bold">for everyone</p>
            <button className="flex justify-center items-center gap-2 w-[180px] h-[50px] rounded-full mt-6 bg-blue-600 text-white text-xl font-medium">
              Shop now
            </button>
          </div>
        </div>

        {/* Slider 3 */}
        <div className="relative flex flex-col items-center justify-center w-screen h-full">
          <img
            src={sliderImgs[2]}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[180px] right-8 text-lg font-bold bg-transparent p-4 rounded-md">
            <h2 className="text-4xl font-bold">Even more than you expect</h2>
            <p className="mt-12 text-black text-2xl font-medium">
              Fashion, Beauty, Sportwear,<br />
              Accessories, and more ...
            </p>
          </div>
        </div>


        {/* Slider Navigation */}
      <div className="absolute flex right-10 bottom-10 gap-2">
        <div
          className="w-12 h-10 border border-blue-600 flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <WestOutlinedIcon />
        </div>
        <div
          className="w-12 h-10 border border-blue-600 flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <EastOutlinedIcon />
        </div>
      </div>

    </div>
  );
};

export default Slider;
