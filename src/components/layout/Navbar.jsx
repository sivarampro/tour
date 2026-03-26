import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',           path: '/',          activePath: '/' },
    { name: 'Tours',          path: '/explore',   activePath: '/explore' },
    { name: 'Customize Tour', path: '/contact',   activePath: '__never__' },
    { name: 'Visa',           path: '/visa',      activePath: '/visa' },
    { name: 'Contact',        path: '/contact',   activePath: '/contact' },
    { name: 'Blog',           path: '/blog',      activePath: '/blog' },
    { name: 'FAQs',           path: '/faqs',      activePath: '/faqs' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="gold-text">Wright My Trip</span>
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.activePath ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/auth" className="btn-outline login-btn" onClick={() => setMobileMenuOpen(false)}>
            Login / Signup
          </Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} color="#D4AF37" /> : <Menu size={24} color="#D4AF37" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
