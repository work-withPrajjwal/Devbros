import { useState } from "react";
import Logo from "./Logo";
import "../styles/navbar.css";

const Navbar = ({ current, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Service", "Courses", "Portfolio", "About", "Contact"];

  return (
    <nav className="navbar">
      <Logo navigate={navigate} />

      <div className="navbar-links">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => navigate(l)}
            className={`navbar-link ${current === l ? "active" : ""}`}
          >
            {l}
          </button>
        ))}
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => {
                navigate(l);
                setMenuOpen(false);
              }}
              className={`mobile-menu-link ${current === l ? "active" : ""}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
