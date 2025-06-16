import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='px-5'>
                <Navbar></Navbar>
            </div>
            <div className='max-w-7xl mx-auto pb-4'>
                <Outlet></Outlet>
            </div>
            
            <div className='px-10 py-12'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;