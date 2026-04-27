import React from 'react';
import { motion } from 'framer-motion';

const HeartLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#EBE5DE', // Slightly darker than modal's #F9F5F0
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999, // Ensure it's on top of everything
            }}
        >
            <div style={{ position: 'relative' }}>
                {/* Soft pulse glow behind the heart */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        x: '-50%',
                        y: '-50%',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-gold)',
                        opacity: 0.2,
                        filter: 'blur(20px)'
                    }}
                    animate={{
                        scale: [0.8, 1.5, 0.8],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="100px"
                    height="100px"
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <motion.path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="var(--color-gold)"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.svg>
            </div>
        </motion.div>
    );
};

export default HeartLoader;
