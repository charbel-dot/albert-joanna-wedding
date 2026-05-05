import React, { useState, Suspense, lazy, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import WelcomeModal from './components/WelcomeModal';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import HeartLoader from './components/HeartLoader';
import Gallery from './components/Gallery'; // Eager load Gallery to ensure component is ready

// Optimizing performance: Lazy load below-the-fold content, except Gallery which we want ready
// This ensures the initial "Hero" load is as fast as possible
const EventSection = lazy(() => import('./components/EventSection'));
const RSVP = lazy(() => import('./components/RSVP'));
const Gifts = lazy(() => import('./components/Gifts'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [entered, setEntered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleLoad = async () => {
            try {
                // Minimum display time so the heart loader doesn't flash
                const minTimePromise = new Promise(resolve => setTimeout(resolve, 1600));

                // Wait for the window to be fully loaded (HTML + critical resources)
                const windowLoadPromise = new Promise((resolve) => {
                    if (document.readyState === 'complete') {
                        resolve();
                    } else {
                        window.addEventListener('load', resolve, { once: true });
                    }
                });

                // Wait for fonts to be ready (prevents FOUT)
                const fontLoadPromise = document.fonts.ready;

                await Promise.all([minTimePromise, windowLoadPromise, fontLoadPromise]);
            } catch (error) {
                console.error('Loading error:', error);
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
                            <RSVP />
                            <Gifts />
                            <Footer />
                        </>
                    )}
                </Suspense>
            </div>

            {entered && (
                <MusicPlayer isPlaying={isPlaying} togglePlay={() => setIsPlaying(!isPlaying)} />
            )}

            <Analytics />
        </>
    );
}

export default App;
