'use client';

import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  darkBg?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  href, 
  onClick, 
  children, 
  type = 'button',
  darkBg = false,
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition text-center";
  
  // Style for buttons on dark backgrounds (like the "Learn More About Us" button)
  const darkBgClasses = "text-white border-2 border-white hover:bg-white hover:text-black";
  
  // Style for buttons on light backgrounds - updated to use black text
  const lightBgClasses = "bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-transparent";
  
  const buttonClasses = `${baseClasses} ${darkBg ? darkBgClasses : lightBgClasses} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default PrimaryButton; 