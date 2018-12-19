import React, { Component } from "react";
import "./App.css";

import UrlForm from "./components/UrlSearchForm";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <UrlForm />
      </div>
    );
  }
}

export default App;
