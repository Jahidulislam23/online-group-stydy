import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8  dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[ 
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/bootstrap.png",
            alt: "Bootstrap",
            title: "Bootstrap V5",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/sass.png",
            alt: "Sass",
            title: "Sass",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/html5.png",
            alt: "Html5",
            title: "Html5",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/css3.png",
            alt: "Css3",
            title: "Css3",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/jquery.png",
            alt: "Jquery",
            title: "Jquery",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/w3c-validation.png",
            alt: "W3C Validation",
            title: "W3C Validation",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/responsive.png",
            alt: "Fully Responsive",
            title: "Fully Responsive",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/clean-code.png",
            alt: "Clean Code",
            title: "Clean Code",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/ajux.png",
            alt: "Ajax Contact Form",
            title: "Ajax Contact Form",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/google-font.png",
            alt: "Google Font",
            title: "Google Font",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/magnific-popup.png",
            alt: "Magnific Popup",
            title: "Magnific Popup",
          },
          {
            src: "https://themeforest.wprealizer.com/html-educoda-preview/assets/images/speed.png",
            alt: "Speed Optimized",
            title: "Speed Optimized",
          },
        ].map(({ src, alt, title }, index) => (
          <motion.div
            key={index}
            className="card bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <figure className="mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <img src={src} alt={alt} className="object-contain w-full h-full" />
            </figure>
            <p className="font-bold text-center text-sm sm:text-base md:text-lg">{title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
