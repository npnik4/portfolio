/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../assets/logo2.svg";
import { Button } from "@material-ui/core";
import res from '../../assets/docs/Nikhil_Resume.pdf';
import {NavLink, Icon} from '../Styled/StyledComponents';

function Navbar(props) {
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


  const resume = () => {
    window.location.href = res;
  };

  return (
    <nav className="navbar" id="navbar" style={{top: isVisible ? '0' : '-100px'}}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" className="img" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <Icon className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink href="#about" onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#work" className="nav-links" onClick={closeMobileMenu}>
              Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="mailto:npnik4@gmail.com" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
          <li className="menu-button">
            <a href="/" className="nav-links-mobile" onClick={() => resume()}>
              Resume
            </a>
          </li>
          {/* <li className="menu-button">
            <div className="nav-links-mobile">
              {props.children}
            </div>
          </li> */}
        </ul>
        {button && (
          <Button
            className="nav-button"
            size="small"
            color="secondary"
            variant="contained"
            onClick={() => resume()}
          >
            Resume
          </Button>
        )}
        { (process.env.NODE_ENV !== "production") ? button && props.children ? 
          props.children :
          null
        : null}
      </div>
    </nav>
  );
}

export default Navbar;
