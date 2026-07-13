import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { X, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const clientsData = [
  { id: 1, name: 'SLR SQUARE Trading', image: '/qatar_building.png' },
  { id: 2, name: 'Green Associates Builders', image: '/slide2.png' },
  { id: 3, name: 'Miminicenailpro Salon', image: '/slide1.png' },
  { id: 4, name: 'WHALE I Trading LLC', image: '/slide2.png' },
  { id: 5, name: 'ANUPOM Trading', image: '/slide1.png' },
  { id: 6, name: 'Velvet Roast Trading', image: '/slide2.png' },
];

const ClientTemplate = ({ client, isModal = false }) => {
  return (
    <div className={`relative bg-white ${isModal ? 'p-6 sm:p-8' : 'p-6'} flex flex-col h-full shadow-sm border border-gray-100`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e3a8a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Header (Only in Modal) */}
      {isModal && (
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10 relative z-10">
          <span className="font-bold text-gray-800 tracking-wide">www.msatrading.qa</span>
          <img src="/logo.png" alt="MSA Trading Logo" className="h-12 object-contain" />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative w-full z-10 flex-grow flex justify-center">
        {/* Photo Only */}
        <div className="relative w-[95%] max-w-xl h-[200px] sm:h-[300px]">
           <div className="absolute inset-0 bg-gray-100 overflow-hidden shadow-lg border-4 sm:border-[6px] border-white">
              <img src={client.image} alt={client.name} className="w-full h-full object-cover object-center" />
           </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 relative z-10">
         <div className="bg-gradient-to-r from-[#1e3a8a] to-[#009b4d] text-white px-10 py-3.5 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow cursor-default">
           Thank you for trusting MSA Trading
         </div>
      </div>

      {/* Footer (Only in Modal) */}
      {isModal && (
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6 relative z-10 text-sm font-semibold text-[#1e3a8a]">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white shrink-0">
               <Phone size={18}/>
             </div>
             <div>
               <p>+974 3000 1016</p>
               <p>+974 4437 0221</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white shrink-0">
               <MapPin size={18}/>
             </div>
             <p className="text-gray-600">Al Muthanna Complex<br/>Salwa Road, Doha, Qatar</p>
          </div>
          <div className="flex flex-col gap-3">
             <span className="font-bold text-lg">msatrading.qa</span>
             <div className="flex gap-3 text-white">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0a66c2] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedClient) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedClient]);

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = clientsData.findIndex(c => c.id === selectedClient.id);
    const nextIndex = (currentIndex + 1) % clientsData.length;
    setSelectedClient(clientsData[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = clientsData.findIndex(c => c.id === selectedClient.id);
    const prevIndex = (currentIndex - 1 + clientsData.length) % clientsData.length;
    setSelectedClient(clientsData[prevIndex]);
  };

  return (
    <div>
      <HeroSection 
        title="Our Gallery" 
      />
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        
        {/* 3 Images per row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {clientsData.map((client) => (
            <div 
              key={client.id}
              className="cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 bg-white p-4 shadow-sm border border-gray-100 hover:shadow-xl"
              onClick={() => setSelectedClient(client)}
            >
               <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img src={client.image} alt={client.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1e3a8a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="bg-white text-[#1e3a8a] px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</span>
                  </div>
               </div>
               <div className="mt-5 mb-2 px-2 text-center">
                 <h3 className="font-bold text-lg text-[#1e3a8a] line-clamp-1">{client.name}</h3>
               </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Fixed Template View */}
      {selectedClient && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Dark Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setSelectedClient(null)}></div>
          
          {/* Outside Close Button */}
          <button 
            className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/10 hover:bg-red-500 hover:border-red-500 text-white rounded-full p-3 z-50 transition-all duration-300 shadow-lg border border-white/20"
            onClick={() => setSelectedClient(null)}
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          {/* Outside Prev Button */}
          <button 
            className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full p-3 lg:p-4 z-50 transition-all duration-300 shadow-lg border border-white/20"
            onClick={handlePrev}
          >
            <ChevronLeft size={36} strokeWidth={2.5} />
          </button>

          {/* Outside Next Button */}
          <button 
            className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full p-3 lg:p-4 z-50 transition-all duration-300 shadow-lg border border-white/20"
            onClick={handleNext}
          >
            <ChevronRight size={36} strokeWidth={2.5} />
          </button>

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300 shadow-2xl">
            <ClientTemplate client={selectedClient} isModal={true} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
