import React, { useEffect } from 'react';

const images = [
    '/images/A&J (2).webp',
    '/images/A&J (5).webp',
    '/images/A&J (10).webp',
    '/images/A&J (79).webp',
    '/images/A&J (104).webp',
    '/images/A&J (120).webp',
    '/images/A&J (78).webp',
    '/images/A&J (107).webp',
    '/images/A&J (113).webp'
];

// Duplicate images to create simple seamless loop
const allImages = [...images, ...images, ...images];

const Gallery = () => {

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-sage-light)', overflow: 'hidden' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <p className="script-font" style={{ color: 'var(--color-sage)' }}>Moments</p>
                <h2>Our Happiness</h2>
            </div>

            <div className="carousel-container" style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33%); } /* Move 1/3 since we tripled content */
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite; /* Slow consistent scroll */
                        display: inline-flex;
                        gap: 1.5rem;
                        padding-left: 1.5rem;
                    }
                    /* Pause on hover interaction */
                    .carousel-container:hover .animate-scroll,
                    .carousel-container:active .animate-scroll {
                        animation-play-state: paused;
                    }
                `}} />

                <div
                    className="animate-scroll"
                    style={{
                        // Layout inline
                    }}
                >
                    {allImages.map((img, index) => (
                        <div
                            key={index}
                            style={{
                                width: '300px', // Fixed width for predictable layout
                                height: '450px',
                                flexShrink: 0,
                                borderRadius: '12px',
                                overflow: 'hidden',
                                position: 'relative',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index}`}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    pointerEvents: 'none'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional manual scroll hint replaced by infinite instruction or hidden */}
        </section>
    );
};

export default Gallery;
