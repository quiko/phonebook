import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ContactItem from "./contactItem";
import Navbar from "../Navbar/navbar";
import { useFetch } from "../Hooks/fetchHook";
import { fetchUrl } from "../../constants";
import "./style.css"

function ContactList(props) {
  const contacts =useFetch(fetchUrl, [])

  return (
    <div>
      <Navbar />
      <div className="container">
      <ul className="collection">
        <ContactItem contacts={contacts} props={props} />
        </ul>
        </div>
    </div>
  );
}
export default withRouter(ContactList);
