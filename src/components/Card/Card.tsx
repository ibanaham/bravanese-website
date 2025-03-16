'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PrimaryButton from '../Button/PrimaryButton';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  icon,
  children,
}) => {
  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-lg bg-white h-full flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex-grow">
        {children}
        
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3 text-primary-600">{icon}</div>}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {linkUrl && !children?.toString().includes('PrimaryButton') && (
          <PrimaryButton href={linkUrl} className="mt-2">
            <span className="flex items-center">
              Learn More
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </PrimaryButton>
        )}
      </div>
    </motion.div>
  );
};

export default Card; 