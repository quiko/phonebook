import React from "react";

const Input = ({ searchValue, searchContact, handleSearchInputChanges }) => {
  return (
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
  );
};
export default Input;
