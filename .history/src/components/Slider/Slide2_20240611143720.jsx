import hand_icon from '../../assets/hand_icon.png';

const Slide2 = ({ image }) => {
  return (
<div className="w-full flex-shrink-0 relative">
  <img src={image} alt="" className="object-cover w-full h-auto max-h-full" />
  <div className="slide2 absolute top-48 left-10 text-gray-700 font-bold bg-transparent py-5 px-10 rounded-2xl">
    <h2 className="text-black text-2xl font-semibold">NEW ARRIVALS ONLY</h2>
    <div className="flex flex-col items-center gap-5 ">
      <div className="flex items-center gap-3">
        <p className="text-5xl font-bold text-black">New</p>
        <img src={hand_icon} alt="hand" className="w-24" />
      </div>
      
      <p className="text-5xl font-bold text-black">collections</p>
      <p className="text-5xl font-bold text-black">for everyone</p>
    </div>
    <button className="hero-latest-btn flex justify-center items-center gap-3 w-48 h-12 rounded-full mt-8 bg-blue-500 text-white text-lg font-semibold">
      <div>Shop now</div>
    </button>
  </div>
</div>
  );
};

export default Slide2;



