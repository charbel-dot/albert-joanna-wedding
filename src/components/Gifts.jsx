import React, { useState } from 'react';
import { FaGift, FaCopy, FaCheck } from 'react-icons/fa';

const Gifts = () => {
    const [copiedGroom, setCopiedGroom] = useState(false);
    const [copiedBride, setCopiedBride] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'groom') {
            setCopiedGroom(true);
            setTimeout(() => setCopiedGroom(false), 2000);
        } else {
            setCopiedBride(true);
            setTimeout(() => setCopiedBride(false), 2000);
        }
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
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
                    Your presence is the greatest gift of all. However, if you wish to honor us with a gift, a cash gift via <strong>Wish Money</strong> would be very welcome.
                </p>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '2rem', 
                    marginTop: '2rem',
                    textAlign: 'left'
                }}>
                    {/* Groom Card */}
                    <div style={{
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid var(--color-gold-light)',
                        backgroundColor: 'var(--color-bg)',
                        position: 'relative'
                    }}>
                        <span className="script-font" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>Groom</span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1rem' }}>Albert Nasseh</h3>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid #eaeaea' }}>
                            <span style={{ fontFamily: 'var(--font-body)', letterSpacing: '1px' }}>+961 70 251 830</span>
                            <button 
                                onClick={() => copyToClipboard('+96170251830', 'groom')}
                                style={{ background: 'none', padding: '5px', color: 'var(--color-gold)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                title="Copy Number"
                            >
                                {copiedGroom ? <FaCheck style={{ color: 'var(--color-sage)' }} /> : <FaCopy />}
                            </button>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '0.5rem' }}>
                            Wish Money Account
                        </span>
                    </div>

                    {/* Bride Card */}
                    <div style={{
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid var(--color-gold-light)',
                        backgroundColor: 'var(--color-bg)',
                        position: 'relative'
                    }}>
                        <span className="script-font" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>Bride</span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1rem' }}>Joanna Nehme</h3>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid #eaeaea' }}>
                            <span style={{ fontFamily: 'var(--font-body)', letterSpacing: '1px' }}>+961 76 333 691</span>
                            <button 
                                onClick={() => copyToClipboard('+96176333691', 'bride')}
                                style={{ background: 'none', padding: '5px', color: 'var(--color-gold)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                title="Copy Number"
                            >
                                {copiedBride ? <FaCheck style={{ color: 'var(--color-sage)' }} /> : <FaCopy />}
                            </button>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '0.5rem' }}>
                            Wish Money Account
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gifts;
