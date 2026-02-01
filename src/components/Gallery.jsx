import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';

// Import only necessary Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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

const Gallery = () => {
    // Memoized configuration for best performance
    const swiperConfig = useMemo(() => ({
        modules: [Pagination, Autoplay, A11y],
        spaceBetween: 24, // Tighter spacing for larger images
        loop: true,
        speed: 800,
        grabCursor: true,
        // Removed centeredSlides for desktop to allow strictly 3 items if preferred, 
        // but centered looks better. Keeping it but ensuring layout fits 3.
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            // Mobile: 1 big slide
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                centeredSlides: true,
            },
            // Tablet: 2 slides
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false, // Standard carousel feel on tablet
            },
            // Desktop: STRICTLY 3 slides as requested
            1024: {
                slidesPerView: 3,
                spaceBetween: 30, // Gap between the 3 images
                centeredSlides: false, // Standard layout showing 3 full items
            }
        },
        // Performance attributes
        observer: true,
        observeParents: true,
    }), []);

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-sage-light)', overflow: 'hidden' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <p className="script-font" style={{ color: 'var(--color-sage)' }}>Moments</p>
                <h2>Our Happiness</h2>
            </div>

            <div className="gallery-carousel-wrapper" style={{ paddingBottom: '1rem', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
                <Swiper
                    {...swiperConfig}
                    style={{
                        paddingBottom: '3.5rem',
                        '--swiper-theme-color': 'var(--color-sage)',
                        '--swiper-pagination-bullet-inactive-color': '#adb5bd',
                        '--swiper-pagination-bullet-inactive-opacity': '0.5'
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} style={{ height: 'auto', display: 'flex', justifyContent: 'center' }}>
                            <div
                                style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    // Completely removed box-shadow for maximum fps
                                    // Use a subtle border instead if separation is needed
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    aspectRatio: '3/4',
                                    position: 'relative',
                                    width: '100%',
                                    // Max width removed to let it fill the slide (making them bigger)
                                    // Only constrained by the container/slidesPerView
                                    transform: 'translateZ(0)',
                                    willChange: 'transform'
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        backfaceVisibility: 'hidden'
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
