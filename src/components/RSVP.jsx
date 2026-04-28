import React from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
        // Form will proceed with default action
    };

    return (
        <section className="section-padding" id="rsvp" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <span className="script-font" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>Kindly Respond</span>
                    <h2 style={{ marginBottom: '1rem' }}>RSVP</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
                        Please let us know if you will be joining us on our special day. We look forward to celebrating with you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundColor: 'var(--color-white)',
                        padding: '3.5rem 3rem',
                        borderRadius: '24px',
                        boxShadow: '0 30px 60px -12px rgba(0,0,0,0.05), 0 18px 36px -18px rgba(0,0,0,0.05)',
                        border: '1px solid var(--color-gold-light)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Minimalist Top Border Accent */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, rgba(181, 158, 109, 0) 0%, rgba(181, 158, 109, 0.8) 50%, rgba(181, 158, 109, 0) 100%)'
                    }}></div>

                    <form
                        action="https://formsubmit.co/Joannanehme330@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Wedding RSVP!" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_cc" value="Albert_nasseh@outlook.com" />

                        {/* Honeypot field for bot protection */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                            <div className="form-group">
                                <label style={labelStyle}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    minLength="2"
                                    maxLength="50"
                                    placeholder="Enter your name"
                                    className="custom-input"
                                    style={inputStyle}
                                />
                            </div>
                            <div className="form-group">
                                <label style={labelStyle}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="custom-input"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                            <div className="form-group">
                                <label style={labelStyle}>Attendance</label>
                                <select
                                    name="attending"
                                    required
                                    className="custom-input"
                                    style={inputStyle}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Will you attend?</option>
                                    <option value="yes">Yes, I'll be there</option>
                                    <option value="no">Sorry, I can't make it</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label style={labelStyle}>Number of Guests</label>
                                <input
                                    type="number"
                                    name="guests"
                                    min="0"
                                    max="10"
                                    placeholder="1"
                                    className="custom-input"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <motion.button
                                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary"
                                style={{
                                    padding: '18px 70px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    backgroundColor: isSubmitting ? '#ccc' : 'var(--color-text-primary)',
                                    color: 'var(--color-white)',
                                    boxShadow: isSubmitting ? 'none' : '0 15px 30px rgba(0,0,0,0.15)',
                                    letterSpacing: '2px',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send RSVP'}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }
                .custom-input:hover {
                    border-color: var(--color-gold-light) !important;
                }
                .custom-input:focus {
                    border-color: var(--color-gold) !important;
                    background-color: var(--color-white) !important;
                    box-shadow: 0 0 0 4px rgba(181, 158, 109, 0.1) !important;
                }
                .custom-input {
                    transition: all 0.3s ease !important;
                    -webkit-appearance: none;
                    appearance: none;
                }
                select.custom-input {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23B59E6D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 1.5rem center;
                    background-size: 1.2em;
                    padding-right: 3.5rem;
                }
                @media (max-width: 650px) {
                    .form-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .section-padding {
                        padding: 4rem 1rem !important;
                    }
                    .btn-primary {
                        width: 100% !important;
                        padding: 18px 20px !important;
                    }
                }
            `}} />
        </section>
    );
};

const labelStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'var(--color-text-primary)',
    fontWeight: '600',
    marginLeft: '4px'
};

const inputStyle = {
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid #EAEAEA',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#FBFBFB',
    color: 'var(--color-text-primary)'
};

export default RSVP;
