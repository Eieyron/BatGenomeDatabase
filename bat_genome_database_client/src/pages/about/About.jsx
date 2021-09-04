import React, { Component } from "react";
import { withRouter } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";

export class About extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        About page
      </div>
    );
  }
}

export default withRouter(About);
