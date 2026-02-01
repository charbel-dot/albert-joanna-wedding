import React from 'react';
import { FaGift } from 'react-icons/fa';

const Gifts = () => {
    return (
        <section className="section-padding text-center">
            <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid var(--color-gold-light)', padding: '3rem 1rem', borderRadius: '150px 150px 0 0' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                    <FaGift />
                </div>
                <h2>Gifts</h2>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    Your presence is the greatest gift of all. However, if you wish to honor us with a gift, a cash gift would be very welcome.
                </p>
            </div>
        </section>
    );
};

export default Gifts;
