'use client';

import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  isHomepage?: boolean;
  imagePath?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  isHomepage = false,
  imagePath
}) => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background image - use provided imagePath, or fallback to defaults */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: imagePath 
            ? `url(${encodeURI(imagePath)})` 
            : isHomepage 
              ? "url('/images/Brava.jpeg')" 
              : "url('/images/hero-background.jpg')", 
          backgroundColor: "#333" 
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mb-10 text-white/90">
          {subtitle}
        </p>
        
        {buttonText && buttonLink && (
          <div>
            <Link 
              href={buttonLink}
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
      
      {/* Decorative bottom edge - jagged edge effect */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      ></div>
    </div>
  );
};

export default Hero; 