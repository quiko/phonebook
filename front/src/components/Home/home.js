import React from "react";
import Navbar from "../Navbar/navbar";
import ContactList from "../Contacts/contactList";
import "materialize-css/dist/css/materialize.min.css";

const Home = props => {
  return (
    <React.Fragment>
      <Navbar />
      <ContactList/>
    </React.Fragment>
  );
};

export default Home;
