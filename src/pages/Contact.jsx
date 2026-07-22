import HeroSection from '../components/HeroSection';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully. Our team will contact you soon.',
      icon: 'success',
      confirmButtonColor: '#0ea5e9',
    });
    e.target.reset();
  };

  return (
    <div>
      <HeroSection 
        title="Contact Us" 
      />
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Text and Form */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></div>
              <span className="text-[#1e3a8a] font-bold text-sm tracking-widest uppercase">Contact Us</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold mb-3 leading-tight tracking-tight">
              <span className="text-[#1e3a8a]">Your Growth-Driven<br /></span>
              <span className="text-[#0ea5e9]">Business Consulting<br />Partner</span>
            </h2>
            
            <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
              Ready to turn your business dreams into reality? At MSA Trading & Services, our expert team specializes in helping you start a business in Qatar through professional <Link to="/services" className="text-blue-600 hover:underline font-medium">company formation services</Link>, PRO support, sponsorship arrangements, document clearance, visa services, and more. We guide you through every step with precision and care. Contact us today to begin your journey toward sustainable success in Qatar's dynamic economy!
            </p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" required className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary p-4 border bg-gray-50/50 outline-none transition-colors" placeholder="First Name" />
                </div>
                <div>
                  <input type="text" required className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary p-4 border bg-gray-50/50 outline-none transition-colors" placeholder="Last Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="email" required className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary p-4 border bg-gray-50/50 outline-none transition-colors" placeholder="E - mail Address" />
                </div>
                <div>
                  <input type="tel" required className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary p-4 border bg-gray-50/50 outline-none transition-colors" placeholder="Phone Number" />
                </div>
              </div>
              
              <div>
                <textarea rows="6" required className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary p-4 border bg-gray-50/50 outline-none transition-colors resize-none" placeholder="Message"></textarea>
              </div>
              
              <button type="submit" className="inline-flex items-center gap-4 bg-[#1e3a8a] text-white pl-6 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-blue-900 transition-colors shadow-md group mt-2">
                <span>Send Message</span>
                <div className="w-9 h-9 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white group-hover:bg-[#0284c7] transition-colors shrink-0">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </button>
            </form>
          </div>

          {/* Right Side: Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 h-fit mt-8 lg:mt-0">
            {/* Location Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] group-hover:bg-[#0ea5e9] group-hover:scale-110 transition-all duration-300 ease-out flex items-center justify-center text-white mb-8">
                <MapPin size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#0ea5e9] transition-colors duration-300">Location</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Zone- 15, Street- 810<br />
                  Building - 25, Doha - Jadeeda<br />
                  MSA QATAR
                </p>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] group-hover:bg-[#0ea5e9] group-hover:scale-110 transition-all duration-300 ease-out flex items-center justify-center text-white mb-8">
                <Phone size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#0ea5e9] transition-colors duration-300">Call Us</h3>
                <p className="text-gray-500 leading-relaxed text-[15px] flex flex-col gap-1">
                  <a href="tel:+97433830816" className="hover:text-[#0ea5e9] transition-colors">+974 33830816</a>
                  <a href="tel:+97450399538" className="hover:text-[#0ea5e9] transition-colors">+974 50399538</a>
                </p>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] group-hover:bg-[#0ea5e9] group-hover:scale-110 transition-all duration-300 ease-out flex items-center justify-center text-white mb-8">
                <Mail size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#0ea5e9] transition-colors duration-300">Email Us</h3>
                <p className="text-gray-500 leading-relaxed text-[15px] flex flex-col gap-1">
                  <a href="mailto:pro@msatradingqa.com" className="hover:text-[#0ea5e9] transition-colors">pro@msatradingqa.com</a>
                  <a href="mailto:msatyping@gmail.com" className="hover:text-[#0ea5e9] transition-colors">msatyping@gmail.com</a>
                  <a href="mailto:md003seraj@gmail.com" className="hover:text-[#0ea5e9] transition-colors">md003seraj@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Live Chat Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[#1e3a8a] group-hover:bg-[#0ea5e9] group-hover:scale-110 transition-all duration-300 ease-out flex items-center justify-center text-white mb-8">
                <MessageCircle size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#0ea5e9] transition-colors duration-300">Live Chat</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Connect with our team instantly for any queries about.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.815177162829!2d51.53271387538439!3d25.276802077659895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzM2LjUiTiA1McKwMzInMDcuMCJF!5e0!3m2!1sen!2sin!4v1784380572350!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
