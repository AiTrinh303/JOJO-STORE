// SpinWheelButton.js

import { useNavigate } from 'react-router-dom';

const SpinWheelButton = () => {
    const navigate = useNavigate();
    const goToSpin = () => {
        navigate('/spinwheelgame');  
        };

  return (
    // <div
    //       onClick={goToSpin}
    //       style={{
    //         position: 'fixed',
    //         bottom: '50px',
    //         left: '50px',
    //         padding: '10px 10px',
    //         fontSize: '16px',
    //         backgroundColor: 'blue',
    //         color: '#fff',
    //         border: 'none',
    //         borderRadius: '50px',
    //         cursor: 'pointer',
    //         zIndex: 1000,
    //       }}
    //       className='transition-transform duration-300 hover:rotate-360'

    // >
    <div
            onClick={goToSpin}
            className="fixed bottom-12 left-12 p-4 bg-blue-500 text-white rounded-full cursor-pointer z-50 transition-transform duration-300 hover:rotate-360"
        >
        <img className= 'w-10' src="src/assets/roulette.png" alt="spin" />
    </div>
    
    );
};

export default SpinWheelButton;
