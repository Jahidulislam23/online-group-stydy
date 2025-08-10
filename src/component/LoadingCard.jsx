import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    img: "https://i.ibb.co/nMGK34xZ/tra-nguyen-TVSRWmn-W8-Us-unsplash.jpg",
    count: 150,
    label: "Total Teachers",
  },
  {
    id: 2,
    img: "https://i.ibb.co/cSN0T4Ht/javier-trueba-i-QPr1-Xk-F5-F0-unsplash.jpg",
    count: 3000,
    label: "Total Students",
  },
  {
    id: 3,
    img: "https://i.ibb.co/0RLZcqxV/annie-spratt-2c-Pz-M3mam-0-unsplash.jpg",
    count: 1200,
    label: "Total Exam Results",
  },
  {
    id: 4,
    img: "https://i.ibb.co/mF1sf3HS/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg",
    count: 75,
    label: "Total Courses",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LoadingCard = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="font-bold text-5xl pb-5">
          We Provide Best Online Study Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our platform connects you with expert teachers and quality courses,
          ensuring you learn effectively anytime, anywhere.
        </p>
      </div>

      <motion.div
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-14 px-4 max-w-8xl mx-auto pt-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map(({ id, img, count, label }) => (
          <motion.div
            key={id}
            variants={cardVariants}
            className="card bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="card-body items-center text-center p-6">
              <figure>
                <img
                  src={img}
                  alt={label}
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="App text-3xl font-extrabold mt-4">
                <CountUp end={count} duration={2.5} enableScrollSpy />
                <span className="font-bold text-indigo-600">+</span>
              </div>
              <p className="text-lg font-semibold mt-2 text-gray-700">{label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingCard;
