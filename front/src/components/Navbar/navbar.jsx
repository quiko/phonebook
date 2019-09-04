import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import Links from "./links";
import "./style.css";

class Navbar extends Component {
  componentDidMount() {
    // Auto initialize materialize collapsible mobile classes
    M.AutoInit();
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper ">
          <a href="#!" className="brand-logo">
            PhoneBook
          </a>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons navtext">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <Links />
          </ul>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <Links />
        </ul>
      </div>
    );
  }
}

export default Navbar;
