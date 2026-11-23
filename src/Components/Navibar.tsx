import { useState } from 'react';
import './Navibar.css';
import useScrollReveal from "../hooks/useScrollReveal";

function Navibar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRef = useScrollReveal<HTMLElement>();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      id="navbar"
      ref={revealRef}
      className="main-header scroll-reveal"
    >
      <div className="nav-wrapper">
        <div className="nav-logo">Mr.Malinda</div>

        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-nav" className={`nav-container ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#Services" onClick={closeMenu}>Services</a></li>
            <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#Qualifications" onClick={closeMenu}>Qualifications</a></li>
            <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navibar;