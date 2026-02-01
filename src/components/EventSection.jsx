import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChurch, FaGlassCheers, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const MapModal = ({ isOpen, onClose, location }) => {
    if (!isOpen) return null;

    // Updated with specific embed code provided by user for Celebration
    // updated locations - both pointing to the same place now
    // updated locations - both pointing to the same place now
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
                backdropFilter: 'blur(5px)', // Glass effect on backdrop
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
                    maxWidth: '800px', // Wider modal
                    backgroundColor: '#FFF',
                    borderRadius: '4px', // Sharper, elegant corners
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
                    backgroundColor: '#FAFAFA'
                }}>
                    <h3 style={{
                        margin: 0,
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-primary)'
                    }}>
                        {location} Location
                    </h3>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '1.2rem',
                            color: '#999',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px',
                            transition: 'color 0.3s'
                        }}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Map Content */}
                <div style={{ height: '450px', position: 'relative' }}>
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
                <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: '#FAFAFA' }}>
                    <a
                        href={directLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            gap: '0.5rem',
                            padding: '12px 30px'
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
        style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
        <div style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>
            {icon}
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{time}</p>
        <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{location}</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>{address}</p>
        <button className="btn-outline" onClick={onMapClick}>
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
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
            <AnimatePresence>
                {modalOpen && (
                    <MapModal
                        isOpen={modalOpen}
                        location={activeLocation}
                        onClose={() => setModalOpen(false)}
                    />
                )}
            </AnimatePresence>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <span className="script-font">The Big Day</span>
                    <h2>Wedding Events</h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="md:flex-row">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                            <EventCard
                                title="Ceremony"
                                time="6:30 PM"
                                location="كاتدرائية القيامة كفرعقا"
                                address="كفرعقا"
                                icon={<FaChurch />}
                                delay={0.2}
                                onMapClick={() => openMap('Ceremony')}
                            />

                            <div style={{ width: '1px', backgroundColor: 'var(--color-gold-light)', display: 'none' }} className="divider"></div>

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
            </div>
        </section>
    );
};

export default EventSection;
