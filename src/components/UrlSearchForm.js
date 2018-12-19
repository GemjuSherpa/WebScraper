import React, { Component } from "react";
import "../App.css";

class UrlSearchForm extends Component {
  constructor() {
    super();

    this.state = {
      link: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefaults();
    alert(this.state.url);
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
      </div>
    );
  }
}

export default UrlSearchForm;
