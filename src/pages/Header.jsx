import CTA from '../components/CTA';
import video from '../assets/videos/heavens-video.mp4';
import { useRef } from 'react';

const Header = () => {

  const MagneticButton = ({ children, onClick, className }) => {
    const buttonRef = useRef(null);
  
    const handleMouseMove = (e) => {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };
  
    const handleMouseLeave = () => {
      const button = buttonRef.current;
      button.style.transform = "translate(0px, 0px)";
    };
  
    return (
      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-block transition-transform duration-300 ease-out ${className}`}
      >
        {children}
      </button>
    );
  };

  
  return (
    <>
      <section className="bg-white h-screen relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover rotate-[-90deg]"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101828] to-transparent"></div>
        </div>

        {/* Content on top of video */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h2
            className="text-2xl md:text-4xl font-semibold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Where <span className="italic">Luxury</span> Meets
          </h2>
          <h1
            className="text-4xl md:text-6xl font-semibold mt-2 italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Heavenly Living
          </h1>

          {/* Book Now Button */}
          <MagneticButton
            className="mt-14 px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-[#101828] transition-all duration-300"
          >
            Book Now
          </MagneticButton>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Header;
