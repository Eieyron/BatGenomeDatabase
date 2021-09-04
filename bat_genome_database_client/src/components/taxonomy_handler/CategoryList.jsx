import React, { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import history from "../../history";
import "./TaxonomyHandler.css";
import { withRouter } from "react-router-dom";

export class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "error",
        },
      ],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "http://127.0.0.1:8000/tax/" + this.props.Category.toLowerCase() + "/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="main_name">{this.props.Category} Database</div>
        <div className="domain">
          <table className="strainlist">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Scientific Name</th>
            </tr>
            <tbody>
              {this.state.items.map((category, category_id) => {
                return (
                  <tr
                    key={category_id}
                    onClick={() =>
                      history.push(
                        "/taxonomy/"
                          .concat(this.props.Category.toLowerCase())
                          .concat("/")
                          .concat(category.id)
                      )
                    }
                  >
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.scientific_name}</td>
                  </tr>
                  // </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryList);
