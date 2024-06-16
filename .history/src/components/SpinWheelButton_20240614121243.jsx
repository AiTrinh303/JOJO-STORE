// SpinWheelButton.js

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

  const goToSpin = () => {
   navigate('/spinwheelgame');  
  };

  return (
    <div
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
        <img src="src/assets/roulette.png" alt="spin" />
    </div>
    
    );
};

export default SpinWheelButton;
