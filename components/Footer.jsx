export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner content-wide">
        <div className="footer-brand">
          <img
            className="footer-logo-img"
            src="/images/footer-logo.png"
            alt="ISKCON Stone Temple"
            width="237"
            height="70"
            loading="lazy"
          />
          <p>
            International Society for Krishna Consciousness, dedicated to
            spreading the timeless wisdom of Vedic knowledge and spiritual
            enlightenment.
          </p>
          <div className="social-row">
            <a href="#" aria-label="Facebook" className="soc">
              <img
                src="/images/icons/social-1.svg"
                alt=""
                width="34"
                height="40"
                decoding="async"
              />
            </a>
            <a href="#" aria-label="Instagram" className="soc">
              <img
                src="/images/icons/social-2.svg"
                alt=""
                width="34"
                height="48"
                decoding="async"
              />
            </a>
            <a href="#" aria-label="YouTube" className="soc">
              <img
                src="/images/icons/social-3.svg"
                alt=""
                width="34"
                height="48"
                decoding="async"
              />
            </a>
            <a href="#" aria-label="X" className="soc">
              <img
                src="/images/icons/social-4.svg"
                alt=""
                width="34"
                height="48"
                decoding="async"
              />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">About Us</a>
          <a href="#">Events</a>
          <a href="#">Darshan</a>
          <a href="#">Programs</a>
          <a href="#">Resources</a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#">Temple Tours</a>
          <a href="#">Spiritual Counseling</a>
          <a href="#">Bhagavad Gita Classes</a>
          <a href="#">Youth Programs</a>
          <a href="#">Food for Life</a>
        </div>
        <div className="footer-col footer-col--contact">
          <h4>Contact</h4>
          <p className="footer-line">
            <img
              className="footer-line__ic"
              src="/images/icons/visit-icon-address.svg"
              alt=""
              width="32"
              height="32"
            />
            <span>
              45 Saradha College Road, Near New Bus Stand, Salem - 636007, Tamil
              Nadu, India
            </span>
          </p>
          <p className="footer-line">
            <img
              className="footer-line__ic"
              src="/images/icons/footer-icon-phone.svg"
              alt=""
              width="35"
              height="22"
            />
            <span>+91 9876543210</span>
          </p>
          <p className="footer-line">
            <img
              className="footer-line__ic"
              src="/images/icons/footer-icon-email.svg"
              alt=""
              width="35"
              height="22"
            />
            <span>info@iskconsalem.com</span>
          </p>
          <p className="footer-line">
            <img
              className="footer-line__ic"
              src="/images/icons/footer-icon-hours.svg"
              alt=""
              width="35"
              height="22"
            />
            <span>4:30 AM - 8:30 PM</span>
          </p>
        </div>
      </div>
      <div className="footer-bar content-wide">
        <span>&copy; 2025 ISKCON Stone Temple. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
