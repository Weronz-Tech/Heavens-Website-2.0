import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import galleries from '../utils/galleries';

const ImageGallery = () => {
    // Separate promotional images (sunpack posters) from regular gallery images
    const promotionalImages = galleries.promotions || [];
    const galleryImages = [...galleries.moments, ...galleries.wellness, ...galleries.events];
    const allImages = [...promotionalImages, ...galleryImages];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [direction, setDirection] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');

    const currentImage = allImages[currentIndex];

    // Filter images based on active category
    const getFilteredImages = () => {
        switch (activeCategory) {
            case 'events': return galleries.events;
            case 'moments': return galleries.moments;
            case 'wellness': return galleries.wellness;
            case 'promotions': return promotionalImages;
            default: return galleryImages;
        }
    };

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

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) goNext();
        if (touchStart - touchEnd < -50) goPrev();
    };

    const PromotionalCarousel = () => {
        const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

        useEffect(() => {
            if (promotionalImages.length > 1) {
                const interval = setInterval(() => {
                    setCurrentPromoIndex(prev => (prev + 1) % promotionalImages.length);
                }, 5000);
                return () => clearInterval(interval);
            }
        }, [promotionalImages.length]);

        if (promotionalImages.length === 0) return null;

        return (
            <div className="relative mb-16 overflow-hidden rounded-xl shadow-xl bg-black">
                <div className="relative h-64 md:h-96 w-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPromoIndex}
                            className="w-full h-full flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Mobile: Show full image with possible empty space */}
                            <img
                                src={promotionalImages[currentPromoIndex].src}
                                alt={promotionalImages[currentPromoIndex].caption}
                                className="w-full h-full object-contain md:hidden"
                            />

                            {/* Desktop: Show full height but limit width to maintain proportions */}
                            <img
                                src={promotionalImages[currentPromoIndex].src}
                                alt={promotionalImages[currentPromoIndex].caption}
                                className="hidden md:block h-full w-auto max-w-full"
                                style={{
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl md:text-2xl font-medium">
                            {promotionalImages[currentPromoIndex].caption}
                        </h3>
                    </div>

                    {promotionalImages.length > 1 && (
                        <>
                            <button
                                onClick={() => setCurrentPromoIndex(prev => (prev - 1 + promotionalImages.length) % promotionalImages.length)}
                                className="absolute left-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                            >
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setCurrentPromoIndex(prev => (prev + 1) % promotionalImages.length)}
                                className="absolute right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                            >
                                <ArrowRightIcon className="w-6 h-6" />
                            </button>
                            <div className="absolute bottom-4 right-4 flex space-x-2">
                                {promotionalImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPromoIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentPromoIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    const renderGallerySection = (title, images, startIndexOffset) => {
        const isEventsSection = title === 'Festive Cheer & Lasting Bonds';
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
                    ) : isEventsSection ? (
                        <>
                            <span className="italic text-[#631930] font-serif">Festive Cheer</span> &{' '}
                            <span className="italic text-[#631930] font-serif">Lasting Bonds</span>
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
                            initial={{ opacity: 0, y: 20 }}
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
                {/* Promotional Carousel */}
                <PromotionalCarousel />

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-6 cursor-pointer py-2 rounded-full transition-all ${activeCategory === 'all' ? 'bg-[#631930] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveCategory('moments')}
                        className={`px-6 cursor-pointer py-2 rounded-full transition-all ${activeCategory === 'moments' ? 'bg-[#631930] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        Living Well
                    </button>
                    <button
                        onClick={() => setActiveCategory('wellness')}
                        className={`px-6 cursor-pointer py-2 rounded-full transition-all ${activeCategory === 'wellness' ? 'bg-[#631930] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        Our Spaces
                    </button>
                    <button
                        onClick={() => setActiveCategory('events')}
                        className={`px-6 cursor-pointer py-2 rounded-full transition-all ${activeCategory === 'events' ? 'bg-[#631930] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        Events
                    </button>
                </div>

                {/* Render appropriate gallery based on active category */}
                {activeCategory === 'all' && (
                    <>
                        {renderGallerySection('Festive Cheer & Lasting Bonds', galleries.events, promotionalImages.length + galleries.moments.length + galleries.wellness.length)}
                        {renderGallerySection('Living well, every step of the way', galleries.moments, promotionalImages.length)}
                        {renderGallerySection('A Glimpse Into Our Beautiful Spaces', galleries.wellness, promotionalImages.length + galleries.moments.length)}
                    </>
                )}
                {activeCategory === 'events' && renderGallerySection('Festive Cheer & Lasting Bonds', galleries.events, 0)}
                {activeCategory === 'moments' && renderGallerySection('Living well, every step of the way', galleries.moments, 0)}
                {activeCategory === 'wellness' && renderGallerySection('A Glimpse Into Our Beautiful Spaces', galleries.wellness, 0)}

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