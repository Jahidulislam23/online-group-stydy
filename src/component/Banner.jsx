import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4">
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/bootstrap.png"
                alt="Shoes"
                className=""
              />
            </figure>
            <p className="font-bold">Bootstrap V5</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/sass.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Sass</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/html5.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Html5</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/css3.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Css3</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/jquery.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Jquery</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/w3c-validation.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">W3C Validation</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/responsive.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Fully Responsive</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/clean-code.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Clean Code</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/ajux.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Ajax Contact Form</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/google-font.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Google Font</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/magnific-popup.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Magnific Popup</p>
          </div>
        </motion.div>
        <motion.div
          className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-body items-center text-center  rounded">
            <figure className="">
              <img
                src="https://themeforest.wprealizer.com/html-educoda-preview/assets/images/speed.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <p className="font-bold">Speed Optimized</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
