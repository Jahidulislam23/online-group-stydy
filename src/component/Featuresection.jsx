import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    
    <>
      <Swiper
        spaceBetween={30}
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
      
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/JwMD7vXj/istockphoto-1500285927-1024x1024.jpg" alt="" />
                <button className='btn btn-secondary'>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/gL5V4c9D/focused-students-using-tablet-discussing-information-1.jpg" alt="" />
            
            <button className='btn btn-secondary'>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/SXs51myj/Stressed-millennial-guy-studying-before-college-exams.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/4wvGKTBB/making-business-notes.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/wvY51m6/woman-desk-with-laptop-credit-card.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/PvCm05gq/colleagues-discussing-new-ideas-business-meeting.jpg" alt="" />
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/1GcfCfb1/people-correcting-charts.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
