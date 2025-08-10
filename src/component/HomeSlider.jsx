import React from 'react';
import pik1 from '../assets/pik/pik1.jpg'
import pik2 from '../assets/pik/pik2.jpg'
import {motion} from 'motion/react'

const HomeSlider = () => {
    return (
        <div>
            <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto items-center sm:mx-auto sm:items-center">
          <div className="flex-1 mx-auto items-center sm:mx-auto sm:items-center">
            <motion.img
            src={pik1}
            animate={{y:[100,150,100]}}
            transition={{duration:10, delay:5 ,repeat:Infinity}}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[30px] rounded-br-[40px] shadow-2xl"
          />
            <motion.img
            src={pik2}
            animate={{x:[100,100,150]}}
            transition={{duration:5,repeat:Infinity}}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[30px] rounded-br-[40px] shadow-2xl"
          />
          </div>
          <div className="flex-1">
            
            <motion.h1
            initial={{scale:0}}
            animate={{scale:1,transition:{duration:4}}}
            
            className="text-5xl font-bold">Group <motion.span
            animate={{
                color:['#ff5733','#33ff33','#Ba33ff'],
                transition:{duration:4,repeat:Infinity}

            }}
            >assignment</motion.span> Fore You !</motion.h1>
            <p className=" text-2xl sm:text-5xl py-6">
              Education and Assignment Services HTML Template.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default HomeSlider;