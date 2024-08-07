import WheelComponent from "./WheelComponent";

export default function App() {
  const segments = [
    "better luck next time",
    "Extra 10%",
    "Extra 15%",
    "better luck next time",
    "Extra 20%",
    "won uber pass"
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="flex-col items-center justify-center">
      <h1>Hello CodeSandbox</h1>
      <div >
        <WheelComponent className="items-center"
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
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
