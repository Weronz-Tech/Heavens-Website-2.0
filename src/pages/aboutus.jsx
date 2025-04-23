import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';

const ServiceItem = ({ number, title, description }) => (
  <motion.div
    className="border-t border-gray-200 py-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-start justify-between group cursor-pointer">
      <div>
        <div className="text-gray-500 mb-2">{number}</div>
        <h3 className="text-4xl text-gray-400 group-hover:text-black transition-colors duration-300">{title}</h3>
        <p className="mt-4 text-gray-600 max-w-2xl">
          {description}
        </p>
      </div>
      <motion.div
        className="text-gray-400 group-hover:text-black transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <HiArrowUpRight className="w-6 h-6" />
      </motion.div>
    </div>
  </motion.div>
);

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Layout */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-blue-600 mb-4"
              {...fadeIn}
            >
              <Link to="/about" className="text-lg hover:underline">About Us</Link>
            </motion.div>
            <motion.h1 
              className="text-6xl font-bold leading-tight mb-8"
              {...fadeIn}
            >
              Synergizing Success
              <br />
              As Your Digital
              <br />
              Transformation
              <br />
              Partner
            </motion.h1>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed mb-8"
              {...fadeIn}
            >
              Here's a transformative journey with us, where innovation converges with expertise. 
              Our saga began in the realm of IT, crafting solutions that redefine possibilities. 
              With a commitment to excellence, we navigate the digital landscape, delivering 
              bespoke IT services and solutions. We don't just provide services; we script 
              success stories. Join us in sculpting a future where technology knows no bounds, 
              and businesses flourish in the digital era.
            </motion.p>
            <motion.div 
              className="mt-8"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/about" 
                className="text-blue-600 text-lg font-medium hover:underline"
              >
                About us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <motion.div 
                className="text-blue-600 mb-4"
                {...fadeIn}
              >
                <span className="text-lg">Our Service</span>
              </motion.div>
              <motion.h2 
                className="text-5xl font-bold mb-12"
                {...fadeIn}
              >
                Services That Redefine Excellence!
              </motion.h2>
              
              {/* Isometric Illustration */}
              <motion.div
                className="relative w-64 h-64 mx-auto lg:mx-0 mb-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <g transform="translate(40, 40)">
                    {/* Base layers */}
                    <path d="M0 80 L60 40 L120 80 L60 120 Z" fill="#f3f4j1" />
                    <path d="M0 60 L60 20 L120 60 L60 100 Z" fill="#e5e7eb" />
                    <path d="M0 40 L60 0 L120 40 L60 80 Z" fill="#d1d5db" />
                    {/* Blue cube on top */}
                    <path d="M40 20 L60 10 L80 20 L60 30 Z" fill="#2563yu" />
                  </g>
                </svg>
              </motion.div>
            </div>

            {/* Right Column - Services List */}
            <div>
              <ServiceItem 
                number="01"
                title="Imagine"
                description="As an IT solutions leader driven by imagination and innovation, we begin every partnership by collaborating with our clients to envisage future possibilities. Through an initial discovery and technology visualization process guided by our expert consultants, we help you imagine!"
              />
              <ServiceItem 
                number="02"
                title="Innovate"
                description="Our teams pair technical expertise with an innate understanding of real-world business workflows to craft IT services & solutions that enable meaningful progress."
              />
              <ServiceItem 
                number="03"
                title="Excel"
                description="We enable enterprises to achieve excellence and fully capitalize on IT investments - whether through strategic alignment, user enablement, or complete management."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-green-900 font-sui"
            {...fadeIn}
          >
            What Our Clients Say About Us!
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-lg text-gray-700 italic mb-6">
              "Working with us was a great experience. Our team is talented, creative, 
              and dedicated to delivering high-quality work. I couldn't be happier with the outcome."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <h4 className="font-bold text-green-900">Atly K Joseph</h4>
                <p className="text-gray-600">Founder of Atly.Design</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 text-center bg-green-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-8 font-sui"
          {...fadeIn}
        >
          Have a cool Project?
        </motion.h2>
        <motion.button 
          className="bg-green-200 text-green-900 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AboutUs;
