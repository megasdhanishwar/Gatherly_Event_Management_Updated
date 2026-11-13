import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Ticket, ArrowUpRight } from "lucide-react";

export default function Navbar({ ticketCount }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-symbol">
            g<span>.</span>
          </span>
          <span className="brand-name">gatherly</span>
        </Link>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/events" onClick={close}>
            Explore events
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About us
          </NavLink>
          <NavLink to="/my-events" onClick={close}>
            My events <span className="nav-badge">{ticketCount}</span>
          </NavLink>
        </nav>
        <Link to="/events" className="nav-cta">
          Find an event <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
