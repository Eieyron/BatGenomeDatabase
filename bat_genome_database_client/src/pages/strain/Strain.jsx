import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StrainList from "../../components/strain_content/StrainList";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Strain.css";
import AddStrain from "../../components/strain_content/AddStrain";

export class Strain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "list",
      search_type: "id",
      // search_term: "1",
    };

    this.handleComponent = this.handleComponent.bind(this);
  }

  handleComponent() {
    if (this.state.component === "list") {
      return <StrainList />;
    } else {
      return <AddStrain />;
    }
  }

  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="strain_content">
          <div className="title_bar">
            <div className="left_title_bar">
              {this.state.component === "list" ? (
                <h1 className="title">Strain Database</h1>
              ) : (
                <h1 className="title">Add Strain</h1>
              )}
            </div>

            <div className="right_title_bar">
              {this.state.component === "list" ? (
                <svg
                  className="title_bar_button"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() =>
                    this.setState({
                      component: "add",
                    })
                  }
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="title_bar_button"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() =>
                    this.setState({
                      component: "list",
                    })
                  }
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
          {this.handleComponent()}
        </div>
      </div>
    );
  }
}

export default withRouter(Strain);
