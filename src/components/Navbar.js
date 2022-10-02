import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../imgs/logo.png";

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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={img} className="navbar-logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/omeni" className="nav-links" onClick={closeMobileMenu}>
                O MENI
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/online/trening"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ONLINE TRENING
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/privatni/trening"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PRIVATNI TRENING
              </Link>
            </li>

            <li>
              <Link
                to="/kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">REGISTRIRAJ SE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
