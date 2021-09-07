import React, { Component } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import StrainContent from "../../components/strain_content/StrainContent";
import { withRouter } from "react-router";

export class StrainDetail extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="strain_content">
          <StrainContent id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default withRouter(StrainDetail);
