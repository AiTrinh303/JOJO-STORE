// SpinWheelButton.js

import { useNavigate } from 'react-router-dom';

const SpinWheelButton = () => {
    const navigate = useNavigate();
    const goToSpin = () => {
        navigate('/spinwheelgame');  
        };

  return (
    // 
    
        <img className= 'w-10' src="src/assets/roulette.png" alt="spin" />
    </div>
    
    );
};

export default SpinWheelButton;
