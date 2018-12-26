import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import UrlForm from "./components/UrlSearchForm";
import Header from "./components/Header";
import Results from "./components/Results";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={UrlForm} />
            <Route exact path="/results" component={Results} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
