import React from "react";


const ContactItem = ({ data, handleDelete , handleEdit}) => {
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