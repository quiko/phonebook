import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


const Links = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink className ="navtext"  to="/list">Contacts</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/new">New Contact</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/">Home</NavLink>
      </li>
      
    </React.Fragment>
  );
};

export default Links;