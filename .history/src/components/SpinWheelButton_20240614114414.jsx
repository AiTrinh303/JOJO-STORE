// SpinWheelButton.js

import WheelComponent from './WheelComponent';

const SpinWheelButton = ({ onFinished }) => {
  const segments = [
    "Try again",
    "Extra 10%",
    "Extra 15%",
    "Extra 25%",
    "Extra 20%",
  ];

  const segColors = ["#990000", "#ff6666", "#8000ff", "#0f8017", "#0e727d"];

  return (
    <div className="spin-wheel-button">
      <WheelComponent 
        segments={segments}
        segColors={segColors}
        onFinished={onFinished}
        primaryColor="#111"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={50} // Adjust size as needed
        upDuration={500}
        downDuration={600}
        fontFamily="Arial"
      />
    </div>
  );
};

export default SpinWheelButton;
