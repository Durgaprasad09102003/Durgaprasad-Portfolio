import React, { useState } from 'react';
import assets from '../assets/assets';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  const closeNav = () => {
    if (navVisible) setNavVisible(false);
  };

  return (
    <header className="Header">
      <nav className={`navbar ${navVisible ? 'slider' : ''}`}>
        <ul className={`nav-list ${navVisible ? 'nav-visible' : ''}`}>
          <li className="nav-item">
            <NavLink to="/home" activeClassName="active" onClick={closeNav}>Home</NavLink>
          </li>
          <li className="nav-item">
            <a href="#Education" onClick={closeNav}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#Aboutmelink" onClick={closeNav}>About me</a>
          </li>
          <li className="nav-item brand">
            <b>DURGA PRASAD</b>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" activeClassName="active" onClick={closeNav}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <a href={assets.Portfolio} target="_blank" rel="noopener noreferrer" onClick={closeNav}>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/media" activeClassName="active" onClick={closeNav}>Visume</NavLink>
          </li>
        </ul>

        <button
            onClick={toggleNavVisibility}
            className={`toggle-btn ${navVisible ? 'sliderup' : ''}`}
            aria-label="Toggle Navigation"
        >
            <img
            src={navVisible ? assets.close : assets.hb}
            alt="Toggle Navigation"
            className={navVisible ? 'nav-visible' : 'hamberger-tag'}
            />
        </button>
      </nav>
    </header>
  );
}