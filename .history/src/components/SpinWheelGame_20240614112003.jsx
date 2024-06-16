import React, { useState } from 'react';
import WheelComponent from './WheelComponent';

export default function App() {
  const segments = [
    "Try again",
    "Extra 10%",
    "Extra 15%",
    "Try again",
    "Extra 20%",
  ];
  const segColors = ["#990000", "#ff6666", "#8000ff", "#0080ff", "#bfff00"];
  const [result, setResult] = useState(null);
  const

  const onFinished = (winner) => {
    console.log(winner);
    setResult(winner);
  };

  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mt-48">Spin the Wheel</h1>
      <div className="flex items-center justify-center mt-20 mb-20">
        <WheelComponent 
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#111"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      {result && (
        <div className="text-center mt-4 mb-56">
          <p className="text-xl font-bold">Result:</p>
          <p className="text-2xl">{result}</p>
        </div>
      )}
    </div>
  );
}