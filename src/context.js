import React, { Component } from "react";
import request from "request";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    name: "gemju",
    age: "23"
  };

  componentDidMount() {
    request("https://www.wikipedia.org", (err, res, html) => {
      if (!err && res.statusCode === 200) {
        console.log(html);
      }
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
