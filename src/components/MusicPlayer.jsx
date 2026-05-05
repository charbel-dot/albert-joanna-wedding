import React, { useEffect, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

// audioRef is passed from App.jsx — the audio element is already mounted
// and buffering before this component even appears, so playback is instant.
const MusicPlayer = ({ audioRef, isPlaying, togglePlay }) => {
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const audio = audioRef?.current;
        if (!audio) return;

        if (isPlaying) {
            // Seek to 8s on the very first play to skip the intro silence
            if (!hasStarted) {
                audio.currentTime = 8;
                setHasStarted(true);
            }
            // audio.load() was already called in App.jsx — just play()
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.log('Playback prevented:', e));
            }
        } else {
            audio.pause();
        }
    }, [isPlaying, audioRef, hasStarted]);

    return (
        <div className="music-player-container">
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
