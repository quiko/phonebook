import React from "react";
import { withRouter } from "react-router-dom";
import ContactItem from "./contactItem";
import Navbar from "../Navbar/navbar";
import { useFetch } from "../Hooks/fetchHook";
import { fetchUrl} from "../../constants";

function ContactList(props) {
  const contacts = useFetch(fetchUrl, []);
  return (
    <div>
      <Navbar />
      <ul className="collection">
        <ContactItem contacts={contacts} props={props} />
      </ul>
    </div>
  );
}
export default withRouter(ContactList);
