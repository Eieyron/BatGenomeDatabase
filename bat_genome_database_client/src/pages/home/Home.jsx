import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} />
        <div className="homepage">
          <h1>Welcome to the Home Page!</h1>
        </div>
      </div>
    );
  }
}
