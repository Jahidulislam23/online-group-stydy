// import React, { } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
    
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
      
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/JwMD7vXj/istockphoto-1500285927-1024x1024.jpg" alt="" />
                
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/gL5V4c9D/focused-students-using-tablet-discussing-information-1.jpg" alt="" />
            
            
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/SXs51myj/Stressed-millennial-guy-studying-before-college-exams.jpg" alt="" />
            
            
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/4wvGKTBB/making-business-notes.jpg" alt="" />
            
            
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/wvY51m6/woman-desk-with-laptop-credit-card.jpg" alt="" />
            
            
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/PvCm05gq/colleagues-discussing-new-ideas-business-meeting.jpg" alt="" />
            
//         </SwiperSlide>
//         <SwiperSlide>
//             <img className='w-full h-96' src="https://i.ibb.co/1GcfCfb1/people-correcting-charts.jpg" alt="" />
            
            
//         </SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// }
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const slides = [
    {
      img: "https://i.ibb.co/JwMD7vXj/istockphoto-1500285927-1024x1024.jpg",
      text: "Learn Smarter, Not Harder",
    },
    {
      img: "https://i.ibb.co/gL5V4c9D/focused-students-using-tablet-discussing-information-1.jpg",
      text: "Collaborate and Grow",
    },
    {
      img: "https://i.ibb.co/SXs51myj/Stressed-millennial-guy-studying-before-college-exams.jpg",
      text: "Stay Focused, Stay Ahead",
    },
    {
      img: "https://i.ibb.co/4wvGKTBB/making-business-notes.jpg",
      text: "Plan Your Success",
    },
    {
      img: "https://i.ibb.co/wvY51m6/woman-desk-with-laptop-credit-card.jpg",
      text: "Work from Anywhere",
    },
    {
      img: "https://i.ibb.co/PvCm05gq/colleagues-discussing-new-ideas-business-meeting.jpg",
      text: "Innovate Together",
    },
    {
      img: "https://i.ibb.co/1GcfCfb1/people-correcting-charts.jpg",
      text: "Data-Driven Decisions",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative bg-black">
          <img
            className="w-full h-auto object-contain select-none"
            src={slide.img}
            alt={slide.text}
            draggable="false"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4 drop-shadow-lg">
              {slide.text}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



