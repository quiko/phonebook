import React from "react";
import axios from "axios";
import { deleteUrl } from "../../constants";
import "./style.css";

function ContactItem({ props, contacts, setContacts }) {
  async function handleDelete(id) {
    try {
      await axios(deleteUrl + id);
      let results = contacts.filter(item => item._id !== id);
      setContacts(results);
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(id) {
    props.history.push(`/edit/${id}`);
  }

  return contacts.map(contact => (
    <li key={contact._id} className="collection-item">
      <div className="row">
        <div className="col s12 m4 l2">{contact.firstName}</div>
        <div className="col s12 m4 l2">{contact.lastName}</div>
        <div className="col s12 m4 l2">{contact.phoneNumber}</div>
        <div className="col s12 m4 l2 ">
          <i className="material-icons" onClick={() => handleEdit(contact._id)}>
            edit
          </i>
        </div>
        <div className="col s12 m4 l2">
          <i
            className="material-icons"
            onClick={() => handleDelete(contact._id)}
          >
            delete
          </i>
        </div>
      </div>
    </li>
  ));
}
export default ContactItem;
