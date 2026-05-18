import React from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
    return (
        <section className="section-padding" id="rsvp" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div style={{ width: '95%', maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <span className="script-font" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>Reserve Your Seat</span>
                    <h2 style={{ marginBottom: '1rem' }}>Dinner Reservation</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem' }}>
                        Please let us know if you will be joining us for dinner. We look forward to sharing this meal and celebrating with you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfh2U1540CY2JfHk-e98Dt6JFNgG7IHvJ7NcjXxA-tD3qHfnA/viewform?embedded=true"
                        width="100%"
                        height="1000"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        style={{ border: 'none', maxWidth: '640px' }}
                    >
                        Loading…
                    </iframe>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 650px) {
                    .section-padding {
                        padding: 3rem 0 !important;
                    }
                }
            `}} />
        </section>
    );
};

export default RSVP;

