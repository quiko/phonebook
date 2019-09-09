import React, { useState } from "react";
import { useFetch } from "../Hooks/fetchHook";
import { fetchUrl } from "../../constants";
import ContactItem from "../Contacts/contactItem";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const contacts = useFetch(fetchUrl, []);
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
    console.log(filtredContacts);
    setFiltred(filtredContacts);
  };

  return (
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">textsms</i>
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              value={searchValue}
              onChange={e => handleSearchInputChanges(e)}
              onKeyDown={searchContact}
            />
            <label htmlFor="autocomplete-input">Search</label>
          </div>
        </div>
        {filtred && filtred.length > 0 ? (
          <ul className="collection">
            <ContactItem contacts={filtred} props={props.props}/>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default SearchBar;
