import React from "react";
import axios from "axios";
import { deleteUrl } from "../../constants";
import Table from "./contactsTable";

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

  return (
    <Table
      contacts={contacts}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
}
export default ContactItem;
