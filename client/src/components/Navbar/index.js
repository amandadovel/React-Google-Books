import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="d-flex">
        <div className="navbar-brand">Google Books</div>
          <NavLink className="nav-link" exact to="/" activeClassName="active">Search</NavLink>
          <NavLink className="nav-link" exact to="/saved" activeClassName="active">Saved</NavLink>
      </div>
    </nav>
  );


export default Navbar;
