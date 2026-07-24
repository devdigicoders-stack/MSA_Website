import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const generateDescription = (title) => {
    return `Starting or managing aspects of "${title}" in Qatar can feel overwhelming, but with MSA Trading and Services, the process becomes simple and efficient. We provide expert guidance through every step, from choosing the right legal structure to completing documentation and obtaining necessary approvals. Our team ensures that your request is processed smoothly, saving you valuable time and effort. With years of experience, we handle the complexities so you can focus on growing your business. Whether you're an entrepreneur or a large organization, our reliable support makes the process seamless, secure, and fully compliant with local laws and regulations.`;
  };

  const serviceList = [
    { title: "Company Formation",                                img: "/service-images/Company Formation.png" },
    { title: "100% Foreign Ownership Company Registration",      img: "/service-images/100 Foreign Ownership.png" },
    { title: "Qatari Sponsorship",                               img: "/service-images/Qatari Sponsorship.png" },
    { title: "Document Clearance (Typing Application Forms)",    img: "/service-images/Document Clearance (Typing App Form).png" },
    { title: "Corporate Bank Account Opening",                   img: "/service-images/Corporate Bank Account.png" },
    { title: "Salary Transfer of Company Staff (WPS)",           img: "/service-images/Salary Transfer of Company (WPS).png" },
    { title: "Municipality (Baladiya) Works",                    img: "/service-images/Municipality (Baladiya) Works.png" },
    { title: "Embassy Services",                                 img: "/service-images/Embassy Services.png" },
    { title: "Translation Service (All Kinds of Documents)",     img: "/service-images/Translation Service.png" },
    { title: "Hukoomi Services",                                 img: "/service-images/Hukoomi Services.png" },
    { title: "All Kinds of PRO Works",                           img: "/service-images/All Kind of PRO Works.png" },
    { title: "Job Application (Online)",                         img: "/service-images/Job Application Online.png" },
    { title: "Office Space",                                     img: "/service-images/Office Space.png" },
    { title: "Document Attestation (All Kinds of Certificates)", img: "/service-images/Document Attestation.png" },
    { title: "School Admission and Registration",                img: "/service-images/School Admission & Registration.png" },
    { title: "Passport Renewal (India, Bangladesh, Nepal)",      img: "/service-images/Passport Renewal.png" },
    { title: "Metrash 2 Services",                               img: "/service-images/Metrash 2 Services.png" },
    { title: "Electricity Registration and Cancellation",        img: "/service-images/Electricity Registration.png" },
    { title: "All Kind of Approvals for Business Formation",     img: "/service-images/All Kind of Approvals for Business.png" },
    { title: "Zakat Application",                                img: "/service-images/Zakat Application.png" },
    { title: "CV and Cover Letter Writing",                      img: "/service-images/CV and Cover letter.png" },
    { title: "Marriage Certificate and Attestation & Qazi",      img: "/service-images/Marriage Certificate and Attestation.png" },
    { title: "Birth Certificate Service (Born in Qatar)",        img: "/service-images/Birth Certificate Service.png" },
    { title: "Travel, Vehicle Insurance and Renew Istimara",     img: "/service-images/Travel, Vehicle Insurance.png" },
  ].map(s => ({
    ...s,
    description: generateDescription(s.title)
  }));

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection 
        title="Our Services" 
        subtitle="Complete end-to-end support under one roof for your business and personal needs in Qatar."
      />
      
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-[#0f2c59] mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From company formation to specialized individual services, we handle all the complexities so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedService(service)}
              className="bg-white p-5 sm:p-6 shadow-md hover:shadow-[0_30px_60px_-15px_rgba(15,44,89,0.4)] transition-all duration-500 border border-gray-100 group flex flex-col cursor-pointer transform hover:-translate-y-4 min-h-[360px] relative overflow-hidden"
            >
              
              {/* Sliding Background Animation */}
              <div className="absolute left-0 bottom-0 w-full h-full bg-[#0f2c59] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title Section (Top) */}
                <div className="mb-4 flex-grow">
                  <h3 className="font-bold text-[#0f2c59] group-hover:text-white text-[18px] leading-tight transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Image Section (Bottom) */}
                <div className="h-48 sm:h-52 lg:h-[220px] w-full overflow-hidden relative shrink-0 shadow-sm border border-white/10 bg-white">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out p-2" 
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0f2c59]/20 transition-colors duration-500 z-10"></div>
                  
                  {/* Hover Arrow Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                      <ArrowRight className="text-[#0ea5e9] w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-300">
          {/* Dark Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-[#0f2c59] w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-red-400 bg-white/10 hover:bg-white/20 p-2 z-50 transition-colors"
              onClick={() => setSelectedService(null)}
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Left Image Section */}
            <div className="w-full md:w-5/12 h-64 md:h-auto shrink-0 relative p-4 md:p-6">
              <div className="w-full h-full overflow-hidden shadow-inner relative">
                <img 
                  src={selectedService.img} 
                  alt={selectedService.title} 
                  className="w-full h-full object-contain bg-white rounded-l-md md:rounded-none" 
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pr-8 leading-tight">
                {selectedService.title}
              </h2>
              
              <p className="text-blue-100/90 text-[15px] sm:text-base leading-relaxed mb-10">
                {selectedService.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <Link 
                  to="/contact"
                  className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[#0ea5e9]/50 hover:-translate-y-1"
                >
                  Free Consultation <ArrowRight size={18} />
                </Link>
                
                <Link 
                  to="/contact"
                  className="text-white hover:text-[#0ea5e9] font-semibold flex items-center gap-2 transition-colors group"
                >
                  See More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
