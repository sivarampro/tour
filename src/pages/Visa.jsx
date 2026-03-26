import { useState } from 'react';
import { Upload, CheckCircle, FileText, Globe } from 'lucide-react';
import './Visa.css';

const Visa = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="visa-page section-padding">
      <div className="container">
        <div className="visa-header text-center">
          <h1 className="gold-text">Premium Visa Concierge</h1>
          <p>Hassle-free visa processing for your global journeys.</p>
        </div>

        <div className="visa-layout">
          <div className="visa-steps-container glass-panel">
            <div className="step-tracker">
              <div className={`step ${step >= 1 ? 'active' : ''}`} onClick={() => setStep(1)}>
                <div className="step-icon"><Globe size={20} /></div>
                <span>Details</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`} onClick={() => setStep(2)}>
                <div className="step-icon"><Upload size={20} /></div>
                <span>Uploads</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${step >= 3 ? 'active' : ''}`} onClick={() => setStep(3)}>
                <div className="step-icon"><FileText size={20} /></div>
                <span>Review</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${step >= 4 ? 'active' : ''}`} onClick={() => setStep(4)}>
                <div className="step-icon"><CheckCircle size={20} /></div>
                <span>Status</span>
              </div>
            </div>

            <div className="step-content">
              {step === 1 && (
                <div className="step-pane animate-fade-in">
                  <h2>Travel Details</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Destination Country</label>
                      <select><option>Select Country</option><option>France</option><option>UAE</option><option>Maldives</option></select>
                    </div>
                    <div className="form-group">
                      <label>Citizenship</label>
                      <select><option>Select Citizenship</option><option>United States</option><option>India</option><option>UK</option></select>
                    </div>
                    <div className="form-group">
                      <label>Travel Date</label>
                      <input type="date" />
                    </div>
                    <div className="form-group">
                      <label>Visa Type</label>
                      <select><option>Tourist</option><option>Business</option></select>
                    </div>
                  </div>
                  <button className="btn-gold" onClick={() => setStep(2)}>Continue</button>
                </div>
              )}

              {step === 2 && (
                <div className="step-pane animate-fade-in">
                  <h2>Document Upload</h2>
                  <div className="upload-zone hover-glow">
                    <Upload size={40} className="gold-icon mx-auto" />
                    <p>Drag and drop your Passport copy here</p>
                    <span className="text-sm text-secondary">PDF, JPG up to 5MB</span>
                  </div>
                  <div className="upload-zone hover-glow">
                    <Upload size={40} className="gold-icon mx-auto" />
                    <p>drag and drop your Passport-sized Photograph</p>
                  </div>
                  <div className="btn-group">
                    <button className="btn-outline" onClick={() => setStep(1)}>Back</button>
                    <button className="btn-gold" onClick={() => setStep(3)}>Continue</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="step-pane animate-fade-in">
                  <h2>Review Application</h2>
                  <div className="review-box glass-panel">
                    <p><strong>Destination:</strong> France</p>
                    <p><strong>Visa Type:</strong> Tourist</p>
                    <p><strong>Documents:</strong> 2 Files Uploaded</p>
                    <p><strong>Concierge Fee:</strong> ₹150</p>
                  </div>
                  <div className="btn-group">
                    <button className="btn-outline" onClick={() => setStep(2)}>Back</button>
                    <button className="btn-gold" onClick={() => setStep(4)}>Submit Application</button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="step-pane animate-fade-in text-center">
                  <CheckCircle size={60} className="gold-icon mx-auto mb-4" />
                  <h2>Application Submitted</h2>
                  <p className="mb-6">Your visa expert will review the documents and begin processing.</p>
                  <div className="status-tracker">
                    <div className="status-item completed">Submitted</div>
                    <div className="status-item active">Under Review</div>
                    <div className="status-item">Embassy Processing</div>
                    <div className="status-item">Approved</div>
                  </div>
                  <button className="btn-outline mt-8" onClick={() => setStep(1)}>Start New Application</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
