import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top-btn fixed bottom-[6.5rem] md:bottom-6 right-6 p-3 rounded-full bg-[#0ea5e9] text-white shadow-xl hover:bg-[#0284c7] hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-40 flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={28} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTopButton;
