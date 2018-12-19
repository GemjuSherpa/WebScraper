import React, { Component } from "react";
import "./App.css";

import UrlForm from "./UrlSearchForm";
import Header from "./Header";

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
