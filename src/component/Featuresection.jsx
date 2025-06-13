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
            <img className='w-full h-96' src="https://i.ibb.co/NdNgPs4j/pexels-blaxtaressentials-12999087.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/p6GTmqCt/pexels-kelly-1179532-16563022.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/gbm7g0n1/pexels-errezuniga-5274763.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/7xh0vTYz/pexels-pedrofurtadoo-28903090.jpg" alt="" />
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-96' src="https://i.ibb.co/hJcZB7m8/pexels-rajesh-s-balouria-1289088-32134957.jpg" alt="" />
            
            <button className='btn btn-secondary '>Learn More</button>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
