import React, { Component } from "react";
import "../App.css";
// import request from "request";
import { Consumer } from "../context";

class UrlSearchForm extends Component {
  constructor() {
    super();

    this.state = {
      link: ""
    };
  }

  // scrap(url) {
  //   request(url, (err, res, html) => {
  //     if (!err && res.statusCode === 200) {
  //       console.log(html);
  //     }
  //   });
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefaults();
    this.props.history.push("/results");
  };

  render() {
    return (
      <div className="text-input">
        <form className="input" onSubmit={this.onSubmit}>
          <div className="d-flex flex-col form">
            <div className="form-group">
              <input
                className="form-control"
                id="inputdefault"
                type="text"
                name="link"
                value={this.state.link}
                placeholder="Enter Web URL"
                onChange={this.onChange}
              />
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </div>
        </form>
        <Consumer>
          {value => {
            console.log(value);
            return <p>Hello</p>;
          }}
        </Consumer>
      </div>
    );
  }
}

export default UrlSearchForm;
