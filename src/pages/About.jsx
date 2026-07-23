import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { Target, Eye, Users, Briefcase, Award, ArrowRight, PhoneCall, Download } from 'lucide-react';

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
      }, delay / 2); // Delete twice as fast
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, text, delay, pause]);

  return <span>{currentText}<span className="animate-pulse border-r-4 border-[#0ea5e9] ml-1 h-8 inline-block align-middle relative -top-1"></span></span>;
};

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection 
        title="About Us" 
        subtitle="Your Trusted Business & Government Services Partner in Qatar"
      />
      
      {/* 1. Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Images */}
          <div className="relative h-[500px] sm:h-[600px] w-full mt-10 lg:mt-0">
            {/* Background Image (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] rounded-[10rem] overflow-hidden shadow-lg border-8 border-white">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team discussing" />
            </div>
            
            {/* Foreground Image (Right) */}
            <div className="absolute right-0 top-0 w-[60%] h-full rounded-[10rem] overflow-hidden shadow-2xl border-8 border-white z-10">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Handshake" />
            </div>

            {/* Circular Badge */}
            <div className="absolute bottom-10 left-[15%] z-20 w-36 h-36 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#0ea5e9] flex items-center justify-center bg-gray-50 relative animate-[spin_20s_linear_infinite]">
                <div className="absolute inset-0 flex flex-col items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                  <img src="/logo.png" alt="MSA" className="w-12 h-12 object-contain" />
                  <span className="text-[10px] font-bold text-[#0f2c59] mt-1 text-center leading-tight">MSA TRADING<br/>& SERVICES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div>
            <div className="flex items-center gap-3 text-[#0ea5e9] font-bold tracking-[0.2em] text-sm mb-6 uppercase">
              <span className="w-2 h-2 bg-[#0ea5e9] rounded-full"></span> ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2c59] mb-6 leading-tight">
              Your Trusted Business & Government Services Partner in Qatar
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
              <p>
                At <span className="font-semibold text-blue-600">MSA Trading & Services W.L.L.</span>, we are committed to making business setup, government documentation, and corporate support services simple, efficient, and hassle-free. With extensive knowledge of Qatar's legal framework, government procedures, and business environment, we help entrepreneurs, startups, SMEs, multinational companies, and individuals navigate every stage of their journey with confidence.
              </p>
              <p>
                From company formation, Qatari sponsorship, 100% foreign ownership registration, and PRO services to visa processing, document attestation, bank account opening, Metrash services, municipality approvals, Hukoomi services, and a wide range of government-related solutions, we provide complete end-to-end support under one roof. Our experienced team ensures that every process is handled accurately, professionally, and in compliance with the latest regulations.
              </p>
              <p>
                Whether you are launching a new business, expanding your operations in Qatar, managing corporate compliance, or seeking reliable assistance for personal documentation and government procedures, MSA Trading & Services W.L.L. is your dependable partner.
              </p>
            </div>

            {/* Buttons & Contact */}
            <div className="mt-10 flex flex-wrap xl:flex-nowrap items-center gap-4 xl:gap-6 w-full">
              <a href="/about" className="bg-[#0f2c59] hover:bg-[#0a1e3f] text-white px-5 xl:px-6 py-3 rounded-full font-bold flex items-center gap-2 xl:gap-3 transition-colors shadow-lg group text-sm whitespace-nowrap">
                More About <ArrowRight size={18} className="bg-[#0ea5e9] text-white rounded-full p-1 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-5 xl:px-6 py-3 rounded-full font-bold flex items-center gap-2 xl:gap-3 transition-colors shadow-lg group text-sm whitespace-nowrap">
                Free Consultation <ArrowRight size={18} className="bg-[#0f2c59] text-white rounded-full p-1 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 xl:gap-4 ml-0 xl:ml-2 whitespace-nowrap">
                <div className="w-12 h-12 bg-[#0f2c59] rounded-full flex items-center justify-center text-white shadow-lg shrink-0">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call us anytime</p>
                  <a href="tel:+97433830816" className="text-[#0f2c59] font-bold text-lg hover:text-[#0ea5e9] transition-colors">+974 33830816</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Commitment Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-medium text-[#0f2c59] leading-relaxed italic">
            "We focus on building long-term relationships based on trust, transparency, and reliability. Our mission is to simplify administrative processes, eliminate delays, and provide professional support that enables our clients to focus on what matters most—growing their business and achieving their goals."
          </p>
          <div className="w-24 h-1 bg-[#0ea5e9] mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-24 bg-[#0f2c59] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MSA Trading & Services?</h2>
          <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-16">
            We simplify business setup, government procedures, and corporate support with reliable, compliant, and efficient solutions—helping businesses and individuals achieve their goals in Qatar with confidence.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Users className="w-14 h-14 text-[#0ea5e9] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Customer-First Approach</h3>
              <p className="text-blue-100/80 leading-relaxed">Personalized guidance and practical solutions tailored to save your valuable time while reducing unnecessary complexity.</p>
            </div>
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Briefcase className="w-14 h-14 text-[#0ea5e9] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-blue-100/80 leading-relaxed">Extensive knowledge of Qatar's legal framework and dynamic business environment to help you navigate every stage.</p>
            </div>
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Award className="w-14 h-14 text-[#0ea5e9] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Commitment to Excellence</h3>
              <p className="text-blue-100/80 leading-relaxed">Accurate, professional handling of every process in compliance with the latest regulations, ensuring success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group hover:-translate-y-2 cursor-pointer">
            {/* Sliding Background Animation */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-[#0f2c59] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
            
            <div className="relative z-10">
              <Target className="w-14 h-14 text-[#0ea5e9] mb-8 group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
              <h3 className="text-2xl font-black tracking-wide text-[#0f2c59] mb-6 group-hover:text-white transition-colors duration-500">OUR MISSION</h3>
              <p className="text-gray-600 leading-loose text-[15px] group-hover:text-blue-50 transition-colors duration-500">
                To become Qatar's most trusted business services provider by delivering reliable, transparent, and end-to-end solutions for company formation, PRO services, government approvals, visa processing, documentation, and corporate support. We are committed to simplifying complex procedures, ensuring regulatory compliance, and enabling our clients to focus on growing their businesses with confidence.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group hover:-translate-y-2 cursor-pointer">
            {/* Sliding Background Animation */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-[#0ea5e9] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
            
            <div className="relative z-10">
              <Eye className="w-14 h-14 text-[#0f2c59] mb-8 group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
              <h3 className="text-2xl font-black tracking-wide text-[#0ea5e9] mb-6 group-hover:text-white transition-colors duration-500">OUR VISION</h3>
              <p className="text-gray-600 leading-loose text-[15px] group-hover:text-sky-50 transition-colors duration-500">
                To be the leading business solutions partner in Qatar, recognized for excellence, innovation, and customer satisfaction. We strive to empower entrepreneurs, investors, corporations, and individuals through professional services that create long-term value, foster sustainable business growth, and contribute to Qatar's evolving business ecosystem.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Our Process */}
      <section className="py-24 bg-[#0f2c59] text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 text-[#0ea5e9] font-bold tracking-[0.2em] text-sm mb-6 uppercase">
                <span className="w-2 h-2 bg-[#0ea5e9] rounded-full"></span> OUR PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Our Process: <span className="text-[#0ea5e9]">Simple.</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0ea5e9] leading-tight">
                Transparent. Efficient
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pt-8 text-blue-100/90 text-lg leading-relaxed lg:pl-12">
              From consultation to completion, we simplify every step to get your business and personal goals moving forward—quickly, transparently, and professionally.
            </div>
          </div>

          {/* Cards Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Curved SVG Arrows (Hidden on Mobile) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              {/* Arrow 1: Card 1 to Card 2 (Top down curve) */}
              <svg className="absolute left-[22%] top-[10%] w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,20 Q60,20 80,70" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M65,65 L80,70 L75,55" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>

              {/* Arrow 2: Card 2 to Card 3 (Bottom up curve) */}
              <svg className="absolute left-[47%] bottom-[5%] w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,80 Q50,80 80,30" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M65,35 L80,30 L75,45" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>

              {/* Arrow 3: Card 3 to Card 4 (Top down curve) */}
              <svg className="absolute left-[72%] top-[10%] w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,20 Q60,20 80,70" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M65,65 L80,70 L75,55" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Step Cards */}
            {[
              {
                step: "Step 01",
                title: "Consultation & Requirement Analysis",
                desc: "We begin by understanding your business objectives or personal requirements. Our experts assess your eligibility, documentation, timelines, and legal requirements to recommend the most suitable solution."
              },
              {
                step: "Step 02",
                title: "Customized Planning & Documentation",
                desc: "Based on your requirements, we prepare a clear action plan outlining the process, required documents, estimated timelines, government procedures, and associated costs—ensuring complete transparency before execution begins."
              },
              {
                step: "Step 03",
                title: "Processing & Government Coordination",
                desc: "Our experienced team manages the complete process, including applications, approvals, documentation, PRO services, and coordination with relevant government authorities to ensure fast, compliant, and hassle-free execution."
              },
              {
                step: "Step 04",
                title: "Delivery & Ongoing Support",
                desc: "Once your service is completed, we continue to support you with renewals, compliance requirements, amendments, business expansion, and additional corporate or government services whenever needed."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white/10 rounded-[2rem] p-8 border border-white/5 backdrop-blur-md relative z-10 transition-transform hover:-translate-y-2
                  ${idx % 2 === 1 ? 'lg:mt-24' : 'lg:mb-24'}
                `}
              >
                <div className="text-white font-bold mb-8">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 pr-4">{item.title}</h3>
                <p className="text-blue-100/90 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Company Profile PDF Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0f2c59] to-[#1e3a8a] rounded-[2rem] p-10 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0ea5e9]/20 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          
          {/* Text Content */}
          <div className="relative z-10 text-center md:text-left flex-1">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Official Documents
            </h3>
            <p className="text-blue-100/90 text-lg max-w-2xl mb-10 leading-relaxed">
              Get a detailed overview of our services, mission, and how MSA Trading & Services can help your business thrive in Qatar. Explore our success stories and comprehensive business solutions.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="/aaa108b6-016e-4774-823a-e41539c9d600.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.5)] hover:-translate-y-1 group/btn text-lg inline-flex"
              >
                <Download size={24} className="group-hover/btn:animate-bounce" />
                Download PDF
              </a>
            </div>
          </div>
          
          {/* Images Collage */}
          <div className="relative z-10 shrink-0 w-full md:w-[45%] flex justify-center items-center h-64 sm:h-80 lg:h-96 mt-10 md:mt-0 perspective-1000">
            {/* Image 3 (Back) */}
            <img src="/3.png" alt="Profile Page 3" className="absolute w-36 sm:w-48 lg:w-56 h-auto rounded-xl shadow-2xl transform rotate-12 translate-x-16 translate-y-4 group-hover:rotate-[15deg] group-hover:translate-x-24 transition-all duration-700 border-4 border-white/20" />
            {/* Image 2 (Middle) */}
            <img src="/2.png" alt="Profile Page 2" className="absolute w-36 sm:w-48 lg:w-56 h-auto rounded-xl shadow-2xl transform -rotate-6 -translate-x-12 translate-y-2 group-hover:-rotate-[10deg] group-hover:-translate-x-20 transition-all duration-700 border-4 border-white/40 z-10" />
            {/* Image 1 (Front) */}
            <img src="/1.png" alt="Profile Page 1" className="absolute w-40 sm:w-56 lg:w-64 h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform z-20 group-hover:scale-110 transition-all duration-700 border-4 border-white" />
          </div>
        </div>
      </section>
      


    </div>
  );
};

export default About;
