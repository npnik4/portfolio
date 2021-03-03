/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './NavBar.scss';
import logo from '../../assets/logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

  const kickStarter = (flag) => {
    if (flag) {
      setClick(false);
    }
    const url = 'https://www.kickstarter.com/';
    window.open(url, '_blank');
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='#' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt="logo" className="img"/>
        </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                  About
              </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#skills'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Skills
              </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#work'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Work
              </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#resume'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Resume
              </a>
              </li>
          <li>
            <a
              href='/'
              className='nav-links-mobile'
              onClick={() => kickStarter(true)}
              >
              Contact
              </a>
          </li>
        </ul>
        {/* {button && 
          <Button className="nav-button" size="medium" color="primary" variant="outlined" onClick={() => kickStarter(false)}>Resume</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;