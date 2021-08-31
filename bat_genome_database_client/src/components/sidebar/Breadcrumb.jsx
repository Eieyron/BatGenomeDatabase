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
    return (
      <div className="breadcrumb">
        {this.state.stringlist.map((string, string_id) => {
          // console.log(this.props.Match);
          if (string_id === this.state.stringlist.length - 1) {
            return (
              <>
                /&nbsp;
                {string === ":id" ? this.props.Match : string}
                &nbsp;
              </>
            );
          } else {
            return (
              <>
                /&nbsp;
                <Link key={string_id} to={() => this.create_route(string_id)}>
                  {string}
                </Link>
                &nbsp;
              </>
            );
          }
        })}
      </div>
    );
  }
}

export default Breadcrumb;
