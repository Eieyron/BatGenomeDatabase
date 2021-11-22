import React, { Component } from "react";
import axios from "axios";
import "./LoginForm";
import history from "../..//history";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      access: "none",
      refresh: "none",
      user: {},
    };

    this.api = axios.create({
      baseURL: "http://localhost:8000/user/login/",
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setLocal = this.setLocal.bind(this);

    this.setLocal({
      access: this.state.access,
      refresh: this.state.refresh,
      user: this.state.user,
      // logged_in: false,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async submit(event) {
    event.preventDefault();

    let fd = new FormData();
    for (const [key, value] of Object.entries(this.state)) {
      fd.append(key, value);
    }

    await this.api
      .post("/", fd)
      .then((response) => {
        this.setState({
          access: response.data.access,
          refresh: response.data.refresh,
          user: response.data.user,
        });

        this.setLocal({
          access: response.data.access,
          refresh: response.data.refresh,
          user: response.data.user,
          logged_in: true,
        });
      })
      .catch((error) => console.log("Error detected: " + error));
  }

  setLocal(data) {
    localStorage.access = data.access;
    localStorage.refresh = data.refresh;

    for (const keyval in data.user) {
      localStorage.setItem(keyval, data.user[keyval]);
    }

    if (data.logged_in !== undefined) {
      localStorage.logged_in = data.logged_in;
      // window.location.reload();
      if (localStorage.logged_in === "true") {
        history.push("/home");
      } else {
        history.push("/login");
      }

      window.location.reload();
    }

    // console.log("setlocal", localStorage);
  }

  render() {
    return (
      <form onSubmit={this.submit} className="form_container">
        <div className="form_content">
          Username:{" "}
          <input
            name="username"
            type="text"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Password:{" "}
          <input
            name="password"
            type="password"
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;
