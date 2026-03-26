import { useState } from 'react';
import { ArrowRight, Mail, Lock, User, Globe } from 'lucide-react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-split layout-wrapper">
        <div className="auth-image-side" style={{ backgroundImage: "url('/images/dest_paris.png')" }}>
          <div className="auth-image-overlay">
            <h2 className="gold-text">Wright My Trip</h2>
            <p>Your Journey, Our Responsibility</p>
          </div>
        </div>
        
        <div className="auth-form-side">
          <div className="auth-form-container glass-panel">
            <div className="auth-header">
              <h3>{("Welcome " + (isLogin ? "Back" : "to Luxury"))}</h3>
              <p>{isLogin ? "Sign in to access your exclusive itineraries" : "Create an account to start your journey"}</p>
            </div>
            
            <div className="auth-toggle">
              <button 
                className={`toggle-btn ${isLogin ? 'active' : ''}`} 
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button 
                className={`toggle-btn ${!isLogin ? 'active' : ''}`} 
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
            
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="input-with-icon">
                    <User size={18} className="gold-icon" />
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="gold-icon" />
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="gold-icon" />
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>
              
              {isLogin && (
                <div className="forgot-password">
                  <a href="#" className="gold-text">Forgot Password?</a>
                </div>
              )}
              
              <button className="submit-btn btn-gold hover-glow">
                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="auth-divider">
              <span>Or continue with</span>
            </div>
            
            <button className="social-auth-btn btn-outline hover-glow">
              <Globe size={18} /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
