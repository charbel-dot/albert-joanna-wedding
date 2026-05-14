import React, { useState, Suspense, lazy, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import WelcomeModal from './components/WelcomeModal';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import HeartLoader from './components/HeartLoader';

// ─── Lazy chunks ────────────────────────────────────────────────────────────
// These factory functions are reused both by React.lazy() AND our eager
// prefetch — so the browser only ever fetches each chunk once.
const eventSectionImport = () => import('./components/EventSection');
const galleryImport      = () => import('./components/Gallery');
const rsvpImport         = () => import('./components/RSVP');
const giftsImport        = () => import('./components/Gifts');
const footerImport       = () => import('./components/Footer');

const EventSection = lazy(eventSectionImport);
const Gallery      = lazy(galleryImport);
const RSVP         = lazy(rsvpImport);
const Gifts        = lazy(giftsImport);
const Footer       = lazy(footerImport);

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [entered, setEntered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Shared audio ref so we can start buffering before the user even clicks.
    const audioRef = useRef(null);

    useEffect(() => {
        const handleLoad = async () => {
            try {
                // 1. Minimum display time — prevents the heart from flashing
                const minTime = new Promise(resolve => setTimeout(resolve, 1600));

                // 2. Wait for the browser to finish loading all blocking resources
                const windowLoad = new Promise(resolve => {
                    if (document.readyState === 'complete') {
                        resolve();
                    } else {
                        window.addEventListener('load', resolve, { once: true });
                    }
                });

                // 3. Wait for web fonts (prevents FOUT)
                const fontLoad = document.fonts.ready;

                // 4. Eagerly prefetch ALL lazy chunks so they land in the module
                //    cache before the user finishes reading the WelcomeModal.
                //    When React.lazy() eventually renders them it gets an
                //    already-resolved module — zero extra network round-trips.
                const chunkLoad = Promise.all([
                    eventSectionImport(),
                    galleryImport(),
                    rsvpImport(),
                    giftsImport(),
                    footerImport(),
                ]);

                // Wait for everything in parallel — the heart stays visible
                // until every last resource is ready.
                await Promise.all([minTime, windowLoad, fontLoad, chunkLoad]);
            } catch (error) {
                console.error('Loading error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        handleLoad();
    }, []);

    // Once the loader is gone and the WelcomeModal appears, start buffering
    // audio silently. The user typically spends 2-5 s on the modal — enough
    // time to buffer the first chunk so playback starts without a hiccup.
    useEffect(() => {
        if (!isLoading && audioRef.current) {
            audioRef.current.load();
        }
    }, [isLoading]);

    const handleEnter = useCallback((withMusic) => {
        setEntered(true);
        if (withMusic) setIsPlaying(true);
    }, []);

    const togglePlay = useCallback(() => setIsPlaying(p => !p), []);

    return (
        <>
            {/* ── Heart loader ── stays until everything is fully ready ── */}
            <AnimatePresence mode="wait">
                {isLoading && <HeartLoader key="loader" />}
            </AnimatePresence>

            {/* ── Welcome modal ── shown after load, before the user enters ── */}
            <AnimatePresence>
                {!isLoading && !entered && <WelcomeModal onEnter={handleEnter} />}
            </AnimatePresence>

            {/* Hidden audio element — in the DOM as soon as the loader finishes
                so the browser buffers it while the user reads the modal. */}
            {!isLoading && (
                <audio
                    ref={audioRef}
                    src="/audio/bg-music.mp3"
                    preload="auto"
                    loop
                    style={{ display: 'none' }}
                />
            )}

            {/* ── Main site ── invisible until the user enters ── */}
            <div style={{
                opacity: entered ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: entered ? 'auto' : 'none',
            }}>
                {/* Hero is eagerly imported — renders instantly */}
                <Hero />

                {/* All chunks are already in cache by the time entered=true,
                    so Suspense fallback should never actually flash. */}
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
                    togglePlay={togglePlay}
                />
            )}

            <Analytics />
        </>
    );
}

export default App;
