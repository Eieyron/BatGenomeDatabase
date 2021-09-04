import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { withRouter } from "react-router";

export class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="homepage">
          <h1>Welcome to the Home Page!</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
