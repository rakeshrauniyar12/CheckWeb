import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const isMobile = window.innerWidth <= 768;

  // Handle hover for laptop devices
  const handleMouseEnterAbout = () => {
    if (!isMobile) setShowAboutDropdown(true);
  };

  const handleMouseLeaveAbout = () => {
    if (!isMobile) setShowAboutDropdown(false);
  };

  const handleMouseEnterShowcase = () => {
    if (!isMobile) setShowMegaMenu(true);
  };

  const handleMouseLeaveShowcase = () => {
    if (!isMobile) setShowMegaMenu(false);
  };

  // Toggle dropdowns for mobile and tablet
  const toggleHamburgerMenu = () => setShowHamburgerMenu(!showHamburgerMenu);
  const toggleAboutDropdown = () => setShowAboutDropdown(!showAboutDropdown);
  const toggleTeamDropdown = (e) => {
    e.stopPropagation(); // Prevent closing parent dropdown
    setShowTeamDropdown(!showTeamDropdown);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Life Signify Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleHamburgerMenu}>
        {showHamburgerMenu ? <CloseIcon /> : <MenuIcon />}
      </div>

      <nav className={`nav ${showHamburgerMenu ? 'active' : ''}`}>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Showcase (Mega Menu) */}
          <li
            className="menuItem"
            onMouseEnter={handleMouseEnterShowcase}
            onMouseLeave={handleMouseLeaveShowcase}
            onClick={() => setShowMegaMenu(!showMegaMenu)}
          >
            <span>Showcase</span>
            <ArrowDropDownIcon className={`arrow ${showMegaMenu ? 'rotate' : ''}`} />
            {showMegaMenu && (
              <div className="megaMenu">
                <div className="megaMenuContent">
                  <div className="section">
                    <h3>Section 1</h3>
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="divBlock">
                        Div {index + 1}
                      </div>
                    ))}
                  </div>
                  <div className="section">
                    <h3>Section 2</h3>
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="divBlock">
                        Div {index + 1}
                      </div>
                    ))}
                  </div>
                  <div className="section">
                    <h3>Section 3</h3>
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="divBlock">
                        Div {index + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* About (Dropdown Menu) */}
          <li
            className="menuItem"
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
            onClick={toggleAboutDropdown}
          >
            <span>About</span>
            <ArrowDropDownIcon className={`arrow ${showAboutDropdown ? 'rotate' : ''}`} />
            {showAboutDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/about">About Life Signify</Link>
                </li>
                <li>
                  <Link to="/dr-ravi-shankar">Dr. Ravi Shankar</Link>
                </li>
                <li>
                  <Link to="/archana-shankar-gupta">Archana Shankar Gupta</Link>
                </li>
                {/* Team (Dropdown for Team Members) */}
                <li className="menuItem" onClick={toggleTeamDropdown}>
                 
                  <ArrowDropDownIcon className={`arrow ${showTeamDropdown ? 'rotate' : ''}`} />
                  {showTeamDropdown && (
                    <ul className="dropdown teamDropdown">
                      <li>
                        <Link to="/dr-ashish-mahesh-gupta">Dr. Ashish Mahesh Gupta</Link>
                      </li>
                      <li>
                        <Link to="/premlata-saxena">Premlata Saxena</Link>
                      </li>
                      <li>
                        <Link to="/pankaj-tripathi">Pankaj Tripathi</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/get-a-consultation">Get a consultation</Link>
          </li>
          <li>
            <Link to="/my-account/orders">Login</Link>
          </li>

          <li>
            <Link to="/hooponopono-power">
              <button className="webinarBtn">Ho'oponopono Power Webinar</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
