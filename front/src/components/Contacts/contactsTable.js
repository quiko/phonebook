import React from 'react';
import "./style.css";


const Table = ({ handleEdit, handleDelete, contacts }) => {
    return (
        contacts.map(contact => (
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
          ))
    )
}
export default Table;