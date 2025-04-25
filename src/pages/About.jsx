import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FiChevronRight } from 'react-icons/fi';
import CTA from '../components/CTA'

const ServiceItem = ({ number, title, description }) => (
  <motion.div
    className="border-t border-gray-100 py-6 md:py-8 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    <Link to="#" className="block">
      <div className="flex items-start justify-between group-hover:opacity-75 transition-opacity duration-300">
        <div className="flex-1">
          <div className="text-gold-500 mb-1 md:mb-2 font-mono text-xs md:text-sm tracking-wider">{number}</div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 group-hover:text-gold-500 transition-colors duration-500">
            {title}
          </h3>
          <p className="mt-2 md:mt-4 text-gray-500 max-w-2xl leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
        <motion.div
          className="text-gray-300 group-hover:text-gold-500 transition-colors duration-500 flex items-center ml-4"
          whileHover={{ x: 5 }}
        >
          <FiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-cream-50/80 to-cream-50"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            {/* Left Column */}
            <motion.div variants={fadeIn}>
              <motion.div
                className="text-gold-500 mb-4 md:mb-6 uppercase tracking-wider text-xs md:text-sm font-medium"
                {...fadeIn}
              >
                About Heavens Living
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 md:mb-8 text-gray-900"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Elevating</span>
                <span className="block">Luxury Living</span>
                <span className="block">To Divine</span>
                <span className="block">Perfection</span>
              </motion.h1>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                At Heavens Living, we don't just build properties - we craft sanctuaries.
                Founded with a vision to redefine premium living, our journey has been
                guided by uncompromising standards, exquisite attention to detail, and
                a passion for creating spaces that inspire.
              </motion.p>
              <motion.div
                className="mt-8 md:mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link
                  to="/explore-properties"
                  className="group inline-flex items-center text-gold-600 hover:text-gold-800 transition-colors duration-300 text-base md:text-lg"
                >
                  Explore Our Properties
                  <HiArrowUpRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <motion.div
              className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium"
              {...fadeIn}
            >
              Our Philosophy
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-gray-900"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Where <span className="font-serif italic">Elegance</span> Meets <span className="font-serif italic">Essence</span>
            </motion.h2>
            <motion.p
              className="text-gray-500 text-base md:text-lg leading-relaxed"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              We believe true luxury lies in the harmony of design, comfort, and soul.
              Each Heavens Living property is a testament to this philosophy, blending
              architectural brilliance with thoughtful amenities that elevate everyday living.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              {
                title: "Timeless Design",
                description: "Our properties feature classic architectural elements fused with contemporary sophistication.",
                icon: "🏛️"
              },
              {
                title: "Uncompromising Quality",
                description: "From foundation to finishes, we accept nothing less than perfection in materials and craftsmanship.",
                icon: "✨"
              },
              {
                title: "Thoughtful Living",
                description: "Every space is designed to enhance daily life, promoting both comfort and inspiration.",
                icon: "🧘"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div>
              <motion.div
                className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium"
                {...fadeIn}
              >
                Signature Services
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 text-gray-900"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                <span className="font-serif italic">Exceptional</span> Experiences, <span className="font-serif italic">Tailored</span> For You
              </motion.h2>

              {/* Luxury Illustration */}
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 mb-8 md:mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-gold-300 rounded-xl md:rounded-2xl rotate-3"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center rounded-xl md:rounded-2xl shadow-xl transform -rotate-1"></div>
              </motion.div>
            </div>

            {/* Right Column - Services List */}
            <div>
              <ServiceItem
                number="01"
                title="Luxury Residences"
                description="Discover our curated collection of premium residences, each offering unparalleled comfort, security, and amenities designed for discerning homeowners."
              />
              <ServiceItem
                number="02"
                title="Concierge Services"
                description="Our dedicated concierge team provides white-glove service, from property maintenance to lifestyle management, ensuring effortless living."
              />
              <ServiceItem
                number="03"
                title="Investment Opportunities"
                description="Partner with us for exclusive real estate investments in prime locations, backed by our reputation for excellence and value appreciation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium">Testimonials</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-gray-900">
              <span className="font-serif italic">Voices</span> of Our <span className="font-serif italic">Residents</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                quote: "Living in a Heavens Living property has been transformative. The attention to detail in every corner of my home makes each day feel special.",
                author: "Sarah J.",
                role: "Resident since 2020"
              },
              {
                quote: "As an investor, I've found Heavens Living properties consistently appreciate in value while maintaining the highest standards of luxury.",
                author: "Michael T.",
                role: "Investor Partner"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 p-6 md:p-8 rounded-lg md:rounded-xl"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-gold-500 text-3xl md:text-4xl mb-3 md:mb-4">"</div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg italic mb-4 md:mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-cream-200 pt-4 md:pt-6">
                  <h4 className="font-medium text-gray-800 text-base md:text-lg">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default About;