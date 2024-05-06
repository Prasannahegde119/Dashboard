import React from "react";
import "./Sidebar.css"; // Import your CSS file for styling
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="active">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="graphs">
            <i className="fas fa-chart-line"></i> Analytics
          </Link>
        </li>
        <li>
          <Link to="userdetails">
            <i className="fas fa-users"></i> Users
          </Link>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-cog"></i> Settings
          </a>
        </li>
      </ul>
      <div className="logout">
        <a href="#">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
