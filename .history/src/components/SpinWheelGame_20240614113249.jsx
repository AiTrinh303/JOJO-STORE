import { useState } from 'react';
import WheelComponent from './WheelComponent';

export default function SpinWheelGame() {
  const segments = [
    "Try again",
    "Extra 10%",
    "Extra 15%",
    "Extra 25%",
    "Extra 20%",
  ];
  const segColors = ["#990000", "#ff6666", "#8000ff", "#0080ff", "#bfff00"];
  const saleCodes = [
    { sale: 'JOJO10', discount: 0.1 },
    { sale: 'JOJO15', discount: 0.15 },
    { sale: 'JOJO20', discount: 0.2 },
    { sale: 'JOJO25', discount: 0.25 },
  ];

  const [result, setResult] = useState(null);
  
  const onFinished = (winner) => {
    console.log(winner);
    setResult(winner);
  };

  const showCode = (result) => {
    switch (result) {
      case "Extra 10%":
        return saleCodes[0].sale;
      case "Extra 15%":
        return saleCodes[1].sale;
      case "Extra 20%":
        return saleCodes[2].sale;
      case "Extra 25%":
        return saleCodes[3].sale;
      default:
        return "No code";
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mt-12">Spin the Wheel</h1>
      <div className="flex items-center justify-center mt-8 mb-8">
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
        <div className="text-center mt-4 mb-12">
          <p className="text-xl font-bold">Result:</p>
          <p className="text-2xl text--600 font-bold">{result}</p>
          <p className="text-xl font-bold mt-4">Your code:</p>
          <p className="text-2xl text-red-600 font-bold">{showCode(result)}</p>
        </div>
      )}
    </div>
  );
}
