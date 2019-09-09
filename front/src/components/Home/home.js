import React from "react";
import Navbar from "../Navbar/navbar";
import "materialize-css/dist/css/materialize.min.css";
import SearchBar from "../SearchBar/searchBar";

const Home = props => {
  return (
    <React.Fragment>
      <Navbar />
      <SearchBar props={props}/>
    </React.Fragment>
  );
};

export default Home;
