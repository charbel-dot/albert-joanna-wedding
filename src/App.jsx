import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeModal from './components/WelcomeModal';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import Gallery from './components/Gallery';
import Gifts from './components/Gifts';
import Footer from './components/Footer'; // Will create later

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
                <Hero />
                <EventSection />
                <Gallery />
                <Gifts />
                <Footer />
            </div>

            {entered && (
                <MusicPlayer isPlaying={isPlaying} togglePlay={() => setIsPlaying(!isPlaying)} />
            )}
        </>
    );
}

export default App;
