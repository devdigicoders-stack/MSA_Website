import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = "97430001016"; 
  const message = encodeURIComponent("Hello! I'm interested in MSA Trading & Services.");
  
  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-2 font-semibold">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button - Bottom Left (Above WhatsApp) */}
      <a
        href={`tel:+${phoneNumber}`}
        className="fixed bottom-[6.5rem] left-6 bg-white text-[#0f2c59] p-4 rounded-full shadow-xl hover:bg-gray-100 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group border border-gray-200"
        aria-label="Call Us"
      >
        <Phone size={28} fill="currentColor" strokeWidth={1} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-2 font-semibold">
          Call Us
        </span>
      </a>
    </>
  );
};

export default FloatingButtons;
