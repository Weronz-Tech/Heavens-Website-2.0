import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiOutlineMapPin, HiArrowUpRight } from 'react-icons/hi2';
import { FiChevronRight } from 'react-icons/fi';

const ContactCard = ({ icon, title, info, link }) => (
    <motion.div
        className="border border-gray-100 rounded-xl p-6 md:p-8 bg-cream-50 hover:shadow-lg transition-all duration-300 h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
    >
        <div className="flex flex-col h-full">
            <div className="text-gold-500 text-3xl mb-4">{icon}</div>
            <h3 className="text-xl md:text-2xl font-light mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-500 mb-4 flex-1">{info}</p>
            <Link
                to={link}
                className="group inline-flex items-center text-gold-600 hover:text-gold-800 transition-colors duration-300 text-sm md:text-base mt-auto"
            >
                {title === 'Visit Us' ? 'Get Directions' : title === 'Call Us' ? 'Call Now' : 'Send Message'}
                <FiChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
        </div>
    </motion.div>
);

const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        setIsSubmitting(true); // show loading
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
    };

    return (
        <motion.div
            className="bg-cream-50 rounded-xl p-6 md:p-8 lg:p-10 shadow-sm"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
        >
            <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-800">Send Us a Message</h3>
            <form
                action="https://formsubmit.co/heavensliving@gmail.com"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
            >
                {/* Hidden fields for config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://192.168.1.65:3002/thank-you" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-600 text-sm mb-2">Name</label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all duration-300"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all duration-300"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="contact" className="block text-gray-600 text-sm mb-2">Contact</label>
                        <input
                            name="contact"
                            type="number"
                            id="number"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all duration-300"
                            placeholder="Contact Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-gray-600 text-sm mb-2">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all duration-300"
                            placeholder="How can we help?"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-600 text-sm mb-2">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all duration-300"
                        placeholder="Your message..."
                    ></textarea>
                </div>

                {/* Submit button with loading */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-[#631930] px-4 py-2 rounded-md font-semibold cursor-pointer text-white flex items-center gap-2 transition-opacity duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </div>
            </form>

        </motion.div>
    );
};

const ContactUs = () => {
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
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ffff] to-transparent"></div>
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
                                Contact Heavens Living
                            </motion.div>
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 md:mb-8 text-gray-900"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="block font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#631930]">Connect</span>
                                <span className="block">With</span>
                                <span className="block">Heavens Living</span>
                                <span className="block">We’re Here for You</span>
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
                                Have a question or need more information? Send us your queries and our team will get back to you as soon as possible — we're here to help make your journey with Heavens Living seamless and inspiring.
                            </motion.p>
                            <motion.div
                                className="mt-8 md:mt-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <Link
                                    to="/properties"
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

            {/* Contact Methods Section */}
            <section className="bg-cream-100 mb-20">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl">
                        <ContactCard
                            icon={<HiOutlinePhone className="inline-block text-2xl" />}
                            title="Call Us"
                            info="Instant connection with one tap"
                            link="tel:+919876543210"
                        />
                        <ContactCard
                            icon={<HiOutlineMapPin className="inline-block text-2xl" />}
                            title="Visit Us"
                            info="Open in Maps for navigation guidance"
                            link="https://maps.app.goo.gl/qgmHs7o1MRHtxHzd7"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form + Map Section */}
            <section className="bg-cream-50 mb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>

                        {/* Map */}
                        <motion.div
                            className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.830839094549!2d77.64838797454391!3d12.789489918845844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b102129bec7%3A0x269e46f969a347c0!2sHeavens%20Living%20-%20Flora%20Inn!5e0!3m2!1sen!2sin!4v1745399780578!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-xl"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;