import "./App.css";
import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import db from "./db/db.json";

const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));

class App extends Component {
  state = {
    name: "",
    location: ""
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

  onChangePath = (path) => {
    this.setState({location: path});
  };

  render() {
    const { addContact, getValue } = this;
    return (
      <>

      
      <Suspense fallback={"Waiting..."}>
          <Route exact path="/" render={props => 
            <HomePage 
              {...props} 
              onChangePath={this.onChangePath}
            />}
          />
          <Route exact path="/about" render={props => 
            <About 
              {...props} 
              onChangePath={this.onChangePath}
            />}
          />
      </Suspense>
    </>
    );
  }
}

export default App;
