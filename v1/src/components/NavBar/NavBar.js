/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollpos > currentScrollPos && prevScrollpos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollpos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);
    window.addEventListener("scroll", handleScroll);
    showButton();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos, isVisible, handleScroll]);


  const resume = () => {};

  return (
    <nav className="navbar" id="navbar" style={{top: isVisible ? '0' : '-100px'}}>
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
          <li className="menu-button">
            <a href="/" className="nav-links-mobile" onClick={() => resume()}>
              Resume
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
