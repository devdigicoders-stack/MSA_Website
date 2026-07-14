import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Clock, HeartHandshake, Building2, Landmark, UserCheck, Headset, ClipboardList, Cog, CheckCircle, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Phone, ShieldCheck, Layers } from 'lucide-react';
import CountUpModule from 'react-countup';
import HeroSlider from '../components/HeroSlider';

const CountUp = CountUpModule.default || CountUpModule;

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

  return <span>{currentText}<span className="animate-pulse border-r-4 border-[#009b4d] ml-1 h-8 inline-block align-middle relative -top-1"></span></span>;
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white px-2 pt-3 sm:px-4 lg:px-4">
      {/* 1. Video Hero Section */}
      <section className="relative h-[92vh] md:h-[82vh] min-h-[680px] md:min-h-[550px] flex items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/slide1.png"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Teal Overlay */}
        <div className="absolute inset-0 bg-[#063a30]/90"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-32 md:mt-24 lg:mt-20">
          <h1 className="text-[26px] leading-[1.3] sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 uppercase drop-shadow-lg px-2 sm:px-0">
            Empowering Businesses <br className="hidden md:block" />
            Enabling Success In Qatar
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
            Start your business in Qatar with 100% ownership, hassle-free and fully supported
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-white font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#009b4d]" />
              <span>Qatar Based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#009b4d]" />
              <span>Global Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#009b4d]" />
              <span>Business Made Easy</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="flex items-center justify-between w-48 bg-[#1e3a8a] text-white pl-6 pr-2 py-2 rounded-full font-bold hover:bg-blue-900 transition-all duration-300 shadow-lg group">
              <span>Connect Now</span>
              <div className="w-8 h-8 rounded-full bg-[#009b4d] flex items-center justify-center group-hover:bg-[#007f3d] transition-colors shrink-0">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </Link>
            
            <a href="tel:+97430001016" className="flex items-center justify-between w-40 bg-[#009b4d] text-white pl-6 pr-2 py-2 rounded-full font-bold hover:bg-[#007f3d] transition-all duration-300 shadow-lg group">
              <span>Call Now</span>
              <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center group-hover:bg-blue-900 transition-colors shrink-0">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Introduction / Welcome Section (About Us) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Creative Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] flex justify-center lg:justify-start"
          >
            {/* Background Image (Office) */}
            <div className="absolute top-0 left-0 w-[70%] h-[80%] rounded-l-[150px] rounded-r-[40px] overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="/office_interior.png" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>

            {/* Foreground Image (Signing Document) */}
            <div className="absolute bottom-[5%] right-[5%] w-[65%] h-[65%] rounded-full overflow-hidden shadow-2xl border-8 border-white z-20">
              <img 
                src="/signing_document.png" 
                alt="Signing Document" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Badge */}
            <div className="absolute bottom-10 left-0 z-30 bg-[#009b4d] w-36 h-36 rounded-full flex items-center justify-center shadow-xl border-[6px] border-white">
              {/* Rotating Text Container */}
              <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  <text className="text-[11.5px] font-bold fill-white tracking-[0.15em] uppercase">
                    <textPath href="#curve">MSA Trading Services • MSA Trading Services • </textPath>
                  </text>
                </svg>
              </div>
              {/* Center Logo/Icon */}
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center z-10 shadow-inner">
                <span className="text-[#0f2c59] font-black text-xl">MSA</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#009b4d]"></div>
              <span className="text-[#0f2c59] font-bold tracking-[0.15em] text-sm uppercase">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#0f2c59] leading-[1.1] mb-6">
              Reliable Business Management Consultancy to <span className="text-[#009b4d]">Drive Your Success</span>
            </h2>
            
            <p className="text-gray-500 text-[17px] leading-relaxed mb-10">
              Start your business in Qatar with confidence and complete ownership with MSA Trading & Services W.L.L., your trusted business management consultancy.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0f2c59] text-white rounded-[1.25rem] p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform shadow-md">
                <ShieldCheck className="w-8 h-8 text-[#009b4d]" strokeWidth={1.5} />
                <span className="font-semibold text-lg leading-snug">100% Ownership<br/>Guaranteed</span>
              </div>
              <div className="bg-[#0f2c59] text-white rounded-[1.25rem] p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform shadow-md">
                <Layers className="w-8 h-8 text-[#009b4d]" strokeWidth={1.5} />
                <span className="font-semibold text-lg leading-snug">Hassle-Free<br/>Business Setup</span>
              </div>
            </div>

            <p className="text-gray-500 text-[16px] leading-relaxed mb-10">
              From company registration to legal approvals, office space, and PRO services, we handle it all. Let us bring your business vision to life.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="group flex items-center gap-3 bg-[#0f2c59] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md">
                More About
                <div className="bg-[#009b4d] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
              
              <Link to="/contact" className="group flex items-center gap-3 bg-[#009b4d] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md">
                Free Consultation
                <div className="bg-[#0f2c59] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>

              <div className="flex items-center gap-4 ml-2">
                <div className="w-12 h-12 bg-[#0f2c59] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-white" fill="white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Call Us now</span>
                  <a href="tel:+97430001016" className="text-[#0f2c59] font-bold text-lg hover:text-[#009b4d] transition-colors">
                    +974 30001016
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5 Foreign Ownership Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-12 xl:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative max-w-[450px] mx-auto w-full">
            <img 
              src="/foreign_ownership.png" 
              alt="Corporate Meeting" 
              className="w-full h-auto object-cover rounded-[2rem] shadow-lg"
            />
            {/* Small decorative dot to match screenshot */}
            <div className="absolute top-[40%] -left-3 w-4 h-4 rounded-full bg-[#0f2c59]"></div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0f2c59] leading-[1.15] tracking-tight min-h-[80px] md:min-h-[110px]">
              100% Foreign Ownership <span className="text-[#009b4d] inline-block"><Typewriter text="Company Registration" /></span>
            </h2>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-8">
              Start your business with total control and zero compromise. Our business setup services specialise in company formation with 100% foreign ownership, helping you navigate all legal and regulatory frameworks seamlessly.
            </p>
            
            <div className="h-[1px] w-full bg-gray-200 mb-8"></div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-[#0f2c59] text-white rounded-3xl p-6 flex flex-col justify-start shadow-md hover:-translate-y-1 hover:bg-[#009b4d] transition-all duration-300 min-h-[160px]">
                <span className="text-3xl font-extrabold mb-4">
                  <CountUp end={5} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />+
                </span>
                <span className="text-[15px] font-medium leading-snug text-gray-100">Years<br/>Of<br/>Experience</span>
              </div>
              <div className="bg-[#0f2c59] text-white rounded-3xl p-6 flex flex-col justify-start shadow-md hover:-translate-y-1 hover:bg-[#009b4d] transition-all duration-300 min-h-[160px]">
                <span className="text-3xl font-extrabold mb-4">
                  <CountUp end={100} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />+
                </span>
                <span className="text-[15px] font-medium leading-snug text-gray-100">Happy<br/>Customers</span>
              </div>
              <div className="bg-[#0f2c59] text-white rounded-3xl p-6 flex flex-col justify-start shadow-md hover:-translate-y-1 hover:bg-[#009b4d] transition-all duration-300 min-h-[160px]">
                <span className="text-3xl font-extrabold mb-4">
                  <CountUp end={10} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} suffix="K" />
                </span>
                <span className="text-[15px] font-medium leading-snug text-gray-100">Work<br/>Completed</span>
              </div>
              <div className="bg-[#0f2c59] text-white rounded-3xl p-6 flex flex-col justify-start shadow-md hover:-translate-y-1 hover:bg-[#009b4d] transition-all duration-300 min-h-[160px]">
                <span className="text-3xl font-extrabold mb-4">
                  <CountUp end={365} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />+
                </span>
                <span className="text-[15px] font-medium leading-snug text-gray-100">Appreciations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-4">Why Choose MSA?</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
            We simplify business setup, government procedures, and corporate support with reliable, compliant, and efficient solutions—helping businesses and individuals achieve their goals in Qatar with confidence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="relative overflow-hidden bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 group">
              <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                  <Award className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">Industry Expertise</h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">Years of experience ensuring compliance and best outcomes for our clients in Qatar's market.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 group">
              <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                  <Clock className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">Time & Cost Efficient</h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">We streamline complex government procedures to save you valuable time and reduce unnecessary costs.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 group">
              <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                  <HeartHandshake className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">Customer First</h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">Personalized guidance, complete transparency, and long-term relationships based on trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep-Dives Main Heading */}
      <section className="bg-gray-50 pt-20 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-4">Our Specialized Expertise</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Take a closer look at our flagship services. We provide dedicated support for every critical step of your business journey in Qatar, ensuring zero hassle and full compliance.
          </p>
        </div>
      </section>

      {/* 6. Service Deep-Dive 1: Company Formation */}
      <section className="bg-gray-50 pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative group rounded-2xl shadow-xl overflow-hidden bg-white p-2"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/slide1.png" alt="Company Formation" className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 rounded-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <span className="text-primary font-extrabold tracking-widest uppercase text-xs mb-3 block bg-blue-100 inline-block px-3 py-1 rounded-full">Specialized Service</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">Seamless Company Formation</h2>

            <div className="space-y-2.5 mb-10">
              {['100% Foreign Ownership Registration', 'Qatari Sponsorship Arrangement', 'Corporate Bank Account Opening', 'Office Space Solutions'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-2.5 rounded-lg shadow-sm border-l-4 border-primary hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">Start Your Business</Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Service Deep-Dive 2: Visas & PRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-extrabold tracking-widest uppercase text-xs mb-3 block bg-blue-50 inline-block px-3 py-1 rounded-full">Expert Handling</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">Comprehensive PRO & Visa Services</h2>

            <div className="space-y-2.5 mb-10">
              {['All Kinds of PRO Works', 'Metrash 2 & Hukoomi Services', 'Document Attestation (All Certificates)', 'Visa Services & Passport Renewal'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-2.5 rounded-lg shadow-sm border-l-4 border-primary hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">Get Expert Help</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group rounded-2xl shadow-xl overflow-hidden bg-white p-2"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/slide3.png" alt="PRO Services" className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 rounded-xl"></div>
          </motion.div>
        </div>
      </section>


      {/* 9. Our Process */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-primary font-extrabold tracking-widest uppercase text-xs mb-3 block">How It Works</span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Our Simple Process</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            From consultation to completion, we streamline every step of your business and government service requirements ensuring a smooth experience from start to finish.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden hover:-translate-y-3">
            <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0"></div>
            <div className="absolute -right-4 -bottom-4 text-[10rem] leading-none font-black text-gray-50 group-hover:text-white/10 transition-colors duration-500 z-0">1</div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500 shadow-sm">
                <Headset className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-extrabold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">Consultation</h4>
              <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">Understanding your objectives and assessing requirements.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden hover:-translate-y-3">
            <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0"></div>
            <div className="absolute -right-4 -bottom-4 text-[10rem] leading-none font-black text-gray-50 group-hover:text-white/10 transition-colors duration-500 z-0">2</div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500 shadow-sm">
                <ClipboardList className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-extrabold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">Planning</h4>
              <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">Preparing a clear action plan outlining costs and timelines.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden hover:-translate-y-3">
            <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0"></div>
            <div className="absolute -right-4 -bottom-4 text-[10rem] leading-none font-black text-gray-50 group-hover:text-white/10 transition-colors duration-500 z-0">3</div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500 shadow-sm">
                <Cog className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-extrabold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">Processing</h4>
              <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">Fast and hassle-free execution by our experienced PRO team.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden hover:-translate-y-3">
            <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0"></div>
            <div className="absolute -right-4 -bottom-4 text-[10rem] leading-none font-black text-gray-50 group-hover:text-white/10 transition-colors duration-500 z-0">4</div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500 shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-extrabold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">Delivery</h4>
              <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">Ongoing support for renewals, compliance, and expansion.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 10. Testimonials (Moved to bottom) */}



      {/* 12. FAQ Section */}
      <section className="py-24 px-6 sm:px-10 lg:px-12 bg-[#0f2c59] overflow-hidden -mx-2 sm:-mx-4 lg:-mx-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 text-[#009b4d] font-bold tracking-[0.2em] text-sm mb-4 uppercase">
                <span className="w-2 h-2 bg-[#009b4d] rounded-full"></span> FAQ'S
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl min-h-[96px] md:min-h-[60px]">
                <Typewriter text="Frequently asked questions about us" />
              </h2>
            </div>
            <Link to="/contact" className="bg-[#009b4d] hover:bg-[#007a3c] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-3 transition-colors shadow-lg group">
              Contact Us <ArrowRight size={20} className="bg-white text-[#0f2c59] rounded-full p-1 w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Images & Contact */}
            <div className="relative h-[650px] w-full hidden lg:block">
              {/* Top Left Image */}
              <div className="absolute left-0 top-0 w-[45%] h-[35%] rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#0f2c59]">
                <img src="/faq_stamp.png" alt="Stamping document" className="w-full h-full object-cover" />
              </div>
              
              {/* Bottom Left Image */}
              <div className="absolute left-0 bottom-[22%] w-[45%] h-[35%] rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#0f2c59]">
                <img src="/faq_discuss.png" alt="Discussion" className="w-full h-full object-cover" />
              </div>

              {/* Right Tall Image */}
              <div className="absolute right-0 top-0 w-[50%] h-[75%] rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#0f2c59] z-10">
                <img src="/faq_presentation.png" alt="Presentation" className="w-full h-full object-cover" />
              </div>

            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="space-y-0 pt-2 border-t border-white/10 lg:border-t-0">
              {[
                {
                  q: '1. What types of businesses can MSA Trading help register in Qatar?',
                  a: 'We assist with registering all types of businesses — from sole proprietorships and partnerships to LLCs and foreign-owned companies — across various sectors.'
                },
                {
                  q: '2. Do you offer assistance with legal documentation and approvals?',
                  a: 'Yes, we handle all legal documentation, PRO services, and necessary government approvals to ensure your business complies with Qatari laws.'
                },
                {
                  q: '3. Can MSA Trading provide a physical office space for my business?',
                  a: 'Absolutely. We help our clients find and secure premium physical office spaces or virtual office setups depending on their business needs and trade license requirements.'
                },
                {
                  q: '4. What are PRO services, and why are they important?',
                  a: 'PRO (Public Relations Officer) services involve handling government-related paperwork such as visas, licenses, and permits. They save you time and ensure compliance.'
                },
                {
                  q: '5. How long does the full business setup process usually take?',
                  a: 'The timeline varies based on the type of business activity, but with our streamlined process, we ensure the fastest possible turnaround times, often within a few weeks.'
                },
                {
                  q: '6. How successful are you as a business management consultancy?',
                  a: 'We have over a decade of experience and a 100% success rate in helping over 500 happy clients establish and grow their presence in the Qatari market securely.'
                },
                {
                  q: '7. How do MSA Trading\'s business setup services in Qatar help me?',
                  a: 'We provide end-to-end solutions, eliminating administrative hassle, reducing costs, and allowing you to focus on your core business growth with complete peace of mind.'
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h4 className={`font-bold text-[17px] pr-4 transition-colors ${openFaq === i ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{faq.q}</h4>
                    <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${openFaq === i ? 'bg-[#009b4d] text-white rotate-45' : 'bg-white text-[#0f2c59]'}`}>
                      <span className="text-xl font-light leading-none block mb-0.5">+</span>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <p className="text-gray-400 leading-relaxed text-[15px] pr-10">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* 14. Latest News/Blogs Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-4">Latest Insights</h2>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <Link to="/blogs" className="text-primary font-bold hover:underline hidden md:block">View All Posts &rarr;</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="h-48 bg-gray-200 w-full overflow-hidden">
              <img src="/slide1.png" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">October 10, 2023</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Future of Global Trade</h3>
              <p className="text-gray-600 text-sm mb-4">Discover the trends shaping the future of international business and how Qatar is leading the way.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="h-48 bg-gray-200 w-full overflow-hidden">
              <img src="/slide3.png" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">September 25, 2023</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimizing Supply Chains</h3>
              <p className="text-gray-600 text-sm mb-4">Learn how to streamline your logistics for maximum efficiency in the Middle East region.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="h-48 bg-gray-200 w-full overflow-hidden">
              <img src="/slide2.png" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">August 12, 2023</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">Understanding the importance of PRO services and legal approvals for sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14.5 Client Partnerships */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-[#0f2c59]">Our Valued Clients</span> <span className="text-[#009b4d]">Partnerships!</span>
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto relative flex items-center px-6 md:px-16">
          {/* Left Arrow */}
          <button className="absolute left-0 z-10 w-12 h-12 rounded-full border border-[#0f2c59] flex items-center justify-center text-[#0f2c59] hover:bg-[#0f2c59] hover:text-white transition-colors bg-white shadow-sm">
             <ChevronLeft className="w-6 h-6" />
          </button>
          
          <style>
            {`
              @keyframes scroll-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 2rem)); }
              }
              .animate-scroll-marquee {
                animation: scroll-marquee 25s linear infinite;
              }
              .animate-scroll-marquee:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-16 flex-nowrap w-max animate-scroll-marquee py-4">
               {[1, 2].map((group) => (
                 <div key={group} className="flex items-center gap-16 shrink-0">
                   {/* Logo 1: mtcs */}
                   <div className="flex flex-col items-center shrink-0 cursor-pointer">
                     <div className="text-[#d32f2f] font-serif font-extrabold text-5xl leading-none flex flex-col items-center relative">
                       <div className="absolute -top-7 text-3xl">A</div>
                       <div className="absolute -top-2 text-xs">★</div>
                       <div className="tracking-tighter">mtcs</div>
                     </div>
                   </div>

                   {/* Logo 2: CORVIT */}
                   <div className="flex flex-col items-center shrink-0 cursor-pointer">
                     <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[25px] border-b-[#d32f2f] mb-1"></div>
                     <span className="text-gray-900 font-extrabold text-2xl tracking-[0.2em] leading-none mt-1">CORVIT</span>
                     <span className="text-gray-500 text-[9px] tracking-widest mt-1 uppercase">Reaching end to end</span>
                   </div>

                   {/* Logo 3: JuanStep */}
                   <div className="flex flex-col items-center shrink-0 cursor-pointer">
                     <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-dashed border-gray-400">
                       <div className="w-full h-full bg-cover bg-center rounded-full opacity-30 absolute inset-0" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")'}}></div>
                       <span className="text-lg absolute font-serif text-[#1c4a8a] font-bold">JuanStep</span>
                     </div>
                   </div>

                   {/* Logo 4: PLEXI TRADING */}
                   <div className="flex items-center gap-3 shrink-0 cursor-pointer">
                     <div className="text-4xl font-serif italic font-bold text-gray-800">PT</div>
                     <div className="flex flex-col">
                       <span className="text-[#3b82f6] text-xs font-bold mb-0.5">بليكسي للتجارة</span>
                       <span className="text-[#0f2c59] text-[13px] font-extrabold tracking-widest">PLEXI TRADING</span>
                     </div>
                   </div>

                   {/* Logo 5: air bloom */}
                   <div className="flex flex-col items-start shrink-0 cursor-pointer">
                     <div className="flex items-center gap-2">
                       <div className="flex flex-col text-[#006039] font-serif font-extrabold text-3xl leading-[0.8]">
                         <span>air</span>
                         <span>bloom</span>
                       </div>
                       <div className="text-[#a4cc38] text-4xl transform -scale-x-100">🌿</div>
                     </div>
                     <span className="text-[#a4cc38] italic text-[11px] mt-2 ml-1">Feel the fragrance</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          
          {/* Right Arrow */}
          <button className="absolute right-0 z-10 w-12 h-12 rounded-full border border-[#0f2c59] flex items-center justify-center text-[#0f2c59] hover:bg-[#0f2c59] hover:text-white transition-colors bg-white shadow-sm">
             <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* 15. Call to Action Banner */}
      <section className="bg-[#0f2c59] py-16 px-4 text-center -mx-2 sm:-mx-4 lg:-mx-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Start Your Business Journey in Qatar?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Contact our experts today for a free consultation. Let us handle the paperwork so you can focus on your business.
        </p>
        <Link to="/contact" className="inline-block bg-white text-gray-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg">
          Get Your Free Consultation
        </Link>
      </section>

      {/* 10. Testimonials (Infinite Marquee) */}
      <section className="pt-24 bg-gray-50 overflow-hidden relative">
        <div className="text-center mb-16 relative z-10 px-4">
          <span className="text-primary font-extrabold tracking-widest uppercase text-xs mb-3 block">Testimonials</span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Don't just take our word for it. Hear from the businesses and entrepreneurs who have partnered with us to achieve their goals in Qatar.
          </p>
        </div>

        <div className="animate-marquee hover:[animation-play-state:paused] pb-8 pt-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-[350px] mx-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0f2c59] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, star) => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="italic text-gray-600 mb-8 leading-relaxed">
                {i % 4 === 0 ? '"MSA Trading & Services made our company registration in Qatar incredibly smooth. Their team handled all the complex paperwork efficiently. Highly recommended!"' :
                  i % 4 === 1 ? '"Their PRO services are unmatched. From visa processing to document attestation, they are reliable, transparent, and always deliver on time."' :
                    i % 4 === 2 ? '"The level of professionalism and dedication shown by the MSA team is truly exceptional. We couldn\'t have asked for a better partner."' :
                      '"Absolutely brilliant service from start to finish. They took all the stress out of our corporate setup process."'}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0f2c59] font-bold text-xl group-hover:bg-[#0f2c59] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {i % 4 === 0 ? 'S' : i % 4 === 1 ? 'A' : i % 4 === 2 ? 'M' : 'F'}
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-[#0f2c59] transition-colors duration-300">
                    {i % 4 === 0 ? 'Sarah J.' : i % 4 === 1 ? 'Ahmed M.' : i % 4 === 2 ? 'Michael T.' : 'Fatima R.'}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">{i % 4 === 0 ? 'Business Owner' : i % 4 === 1 ? 'Corporate Manager' : i % 4 === 2 ? 'CEO' : 'HR Director'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
