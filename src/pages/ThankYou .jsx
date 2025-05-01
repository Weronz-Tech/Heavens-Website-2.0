import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
            <motion.div
                className="text-center bg-white p-10 rounded-xl shadow-md max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-light text-gold-600 mb-4">Thank You!</h1>
                <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We’ll be in touch with you soon.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-[#631930] text-white px-5 py-2 rounded-md transition duration-300"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default ThankYou;
