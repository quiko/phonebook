import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


const Links = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink className ="navtext"  to="/">Contacts</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/">New Contact</NavLink>
      </li>
      
    </React.Fragment>
  );
};

export default Links;