import { useState } from 'react';
import { MapPin, Phone, Mail, Send, User, Calendar, Users, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page section-padding">
      <div className="container">
        <div className="contact-header text-center">
          <h1 className="gold-text">Plan Your Dream Trip</h1>
          <p>Fill in your details below and our luxury travel concierge will reach out within 24 hours.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-panel glass-panel">
            <h3>Contact Information</h3>
            <p className="mb-6 text-secondary">Reach out to our dedicated concierge team available 24/7 for our exquisite club members.</p>
            
            <div className="info-item">
              <div className="icon-circle hover-glow"><MapPin size={20} className="gold-icon" /></div>
              <div>
                <h4>Office Location</h4>
                <p>123 Luxury Avenue, Penthouse Level<br/>New York, NY 10001</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-circle hover-glow"><Phone size={20} className="gold-icon" /></div>
              <div>
                <h4>Phone Number</h4>
                <p>+1 (800) 123-4567<br/>+1 (800) 123-9876 (VIP Line)</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-circle hover-glow"><Mail size={20} className="gold-icon" /></div>
              <div>
                <h4>Email Address</h4>
                <p>hello@wrightmytrip.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle hover-glow"><Calendar size={20} className="gold-icon" /></div>
              <div>
                <h4>Response Time</h4>
                <p>Within 24 hours<br/>Mon – Sun, 9AM – 9PM IST</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-panel glass-panel">
            <h3>Tell Us About Your Trip</h3>

            {submitted && (
              <div className="success-banner">
                ✅ Thank you! Our concierge will contact you shortly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Name Row */}
              <div className="form-row">
                <div className="form-group flex-1">
                  <label><User size={14} className="field-icon" /> First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="form-group flex-1">
                  <label><User size={14} className="field-icon" /> Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>

              {/* Contact Row */}
              <div className="form-row">
                <div className="form-group flex-1">
                  <label><Mail size={14} className="field-icon" /> Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group flex-1">
                  <label><Phone size={14} className="field-icon" /> Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" required />
                </div>
              </div>

              {/* Destination */}
              <div className="form-group">
                <label><Globe size={14} className="field-icon" /> Destination</label>
                <select required>
                  <option value="">Select your dream destination</option>
                  <option>Bali, Indonesia</option>
                  <option>Dubai, UAE</option>
                  <option>Swiss Alps, Switzerland</option>
                  <option>Paris, France</option>
                  <option>Maldives</option>
                  <option>Tokyo, Japan</option>
                  <option>Santorini, Greece</option>
                  <option>New York, USA</option>
                  <option>Other / Custom</option>
                </select>
              </div>

              {/* Trip Details Row */}
              <div className="form-row">
                <div className="form-group flex-1">
                  <label><Calendar size={14} className="field-icon" /> Start Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group flex-1">
                  <label><Calendar size={14} className="field-icon" /> Number of Days</label>
                  <input type="number" min="1" max="90" placeholder="e.g. 7" required />
                </div>
              </div>

              {/* Members */}
              <div className="form-group">
                <label><Users size={14} className="field-icon" /> Number of Members</label>
                <div className="members-row">
                  {[1,2,3,4,5,'6+'].map((n) => (
                    <label key={n} className="member-chip">
                      <input type="radio" name="members" value={n} required />
                      <span>{n}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-gold submit-btn hover-glow">
                Send My Trip Request <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
