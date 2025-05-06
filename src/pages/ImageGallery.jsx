import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const ImageGallery = () => {
    const galleries = {
        moments: [
            { id: 1, src: 'https://i.pinimg.com/1200x/66/2c/de/662cde61ec3f2d0d9fe1dfb24752b7a0.jpg', caption: "Community celebrations" },
            { id: 2, src: 'https://i.pinimg.com/1200x/e6/e9/b9/e6e9b9fdfeff9f7df592ca9e6536c21b.jpg', caption: "Festive gatherings" },
            { id: 3, src: 'https://i.pinimg.com/1200x/9f/2e/53/9f2e536f715ab684eaaf3fc153784e9e.jpg', caption: "Shared meals" },
            { id: 4, src: 'https://i.pinimg.com/1200x/4c/29/00/4c2900c41ea2d4d3c0f2da8cc4fa6893.jpg', caption: "Recreational activities" },
            { id: 5, src: 'https://i.pinimg.com/1200x/39/14/64/3914640839f31b30a16106ef73183e6f.jpg', caption: "Outdoor events" },
            { id: 6, src: 'https://i.pinimg.com/1200x/79/b2/58/79b258ca9311a36ef73399665cc1af4f.jpg', caption: "Cultural programs" }
        ],
        wellness: [
            { id: 1, src: 'https://i.pinimg.com/1200x/b2/92/fa/b292fa95375196285699ace8ce160d43.jpg', caption: "Yoga sessions" },
            { id: 2, src: 'https://i.pinimg.com/1200x/5f/19/45/5f19456ccf462467bdffab5100eed0fb.jpg', caption: "Meditation circle" },
            { id: 3, src: 'https://i.pinimg.com/1200x/1b/ce/ba/1bceba89f6558e8b0506819bbe246f61.jpg', caption: "Fitness activities" },
            { id: 4, src: 'https://i.pinimg.com/1200x/1c/51/27/1c5127b9eba90a8f582e38bafd072d34.jpg', caption: "Nutrition workshops" },
            { id: 5, src: 'https://i.pinimg.com/1200x/34/63/1b/34631b313f845edf8ec8e78ac1fac19e.jpg', caption: "Wellness retreats" },
            { id: 6, src: 'https://i.pinimg.com/1200x/11/f6/64/11f664848a0304276c146f57db6c43b1.jpg', caption: "Mindfulness programs" }
        ]
    };

    const allImages = [...galleries.moments, ...galleries.wellness];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev

    const currentImage = allImages[currentIndex];

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const goNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const goPrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const goToImage = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    // Swipe gestures for mobile
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            goNext();
        }
        if (touchStart - touchEnd < -50) {
            goPrev();
        }
    };

    const renderGallerySection = (title, images, startIndexOffset) => {
        const isLivingWellSection = title === 'Living well, every step of the way';
        const isGlimpseSection = title === 'A Glimpse Into Our Beautiful Spaces';

        return (
            <div className="mb-16">
                <SEO
                    title="PG Gallery | Heaves Living"
                    description="View photos of our PG rooms, common areas, and amenities at Heaves Living. Explore the space before you book."
                    keywords="PG images, Heaves Living photos, PG gallery, Boys PG pictures, Girls PG pictures"
                />
                <motion.h2
                    className="text-3xl md:text-5xl mb-8 text-center font-light leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isLivingWellSection ? (
                        <>
                            <span className="italic text-[#631930] font-serif">Living well</span>,{' '}
                            <span>
                                every <br className="block md:hidden" />
                                step of the way
                            </span>
                        </>
                    ) : isGlimpseSection ? (
                        <>
                            A <span className="italic text-[#631930] font-serif">Glimpse</span> Into Our{' '}
                            <span className="italic text-[#631930] font-serif">Beautiful</span>{' '}
                            <span>Spaces</span>
                        </>
                    ) : (
                        <span className="text-[#631930]">{title}</span>
                    )}
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((item, index) => (
                        <motion.div
                            key={`${title}-${item.id}`}
                            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            onClick={() => openLightbox(startIndexOffset + index)}

                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.caption}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-[#faf6f2] pt-20 pb-16 px-4 sm:px-6">
                {/* Moments Section */}
                {renderGallerySection('Living well, every step of the way', galleries.moments, 0)}

                {/* Wellness Section */}
                {renderGallerySection('A Glimpse Into Our Beautiful Spaces', galleries.wellness, galleries.moments.length)}

                {/* Lightbox Modal */}
                <AnimatePresence custom={direction}>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-white hover:text-[#631930] transition-colors duration-200"
                            >
                                <XMarkIcon className="w-10 h-10" />
                            </button>

                            <button
                                onClick={goPrev}
                                className="absolute left-4 md:left-6 text-white hover:text-[#631930] p-2 transition-colors duration-200"
                            >
                                <ArrowLeftIcon className="w-10 h-10" />
                            </button>

                            <button
                                onClick={goNext}
                                className="absolute right-4 md:right-6 text-white hover:text-[#631930] p-2 transition-colors duration-200"
                            >
                                <ArrowRightIcon className="w-10 h-10" />
                            </button>

                            <motion.div
                                className="relative max-w-5xl w-full mx-4 transform scale-[0.74] md:scale-90 lg:scale-100"
                                custom={direction}
                                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                transition={{ duration: 0.3 }}
                                key={currentIndex}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                                    <img
                                        src={currentImage.src}
                                        alt={currentImage.caption}
                                        className="w-full max-h-[80vh] object-contain rounded-lg"
                                    />
                                </div>

                                <div className="text-center mt-6">
                                    <p className="text-xl text-white font-medium">{currentImage.caption}</p>
                                    <div className="flex justify-center items-center mt-4 space-x-2">
                                        {allImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToImage(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-[#631930] w-6' : 'bg-white/30'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-white/70 mt-2">
                                        {currentIndex + 1} of {allImages.length}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <CTA />
        </>
    );
};

export default ImageGallery;