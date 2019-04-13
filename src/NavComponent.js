import React from "react";

import { Link } from "react-router-dom";

export const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Brand
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to="/Get">Todo List</Link>
              <span className="sr-only" />
            </li>
            <li>
            <Link to="/Create">Todo Add</Link>
            </li>

          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
