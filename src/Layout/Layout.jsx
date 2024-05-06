import React from "react";
// import AdminHome from "../AdminHome/AdminHome";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="admin-home-container">
        <Sidebar />
        <div className="content-container">
          <Navbar />
          <main className="main-content">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
