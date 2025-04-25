import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { HiOutlineMapPin } from 'react-icons/hi2';

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
            <h3 className="text-2xl font-light mb-4">
              <span className="font-serif italic">Heavens</span> Living
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting exceptional living experiences through timeless design and unparalleled service.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook className="w-5 h-5" />, link: "#" },
                { icon: <FiInstagram className="w-5 h-5" />, link: "#" },
                { icon: <FiTwitter className="w-5 h-5" />, link: "#" },
                { icon: <FiLinkedin className="w-5 h-5" />, link: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
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
                { name: "Properties", link: "/properties" },
                { name: "Services", link: "/services" },
                { name: "About Us", link: "/about" },
                { name: "Testimonials", link: "/testimonials" },
                { name: "Investment", link: "/investment" }
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <FiArrowRight className="mr-2 w-3 h-3" /> {item.name}
                  </Link>
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
                <span className="text-gray-400">info@heavensliving.com</span>
              </li>
              <li className="flex items-start">
                <HiOutlinePhone className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <HiOutlineMapPin className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Flora Inn, Bangalore<br />
                  Karnataka, India
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ y: 20 }}
            animate={hasAnimated ? { y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-medium mb-6 text-gold-500">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive property updates and investment opportunities.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-white px-4 rounded-r-lg transition-colors duration-300"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &copy; {currentYear} Heavens Living. All rights reserved.
          </motion.p>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;