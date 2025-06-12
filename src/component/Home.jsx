import React from 'react';
import HomeSlider from './HomeSlider';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div className='py-10'>
                <HomeSlider></HomeSlider>
            </div>
            <div className='py-10'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;