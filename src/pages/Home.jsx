import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Search, Shield, Star, Clock, DollarSign, Heart, ChevronRight, ChevronLeft } from 'lucide-react';
import './Home.css';

const Home = () => {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);
  const isInteracting = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let autoScrollSpeed = 1;

    const scrollStep = () => {
      if (!isHovered.current && !isInteracting.current) {
        container.scrollLeft += autoScrollSpeed;
        
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      isInteracting.current = true;
      if (direction === 'prev' && scrollRef.current.scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
      scrollRef.current.scrollBy({ left: direction === 'prev' ? -410 : 410, behavior: 'smooth' });
      
      setTimeout(() => {
        isInteracting.current = false;
      }, 600);
    }
  };

  const scrollPrev = () => handleManualScroll('prev');
  const scrollNext = () => handleManualScroll('next');

  const testimonials = [
    {
      name: "Eleanor Sterling",
      review: "The Maldives experience was nothing short of perfection. Every detail was curated with an exceptional level of luxury.",
      image: "/images/user1.png",
      rating: 5
    },
    {
      name: "Jameson Wright",
      review: "From the Swiss Alps to Dubai, Wright My Trip delivers an unparalleled standard of VIP travel.",
      image: "/images/user2.png",
      rating: 5
    },
    {
      name: "The Rothschilds",
      review: "A truly cinematic journey. They understand what premium means and never fail to exceed expectations.",
      image: "/images/user3.png",
      rating: 5
    },
    {
      name: "Sophia Martinez",
      review: "The level of personalization is unmatched. Every destination felt like it was handpicked just for us.",
      image: "/images/user1.png",
      rating: 5
    },
    {
      name: "Liam Chen",
      review: "I have traveled with many premium agencies, but Wright My Trip is in a league of its own.",
      image: "/images/user2.png",
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_maldives.png')" }}>
          <div className="hero-overlay"></div>
          
          {/* Animated Background Layers */}
          <div className="hero-anim-layer">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <span key={i} className="hero-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 10}s`,
                opacity: 0.4 + Math.random() * 0.5,
              }} />
            ))}
            {/* Glowing orbs */}
            <div className="hero-orb orb-1"></div>
            <div className="hero-orb orb-2"></div>
            <div className="hero-orb orb-3"></div>
            {/* Shimmer sweep */}
            <div className="hero-shimmer"></div>
            {/* Light beam */}
            <div className="hero-beam"></div>
          </div>
        </div>
        
        <div className="container hero-content">
          <h1 className="hero-title animate-fly-up">Experience Travel <br/><span className="gold-text">Beyond Expectations</span></h1>
          <p className="hero-subtitle animate-fade-in delay-1">Your Journey, Our Responsibility</p>
          
          <div className="hero-ctas animate-fade-in delay-3">
            <Link to="/explore" className="btn-gold">Explore All</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>

          <div className="happy-customers-simple animate-fade-in delay-3">
            <span className="gold-text fw-bold">1000+</span> Happy Customers
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Travel Categories */}
      <section className="categories-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Travel Categories</h2>
            <div className="gold-line"></div>
          </div>
          
          <div className="categories-grid">
            <Link to="/explore?category=domestic" className="category-card hover-glow">
              <div className="category-img" style={{ backgroundImage: "url('/images/category_domestic.png')" }}></div>
              <div className="category-overlay">
                <h3>Domestic</h3>
                <p>Discover India's Royalty</p>
              </div>
            </Link>
            
            <Link to="/explore?category=international" className="category-card hover-glow">
              <div className="category-img" style={{ backgroundImage: "url('/images/category_intl.png')" }}></div>
              <div className="category-overlay">
                <h3>International</h3>
                <p>Global Luxury Experiences</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="destinations-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Top Destinations</h2>
            <div className="gold-line"></div>
          </div>
          
          <div className="destinations-grid">
            <Link to="/trip/bali" className="dest-card hover-glow" data-name="Bali, Indonesia">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_bali.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Bali, Indonesia</h4>
                <p>Tropical Serenity</p>
              </div>
            </Link>

            <Link to="/trip/dubai" className="dest-card hover-glow" data-name="Dubai, UAE">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_dubai.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Dubai, UAE</h4>
                <p>Ultra Modern Luxury</p>
              </div>
            </Link>

            <Link to="/trip/swiss" className="dest-card hover-glow" data-name="Swiss Alps">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_swiss.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Swiss Alps</h4>
                <p>Winter Elegance</p>
              </div>
            </Link>

            <Link to="/trip/paris" className="dest-card hover-glow" data-name="Paris, France">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_paris.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Paris, France</h4>
                <p>Romantic Horizons</p>
              </div>
            </Link>

            <Link to="/trip/maldives" className="dest-card hover-glow" data-name="Maldives">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_maldives.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Maldives</h4>
                <p>Island Paradise</p>
              </div>
            </Link>

            <Link to="/trip/tokyo" className="dest-card hover-glow" data-name="Tokyo, Japan">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_tokyo.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Tokyo, Japan</h4>
                <p>Neon & Serenity</p>
              </div>
            </Link>

            <Link to="/trip/santorini" className="dest-card hover-glow" data-name="Santorini, Greece">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_santorini.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>Santorini, Greece</h4>
                <p>Mediterranean Bliss</p>
              </div>
            </Link>

            <Link to="/trip/newyork" className="dest-card hover-glow" data-name="New York, USA">
              <div className="dest-img" style={{ backgroundImage: "url('/images/dest_newyork.png')" }}></div>
              <div className="dest-label glass-panel">
                <h4>New York, USA</h4>
                <p>The City That Never Sleeps</p>
              </div>
            </Link>
          </div>
          
          <div className="center-btn-container">
            <Link to="/explore" className="btn-outline">Explore All Destinations</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="gold-line center"></div>
          </div>
          
          <div className="features-grid">
            <div className="feature-card glass-panel hover-glow">
              <Shield className="gold-icon" size={40} />
              <h4>Trusted & Secure</h4>
              <p>Your safety and privacy are our highest priority from departure to return.</p>
            </div>
            
            <div className="feature-card glass-panel hover-glow">
              <Star className="gold-icon" size={40} />
              <h4>Premium Experience</h4>
              <p>Exclusive access to the world's finest hotels and private experiences.</p>
            </div>
            
            <div className="feature-card glass-panel hover-glow">
              <Clock className="gold-icon" size={40} />
              <h4>24/7 VIP Support</h4>
              <p>Dedicated concierge available round the clock for your every need.</p>
            </div>
            
            <div className="feature-card glass-panel hover-glow">
              <DollarSign className="gold-icon" size={40} />
              <h4>Best Value</h4>
              <p>Unmatched luxury with transparent and competitive premium pricing.</p>
            </div>
            
            <div className="feature-card glass-panel hover-glow">
              <Heart className="gold-icon" size={40} />
              <h4>Personalized</h4>
              <p>Bespoke itineraries crafted specifically to your unique tastes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What Our Travelers Say</h2>
            <div className="gold-line center"></div>
          </div>
          
          <div className="testimonial-carousel">
            <button className="carousel-btn prev" onClick={scrollPrev}>
              <ChevronLeft size={24} />
            </button>

            <div 
              className="testimonial-viewport" 
              ref={scrollRef}
              onMouseEnter={() => { isHovered.current = true; }}
              onMouseLeave={() => { isHovered.current = false; }}
            >
              <div className="testimonial-track">
              {/* Group 1 */}
              <div className="testimonial-group">
                {testimonials.map((t, idx) => (
                  <div key={`g1-${idx}`} className="testimonial-card glass-panel hover-glow">
                    <div className="test-avatar" style={{ backgroundImage: `url(${t.image})` }}></div>
                    <div className="test-content">
                      <div className="stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                        ))}
                      </div>
                      <p className="review-text">"{t.review}"</p>
                      <h5 className="reviewer-name gold-text">- {t.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Group 2 (Duplicate for infinite scroll) */}
              <div className="testimonial-group" aria-hidden="true">
                {testimonials.map((t, idx) => (
                  <div key={`g2-${idx}`} className="testimonial-card glass-panel hover-glow">
                    <div className="test-avatar" style={{ backgroundImage: `url(${t.image})` }}></div>
                    <div className="test-content">
                      <div className="stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                        ))}
                      </div>
                      <p className="review-text">"{t.review}"</p>
                      <h5 className="reviewer-name gold-text">- {t.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={scrollNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-container glass-panel">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-desc">Let us craft your ultimate luxury experience. The world awaits.</p>
            <div className="cta-buttons">
              <Link to="/explore" className="btn-gold">Explore Packages</Link>
              <button className="btn-whatsapp-outline">
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
