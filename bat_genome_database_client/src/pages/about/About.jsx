import React, { Component } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

export class About extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} />
        About page
      </div>
    );
  }
}

export default About;
