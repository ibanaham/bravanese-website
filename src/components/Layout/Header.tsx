'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Determine which service page is active
  const isEducationActive = pathname === '/education';
  const isRecreationalActive = pathname === '/recreational';
  const isLanguageActive = pathname === '/language';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Handle outside clicks to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        buttonRef.current && 
        !dropdownRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Logo.svg" 
              alt="The Bravanese Society Logo" 
              width={48}
              height={48}
              className="mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-black">The Bravanese Society</h1>
              <p className="text-sm text-black">Preserving Culture, Building Community</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">Home</Link>
            <Link href="/about" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">About Us</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                ref={buttonRef}
                onClick={toggleServices} 
                className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition focus:outline-none flex items-center"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-yellow-400 shadow-lg rounded-md z-10"
                >
                  <Link 
                    href="/education" 
                    className={`block px-4 py-2 text-black font-bold uppercase hover:bg-yellow-300 hover:underline hover:decoration-2 hover:underline-offset-4 transition ${isEducationActive ? 'bg-yellow-300' : ''}`}
                  >
                    Educational Services
                  </Link>
                  <Link 
                    href="/recreational" 
                    className={`block px-4 py-2 text-black font-bold uppercase hover:bg-yellow-300 hover:underline hover:decoration-2 hover:underline-offset-4 transition ${isRecreationalActive ? 'bg-yellow-300' : ''}`}
                  >
                    Recreational Services
                  </Link>
                  <Link 
                    href="/language" 
                    className={`block px-4 py-2 text-black font-bold uppercase hover:bg-yellow-300 hover:underline hover:decoration-2 hover:underline-offset-4 transition ${isLanguageActive ? 'bg-yellow-300' : ''}`}
                  >
                    Language Research
                  </Link>
                </div>
              )}
            </div>

            <Link href="/get-involved" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">Get Involved</Link>
            <Link href="/contact" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">Contact Us</Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              <Link href="/" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">Home</Link>
              <Link href="/about" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">About Us</Link>
              
              {/* Services dropdown for mobile - expanded within navbar */}
              <div>
                <button 
                  onClick={toggleServices} 
                  className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition focus:outline-none flex items-center"
                >
                  Services
                  <svg 
                    className={`ml-2 h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 border-l-2 border-black/20 space-y-3 mt-3">
                    <Link 
                      href="/education" 
                      className={`block text-black font-bold uppercase hover:underline hover:decoration-2 hover:underline-offset-4 transition ${isEducationActive ? 'font-extrabold' : ''}`}
                    >
                      Educational Services
                    </Link>
                    <Link 
                      href="/recreational" 
                      className={`block text-black font-bold uppercase hover:underline hover:decoration-2 hover:underline-offset-4 transition ${isRecreationalActive ? 'font-extrabold' : ''}`}
                    >
                      Recreational Services
                    </Link>
                    <Link 
                      href="/language" 
                      className={`block text-black font-bold uppercase hover:underline hover:decoration-2 hover:underline-offset-4 transition ${isLanguageActive ? 'font-extrabold' : ''}`}
                    >
                      Language Research
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/get-involved" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">Get Involved</Link>
              <Link href="/contact" className="text-black font-bold uppercase hover:text-black hover:underline hover:decoration-2 hover:underline-offset-4 transition">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 