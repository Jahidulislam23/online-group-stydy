import React from 'react';
import HomeSlider from './HomeSlider';
import Banner from './Banner';
import FaqSection from './FaqSection';
import FeaturesSection from './Featuresection'
import {motion} from 'motion/react'
import { useLoaderData } from 'react-router';
import BannerSection from './BannerSection';
import LoadingCard from './LoadingCard';
import OnlineGroupStudy from './OnlineGroupStudy';
// import LoadingCard from './LoadingCard';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <div className='py-5 px-7'>
                <HomeSlider></HomeSlider>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 px-7 gap-6'>
                {
                    data.map(card=> <BannerSection key={card._id} card={card}></BannerSection>)
                }
                
            </div>
            <div className='py-5 px-7'>
                <motion.h1 className='text-center text-6xl py-3'><span className='text-red-500'>F</span> <span className='text-blue-500'>A</span> <span className='text-green-500'>Q</span> <motion.span
                animate={{
                color:['#ff5733','#33ff33','#Ba33ff'],
                transition:{duration:4,repeat:Infinity}

                }}
                >section</motion.span></motion.h1>
                <FaqSection></FaqSection>
            </div>
            <div className='lg:py-5 lg:px-7 md:py-7 sm:py-5'>
                <h1 className='text-center text-6xl py-3'>Educoda <span className='text-blue-500'>Core</span> Features</h1>
                <Banner></Banner>
            </div>
            <div className='py-5 px-5'>
                <LoadingCard></LoadingCard>
            </div>
            <div className='py-5 px-7'>
                <OnlineGroupStudy></OnlineGroupStudy>
            </div>
            <div className='px-7 py-5  sm:pr-3 lg:mx-auto lg:items-center md:mx-auto md:items-center sm:mx-auto sm:items-center'>
                <FeaturesSection></FeaturesSection>
            </div>
           
        </div>
    );
};

export default Home;
