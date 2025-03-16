'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  imageUrl,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col h-full">
        <svg 
          className="h-8 w-8 text-primary-600 mb-6"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        
        <p className="text-gray-700 italic mb-6 flex-grow">"{quote}"</p>
        
        <div className="flex items-center">
          <div>
            <h4 className="font-bold text-gray-800">{name}</h4>
            {title && <p className="text-gray-600 text-sm">{title}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial; 