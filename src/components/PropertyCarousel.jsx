import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PropertyCarousel = ({ property }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Fix: Prevent touch events from being captured by carousel
    const handleTouchMove = (e) => {
        e.stopPropagation();
    };

    return (
        <div onTouchMove={handleTouchMove}> {/* Wrapper div to handle touch events */}
            <Carousel
                autoPlay
                interval={4000}
                stopOnHover
                showThumbs={true}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                className="carousel-container"
                swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
            >
                {property.images.map((media, index) => (
                    <div
                        key={index}
                        className={`relative h-[250px] ${property.fiveSharing ? 'lg:h-[385px]' : 'lg:h-[290px]'}`}
                        onTouchStart={(e) => e.stopPropagation()} // Additional touch handler
                    >
                        {media.type === 'video' ? (
                            <div className="relative h-full">
                                <ReactPlayer
                                    url={media.url}
                                    playing={isPlaying}
                                    width="100%"
                                    height="100%"
                                    controls={false}
                                    style={{ pointerEvents: 'none' }}
                                />
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    style={{ pointerEvents: 'auto' }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-4 text-white"
                                >
                                    {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                                </button>
                            </div>
                        ) : (
                            <img
                                src={media.url}
                                alt={`${property.name} ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                        )}
                    </div>
                ))}
            </Carousel>
            <style jsx>{`
                .carousel-container {
                    touch-action: pan-y; /* Critical fix for scroll */
                }
                .carousel-container .thumbs-wrapper {
                    margin: 0;
                    padding: 10px 0;
                }
                .carousel-container .thumb {
                    border: none;
                    border-radius: 8px;
                    padding: 0;
                    margin: 0 5px;
                }
                .carousel-container .thumb.selected {
                    border: 2px solid #631930;
                }
                .carousel-container .slide {
                    touch-action: pan-y; /* Allows vertical scrolling */
                }
            `}</style>
        </div>
    );
};

export default PropertyCarousel;