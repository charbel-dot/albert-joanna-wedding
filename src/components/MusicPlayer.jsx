import React, { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

const MusicPlayer = ({ isPlaying, togglePlay }) => {
    const audioRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            // Seek to 5s only on the very first start if it hasn't started yet
            if (!hasStarted && audioRef.current) {
                audioRef.current.currentTime = 8;
                setHasStarted(true);
            }

            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    console.log("Autoplay prevented", e);
                    // If autoplay fails, we might want to reflect that in UI, 
                    // but usually it's better to just let user click play.
                });
            }
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying, hasStarted]);

    return (
        <div className="music-player-container" style={{
            position: 'fixed',
            top: '30px',
            right: '30px',
            zIndex: 1000,
        }}>
            <audio ref={audioRef} loop src="/audio/bg-music.mp3" preload="auto" />
            <button
                onClick={togglePlay}
                className="music-toggle-btn"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    padding: 0,
                    fontSize: '1.4rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? <FaPause /> : <FaMusic />}
            </button>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 768px) {
                    .music-player-container {
                        top: 20px !important;
                        right: 20px !important;
                    }
                    .music-toggle-btn {
                        width: 45px !important;
                        height: 45px !important;
                        font-size: 1.1rem !important;
                    }
                }
            `}} />
        </div>
    );
};

export default MusicPlayer;
