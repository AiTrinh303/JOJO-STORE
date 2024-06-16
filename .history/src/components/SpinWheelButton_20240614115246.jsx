// SpinWheelButton.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WheelComponent from './WheelComponent';

const SpinWheelButton = () => {
    const navigate = useNavigate();
  const segments = [
    "Try again",
    "Extra 10%",
    "Extra 15%",
    "Extra 25%",
    "Extra 20%",
  ];

  const segColors = ["#990000", "#ff6666", "#8000ff", "#0f8017", "#0e727d"];

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToSpin = () => {
   navigate('/spinwheelgame');  
  };

  return (
    showButton && (
        <button
          onClick={goToSpin}
          style={{
            position: 'fixed',
            bottom: '50px',
            left: '50px',
            padding: '10px 10px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
      <WheelComponent 
        segments={segments}
        segColors={segColors}
        primaryColor="#111"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={50} // Adjust size as needed
        upDuration={500}
        downDuration={600}
        fontFamily="Arial"
      />
    </button>
    )
    );
};

export default SpinWheelButton;
