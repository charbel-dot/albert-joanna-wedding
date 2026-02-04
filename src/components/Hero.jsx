import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    // Zoom effect: Scales from 1 to 1.15 as user scrolls down 700px
    const scale = useTransform(scrollY, [0, 700], [1, 1.15]);

    return (
        <div style={{ position: 'relative', height: '100dvh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <motion.div
                className="hero-bg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/bg-hero.webp)', /* Darker overlay 0.6 */
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 20%',
                    y: y,
                    scale: scale, // Apply smooth zoom
                    willChange: 'transform' // Optimize for GPU
                }}
            />
            {/* Mobile adjustment: Disable zoom/parallax and fix background */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .hero-bg { 
                        background-position: 65% 20% !important;
                        transform: none !important; /* Disable zoom and parallax scale/y */
                        background-attachment: fixed !important; /* Keep background fixed */
                    }
                }
            `}} />

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '1rem', width: '100%', maxWidth: '1200px' }}>

                {/* Date at the Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: '#FFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}
                >
                    <span style={{ display: 'inline-block', width: '60px', height: '1px', background: '#FFF' }}></span>
                    28.06.2026
                    <span style={{ display: 'inline-block', width: '60px', height: '1px', background: '#FFF' }}></span>
                </motion.div>

                {/* Names */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        color: '#FFF',
                        fontSize: 'clamp(3rem, 6vw, 6rem)', // Adjusted clamp
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        marginBottom: '2rem',
                        whiteSpace: 'nowrap', // Force single line on desktop
                        display: 'flex',
                        flexWrap: 'wrap', // Allow wrap on very small mobile if absolutely needed, or use media query
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @media (max-width: 768px) { h1 { white-space: normal !important; flex-direction: column; } }
                    `}} />
                    <span>Albert</span> <span style={{ fontFamily: 'var(--font-script)', color: 'var(--color-gold)', fontSize: '0.8em' }}>&</span> <span>Joanna</span>
                </motion.h1>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{ marginTop: '2rem' }}
                >
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        fontWeight: 300,
                        lineHeight: 1.4,
                        marginBottom: '1rem'
                    }}>
                        “Therefore what God has joined together, let no one separate.”
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '1.8rem',
                        color: 'var(--color-gold)'
                    }}>
                        Mark 10:9
                    </p>
                </motion.div>
            </div>

            <motion.div
                style={{ position: 'absolute', bottom: '40px' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <span style={{ fontSize: '3rem', opacity: 0.9, color: 'var(--color-gold)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>↓</span>
            </motion.div>
        </div>
    );
};

export default Hero;
