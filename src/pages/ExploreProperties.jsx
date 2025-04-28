import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { GoArrowUpRight } from 'react-icons/go';
import { FaMale, FaFemale } from 'react-icons/fa';

const PropertyCard = ({
    name,
    location,
    description,
    imageUrl,
    amenities,
    price,
    id,
    preferredBy
}) => (

    <motion.div
        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
    >
        <div className="aspect-w-16 aspect-h-9 h-96 w-full relative overflow-hidden">
            {/* Property Image */}
            <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />

            {/* Preferred by tag - with z-index */}
            <div
                className={`absolute top-4 right-4 flex items-center ${preferredBy === 'boys' ? 'bg-blue-500/90' : 'bg-pink-500/90'
                    } backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-20`}
            >
                {preferredBy === 'boys' ? (
                    <>
                        <FaMale className="text-white w-4 h-4" />
                        <span className="text-white text-sm font-medium">Preferred by Boys</span>
                    </>
                ) : (
                    <>
                        <FaFemale className="text-white w-4 h-4" />
                        <span className="text-white text-sm font-medium">Preferred by Girls</span>
                    </>
                )}
            </div>

            {/* Price Tag - responsive */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm z-20">
                <div className="flex items-baseline">
                    <span className="text-gold-600 text-xs font-medium mr-1">Starting at</span>
                    <span className="text-gold-600 font-medium">
                        ₹{price.toLocaleString('en-IN')}
                        <span className="hidden md:inline text-xs">/month</span>
                        <span className="md:hidden text-xs">/mo*</span>
                    </span>
                </div>
            </div>

            {/* Explore button - with highest z-index and click handling */}
            <div className="absolute bottom-4 right-4 z-30">
                <Link
                    to={`/properties/${id}`}
                    className="group"
                    onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                >
                    <motion.div
                        className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                    >
                        <GoArrowUpRight
                            size={20}
                            className="text-gray-800 group-hover:text-gold-600 transition-colors duration-300"
                        />
                    </motion.div>
                </Link>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light mb-1">{name}</h3>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-300 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-gray-300 font-medium">{location}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-gray-200 mb-4 line-clamp-2 font-light">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {amenities.slice(0, 5).map((amenity, index) => (
                        <motion.span
                            key={index}
                            className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                            whileHover={{ scale: 1.05 }}
                        >
                            {amenity}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const ExploreProperties = () => {
    const properties = [
        {
            id: 'flora-inn',
            name: "Flora Inn",
            location: "Bangalore, Karnataka",
            description: "Flora Inn blends timeless aesthetics with modern essentials—designed for students and professionals seeking a stylish, peaceful, and connected place to live",
            imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
            amenities: ["Customized Rooms", "Healthy Food", "Fitness Center", "24*7 Gate Open"],
            price: 6500,
            preferredBy: 'boys'
        },
        {
            id: 'bloom-inn',
            name: "Bloom Inn",
            location: "Bangalore, Karnataka",
            description: "Bloom Inn redefines modern living with effortless elegance—a harmonious blend of style, comfort, and convenience designed for students and professionals seeking a refined retreat.",
            imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80",
            amenities: ["Fully Furnished Rooms", "Free Wi-Fi", "CCTV", "Security", "Laundrette"],
            price: 6500,
            preferredBy: 'girls'
        }
    ];

    return (
        <>
            <section className="py-20 md:py-28 bg-cream-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium">
                            Luxury Living
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 text-gray-900">
                            <span className="font-serif italic text-[#631930]">Discover</span> Our Exclusive Properties
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} {...property} />
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </>
    );
};

export default ExploreProperties;