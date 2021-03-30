import React from "react";
import "./NavBarLite.scss";
import logo from "../../assets/logo2.svg";
import logoDark from "../../assets/logoDark.svg";

function NavbarLite(props) {
  return (
    <nav className="navbar-lite">
      <div className="navbar-container-lite">
        <a href="/" className="navbar-logo-lite">
          <img
            src={props.theme === "light" ? logo : logoDark}
            alt="logo"
            className="img"
          />
        </a>
        {props.children}
      </div>
    </nav>
  );
}

export default NavbarLite;
