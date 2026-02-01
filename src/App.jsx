import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeModal from './components/WelcomeModal';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';

// Optimizing performance: Lazy load below-the-fold content
// This ensures the initial "Hero" load is as fast as possible
const EventSection = lazy(() => import('./components/EventSection'));
const Gallery = lazy(() => import('./components/Gallery'));
const Gifts = lazy(() => import('./components/Gifts'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    const [entered, setEntered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleEnter = (withMusic) => {
        setEntered(true);
        if (withMusic) {
            setIsPlaying(true);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!entered && <WelcomeModal onEnter={handleEnter} />}
            </AnimatePresence>

            <div style={{
                opacity: entered ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: entered ? 'auto' : 'none'
            }}>
                {/* Hero is critical, render normally */}
                <Hero />

                {/* Lazy load the rest */}
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
