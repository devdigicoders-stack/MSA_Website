import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  return (
    <div className="absolute top-0 w-full z-[100] pt-10 px-6 lg:px-8">
      <nav className="bg-white rounded-full shadow-lg w-full max-w-[1600px] mx-auto relative z-50">
        <div className="flex justify-between h-[88px] items-center px-4 lg:px-8">
          {/* Left Side: Logo & Menu */}
          <div className="flex items-center lg:gap-12 xl:gap-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <img
                  src="/logo.png"
                  alt="MSA Logo"
                  className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-bold transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-[#1e293b] hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side (Call + Button) */}
          <div className="hidden xl:flex items-center gap-6">
            {/* Call Us section */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white shrink-0">
                <Phone size={20} fill="currentColor" strokeWidth={1} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[13px] text-gray-500 font-medium leading-none mb-1">Call Us Now</span>
                <span className="text-[16px] font-extrabold text-[#1e3a8a] leading-none tracking-wide">+974 3000 1016</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="flex items-center gap-4 bg-[#1e3a8a] text-white pl-6 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-blue-900 transition-colors shadow-md group"
            >
              <span>Free Consultation</span>
              <div className="w-9 h-9 rounded-full bg-[#009b4d] flex items-center justify-center text-white group-hover:bg-[#007f3d] transition-colors shrink-0">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1e3a8a] hover:bg-blue-50 focus:outline-none p-2 rounded-full transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 xl:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Drawer (Slide from Left) */}
      <div className={`fixed top-0 left-0 bottom-0 w-[85vw] max-w-[360px] bg-white shadow-2xl z-50 xl:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <img src="/logo.png" alt="MSA Logo" className="h-10 w-auto" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-[#1e3a8a] bg-gray-50 hover:bg-blue-50 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-1 mb-auto flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-[17px] font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-primary'
                    : 'text-[#1e293b] hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 border-t border-gray-100 pt-6 mt-8">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Phone size={22} fill="currentColor" strokeWidth={1} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-medium mb-1">Call Us Now</span>
                <span className="text-lg font-extrabold text-[#1e3a8a] tracking-wide">+974 3000 1016</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between bg-[#1e3a8a] text-white pl-8 pr-3 py-3 rounded-full font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg group w-full"
            >
              <span>Free Consultation</span>
              <div className="w-11 h-11 rounded-full bg-[#009b4d] flex items-center justify-center text-white group-hover:bg-[#007f3d] transition-colors shrink-0">
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
