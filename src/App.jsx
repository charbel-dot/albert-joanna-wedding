import React, { useState, Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeModal from './components/WelcomeModal';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import HeartLoader from './components/HeartLoader';
import Gallery from './components/Gallery'; // Eager load Gallery to ensure component is ready

// Optimizing performance: Lazy load below-the-fold content, except Gallery which we want ready
// This ensures the initial "Hero" load is as fast as possible
const EventSection = lazy(() => import('./components/EventSection'));
const Gifts = lazy(() => import('./components/Gifts'));
const Footer = lazy(() => import('./components/Footer'));

const galleryImages = [
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

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [entered, setEntered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Start preloading images immediately when the app mounts (in the background)
        const preloadHeaders = async () => {
            const promises = galleryImages.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if one fails
                });
            });
            await Promise.all(promises);
        };

        // Fire off preloading but don't block the main loader timer
        preloadHeaders();

        // Simulate loading time or wait for resources (e.g., 2.5 seconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const handleEnter = (withMusic) => {
        setEntered(true);
        if (withMusic) {
            setIsPlaying(true);
        }
    };

    return (
        <>
            <AnimatePresence mode='wait'>
                {isLoading && <HeartLoader key="loader" />}
            </AnimatePresence>

            <AnimatePresence>
                {!isLoading && !entered && <WelcomeModal onEnter={handleEnter} />}
            </AnimatePresence>

            <div style={{
                opacity: entered ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: entered ? 'auto' : 'none',
                // Keep content in DOM but hidden to allow pre-rendering if needed, 
                // though opacity 0 is usually enough.
            }}>
                {/* Hero is critical, render normally */}
                <Hero />

                {/* Eager load Gallery but keep others lazy if preferred. 
                    However, user wants "everything loading one time". 
                    Since we preloaded images, rendering Gallery now is fine.
                */}
                <Suspense fallback={<div style={{ height: '100px' }}></div>}>
                    {entered && (
                        <>
                            <EventSection />
                            <Gallery />
                            <Gifts />
                            <Footer />
                        </>
                    )}
                </Suspense>
            </div>

            {entered && (
                <MusicPlayer isPlaying={isPlaying} togglePlay={() => setIsPlaying(!isPlaying)} />
            )}
        </>
    );
}

export default App;
