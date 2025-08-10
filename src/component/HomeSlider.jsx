import React from "react";
import pik1 from "../assets/pik/pik1.jpg";
import pik2 from "../assets/pik/pik2.jpg";
import { motion } from "motion/react";

const HomeSlider = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse mx-auto items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-10">
          {/* Images Container */}
          <div className="flex-1 flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-xl">
            <motion.img
              src={pik1}
              alt="Picture 1"
              animate={{ y: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
              className="w-full sm:w-48 md:w-60 lg:w-72 border-blue-500 border-l-8 border-b-8 rounded-t-[30px] rounded-br-[40px] shadow-2xl object-cover"
            />
            <motion.img
              src={pik2}
              alt="Picture 2"
              animate={{ x:[-70, -100, -70] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-full sm:w-48 md:w-60 lg:w-72 border-blue-500 border-l-8 border-b-8 rounded-t-[30px] rounded-br-[40px] shadow-2xl object-cover hidden sm:block"
            />
          </div>

          {/* Text Container */}
          <div className="flex-1 text-center lg:text-left max-w-xl w-full">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 4 } }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              Group{" "}
              <motion.span
                animate={{
                  color: ["#ff5733", "#33ff33", "#Ba33ff"],
                  transition: { duration: 4, repeat: Infinity },
                }}
              >
                assignment
              </motion.span>{" "}
              For You!
            </motion.h1>
            <p className="text-base sm:text-lg md:text-xl py-4 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Education and Assignment Services HTML Template.
            </p>
            <button className="btn btn-primary px-8 py-3 mt-4 text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
