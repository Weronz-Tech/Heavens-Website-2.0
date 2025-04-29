import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590490360189-055fe2d568f6?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-gold-600 text-xs md:text-sm uppercase tracking-widest mb-4 font-medium">
            Experience The Divine Lifestyle
          </p>
          <h2 className="text-gray-900 text-3xl md:text-5xl font-light leading-snug mb-6 md:mb-8 text-white">
            <span className="block font-serif italic">Crafted for Elegance,</span>
            <span className="block">Designed for You</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12 text-white">
            Whether you're searching for a sanctuary to call home or a space for meaningful moments,
            Heavens Living offers more than just luxury — it’s a lifestyle that defines true value.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors duration-300 text-sm md:text-base"
          >
            Connect with Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
