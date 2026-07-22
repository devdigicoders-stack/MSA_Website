import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Typewriter = ({ text, delay = 70, pause = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (!isDeleting && currentText.length < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, delay);
    } else if (!isDeleting && currentText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length - 1));
      }, delay / 2);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, text, delay, pause]);

  return (
    <span>
      {currentText}
      <span className="inline-block w-[3px] h-[1em] bg-current ml-1 -mb-1 animate-[pulse_1s_ease-in-out_infinite] text-[#0ea5e9]"></span>
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f2c59] text-white pt-16 pb-6 mt-auto relative overflow-hidden">
      {/* Background Decorative Arcs at Bottom Right */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border-[40px] border-white/5 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border-[40px] border-white/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-10 border-b border-white/10 mb-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 min-h-[48px]">
              <Typewriter text="Let's Build Your Business in Qatar" />
            </h2>
            <p className="text-blue-100 text-sm">"Your Trusted Partner in Business Growth and Success!"</p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <a href="tel:+97433830816" className="inline-flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-2.5 rounded-full font-bold transition-colors">
              <Phone size={18} />
              +974 33830816
            </a>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shadow-lg shadow-black/20 shrink-0">
                <img src="/logo.png" alt="MSA Logo" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold leading-none tracking-wide text-white">MSA Trading</span>
                <span className="text-sm font-semibold tracking-widest text-[#0ea5e9] mt-1">AND SERVICES</span>
              </div>
            </div>
            <p className="text-blue-100/80 mb-6 text-sm leading-relaxed">
              MSA Trading & Services W.L.L. is your trusted partner for business setup and government services in Qatar. From company formation and PRO services to visas, legal approvals, and corporate support, we deliver reliable, transparent, and efficient solutions tailored to your needs.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <a href="https://www.instagram.com/msa_services.qa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* WhatsApp SVG */}
              <a href="https://wa.me/97433830816" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
            
            {/* Certificate Card */}
            <div className="mt-8 p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors w-full max-w-sm group cursor-pointer shadow-lg">
              <div className="w-16 h-20 rounded bg-white overflow-hidden shrink-0 relative border border-white/20">
                <iframe src="/certificate.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none" title="Certificate" />
                <div className="absolute inset-0 bg-[#0f2c59]/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex flex-col text-left flex-1">
                <span className="text-white font-bold text-sm mb-1 group-hover:text-[#0ea5e9] transition-colors">Our Certificate</span>
                <span className="text-blue-200/80 text-xs leading-relaxed">Verified by Govt. of Qatar</span>
                <a href="/certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0ea5e9] hover:text-white text-xs font-bold mt-2 flex items-center gap-1 transition-colors w-fit">
                  View Full <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blogs' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} onClick={() => window.scrollTo(0, 0)} className="text-blue-100 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {[
                'Company Formation',
                'Government Liaison & PRO Works',
                'Document Services',
                'Corporate & Travel Services',
                'Job Application Assistance'
              ].map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-blue-100 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-xl text-center md:text-left">
              <h4 className="text-lg font-bold mb-5 text-[#0f2c59]">Contact Us</h4>
              
              <ul className="space-y-4 flex flex-col items-center md:items-start">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                  <Phone className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                  <div className="flex flex-col text-sm font-medium text-gray-600 leading-relaxed">
                    <a href="tel:+97433830816" className="hover:text-[#0ea5e9] transition-colors">+974 33830816</a>
                    <a href="tel:+97450399538" className="hover:text-[#0ea5e9] transition-colors">+974 50399538</a>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                  <Mail className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                  <p className="flex flex-col text-sm font-medium text-gray-600 leading-relaxed">
                    <a href="mailto:pro@msatradingqa.com" className="hover:text-[#0ea5e9] transition-colors">pro@msatradingqa.com</a>
                    <a href="mailto:msatyping@gmail.com" className="hover:text-[#0ea5e9] transition-colors">msatyping@gmail.com</a>
                    <a href="mailto:md003seraj@gmail.com" className="hover:text-[#0ea5e9] transition-colors">md003seraj@gmail.com</a>
                  </p>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                  <MapPin className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    Zone- 15, Street- 810<br />
                    Building - 25, Doha - Jadeeda, MSA QATAR
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 pb-2 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm text-blue-200 font-medium">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved by MSA Trading & Services.
          </p>
          <p className="text-sm text-blue-200 font-medium">
            Designed and Developed by <a href="https://www.worknestconnect.com" target="_blank" rel="noopener noreferrer" className="text-[#0ea5e9] hover:text-white transition-colors underline">www.worknestconnect.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
