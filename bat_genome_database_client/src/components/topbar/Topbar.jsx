import React, { Component } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import history from "../..//history";

console.log("topbar logged_in", localStorage.logged_in);

export default class Topbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: localStorage.logged_in,
    };
  }

  componentDidMount() {
    this.setState({
      login: localStorage.logged_in,
    });
  }

  render() {
    return (
      <div className="topBar">
        <div className="topBarWrapper">
          <div className="topLeft">
            <h1>
              <a className="logo" href="http://localhost:3000/">
                Bat Genome Database
              </a>
            </h1>
          </div>
          <div className="topRight">
            <ul className="pages">
              <li className="topBarButton">
                <Link className="topBarOption" to="/">
                  Home
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/about">
                  About
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/strain">
                  Strain
                </Link>
              </li>
              <li className="topBarButton">
                <Link className="topBarOption" to="/taxonomy">
                  Taxonomy
                </Link>
              </li>
              <li className="topBarButton">
                <Link
                  className="topBarOption"
                  to={
                    localStorage.logged_in === undefined ||
                    localStorage.logged_in === "false"
                      ? "/login"
                      : "/profile"
                  }
                >
                  {localStorage.logged_in === undefined ||
                  localStorage.logged_in === "false"
                    ? "Login"
                    : "Profile"}{" "}
                </Link>
              </li>
              {localStorage.logged_in === undefined ||
              localStorage.logged_in === "false" ? (
                <div></div>
              ) : (
                <li
                  className="topBarButton"
                  onClick={() => {
                    localStorage.clear();
                    history.push("/login");
                    window.location.reload();
                  }}
                >
                  <Link className="topBarOption" to="/home">
                    <svg
                      className="w-6 h-6 logout_button"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
