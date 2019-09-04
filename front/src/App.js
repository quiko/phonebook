import React from "react";
import { BrowserRouter, Switch,Route} from "react-router-dom";
import Home from "./components/Home/home";
import Form from "./components/Form/form";
import ContactList from "./components/Contacts/contactList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component ={Home}/>
          <Route path="/edit/:id" component={Form} />
          <Route path="/new" component={Form} />
          <Route path ="/list" component ={ ContactList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
