import { Link } from 'react-router-dom';
import { Camera, Globe, Hash, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding glass-panel">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <Link to="/" className="logo">
            <h2 className="gold-text">Wright My Trip</h2>
          </Link>
          <p className="tagline">Your Journey, Our Responsibility</p>
          <div className="contact-info">
            <p><MapPin size={16} className="gold-icon" /> 123 Luxury Avenue, NY 10001</p>
            <p><Phone size={16} className="gold-icon" /> +1 (800) 123-4567</p>
            <p><Mail size={16} className="gold-icon" /> hello@wrightmytrip.com</p>
          </div>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Tours</Link></li>
            <li><Link to="/visa">Visa</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Other Links</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/cancellation">Cancellation Policy</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        
        <div className="footer-col social-col">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon hover-glow"><Camera size={20} /></a>
            <a href="#" className="social-icon hover-glow"><Globe size={20} /></a>
            <a href="#" className="social-icon hover-glow"><Hash size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom border-top">
        <p>&copy; {new Date().getFullYear()} Wright My Trip. All rights reserved.</p>
        <p className="developer-credit">Developed by <a href="https://creinx.com" target="_blank" rel="noopener noreferrer">creinx</a></p>
      </div>
    </footer>
  );
};

export default Footer;
