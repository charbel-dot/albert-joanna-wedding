import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-bg)',
            padding: '6rem 1rem',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, var(--color-bg), #F9F5F0)', // Soft gradient refresh
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Main Quote */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-heading)',
                    maxWidth: '900px',
                    margin: '0 auto 1.5rem auto',
                    lineHeight: 1.3
                }}
            >
                Every moment matters, and we'd love to see it through your eyes.
            </motion.h2>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '2.5rem',
                    fontWeight: 300
                }}
            >
                Don't forget to share your photos with
            </motion.p>

            {/* Instagram Section */}
            <div className="flex-center" style={{ flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)', // Lot bigger
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-script)',
                        marginBottom: '0.5rem',
                        fontWeight: 500,
                        lineHeight: 1
                    }}
                >
                    #AlbertJoanna
                </motion.span>

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <FaInstagram style={{ fontSize: '3.5rem', color: 'var(--color-gold)' }} />
                </motion.div>
            </div>

            {/* Developer Credit */}
            <p style={{ fontSize: '1rem', color: '#AAA', marginTop: '4rem', fontWeight: 300 }}>
                Developed with Love ❤️ by <a href="https://wa.me/+96171662507" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 500 }}>Charbel</a>
            </p>
        </footer>
    );
};

export default Footer;
