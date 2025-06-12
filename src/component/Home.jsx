import React from 'react';
import HomeSlider from './HomeSlider';
import Banner from './Banner';
import FaqSection from './FaqSection';
import {motion} from 'motion/react'

const Home = () => {
    return (
        <div>
            <div className='py-10'>
                <HomeSlider></HomeSlider>
            </div>
            <div className='py-10'>
                <h1 className='text-center text-6xl py-3'>Educoda <span className='text-blue-500'>Core</span> Features</h1>
                <Banner></Banner>
            </div>
            <div className='py-8'>
                <motion.h1 className='text-center text-6xl py-3'><span className='text-red-500'>F</span> <span className='text-blue-500'>A</span> <span className='text-green-500'>Q</span> <motion.span
                animate={{
                color:['#ff5733','#33ff33','#Ba33ff'],
                transition:{duration:4,repeat:Infinity}

                }}
                >section</motion.span></motion.h1>
                <FaqSection></FaqSection>
            </div>
        </div>
    );
};

export default Home;