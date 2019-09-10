import React from "react";
import { withRouter } from "react-router-dom";
import ContactItem from "./contactItem";
import Navbar from "../Navbar/navbar";
import { useFetch } from "../Hooks/fetchHook";
import { fetchUrl } from "../../constants";
import "./style.css";

function ContactList(props) {
  const { contacts, setContacts } = useFetch(fetchUrl, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <ul className="collection">
          <ContactItem
            contacts={contacts}
            props={props}
            setContacts={setContacts}
          />
        </ul>
      </div>
    </div>
  );
}
export default withRouter(ContactList);
