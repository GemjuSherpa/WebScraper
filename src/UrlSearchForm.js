import React, { Component } from "react";
import "./App.css";

export default class UrlSearchForm extends Component {
  render() {
    return (
      <div className="input-group text-input">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Website URL's.."
          aria-label="web urls"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="button-addon2">
            Send
          </button>
        </div>
      </div>
    );
  }
}
