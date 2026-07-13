import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // When route changes, show loader
    setIsLoading(true);
    setIsRendered(true);
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // After 800ms, start fading out
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
      
      // Remove from DOM completely after fade out completes (500ms transition)
      setTimeout(() => {
        setIsRendered(false);
      }, 500);
    }, 800);

    return () => {
      clearTimeout(hideTimer);
      document.body.style.overflow = 'unset';
    };
  }, [location.pathname]);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-all duration-500 ease-in-out ${
        isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Background static ring */}
        <div className="absolute rounded-full border-4 border-gray-100 w-36 h-36"></div>
        {/* Spinning animated ring */}
        <div className="absolute rounded-full border-4 border-t-[#009b4d] border-r-transparent border-b-[#0f2c59] border-l-transparent animate-spin w-36 h-36"></div>
        
        {/* Logo Container */}
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center p-3 shadow-xl z-10 relative">
          <img src="/logo.png" alt="MSA Logo" className="w-full h-full object-contain animate-pulse" />
        </div>
      </div>
      
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-xl font-bold text-[#0f2c59] mb-4 tracking-wider uppercase">Loading</h2>
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-[#009b4d] rounded-full animate-bounce shadow-md" style={{ animationDelay: '0ms' }}></span>
          <span className="w-3 h-3 bg-[#0f2c59] rounded-full animate-bounce shadow-md" style={{ animationDelay: '150ms' }}></span>
          <span className="w-3 h-3 bg-[#009b4d] rounded-full animate-bounce shadow-md" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
