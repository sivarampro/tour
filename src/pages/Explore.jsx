import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, MapPin, Clock, Star, X } from 'lucide-react';
import './Explore.css';

const ALL_TOURS = [
  // Domestic
  { id: 'santorini', title: 'Royal Rajasthan Palace Tour', location: 'India', durationDays: 7, price: 4500, rating: 4.9, img: '/images/category_domestic.png', categories: ['Domestic'] },
  { id: 'bali',      title: 'Kerala Backwaters Retreat',   location: 'India', durationDays: 5, price: 2200, rating: 4.7, img: '/images/dest_bali.png',       categories: ['Domestic', 'Honeymoon'] },
  // International
  { id: 'santorini', title: 'Santorini Sunset Retreat',    location: 'Greece',       durationDays: 5, price: 5200, rating: 5.0, img: '/images/category_intl.png',   categories: ['International', 'Honeymoon'] },
  { id: 'maldives',  title: 'Maldives Overwater Bliss',   location: 'Maldives',     durationDays: 6, price: 8900, rating: 5.0, img: '/images/dest_maldives.png', categories: ['International', 'Honeymoon'] },
  { id: 'dubai',     title: 'Dubai Ultra Luxury City Tour',location: 'UAE',          durationDays: 4, price: 6500, rating: 4.9, img: '/images/dest_dubai.png',    categories: ['International', 'Corporate'] },
  { id: 'swiss',     title: 'Swiss Alps Winter Elegance', location: 'Switzerland',  durationDays: 7, price: 7200, rating: 4.9, img: '/images/dest_swiss.png',    categories: ['International'] },
  { id: 'paris',     title: 'Paris Romantic City Break',  location: 'France',       durationDays: 5, price: 3200, rating: 4.9, img: '/images/dest_paris.png',    categories: ['International', 'Honeymoon'] },
  { id: 'tokyo',     title: 'Tokyo Neon & Serenity Tour', location: 'Japan',        durationDays: 7, price: 4100, rating: 4.8, img: '/images/dest_tokyo.png',    categories: ['International', 'Friends Trips', 'Group Trip'] },
  { id: 'newyork',   title: 'New York City Explorer',     location: 'USA',          durationDays: 5, price: 3800, rating: 4.7, img: '/images/dest_newyork.png', categories: ['International', 'Friends Trips'] },
  // Family Trips
  { id: 'bali',      title: 'Bali Family Jungle Adventure',location: 'Indonesia',   durationDays: 8, price: 3800, rating: 4.8, img: '/images/dest_bali.png',    categories: ['International', 'Family Trips'] },
  { id: 'santorini', title: 'Greek Islands Family Voyage', location: 'Greece',      durationDays: 9, price: 6000, rating: 4.9, img: '/images/dest_santorini.png', categories: ['International', 'Family Trips'] },
  // Friends Trips
  { id: 'dubai',     title: 'Dubai Friends Party & Adventure', location: 'UAE',     durationDays: 4, price: 4200, rating: 4.8, img: '/images/dest_dubai.png',   categories: ['International', 'Friends Trips', 'Group Trip'] },
  { id: 'newyork',   title: 'NYC Friends Weekend Getaway',  location: 'USA',        durationDays: 3, price: 2800, rating: 4.6, img: '/images/dest_newyork.png', categories: ['International', 'Friends Trips', 'Group Trip'] },
  // Group Trip
  { id: 'tokyo',     title: 'Japan Group Cultural Tour',  location: 'Japan',        durationDays: 8, price: 3500, rating: 4.7, img: '/images/dest_tokyo.png',   categories: ['International', 'Group Trip'] },
  { id: 'swiss',     title: 'Alpine Group Skiing Escape', location: 'Switzerland',  durationDays: 6, price: 5500, rating: 4.9, img: '/images/dest_swiss.png',   categories: ['International', 'Group Trip'] },
  // Old People Trip (Senior-Friendly)
  { id: 'paris',     title: 'Paris Leisure Senior Citizen Tour',  location: 'France',       durationDays: 6, price: 3000, rating: 5.0, img: '/images/dest_paris.png',   categories: ['International', 'Senior Citizen'] },
  { id: 'swiss',     title: 'Swiss Wellness Senior Citizen Retreat', location: 'Switzerland', durationDays: 7, price: 5800, rating: 5.0, img: '/images/dest_swiss.png', categories: ['International', 'Senior Citizen'] },
  { id: 'bali',      title: 'Bali Healing & Serenity for Senior Citizens', location: 'Indonesia', durationDays: 6, price: 2900, rating: 4.8, img: '/images/dest_bali.png',  categories: ['International', 'Senior Citizen'] },
  // Corporate
  { id: 'dubai',     title: 'Dubai Corporate Incentive Trip', location: 'UAE',      durationDays: 3, price: 4800, rating: 4.8, img: '/images/dest_dubai.png',   categories: ['Corporate', 'Group Trip'] },
  { id: 'santorini', title: 'Santorini Corporate Retreat',    location: 'Greece',   durationDays: 4, price: 5500, rating: 4.9, img: '/images/dest_santorini.png', categories: ['Corporate'] },
];

const CATEGORIES = ['Domestic', 'International', 'Honeymoon', 'Family Trips', 'Corporate', 'Friends Trips', 'Group Trip', 'Senior Citizen'];
const DURATION_OPTIONS = [
  { label: '1–3 Days', min: 1, max: 3 },
  { label: '4–7 Days', min: 4, max: 7 },
  { label: '8+ Days',  min: 8, max: 999 },
];

const formatPrice = (n) => `₹${n.toLocaleString()}`;
const getDurationLabel = (d) => `${d} Days`;

const Explore = () => {
  const [search, setSearch]       = useState('');
  const [categories, setCategories] = useState([]);
  const [duration, setDuration]   = useState('');
  const [budget, setBudget]       = useState(20000);
  const [sort, setSort]           = useState('recommended');

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSearch('');
    setCategories([]);
    setDuration('');
    setBudget(20000);
    setSort('recommended');
  };

  const filteredTours = useMemo(() => {
    let result = ALL_TOURS.filter((tour) => {
      const matchesSearch =
        search.trim() === '' ||
        tour.title.toLowerCase().includes(search.toLowerCase()) ||
        tour.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        categories.length === 0 ||
        categories.some((c) => tour.categories.includes(c));

      const matchesDuration = (() => {
        if (!duration) return true;
        const opt = DURATION_OPTIONS.find((d) => d.label === duration);
        return opt ? tour.durationDays >= opt.min && tour.durationDays <= opt.max : true;
      })();

      const matchesBudget = tour.price <= budget;

      return matchesSearch && matchesCategory && matchesDuration && matchesBudget;
    });

    if (sort === 'price_asc')  result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating')     result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, categories, duration, budget, sort]);

  const hasActiveFilters = search || categories.length > 0 || duration || budget < 20000;

  return (
    <div className="explore-page section-padding">
      <div className="container">
        
        <div className="explore-header text-center">
          <h1 className="gold-text">Explore Premium Packages</h1>
          <p>Discover our curated collection of luxury travel experiences.</p>
        </div>

        <div className="explore-layout">
          {/* Sidebar Filters */}
          <aside className="explore-sidebar glass-panel">
            <div className="filter-header">
              <h3><Filter size={18} /> Filters</h3>
              <button
                className={`clear-filter ${hasActiveFilters ? 'active' : ''}`}
                onClick={clearFilters}
              >
                {hasActiveFilters ? <><X size={14} /> Clear</> : 'Clear'}
              </button>
            </div>

            {/* Search */}
            <div className="filter-group">
              <h4>Search</h4>
              <div className="search-box">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Destination or Tour"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button className="search-clear-btn" onClick={() => setSearch('')}>
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Category */}
            <div className="filter-group">
              <h4>Category</h4>
              {CATEGORIES.map((cat) => (
                <label key={cat} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={categories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className={categories.includes(cat) ? 'cat-active' : ''}>{cat}</span>
                </label>
              ))}
            </div>

            {/* Budget */}
            <div className="filter-group">
              <h4>Budget <span className="budget-value">(up to {formatPrice(budget)})</span></h4>
              <input
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="range-slider"
              />
              <div className="price-range-labels">
                <span>₹1k</span>
                <span>₹20k+</span>
              </div>
            </div>

            {/* Duration */}
            <div className="filter-group">
              <h4>Duration</h4>
              {DURATION_OPTIONS.map((opt) => (
                <label key={opt.label} className="checkbox-label">
                  <input
                    type="radio"
                    name="duration"
                    checked={duration === opt.label}
                    onChange={() => setDuration(opt.label)}
                  />
                  <span className={duration === opt.label ? 'cat-active' : ''}>{opt.label}</span>
                </label>
              ))}
              {duration && (
                <button className="clear-filter active" style={{ marginTop: 8 }} onClick={() => setDuration('')}>
                  <X size={12} /> Clear duration
                </button>
              )}
            </div>
          </aside>
          
          {/* Tour Grid */}
          <div className="explore-content">
            <div className="results-header">
              <span>
                Showing <strong>{filteredTours.length}</strong> of {ALL_TOURS.length} packages
                {hasActiveFilters && <span className="filter-active-tag"> (filtered)</span>}
              </span>
              <select
                className="sort-dropdown"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {filteredTours.length === 0 ? (
              <div className="no-results glass-panel">
                <p>😔 No packages match your filters.</p>
                <button className="btn-outline" onClick={clearFilters}>Clear Filters</button>
              </div>
            ) : (
              <div className="tours-grid">
                {filteredTours.map((tour, idx) => (
                  <Link key={idx} to={`/trip/${tour.id}`} className="tour-card glass-panel hover-glow">
                    <div className="tour-card-img" style={{ backgroundImage: `url(${tour.img})` }}>
                      <div className="tour-cats-row">
                        {tour.categories.slice(0, 2).map((c) => (
                          <span key={c} className="tour-category-badge">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="tour-card-body">
                      <div className="tour-location">
                        <MapPin size={14} className="gold-icon" /> {tour.location}
                      </div>
                      <h3 className="tour-title">{tour.title}</h3>
                      <div className="tour-meta">
                        <span><Clock size={14} className="gold-icon" /> {getDurationLabel(tour.durationDays)}</span>
                        <span><Star size={14} fill="#D4AF37" color="#D4AF37" /> {tour.rating}</span>
                      </div>
                      <div className="tour-footer">
                        <div className="tour-price">
                          <span className="label">From</span>
                          <strong>{formatPrice(tour.price)}</strong>
                        </div>
                        <span className="btn-outline tour-book-btn">View Details</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
