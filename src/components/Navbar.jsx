import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const location = useLocation();

  const MagneticNavLink = ({ to, children }) => {
    const linkRef = useRef(null);
    const isActive = location.pathname === to;
  
    const handleMouseMove = (e) => {
      const link = linkRef.current;
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      link.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };
  
    const handleMouseLeave = () => {
      const link = linkRef.current;
      link.style.transform = 'translate(0px, 0px)';
    };
  
    return (
      <Link
        to={to}
        ref={linkRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group inline-block transition-transform duration-300 ease-out"
      >
        <span
          className={`text-black transition-colors duration-300 ${
            isActive ? 'font-bold' : 'font-semibold'
          }`}
        >
          {children}
        </span>
        {/* Dot below the text */}
        <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    );
  };

  return (
    <div className="bg-opacity-0 p-4 absolute top-0 left-0 right-0 z-10 mt-3 px-10">
    <div className="flex items-center justify-between">
      <div className="text-black text-2xl font-bold">
        MyApp
      </div>
      <div className="space-x-8 flex items-center">
        <MagneticNavLink to="/">Home</MagneticNavLink>
        <MagneticNavLink to="/about">About</MagneticNavLink>
        <MagneticNavLink to="/explore-properties">Explore</MagneticNavLink>
        <MagneticNavLink to="/contact">Contact</MagneticNavLink>
        <span className="bg-black p-2 px-3 rounded-full font-semibold text-white">
          Book Now
        </span>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
