import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export class Breadcrumb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stringlist: this.props.Crumb.split("/").filter((value, index, arr) => {
        return value !== "";
      }),
    };

    this.update = this.update.bind(this);
    this.create_route = this.create_route.bind(this);
  }

  update(new_stringlist) {
    this.setState({
      stringlist: new_stringlist,
    });
  }

  create_route(string_id) {
    var to_return = "/";

    for (let i = 0; i <= string_id; i++) {
      to_return = to_return.concat(this.state.stringlist[i].concat("/"));
    }

    // console.log(to_return);
    return to_return;
  }

  render() {
    let values,
      counter = 0;
    if (this.props.Match) {
      values = Object.keys(this.props.Match).map((key) => {
        return this.props.Match[key];
      });
    }

    return (
      <div className="breadcrumb">
        {this.state.stringlist.map((string, string_id) => {
          // console.log(this.props.Match);

          if (string_id === this.state.stringlist.length - 1) {
            return (
              <div key={string_id}>
                /&nbsp;
                {string === ":id" ? this.props.Match.id : string}
                &nbsp;
              </div>
            );
          } else {
            return (
              <div key={string_id}>
                /&nbsp;
                <Link key={string_id} to={() => this.create_route(string_id)}>
                  {string.charAt(0) === ":" ? values[counter++] : string}
                </Link>
                &nbsp;
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Breadcrumb;
