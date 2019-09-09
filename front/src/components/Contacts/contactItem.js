import React, { useState } from "react";
import axios from "axios";
import { deleteUrl } from "../../constants";



function ContactItem({props,contacts}) {
  
let data = contacts
 
  console.log(data)
 
  async function handleDelete(id) {
    try {
      await axios(deleteUrl+id);
      let filtredData = data.filter(item => item._id !== id);
      data = filtredData;
    } catch (error) {
      console.log(error);
    }
    return data
  }

  function handleEdit(id) {
    props.history.push(`/edit/${id}`);
  }

  return (
 
        data.map(contact => (
            <li key={contact._id} className="collection-item">
              <tr>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>
                  <button onClick = {()=>handleEdit(contact._id)}>edit</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(contact._id)}>delete</button>
                </td>
              </tr>
            </li>
        ))
 
    )
}
export default ContactItem;