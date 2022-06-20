import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="fs-3 text-success ubuntu navbar-brand">
          Rick & Morty WiKi
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            
            button[aria-expanded="true"] > .open {
              display: none;
            }
            `}
          </style>

          <i className="fas fa-bars open"></i>
          <i className="fas fa-times close"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link text-success"
                  : "nav-link text-success"
              }
            >
              Characters
            </NavLink>

            <NavLink
              to="/episodes"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link text-success"
                  : "nav-link text-success"
              }
            >
              Episodes
            </NavLink>

            <NavLink
              to="/location"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link text-success"
                  : "nav-link text-success"
              }
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
