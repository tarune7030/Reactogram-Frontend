import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.PNG";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand ms-5">
            <img alt="logo" src={logo} height="45px" />
          </NavLink>
          <form className="d-flex me-md-5" role="search">
            <input
              className="searchbox form-control me-2 text-muted"
              type="search"
              placeholder="Search"
            />

            <a href="/" className="searchIcon nav-link text-dark fs-5">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href="/" className="nav-link text-dark fs-5">
              <i class="fa-solid fa-house"></i>
            </a>
            <a href="/" className="nav-link text-dark fs-5">
              <i class="fa-regular fa-heart"></i>
            </a>
            <div className="dropdown">
              <a
                className="btn"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
              >
                <img
                  className="navbar-profile-pic"
                  alt="profile pic"
                  src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </a>

              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/myprofile" className="dropdown-item">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
