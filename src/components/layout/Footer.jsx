import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-symbol">
              g<span>.</span>
            </span>
            <span className="brand-name">gatherly</span>
          </Link>
          <p>
            Less scrolling. More living.
            <br />
            Find experiences that bring people together.
          </p>
        </div>
        <div className="footer-links">
          <b>Explore</b>
          <Link to="/events">All events</Link>
          <Link to="/my-events">My tickets</Link>
          <Link to="/about">Our story</Link>
        </div>
        <div className="footer-links">
          <b>Say hello</b>
          <a href="mailto:hello@gatherly.example">hello@gatherly.example</a>
          <span>Chennai · Tamil Nadu</span>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={16} />
            </a>
            <a href="mailto:hello@gatherly.example">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Gatherly. All moments reserved.</span>
        <span>
          Made for getting together <ArrowUpRight size={13} />
        </span>
      </div>
    </footer>
  );
}
