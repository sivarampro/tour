import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, Users, Calendar, Check, X, Shield } from 'lucide-react';
import { getDestinationById } from '../data/destinations';
import './TripDetail.css';

const TripDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('itinerary');
  const [guests, setGuests] = useState(2);

  const dest = getDestinationById(id);

  // Fallback if destination not found
  if (!dest) {
    return (
      <div className="trip-detail-page section-padding">
        <div className="container" style={{ textAlign: 'center', paddingTop: '100px' }}>
          <h2>Destination not found</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '20px 0' }}>
            We couldn't find the destination you're looking for.
          </p>
          <Link to="/" className="btn-gold">Back to Home</Link>
        </div>
      </div>
    );
  }

  const totalPerPerson = dest.pricePerPerson + dest.taxes;

  return (
    <div className="trip-detail-page section-padding">
      <div className="container">

        {/* Header Section */}
        <div className="detail-header">
          <div className="header-content">
            <div className="location-badge">
              <MapPin size={16} className="gold-icon" /> {dest.location}
            </div>
            <h1>{dest.tagline} — {dest.name}</h1>
            <div className="meta-info">
              <span><Star size={16} fill="#D4AF37" color="#D4AF37" /> {dest.rating} ({dest.reviews} Reviews)</span>
              <span><Clock size={16} className="gold-icon" /> {dest.duration}</span>
              <span><Users size={16} className="gold-icon" /> {dest.tourType}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="gallery-grid">
          <div className="main-image" style={{ backgroundImage: `url('${dest.heroImage}')` }}></div>
          <div className="sub-images">
            <div className="sub-image" style={{ backgroundImage: "url('/images/hero_maldives.png')" }}></div>
            <div className="sub-image" style={{ backgroundImage: "url('/images/category_intl.png')" }}></div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="detail-layout">

          <div className="main-content">
            <div className="overview-text">
              <p>{dest.overview}</p>
            </div>

            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'itinerary' ? 'active' : ''}`} onClick={() => setActiveTab('itinerary')}>Itinerary</button>
              <button className={`tab-btn ${activeTab === 'includes' ? 'active' : ''}`} onClick={() => setActiveTab('includes')}>Includes / Excludes</button>
              <button className={`tab-btn ${activeTab === 'policies' ? 'active' : ''}`} onClick={() => setActiveTab('policies')}>Policies</button>
            </div>

            <div className="tab-content">
              {activeTab === 'itinerary' && (
                <div className="itinerary-list animate-fade-in">
                  {dest.itinerary.map((item) => (
                    <div className="day-item" key={item.day}>
                      <div className="day-marker">{item.day}</div>
                      <div className="day-details glass-panel">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'includes' && (
                <div className="includes-grid animate-fade-in">
                  <div className="includes-box glass-panel">
                    <h4 className="gold-text">What's Included</h4>
                    <ul>
                      {dest.includes.map((item) => (
                        <li key={item}><Check size={16} className="gold-icon" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="excludes-box glass-panel">
                    <h4 className="text-secondary">What's Excluded</h4>
                    <ul className="text-secondary">
                      {dest.excludes.map((item) => (
                        <li key={item}><X size={16} /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'policies' && (
                <div className="policies-box glass-panel animate-fade-in">
                  <h4>Cancellation Policy</h4>
                  <p className="text-secondary" style={{ marginBottom: '20px' }}>{dest.cancellationPolicy}</p>
                  <h4>Payment Terms</h4>
                  <p className="text-secondary">{dest.paymentTerms}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="booking-sidebar">
            <div className="booking-card glass-panel">
              <div className="price-header">
                <span className="price-label">Price per person</span>
                <h2 className="gold-text">₹{dest.pricePerPerson.toLocaleString()}</h2>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label>Select Date</label>
                  <div className="input-with-icon">
                    <Calendar size={18} className="gold-icon" />
                    <input type="date" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Travelers</label>
                  <div className="guest-selector">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                    <span>{guests} Guests</span>
                    <button onClick={() => setGuests(guests + 1)}>+</button>
                  </div>
                </div>

                <div className="price-summary">
                  <div className="summary-row">
                    <span>₹{dest.pricePerPerson.toLocaleString()} x {guests}</span>
                    <span>₹{(dest.pricePerPerson * guests).toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Taxes & Fees</span>
                    <span>₹{(dest.taxes * guests).toLocaleString()}</span>
                  </div>
                  <div className="summary-row total">
                    <strong>Total</strong>
                    <strong className="gold-text">₹{(totalPerPerson * guests).toLocaleString()}</strong>
                  </div>
                </div>

                <Link to="/contact" className="btn-gold w-full mt-6 hover-glow" style={{ display: 'block', textAlign: 'center' }}>
                  Book Now
                </Link>
                <div className="secure-badge">
                  <Shield size={14} className="gold-icon" /> Secure Payment
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TripDetail;
