import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiMapPin, FiPhone, FiShare2, FiLink } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaMale, FaFemale } from 'react-icons/fa';
import Modal from 'react-modal';
import { properties } from '../utils/properties';
import PropertyCarousel from '../components/PropertyCarousel';
import CTA from '../components/CTA';
import MarqueeRow from '../components/MarqueeRow';

Modal.setAppElement('#root');

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(prop => prop.id === id);
    const [linkCopied, setLinkCopied] = useState(false);

    if (!property) {
        return <div>Property not found</div>;
    }

    const openMap = () => {
        window.open(`${property.map}`);
    };

    const openCall = () => {
        window.open(`tel:${property.contact.phone}`);
    };

    const alternateItems = (items) => {
        const amenities = items.filter(item => item.type === 'amenity');
        const services = items.filter(item => item.type === 'service');

        const result = [];
        const maxLength = Math.max(amenities.length, services.length);

        for (let i = 0; i < maxLength; i++) {
            if (i < amenities.length) result.push(amenities[i]);
            if (i < services.length) result.push(services[i]);
        }

        return result;
    };

    const mixedItems = property.amenities
        .map((amenity) => ({
            type: 'amenity',
            data: amenity,
        }))
        .concat(
            property.services.map((service) => ({
                type: 'service',
                data: service,
            }))
        )
        .sort((a, b) => a.data.name.localeCompare(b.data.name));

    const alternatedItems = alternateItems(mixedItems);

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mt-18 lg:pl-4 lg:pr-4"
            >
                {/* Property Header */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white py-6"
                >
                    <div className="container mx-auto px-4 space-y-4">
                        {/* Row 1: Name + Share */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-between items-center"
                        >
                            {/* Name and PreferredBy Tag */}
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
                                    {property.name}
                                </h1>

                                {property.preferredBy === 'Boys' ? (
                                    <span className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                                        <FaMale className="w-4 h-4" />
                                        Preferred by Boys
                                    </span>
                                ) : (
                                    <span className="flex items-center bg-pink-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                                        <FaFemale className="w-4 h-4" />
                                        Preferred by Girls
                                    </span>
                                )}
                            </div>

                            {/* Share Button */}
                            <motion.div
                                variants={itemVariants}
                                className="relative group inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                <button className="flex items-center justify-center p-3 rounded-full transition-colors cursor-pointer">
                                    <FiShare2 size={20} />
                                </button>

                                {/* Dropdown */}
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 overflow-hidden">
                                    <div className="py-2 px-3">
                                        <button
                                            onClick={() =>
                                                window.open(
                                                    `https://wa.me/?text=Check out ${property.name} at ${window.location.href}`,
                                                    '_blank'
                                                )
                                            }
                                            className="flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm text-gray-700 cursor-pointer"
                                        >
                                            <FaWhatsapp className="mr-3 text-green-500" />
                                            Share via WhatsApp
                                        </button>

                                        <button
                                            onClick={() =>
                                                window.open(
                                                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                                                    '_blank'
                                                )
                                            }
                                            className="cursor-pointer flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm text-gray-700"
                                        >
                                            <FaFacebook className="mr-3 text-blue-600" />
                                            Share on Facebook
                                        </button>

                                        {linkCopied && (
                                            <div className="absolute right-10 bg-black text-white text-xs mt-2 rounded-md px-2 py-1 shadow-md animate-fade-in z-30">
                                                copied!
                                            </div>
                                        )}

                                        <button
                                            onClick={async () => {
                                                try {
                                                    await navigator.clipboard.writeText(window.location.href);
                                                } catch (err) {
                                                    const input = document.createElement('input');
                                                    input.value = window.location.href;
                                                    document.body.appendChild(input);
                                                    input.select();
                                                    document.execCommand('copy');
                                                    document.body.removeChild(input);
                                                }

                                                setLinkCopied(true);
                                                setTimeout(() => setLinkCopied(false), 1000);
                                            }}
                                            className="cursor-pointer flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm text-gray-700"
                                        >
                                            <FiLink className="mr-3 text-gray-600" />
                                            Copy Link
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center text-gray-600 mb-4"
                        >
                            <FiMapPin className="mr-2 hidden sm:block" />
                            <span>{property.location}</span>
                        </motion.div>

                        {/* Row 2: Description + Map and Contact Button */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col md:flex-row justify-between md:items-center gap-4"
                        >
                            <p className="text-lg text-gray-700 max-w-3xl">{property.description}</p>

                            {/* Show on Map and Contact - Only visible on md and above */}
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={openMap}
                                    className="hidden md:flex items-center justify-center gap-2 cursor-pointer bg-[#631930] text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm"
                                >
                                    <FiMapPin />
                                    Show on Map
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={openCall}
                                    className="hidden md:flex items-center justify-center gap-2 cursor-pointer bg-[#631930] text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm"
                                >
                                    <FiPhone />
                                    Contact
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Row 3: Map and Contact Buttons for Mobile */}
                        <motion.div
                            variants={itemVariants}
                            className="md:hidden flex gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openMap}
                                className="w-1/2 flex items-center justify-center gap-2 bg-black cursor-pointer text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm"
                            >
                                <FiMapPin />
                                Show on Map
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openCall}
                                className="w-1/2 flex items-center justify-center gap-2 bg-black cursor-pointer text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm"
                            >
                                <FiPhone />
                                Contact
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="container mx-auto px-4">
                    {/* First Row - Media and Key Info */}
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-col lg:flex-row gap-12 mb-16"
                    >
                        {/* Left Column - Carousel */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full sm:w-[400px] md:w-[600px] lg:w-[800px]"
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-xl border border-gray-100">
                                <PropertyCarousel property={property} />
                            </div>
                        </motion.div>

                        {/* Right Column - Key Information */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full sm:w-[400px] md:w-[600px] lg:w-[800px]"
                        >
                            <div className="sticky top-8 space-y-8">
                                {/* Pricing & Occupancy Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white p-6 rounded-xl shadow-xl border border-gray-100"
                                >
                                    <div className="space-y-4">
                                        <div>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-2xl font-medium text-gray-900 mb-1"
                                            >
                                                Starts from {property.startingPrice}
                                            </motion.p>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="text-sm text-gray-500"
                                            >
                                                Starting price shown is indicative, final pricing may vary based on room occupancy, personalized services, and added features
                                            </motion.p>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="pt-4 border-t border-gray-100"
                                        >
                                            <h4 className="text-lg font-medium text-gray-900 mb-3">Available Occupancies</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* Single Occupancy */}
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="border border-gray-200 rounded-lg p-4 hover:border-[#631930] transition-colors"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-medium text-gray-900">Single Occupancy</h5>
                                                            <p className="text-sm text-gray-500">Private room</p>
                                                        </div>
                                                        <span className="text-lg font-semibold text-[#631930]">{property.oneSharing}</span>
                                                    </div>
                                                </motion.div>

                                                {/* Double Occupancy */}
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="border border-gray-200 rounded-lg p-4 hover:border-[#631930] transition-colors"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-medium text-gray-900">Double Occupancy</h5>
                                                            <p className="text-sm text-gray-500">2 sharing</p>
                                                        </div>
                                                        <span className="text-lg font-semibold text-[#631930]">{property.twoSharing}</span>
                                                    </div>
                                                </motion.div>

                                                {/* Triple Occupancy */}
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="border border-gray-200 rounded-lg p-4 hover:border-[#631930] transition-colors"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-medium text-gray-900">Triple Occupancy</h5>
                                                            <p className="text-sm text-gray-500">3 sharing</p>
                                                        </div>
                                                        <span className="text-lg font-semibold text-[#631930]">{property.threeSharing}</span>
                                                    </div>
                                                </motion.div>

                                                {/* Quad Occupancy */}
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="border border-gray-200 rounded-lg p-4 hover:border-[#631930] transition-colors"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-medium text-gray-900">Quad Occupancy</h5>
                                                            <p className="text-sm text-gray-500">4 sharing</p>
                                                        </div>
                                                        <span className="text-lg font-semibold text-[#631930]">{property.fourSharing}</span>
                                                    </div>
                                                </motion.div>
                                                {/* Five Sharing - Only show if available */}
                                                {property.fiveSharing && (
                                                    <motion.div
                                                        whileHover={{ y: -5 }}
                                                        className="border border-gray-200 rounded-lg p-4 hover:border-[#631930] transition-colors"
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h5 className="font-medium text-gray-900">Five Sharing</h5>
                                                                <p className="text-sm text-gray-500">5 sharing</p>
                                                            </div>
                                                            <span className="text-lg font-semibold text-[#631930]">{property.fiveSharing}</span>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="container mx-auto mb-16"
                    >
                        {/* 🔹 Centered Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-light text-gray-900">
                                Living Amenities & Services
                            </h2>
                        </div>

                        {/* 🔹 Mixed Amenities and Services */}
                        <div>
                            {/* 🔸 Mobile: Marquee-style horizontal scroll in 2 rows */}
                            <div className="block md:hidden space-y-3">
                                <MarqueeRow
                                    items={alternatedItems.slice(0, Math.ceil(alternatedItems.length / 4))}
                                    direction="left"
                                />
                                <MarqueeRow
                                    items={alternatedItems.slice(Math.ceil(alternatedItems.length / 4), Math.ceil(alternatedItems.length / 2))}
                                    direction="right"
                                />
                                <MarqueeRow
                                    items={alternatedItems.slice(Math.ceil(alternatedItems.length / 2), Math.ceil((3 * alternatedItems.length) / 4))}
                                    direction="left"
                                />
                                <MarqueeRow
                                    items={alternatedItems.slice(Math.ceil((3 * alternatedItems.length) / 4))}
                                    direction="right"
                                />
                            </div>

                            {/* 🔸 Desktop: Original flex-wrap layout */}
                            <div className="hidden md:flex md:flex-wrap gap-4">
                                {alternatedItems.map((item, index) => {
                                    const isAmenity = item.type === 'amenity';
                                    const classes = isAmenity
                                        ? 'bg-gray-50 border border-gray-100 text-gray-700'
                                        : 'bg-[#f1e3e7] border border-red-100 text-[#631930]';

                                    return (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-sm text-sm ${classes}`}
                                        >
                                            {item.data.icon}
                                            <span>{item.data.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="w-full mt-16"
                    >
                        {/* Section Heading - Centered & Outside Box */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-light text-gray-800">
                                Dine the Week in Style
                            </h2>
                        </div>

                        {/* Content Box */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 mb-20">
                            {/* Responsive Scrollable Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            {['Day', 'Breakfast', 'Lunch', 'Dinner'].map((heading, i) => (
                                                <th
                                                    key={i}
                                                    className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap"
                                                >
                                                    {heading}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {property.weeklyMenu.map((day, index) => (
                                            <motion.tr
                                                key={index}
                                                whileHover={{ backgroundColor: 'rgba(249,250,251,1)' }}
                                                className="transition-colors duration-200"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {day.day}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {day.breakfast}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {day.lunch}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {day.dinner}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 text-sm text-gray-500 italic">
                                * Menu items may vary slightly based on seasonal availability
                            </div>
                        </div>
                    </motion.section>

                </div>
            </motion.div>
            <CTA />
        </>
    );
};

export default PropertyDetails;