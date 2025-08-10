import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='px-7 bg-gray-200'>
                <Navbar></Navbar>
            </div>
            <div className='max-w-full mx-auto pb-4 bg-gray-200'>
                <Outlet></Outlet>
            </div>
            
            <div className='px-7 pb-8 bg-gray-200'>
                <Footer></Footer>
            </div>
        </div>
      
    );
};

export default MainLayout;
