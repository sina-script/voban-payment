import "./App.css";

export default function App() {
  return (
    <div className="payment-viewport">
      <div className="ambient-sphere glow-top" />
      <div className="ambient-sphere glow-bottom" />
      <div className="mesh-grid" />

      <div className="checkout-container">

        <div className="card-display-pane">
          <div className="luxury-card">
            <div className="shimmer-fx" />


            <div className="card-top-row">
              <div className="bank-identity">
                <svg className="bank-svg-logo" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="10" height="10" rx="3" fill="#c084fc" />
                  <rect x="16" y="2" width="10" height="10" rx="3" fill="rgba(192, 132, 252, 0.45)" />
                  <rect x="2" y="16" width="10" height="10" rx="3" fill="rgba(192, 132, 252, 0.45)" />
                  <rect x="16" y="16" width="10" height="10" rx="3" fill="#a855f7" />
                  <circle cx="14" cy="14" r="3.5" fill="#ffffff" />
                </svg>
                <div className="bank-text-box">
                  <span className="bank-name">BEHPARDAKHT</span>
                  <span className="bank-sub">PREMIUM GATEWAY</span>
                </div>
              </div>

            </div>


            <div className="card-digits">
              <span>6104</span>
              <span>3378</span>
              <span>9920</span>
              <span>4812</span>
            </div>


            <div className="card-meta-row">
              <div className="meta-box">
                <span className="meta-tag">EXP DATE</span>
                <span className="meta-val">08 / 29</span>
              </div>
              <div className="meta-box align-right">
                <span className="meta-tag">CVV2</span>
                <span className="meta-val">749</span>
              </div>
            </div>
          </div>


          <div className="total-payable-card">
            <div className="total-title-group">
              <span className="total-caption">TOTAL PAYABLE</span>
            </div>
            <div className="amount-group">
              <span className="amount-num">12,500,000</span>
              <span className="amount-curr">IRR</span>
            </div>
          </div>
        </div>


        <div className="form-pane">
          <div className="form-header">
            <h2>VUBAN PAYMENT</h2>
            <p>Enter your bank card information</p>
          </div>

          <form className="luxury-form">

            <div className="input-group">
              <label>CARD NUMBER</label>
              <div className="input-wrapper">
                <svg className="field-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="5" width="20" height="14" rx="3" strokeWidth="1.8" />
                  <line x1="2" y1="10" x2="22" y2="10" strokeWidth="1.8" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your card number"
                />
              </div>
            </div>


            <div className="input-row three-col">
              <div className="input-group">
                <label>CVV2</label>
                <div className="input-wrapper">
                  <svg className="field-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="10" rx="2" strokeWidth="1.8" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="1.8" />
                  </svg>
                  <input type="password" placeholder="Enter your cvv2" />
                </div>
              </div>

              <div className="input-group">
                <label>MONTH</label>
                <div className="input-wrapper">
                  <svg className="field-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="17" rx="3" strokeWidth="1.8" />
                    <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.8" />
                  </svg>
                  <input type="text" placeholder="mm" maxLength={2} />
                </div>
              </div>

              <div className="input-group">
                <label>YEAR</label>
                <div className="input-wrapper">
                  <svg className="field-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                    <polyline points="12 7 12 12 15 14" strokeWidth="1.8" />
                  </svg>
                  <input type="text" placeholder="yy"  maxLength={2} />
                </div>
              </div>
            </div>


            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <svg className="field-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon
                    points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Enter your password"

                />
              </div>
            </div>


            <div className="input-group">
              <label>CAPTCHA CODE</label>
              <div className="captcha-wrapper">
                <div className="input-wrapper">
                  <svg className="field-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.8" />
                  </svg>
                  <input type="text" placeholder="Enter captcha code"  />
                </div>
                <div className="captcha-badge">
                  <span>4792</span>
                </div>
              </div>
            </div>

            <button type="button" className="pay-submit-btn">
              <span>COMPLETE SECURE PAYMENT</span>
              <svg className="btn-svg-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2.2" strokeLinecap="round" />
                <polyline points="12 5 19 12 12 19" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
