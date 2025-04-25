import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/images/heavens-red.png";

const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

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
        onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
        className="relative group inline-block transition-transform duration-300 ease-out"
      >
        <span
          className={`text-black transition-colors duration-300 ${isActive ? 'font-bold' : 'font-semibold'
            }`}
        >
          {children}
        </span>
        <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    );
  };

  // sidebar animation
  useEffect(() => {
    if (isSidebarOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isSidebarOpen]);

  return (
    <>
      {/* Navbar Top */}
      <div className="bg-opacity-0 p-4 fixed top-0 left-0 right-0 z-50 px-10 mt-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Heavens Living Logo" className="h-6 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="space-x-8 hidden md:flex items-center">
            <MagneticNavLink to="/">Home</MagneticNavLink>
            <MagneticNavLink to="/about">About</MagneticNavLink>
            <MagneticNavLink to="/explore-properties">Explore</MagneticNavLink>
            <MagneticNavLink to="/contact">Contact</MagneticNavLink>
            <span className="bg-black p-2 px-3 rounded-full font-semibold text-white">
              Book Now
            </span>
          </div>

          {/* Hamburger - Mobile */}
          <button
            className="md:hidden block focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      {isSidebarOpen && (
        <div ref={sidebarRef} className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-6">
          <button className="self-end mb-6 text-2xl" onClick={() => setIsSidebarOpen(false)}>
            &times;
          </button>
          <MagneticNavLink to="/">Home</MagneticNavLink>
          <MagneticNavLink to="/about">About</MagneticNavLink>
          <MagneticNavLink to="/explore-properties">Explore</MagneticNavLink>
          <MagneticNavLink to="/contact">Contact</MagneticNavLink>
          <span className="bg-black p-2 px-3 rounded-full font-semibold text-white w-fit">
            Book Now
          </span>
        </div>
      )}
    </>
  );
};

export default Navbar;
