import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <h3>Navbar</h3>
      <form className="search-box">
        <input
          type="search"
          placeholder="Search here"
          className="search-input"
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <ul className="navbar-properties">
        <li>
          <FontAwesomeIcon icon={faBell} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
