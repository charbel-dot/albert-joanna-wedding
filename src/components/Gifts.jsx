import React, { useState } from 'react';
import { FaGift, FaCopy, FaCheck } from 'react-icons/fa';

const Gifts = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="section-padding text-center" id="gifts">
            <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                border: '1px solid var(--color-gold-light)', 
                padding: '4rem 2rem', 
                borderRadius: '150px 150px 24px 24px',
                backgroundColor: 'var(--color-white)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                    <FaGift />
                </div>
                <h2>Gifts</h2>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
                    Your presence is the greatest gift of all. However, if you wish to honor us with a gift, a cash gift via <strong>Whish Money</strong> would be very welcome.
                </p>

                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: '2.5rem 2rem',
                    borderRadius: '24px',
                    border: '1px solid var(--color-gold-light)',
                    backgroundColor: 'var(--color-bg)',
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}>
                    <p style={{ 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: '1.25rem', 
                        color: 'var(--color-text-primary)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                    }}>
                        For those who wish, the gift list is available at all Whish Money branches
                    </p>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '1rem',
                        padding: '12px 24px', 
                        backgroundColor: 'var(--color-white)', 
                        borderRadius: '12px', 
                        border: '1px solid var(--color-gold-light)',
                        width: 'fit-content',
                        margin: '0 auto'
                    }}>
                        <span style={{ 
                            fontFamily: 'var(--font-body)', 
                            fontSize: '1.5rem', 
                            fontWeight: '600',
                            letterSpacing: '2px',
                            color: 'var(--color-gold)'
                        }}>
                            20989589
                        </span>
                        <button 
                            onClick={() => copyToClipboard('20989589')}
                            style={{ 
                                background: 'none', 
                                border: 'none',
                                padding: '5px', 
                                color: 'var(--color-gold)', 
                                fontSize: '1.2rem', 
                                display: 'flex', 
                                alignItems: 'center', 
                                cursor: 'pointer' 
                            }}
                            title="Copy Number"
                        >
                            {copied ? <FaCheck style={{ color: 'var(--color-sage)' }} /> : <FaCopy />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gifts;
