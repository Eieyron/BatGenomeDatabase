import React, { Component } from "react";
import { withRouter } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import TaxonomyHandler from "../../components/taxonomy_handler/TaxonomyHandler";

export class Taxonomy extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="taxonomy">
          <TaxonomyHandler />
        </div>
      </div>
    );
  }
}

export default withRouter(Taxonomy);
