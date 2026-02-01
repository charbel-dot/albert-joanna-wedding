import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 1rem', textAlign: 'center', background: 'radial-gradient(circle at 50% 100%, #E8F5E9 0%, transparent 50%)' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-gold)' }}>Albert & Joanna</h2>
            <div className="flex-center" style={{ gap: '0.5rem', margin: '1rem 0', color: 'var(--color-text-secondary)' }}>
                <FaInstagram />
                <span>#AlbertJoanna</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#BBB', marginTop: '2rem' }}>
                Developed with Love ❤️ by <a href="https://www.instagram.com/charbel.nasseh/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>charbel.nasseh</a>
            </p>
        </footer>
    );
};

export default Footer;
