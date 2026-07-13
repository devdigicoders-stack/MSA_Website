import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/slide1.png',
    title: 'Your Trusted Business Partner in Qatar',
    subtitle: 'Expert company formation, government documentation, and corporate support services.',
    buttonText: 'Discover Our Services',
    link: '/services'
  },
  {
    id: 2,
    image: '/slide2.png',
    title: 'Complete End-to-End Support',
    subtitle: 'From Qatari sponsorship to PRO services, we navigate every stage with confidence.',
    buttonText: 'About Us',
    link: '/about'
  },
  {
    id: 3,
    image: '/slide3.png',
    title: 'Global Trading & Logistics',
    subtitle: 'Reliable supply chain solutions for growing your business.',
    buttonText: 'Contact Us',
    link: '/contact'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] min-h-[700px] overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-100"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-primary/70"></div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'
              }`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-10 drop-shadow-md">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="inline-block bg-white text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}


    </div>
  );
};

export default HeroSlider;
