import React from 'react';
import { motion } from 'framer-motion';

const BannerSection = ({ card }) => {
  const { _id, title, photo, description, careLevel } = card;

  return (
    <motion.div
      className="card shadow-sm sm:pr-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <figure>
        <img
          src={photo}
          alt={title}
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-2">{description}</p>
        <p className="font-medium">{careLevel}</p>
      </div>
    </motion.div>
  );
};

export default BannerSection;
