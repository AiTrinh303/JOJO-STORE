// SpinWheelButton.js

import { useNavigate } from 'react-router-dom';

const SpinWheelButton = () => {
    const navigate = useNavigate();
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
          className='ransition-transform duration-300 hover:rotate-360'

    >
        <img className= 'w-10' src="src/assets/roulette.png" alt="spin" />
    </div>
    
    );
};

export default SpinWheelButton;