import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 1rem', textAlign: 'center', background: 'radial-gradient(circle at 50% 100%, #E8F5E9 0%, transparent 50%)' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-gold)', marginBottom: '1rem' }}>Albert & Joanna</h2>
            <div className="flex-center" style={{ gap: '0.8rem', margin: '1.5rem 0', color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>
                <FaInstagram style={{ fontSize: '1.4rem' }} />
                <span>#AlbertJoanna</span>
            </div>
            <p style={{ fontSize: '1rem', color: '#AAA', marginTop: '3rem', fontWeight: 300 }}>
                Developed with Love ❤️ by <a href="https://www.instagram.com/charbel.nasseh/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 500 }}>charbel.nasseh</a>
            </p>
        </footer>
    );
};

export default Footer;
