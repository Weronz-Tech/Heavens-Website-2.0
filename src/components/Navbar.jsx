import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/images/heavens-red.png";

const Navbar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const linksRef = useRef([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.2,
        }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power4.in",
      });
    }
  }, [sidebarOpen]);

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
      link.style.transform = "translate(0px, 0px)";
    };

    return (
      <Link
        to={to}
        ref={linkRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setSidebarOpen(false)}
        className="relative group inline-block transition-transform duration-300 ease-out"
      >
        <span
          className={`text-[#631930] transition-colors duration-300 ${
            isActive ? "font-bold" : "font-semibold"
          }`}
        >
          {children}
        </span>
        <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-2 h-2 bg-[#631930] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    );
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Explore", path: "/properties" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/heavensliving/" },
    { name: "Justdial ", url: "https://jsdl.in/DT-154KJ7ALJJF" },
    { name: "Facebook", url: "#" },
  ];

  return (
    <>
      {/* Navbar Top */}
      <div className="bg-opacity-0 p-4 fixed top-0 left-0 right-0 z-50 md:px-6 px-2 mt-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <img src={logo} alt="Heavens Living Logo" className="h-6 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="space-x-[80px] hidden md:flex items-center">
            <MagneticNavLink to="/">Home</MagneticNavLink>
            <MagneticNavLink to="/about">About</MagneticNavLink>
            <MagneticNavLink to="/properties">Explore</MagneticNavLink>
            <MagneticNavLink to="/contact">Contact</MagneticNavLink>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="relative w-12 h-12 bg-[#631930] rounded-full flex flex-col justify-center items-center transition-transform duration-300"
            >
              <span
                className={`absolute bg-white h-[1px] w-5 rounded transition-all duration-300 ${
                  sidebarOpen ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute bg-white h-[1px] w-5 rounded transition-all duration-300 ${
                  sidebarOpen ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full bg-[#1c1d20] text-white translate-x-full z-40 p-8 md:hidden flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center space-y-12 w-full">
          {/* Navigation */}
          <div className="space-y-8 text-center">
            <div className="text-xs tracking-widest text-gray-400 mb-6">
              NAVIGATION
            </div>
            <div className="flex flex-col space-y-6 text-3xl font-light">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  ref={(el) => (linksRef.current[index] = el)}
                  onClick={() => setSidebarOpen(false)}
                  className="relative group"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
            
          {/* Horizontal Line */}
          <hr className="w-3/4 border-gray-600" />
            
          {/* Socials */}
          <div className="text-center">
            <div className="text-xs tracking-widest text-gray-400 mb-4">
              SOCIALS
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-base">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Sidebar Background Blur */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
