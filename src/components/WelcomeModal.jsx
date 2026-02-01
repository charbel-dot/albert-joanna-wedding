import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeModal = ({ onEnter }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F9F5F0] text-center p-6"
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
                justifyContent: 'center'
            }}
        >
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <p style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                    Welcome to the wedding of
                </p>
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Albert & Joanna</h1>

                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                        className="btn-primary"
                        onClick={() => onEnter(true)}
                        style={{ minWidth: '200px' }}
                    >
                        Enter with Music
                    </button>
                    <button
                        className="btn-outline"
                        onClick={() => onEnter(false)}
                        style={{
                            minWidth: '200px',
                            border: 'none',
                            color: '#888',
                            fontSize: '0.8rem',
                            textTransform: 'none'
                        }}
                    >
                        Enter quietly
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeModal;
