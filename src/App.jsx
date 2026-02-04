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
        const handleLoad = async () => {
            try {
                // 1. Minimum wait time to prevent flashing (2.5s)
                const minTimePromise = new Promise(resolve => setTimeout(resolve, 2500));

                // 2. Wait for all critical images
                const imagePromises = galleryImages.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = resolve;
                        img.onerror = resolve; // Continue even if error
                    });
                });
                const imagesLoadedPromise = Promise.all(imagePromises);

                // 3. Wait for the window to be fully loaded
                const windowLoadPromise = new Promise((resolve) => {
                    if (document.readyState === 'complete') {
                        resolve();
                    } else {
                        window.addEventListener('load', resolve, { once: true });
                    }
                });

                // 4. Wait for fonts to be ready
                const fontLoadPromise = document.fonts.ready;

                // Wait for ALL conditions to be met
                await Promise.all([
                    minTimePromise,
                    imagesLoadedPromise,
                    windowLoadPromise,
                    fontLoadPromise
                ]);
            } catch (error) {
                console.error("Loading error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleLoad();
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
