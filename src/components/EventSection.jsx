import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChurch, FaGlassCheers, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const MapModal = ({ isOpen, onClose, location }) => {
    if (!isOpen) return null;

    // Updated with specific embed code provided by user for Celebration
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.2306025630837!2d35.83818997572678!3d34.29366707306701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f9828d541dc1%3A0x25d8914c19be7e66!2z2YPYp9iq2K_Ysdin2KbZitipINin2YTZgtmK2KfZhdipINmD2YHYsdi52YLYpw!5e0!3m2!1sen!2slb!4v1769964357166!5m2!1sen!2slb";

    const directLink = "https://maps.google.com/?q=كاتدرائية+القيامة+كفرعقا";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, // Darker backdrop
                backdropFilter: 'blur(8px)', // Enhanced glass effect
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
            }}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '850px', // Wider modal
                    backgroundColor: '#FFF',
                    borderRadius: '16px', // Smooth corners
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid var(--color-gold)', // Gold border
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Header */}
                <div style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    borderBottom: '1px solid var(--color-gold-light)',
                    backgroundColor: '#FAFAFA',
                    position: 'relative'
                }}>
                    <h3 style={{
                        margin: 0,
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontSize: '1.5rem',
                        color: 'var(--color-primary)'
                    }}>
                        {location} Location
                    </h3>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '20px',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '2rem', // Larger X
                            color: '#666',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            transition: 'all 0.3s ease',
                            opacity: 0.7
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Map Content */}
                <div style={{ height: '500px', position: 'relative' }}>
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map"
                    ></iframe>
                </div>

                {/* Footer Action */}
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FAFAFA', borderTop: '1px solid #eee' }}>
                    <a
                        href={directLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            gap: '0.8rem',
                            padding: '14px 40px',
                            borderRadius: '50px', // Rounded pill shape
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s',
                            backgroundColor: '#333', // Dark button for contrast
                            color: '#FFF'
                        }}
                    >
                        <FaMapMarkerAlt /> Open in Google Maps
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const EventCard = ({ title, time, location, address, icon, delay, onMapClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        style={{
            flex: 1,
            padding: '3rem 2rem', // Bigger padding
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFF', // White card
            borderRadius: '24px', // Smooth corners
            boxShadow: '0 20px 40px rgba(74, 88, 72, 0.08)', // Premium sage-tinted shadow
            minWidth: '280px', // Ensure it doesn't get too squashed
            border: '1px solid rgba(255,255,255,0.5)' // Subtle border
        }}
    >
        <div style={{ fontSize: '3.5rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
            {icon}
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--color-gold)' }}>{time}</p>
        <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{location}</p>
        <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', textAlign: 'center' }}>{address}</p>
        <button
            className="btn-outline"
            onClick={onMapClick}
            style={{
                padding: '12px 30px',
                fontSize: '0.9rem',
                border: '1px solid var(--color-sage)',
                color: 'var(--color-sage)'
            }}
        >
            <FaMapMarkerAlt style={{ marginRight: '8px' }} /> View Map
        </button>
    </motion.div>
);

const EventSection = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeLocation, setActiveLocation] = useState(null);

    const openMap = (loc) => {
        setActiveLocation(loc);
        setModalOpen(true);
    };

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-sage-light)' }}>
            <AnimatePresence>
                {modalOpen && (
                    <MapModal
                        isOpen={modalOpen}
                        location={activeLocation}
                        onClose={() => setModalOpen(false)}
                    />
                )}
            </AnimatePresence>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <span className="script-font" style={{ color: 'var(--color-sage)' }}>The Big Day</span>
                    <h2>Wedding Events</h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row', // Default to row
                        flexWrap: 'wrap', // Allow wrapping on mobile
                        justifyContent: 'center',
                        gap: '2rem'
                    }}>
                        <EventCard
                            title="Ceremony"
                            time="6:30 PM"
                            location="كاتدرائية القيامة كفرعقا"
                            address="كفرعقا"
                            icon={<FaChurch />}
                            delay={0.2}
                            onMapClick={() => openMap('Ceremony')}
                        />

                        {/* Divider removed as cards are now separated visually */}

                        <EventCard
                            title="Celebration"
                            time="8:00 PM"
                            location="Church Yard"
                            address=""
                            icon={<FaGlassCheers />}
                            delay={0.4}
                            onMapClick={() => openMap('Celebration')}
                        />
                    </div>
                </div>
            </div>
            {/* Mobile stack fix via CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .event-container { flexDirection: column !important; }
                }
            `}} />
        </section>
    );
};

export default EventSection;
