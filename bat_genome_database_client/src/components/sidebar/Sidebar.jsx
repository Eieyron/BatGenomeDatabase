import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb";
import "./Sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classname: "sidebar_inactive",
    };

    this.toggle_show = this.toggle_show.bind(this);
  }

  toggle_show() {
    if (this.state.classname === "sidebar_inactive") {
      this.setState({
        classname: "sidebar",
      });
    } else {
      this.setState({
        classname: "sidebar_inactive",
      });
    }
  }

  render() {
    return (
      <div className="sidebarFormat">
        <svg
          className="w-6 h-6 openbtn"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.toggle_show}
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        &emsp; <Breadcrumb Crumb={this.props.Crumb} Match={this.props.Match} />
        <div className={this.state.classname}>
          <svg
            className="w-6 h-6 closebtn"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={this.toggle_show}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/strain">Strain</Link>
          <Link to="/taxonomy">Taxonomy</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}
