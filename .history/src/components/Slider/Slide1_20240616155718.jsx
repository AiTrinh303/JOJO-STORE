// import { useState, useEffect } from 'react';

// const Slide1 = ({ image }) => {
//   const [countdown, setCountdown] = useState(calculateCountdown());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountdown(prevCountdown => {
//         if (prevCountdown > 0) {
//           return prevCountdown - 1;
//         } else {
//           clearInterval(interval);
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   function calculateCountdown() {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 1); // set 1 days from now
//     const difference = targetDate.getTime() - new Date().getTime();
//     return Math.max(0, Math.floor(difference / 1000));
//   }

//   const formatCountdown = (totalSeconds) => {
//     const days = Math.floor(totalSeconds / (24 * 60 * 60));
//     const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
//     const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
//     const seconds = totalSeconds % 60;
//     return `${days}D ${hours}H : ${minutes}M : ${seconds}s`;
//   };

//   return (
//     <div className="w-full flex-shrink-0 relative">
//       <img src={image} alt="" className="object-cover w-screen h-auto max-h-full overflow-hidden" />
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-5">
//         <div className="absolute top-24 text-start bg-transparent p-2.5">
//           <p className="mt-12 text-gray-900 text-3xl font-medium">SEASON SALE</p>
//           <h2 className="mt-24 text-gray-800 text-7xl font-semibold">Get 50% off</h2>
//           <p className="mt-12 text-gray-700 text-2xl">End In ...</p>
//           <p className="mt-32 text-red-800 text-5xl font-semibold ">{formatCountdown(countdown)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slide1;

