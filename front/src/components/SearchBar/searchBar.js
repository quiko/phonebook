import React, { useState } from "react";
import { useFetch } from "../Hooks/fetchHook";
import { fetchUrl } from "../../constants";
import ContactItem from "../Contacts/contactItem";
import Input from "./input";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const { contacts, setContacts } = useFetch(fetchUrl, []);
  const [filtred, setFiltred] = useState([]);

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const searchContact = () => {
    const filtredContacts = contacts.filter(contact => {
      return (
        contact.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) !==
        -1
      );
    });
    setContacts(filtredContacts);
    setFiltred(filtredContacts);
  };

  return (
    <div class="row  container">
      <div class="col s12">
        <Input
          searchValue={searchValue}
          searchContact={searchContact}
          handleSearchInputChanges={handleSearchInputChanges}
        />
        {filtred && filtred.length > 0 ? (
          <ul className="collection">
            <ContactItem
              contacts={contacts}
              setContacts={setContacts}
              props={props.props}
            />
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default SearchBar;
