import WheelComponent from "./WheelComponent";

export default function App() {
  const segments = [
    "Try again",
    "Extra 10%",
    "Extra 15%",
    "Try again",
    "Extra 20%",
  ];
  const segColors = ["red", "yellow", "pink", "#B3E5FC", "#C8E6C9"];
  const onFinished = (winner) => {
    console.log(winner);

  };
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold">Spin the Wheel</h1>
      <div className="flex items-center justify-center">
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

    </div>
  );
}
