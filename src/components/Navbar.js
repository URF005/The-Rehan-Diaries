import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "./images/Logo.jpg";

export default function Navbar() {
  let location = useLocation();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {}, [location]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-white sticky-top" data-bs-theme="white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={Logo} alt="The Rehan Diaries" />
          </Link>
          <button
            className={`navbar-toggler bg-white ${isMenuOpen ? "collapsed" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon custom-toggler"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto"> {/* Added 'ms-auto' class */}
              <li className="nav-item mx-3">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${location.pathname === "/why" ? "active" : ""}`} to="/why">
                  WHY REHAN DIARIES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
