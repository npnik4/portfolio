/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const resume = () => {};

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" className="img" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-links" onClick={closeMobileMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="/" className="nav-links-mobile" onClick={() => resume()}>
              Contact
            </a>
          </li>
        </ul>
        {button && (
          <Button
            className="nav-button"
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => resume()}
          >
            Resume
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
