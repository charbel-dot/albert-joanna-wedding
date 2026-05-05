import React, { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

const MusicPlayer = ({ isPlaying, togglePlay }) => {
    const audioRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    // Only mount the audio element once the user has opted into music.
    // This prevents the browser from downloading the 2.2MB MP3 on page load.
    const [audioReady, setAudioReady] = useState(false);

    // Trigger audio element mount when user first requests music
    useEffect(() => {
        if (isPlaying && !audioReady) {
            setAudioReady(true);
        }
    }, [isPlaying, audioReady]);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            if (!hasStarted) {
                audioRef.current.currentTime = 8;
                setHasStarted(true);
            }
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.log('Autoplay prevented', e));
            }
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, audioReady, hasStarted]);

    return (
        <div className="music-player-container">
            {/* Only mount <audio> if user chose music — saves 2.2MB for quiet users */}
            {audioReady && (
                <audio
                    ref={audioRef}
                    loop
                    src="/audio/bg-music.mp3"
                    preload="none"
                />
            )}
            <button
                onClick={togglePlay}
                className="music-toggle-btn"
                aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
            >
                {isPlaying ? <FaPause /> : <FaMusic />}
            </button>
        </div>
    );
};

export default MusicPlayer;
