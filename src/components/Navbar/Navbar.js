import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Estatery</div>
      <div className="navbar-section">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/rent">
              Rent
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Buy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Sell
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Manage Property
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Resources
            </Link>
          </li>
        </ul>
        <div className="navbar-btn">
          <button className="btn btn-outline-primary">Login</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>
    </div>
  );
};
