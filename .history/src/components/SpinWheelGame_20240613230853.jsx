import WheelComponent from "./WheelComponent";

export default function App() {
  const segments = [
    "better luck next time",
    "Extra 10%",
    "Extra 15%",
    "better luck next time",
    "Extra 20%",
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
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
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
