// import React, { useState } from "react";
// import { SlideImage, StyledSlider } from "./SlideImage";



// import "./styles.css";
// import Slider from "./components/Slider.js";

// const ImageData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
//   },
// ];

// export default function App() {
//   return <Slider slides={ImageData} />;
// }





// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// const Slider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   return (
//     <StyledSlider>
//       <FaChevronLeft className="left-arrow" onClick={prevSlide} />
//       <FaChevronRight className="right-arrow" onClick={nextSlide} />
//       {slides.map((slide, index) => {
//         return (
//           <div key={index}>
//             {index === current && <SlideImage src={slide.image} alt="" />}
//           </div>
//         );
//       })}
//     </StyledSlider>
//   );
// };

// export default Slider;
