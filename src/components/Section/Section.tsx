'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  className = '',
  dark = false
}) => {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-black'}`}>
                {title}
              </h2>
            )}
            
            {subtitle && (
              <p className={`text-lg md:text-xl max-w-3xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 