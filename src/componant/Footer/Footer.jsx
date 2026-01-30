import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="LS-footer-container">
      <div className="LS-footer-top-section">
        {/* الـ DIV الفرعي الأول: اللوغو والاشتراك */}
        <div className="LS-footer-brand-container">
          <div className="LS-footer-logo-box"> 
            <img src="/assets/icons/start&footer/estaten-logo-lg.svg" alt="Estatein" />
            <h2 className="LS-Estatein ">Estatein</h2>
          </div>
          <div className="LS-footer-subscribe-box">
            <div className="LS-footer-input-wrapper button">
              <img src="/assets/icons/start&footer/add-envelope.svg" alt="email icon" />
              <input type="email" placeholder="Enter Your Email" />
              <button className="LS-footer-send-btn">
                <img src="/assets/icons/start&footer/send-email.svg" alt="send" />
              </button>
            </div>
          </div>
        </div>

        {/* الـ DIV الفرعي الثاني: حاوية الروابط (الأعمدة) */}
        <div className="LS-footer-links-container">
          {/* عمود 1 */}
          <div className="LS-footer-nav-column">
            <div className="LS-footer-column-title"><h5>Home</h5></div>
            <div className="LS-footer-column-links">
              <ul>
                <li className="link"><a href="#">Hero Section</a></li>
                <li className="link"><a href="#">Features</a></li>
                <li className="link"><a href="#">Properties</a></li>
                <li className="link"><a href="#">Testimonials</a></li>
                <li className="link"><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* عمود 2 */}
          <div className="LS-footer-nav-column">
            <div className="LS-footer-column-title"><h5>About Us</h5></div>
            <div className="LS-footer-column-links">
              <ul>
                <li className="link"><a href="#">Our Story</a></li>
                <li className="link"><a href="#">Our Works</a></li>
                <li className="link"><a href="#">How it Works</a></li>
                <li className="link"><a href="#">Our Team</a></li>
                <li className="link"><a href="#">Our Clients</a></li>
              </ul>
            </div>
          </div>

          {/* عمود 3 */}
          <div className="LS-footer-nav-column">
            <div className="LS-footer-column-title"><h5>Properties</h5></div>
            <div className="LS-footer-column-links">
              <ul>
                <li className="link"><a href="#">Portfolio</a></li>
                <li className="link"><a href="#">Categories</a></li>
              </ul>
            </div>
          </div>

          {/* عمود 4 */}
          <div className="LS-footer-nav-column">
            <div className="LS-footer-column-title"><h5>Services</h5></div>
            <div className="LS-footer-column-links">
              <ul>
                <li className="link"><a href="#">Valuation Mastery</a></li>
                <li className="link"><a href="#">Strategic Marketing</a></li>
                <li className="link"><a href="#">Negotiation Wizardry</a></li>
                <li className="link"><a href="#">Closing Success</a></li>
                <li className="link"><a href="#">Property Management</a></li>
              </ul>
            </div>
          </div>

          {/* عمود 5 */}
          <div className="LS-footer-nav-column">
            <div className="LS-footer-column-title"><h5>Contact Us</h5></div>
            <div className="LS-footer-column-links">
              <ul>
                <li className="link"><a href="#">Contact Form</a></li>
                <li className="link"><a href="#">Our Offices</a></li>
              </ul>
            </div>
          </div>
        </div> {/* نهاية حاوية الروابط */}
      </div> {/* نهاية القسم العلوي */}

      {/* الـ DIV الأساسي الثاني (السفلي) */}
      <div className="LS-footer-bottom-section">
        {/* الـ DIV الفرعي الأول: الحقوق */}
        <div className="LS-footer-legal-box link">
          <a href="#">@2023 Estatein. All Rights Reserved</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* الـ DIV الفرعي الثاني: السوشيال ميديا */}
        <div className="LS-footer-social-box">
          <div className="LS-social-item"><img src="/assets/icons/start&footer/facebook.svg" alt="facebook" /></div>
          <div className="LS-social-item"><img src="/assets/icons/start&footer/linkedin.svg" alt="linkedin" /></div>
          <div className="LS-social-item"><img src="/assets/icons/start&footer/twitter.svg" alt="twitter" /></div>
          <div className="LS-social-item"><img src="/assets/icons/start&footer/youtube.svg" alt="youtube" /></div>
        </div>
      </div>
      </footer>
  );
};

export default Footer;