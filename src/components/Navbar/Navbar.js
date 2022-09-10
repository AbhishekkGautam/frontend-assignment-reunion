import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-brand">Estatery</div>
      </Link>
      <div className="navbar-section">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/rent"
            >
              Rent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/buy"
            >
              Buy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/sell"
            >
              Sell
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/manage-property"
            >
              Manage Property
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
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
