import React from 'react';
import { Phone } from '../types';
import { motion } from 'framer-motion';

interface GridComponentProps {
  phone: Phone;
}

const GridComponent: React.FC<GridComponentProps> = ({ phone }) => {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform perspective-1000"
      whileHover={{
        rotateY: 10, // Rotate slightly on Y-axis (horizontal rotation)
        rotateX: -5, // Rotate slightly on X-axis (vertical rotation)
        scale: 1.05, // Slightly enlarge the component
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }} // Smooth transition with spring effect
    >
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{phone.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{phone.description}</p>
      <p className="text-gray-800 dark:text-white font-bold">${phone.price}</p>

      <div className="flex justify-center">
        <motion.img
          src={phone.image}
          alt={phone.name}
          className="object-contain h-64 w-full mt-4"
          whileHover={{ scale: 1.1 }} // Scale image on hover
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>
    </motion.div>
  );
};

export default GridComponent;
