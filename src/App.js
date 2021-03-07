import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import db from "./db/db.json";


class App extends Component {
  state = {
    name: "",
  };

  addContact = (el) => {
    const { contacts } = this.state;
    const twin = contacts.some((c) => c.name === el.name);
    twin
      ? alert(`Alarma`)
      : this.setState((prev) => {
          return {
            contacts: [...prev.contacts, el],
          };
        });
  };

  getValue = (el) => {
    this.setState({ [el.name]: el.value });
  };

  render() {
    const { addContact, getValue } = this;
    return (
      <>
      <Header />
      <Main db={db} addContact={addContact} getValue={getValue}/>
      <Footer />
    </>
    );
  }
}

export default App;
