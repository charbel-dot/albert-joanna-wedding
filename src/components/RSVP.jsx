import React from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundColor: 'var(--color-white)',
                        padding: '3rem',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        border: '1px solid var(--color-gold-light)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        width: '100px',
                        height: '100px',
                        border: '2px solid var(--color-gold-light)',
                        borderRadius: '50%',
                        opacity: 0.2
                    }}></div>

                    <form action="https://formsubmit.co/your-email@example.com" method="POST">
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Wedding RSVP!" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div className="form-group">
                                <label style={labelStyle}>Full Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
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

                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div className="form-group">
                                <label style={labelStyle}>Attendance</label>
                                <select name="attending" required className="custom-input" style={inputStyle}>
                                    <option value="" disabled selected>Will you attend?</option>
                                    <option value="yes">Yes, I'll be there</option>
                                    <option value="no">Sorry, I can't make it</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label style={labelStyle}>Number of Guests</label>
                                <input 
                                    type="number" 
                                    name="guests" 
                                    min="1" 
                                    max="10" 
                                    placeholder="1"
                                    className="custom-input"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                            <label style={labelStyle}>Message for the Couple</label>
                            <textarea 
                                name="message" 
                                rows="4" 
                                placeholder="Any dietary requirements or special messages?"
                                className="custom-input"
                                style={{ ...inputStyle, resize: 'none' }}
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit" 
                                className="btn-primary" 
                                style={{ 
                                    padding: '16px 60px', 
                                    fontSize: '1rem',
                                    backgroundColor: 'var(--color-text-primary)',
                                    color: 'var(--color-white)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                }}
                            >
                                Send RSVP
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
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
                }
                @media (max-width: 650px) {
                    .form-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .section-padding {
                        padding: 4rem 1rem !important;
                    }
                }
            `}} />
        </section>
    );
};

const labelStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'var(--color-text-primary)',
    fontWeight: '600',
    marginLeft: '4px'
};

const inputStyle = {
    padding: '14px 20px',
    borderRadius: '12px',
    border: '1px solid #EAEAEA',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#FBFBFB',
    color: 'var(--color-text-primary)'
};

export default RSVP;
