import React from 'react';
import { motion } from 'framer-motion';

const WelcomeModal = ({ onEnter }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#F9F5F0',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
            }}
        >
            {/* Content wrapper — explicit width prevents buttons expanding on exit */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: '480px',
                }}
            >
                <p style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '2rem',
                    color: 'var(--color-gold)',
                    marginBottom: '1rem',
                }}>
                    Welcome to the wedding of
                </p>

                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                    Albert &amp; Joanna
                </h1>

                {/* Button group — inline-flex so buttons never stretch to block width */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    width: '100%',
                }}>
                    <button
                        className="btn-primary"
                        onClick={() => onEnter(true)}
                        style={{
                            width: '220px',
                            flexShrink: 0,
                        }}
                    >
                        Enter with Music
                    </button>

                    <button
                        onClick={() => onEnter(false)}
                        style={{
                            width: '220px',
                            flexShrink: 0,
                            background: 'none',
                            border: 'none',
                            color: '#999',
                            fontSize: '0.8rem',
                            textTransform: 'none',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            padding: '8px 24px',
                            borderRadius: '30px',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#555'}
                        onMouseLeave={e => e.currentTarget.style.color = '#999'}
                    >
                        Enter quietly
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeModal;

