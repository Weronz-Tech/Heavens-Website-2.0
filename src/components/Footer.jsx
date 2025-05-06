import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FaArrowUp, FaPlaneDeparture } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Ref + InView Hook
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // 👈 Trigger only once
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="relative">
      <motion.footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand Column */}
            <motion.div
              initial={{ y: 20 }}
              animate={hasAnimated ? { y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-medium mb-6 text-gold-500">
                Heavens Living
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Crafting exceptional living experiences through timeless design and unparalleled service.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <FiFacebook className="w-5 h-5" />, link: "#", title: "Facebook" },
                  {
                    icon: <FiInstagram className="w-5 h-5" />, link: "https://www.instagram.com/heavensliving?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    title: "Instagram"
                  },
                  {
                    icon: <FiPhoneCall className="w-5 h-5" />,
                    link: "https://jsdl.in/DT-154KJ7ALJJF",
                    title: "Justdial"
                  },
                  {
                    icon: <FaPlaneDeparture className="w-5 h-5" />,
                    link: "https://www.makemytrip.com/hotels/heavens_living.html",
                    title: "MakeMyTrip"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    title={social.title}
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ y: 20 }}
              animate={hasAnimated ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-medium mb-6 text-gold-500">Explore</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", link: "/about" },
                  { name: "Testimonials", link: "/about#testimonials" }, // Link to Testimonials section
                  { name: "Our Properties", link: "/properties" },
                  { name: "Blog", link: null, comingSoon: true }, // Blog section with Coming Soon
                  { name: "Life at Heaves Living", link: "/gallery/moments" },
                ].map((item, index) => (
                  <motion.li key={index}>
                    {item.link ? (
                      <NavLink
                        to={item.link}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                        activeClassName="text-white" // Active link style
                      >
                        <FiArrowRight className="mr-2 w-3 h-3" /> {item.name}
                      </NavLink>
                    ) : (
                      <span className="text-gray-400 flex items-center">
                        <FiArrowRight className="mr-2 w-3 h-3" /> {item.name}
                        {item.comingSoon && (
                          <span className="ml-2 text-yellow-500 text-xs font-semibold border py-1 px-2 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 20 }}
              animate={hasAnimated ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-medium mb-6 text-gold-500">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <HiOutlineMail className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">heavensliving@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <HiOutlinePhone className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+91 8660796594</span>
                </li>
                <li className="flex items-start">
                  <HiOutlineMapPin className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">
                    Sannidhi Layout, Bande Nalla Sandra<br />
                    Jigani, Bommasandra, Anekal<br />
                    Bangalore, India
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Crafted by Weronz Tech */}
            <motion.div
              initial={{ y: 20 }}
              animate={hasAnimated ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-medium mb-6 text-gold-500">Crafted With Passion</h4>
              <p className="text-gray-400  leading-relaxed text-sm">
                This experience is proudly designed and developed
                <br />
                <span className="weronz-gradient-text font-bold text-base">Weronz Tech</span> —
                A passionate team crafting innovative user experiences.
              </p>
              <em className='text-gray-400 mb-4 leading-relaxed text-sm'>“We transform your ideas into unique web projects that inspire both you and your customers”</em> <br />
              <a
                href="https://www.weronz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-xs px-4 py-2 mt-2 rounded-full font-semibold shadow-md bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out"
              >
                Visit Weronz Tech
              </a>
            </motion.div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-center items-center">

            <motion.p
              className="text-gray-500 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              &copy; {currentYear} Heavens Living. All rights reserved.
            </motion.p>
          </div>
        </div>
      </motion.footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer absolute bottom-38 right-[7.2px] z-50 p-3 rounded-full border border-white hover:bg-white hover:text-gray-900 text-white transition-colors duration-300 text-sm md:text-base"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Footer;