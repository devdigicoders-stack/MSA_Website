import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, bgImage }) => {
  const defaultBg = '/slide2.png';
  const finalBg = bgImage || defaultBg;

  // Custom title formatting based on the page
  const mainTitle = title === 'Contact Us' ? 'Get In Touch With MSA' : title;

  return (
    <div className="bg-white px-2 pt-5 sm:px-4 lg:px-4">
      <section 
        className="relative h-[calc(70vh-1rem)] min-h-[484px] flex flex-col items-center justify-center overflow-hidden rounded-[2rem] shadow-xl"
        style={{
          backgroundImage: `url('${finalBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Background Overlay - Dark Green like in screenshot */}
        <div className="absolute inset-0 bg-[#063a30]/90"></div>

        <div className="max-w-[90rem] mx-auto text-center relative z-10 px-4 mt-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-xl uppercase leading-tight">
            <span className="text-white">{mainTitle}</span>
            <span className="block mt-0 md:mt-1 text-[#009b4d]">BUSINESS SERVICES</span>
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-bold mt-6">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">Home</Link>
            <span className="text-white">/</span>
            <span className="text-[#009b4d]">{title}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
