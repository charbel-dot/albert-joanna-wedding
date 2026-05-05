import React, { useState, Suspense, lazy, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import WelcomeModal from './components/WelcomeModal';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import HeartLoader from './components/HeartLoader';
import Gallery from './components/Gallery';

// Lazy load below-the-fold sections for faster initial paint
const EventSection = lazy(() => import('./components/EventSection'));
const RSVP = lazy(() => import('./components/RSVP'));
const Gifts = lazy(() => import('./components/Gifts'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [entered, setEntered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Shared audio ref lifted to App level so we can start buffering
    // the moment the WelcomeModal appears — before the user even clicks.
    const audioRef = useRef(null);

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

    // As soon as the loader finishes and the WelcomeModal appears, kick off
    // audio buffering silently in the background. The user typically spends
    // 2-5 seconds reading the modal — plenty of time to buffer the first chunk.
    useEffect(() => {
        if (!isLoading && audioRef.current) {
            // Tell the browser to start downloading the audio resource now.
            // preload="auto" is already set on the element; this .load() call
            // ensures it begins immediately after the modal renders.
            audioRef.current.load();
        }
    }, [isLoading]);

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

            {/* Hidden audio element — always in the DOM once loader is done so
                the browser can buffer it while the user reads the WelcomeModal.
                Rendered outside the conditional so it survives the entered transition. */}
            {!isLoading && (
                <audio
                    ref={audioRef}
                    src="/audio/bg-music.mp3"
                    preload="auto"
                    loop
                    style={{ display: 'none' }}
                />
            )}

            <div style={{
                opacity: entered ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: entered ? 'auto' : 'none',
            }}>
                <Hero />

                <Suspense fallback={<div style={{ height: '100px' }} />}>
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
                <MusicPlayer
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    togglePlay={() => setIsPlaying(!isPlaying)}
                />
            )}

            <Analytics />
        </>
    );
}

export default App;
