import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ContactItem from "./contactItem";
import { fetchUrl, deleteUrl } from "../../constants";

function ContactList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(fetchUrl);
      console.log("result", result.data.contact);
      setData(result.data.contact);
    };
    fetchData();
  }, [props]);

  async function handleDelete(id) {
    try {
      await axios(deleteUrl+id);
      let filtredData = data.filter(item => item._id !== id);
      setData(filtredData);
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(id) {
    props.history.push(`/edit/${id}`);
  }

  return data.length >1 ? (
    <div>
      <ul className="collection">
        <ContactItem
          data={data}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </ul>
    </div>
  ) : (
    <div>
      <h3>There is no contact in the phonebook !</h3>
      <button onClick={() => props.history.push("/new")}>
        Add contact
      </button>
    </div>
  );
}
export default withRouter(ContactList);
