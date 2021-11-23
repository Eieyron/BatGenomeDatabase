import React, { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import history from "../../history";
import "./TaxonomyHandler.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import AddDomain from "./AddDomain";

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
      content: "list",
      search_type: "id",
      search_term: "",
    };
    this.api = axios.create({
      baseURL:
        "http://localhost:8000/tax/" + this.props.Category.toLowerCase() + "/",
    });

    this.addCategory = this.addCategory.bind(this);
    this.delete = this.delete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async load_data(query = "") {
    await fetch(
      axios.defaults.baseURL +
        "tax/" +
        this.props.Category.toLowerCase() +
        "/" +
        query
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  async componentDidMount() {
    if (this.state.search_type && this.state.search_term) {
      await this.load_data(
        this.state.search_type + "__icontains=" + this.state.search_term
      );
    } else {
      await this.load_data();
    }
  }

  async handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (target.type === "file") {
      this.state[name] = target.files[0];
    } else {
      await this.setState({
        [name]: value,
      });
    }

    console.log("term", this.state.search_term);
    console.log("type", this.state.search_type);

    if (target.name === "search_term") {
      if (this.state.search_term && this.state.search_type) {
        await this.load_data(
          "?" + this.state.search_type + "__icontains=" + this.state.search_term
        );
        console.log("list refreshed");
      } else if (target.value === "") {
        await this.load_data();
      }
    }
  }

  addCategory() {
    return <AddDomain category={this.props.Category.toLowerCase()} />;
  }

  async delete(id) {
    await this.api
      .delete("/" + id + "/")
      .then((response) => {
        alert(
          response.status === 204
            ? "deleted successfully"
            : "something went wrong"
        );
      })
      .then((data) => console.log(data))
      .catch((error) => {
        if ([403, 401].includes(error.request.status)) {
          alert("You are not logged in. To continue, please login first.");
        } else {
          console.log(error);
        }
      });

    window.location.reload();
  }

  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="main_name">
          <div className="main_name_center">{this.props.Category} Database</div>{" "}
          <div className="mid_title_bar">
            <div className="select">
              <select name="search_type" onChange={this.handleInputChange}>
                <option value="id">ID</option>
                <option value="category_name">Name</option>
                <option value="scientific_name">Scientific Name</option>
              </select>
            </div>
            <input
              type={this.state.search_type === "id" ? "number" : "text"}
              name="search_term"
              className="search_bar"
              placeholder={"Search by " + this.state.search_type}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            {this.state.content === "list" ? (
              <svg
                className="title_bar_button"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  this.setState({
                    content: "add",
                  });
                }}
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
                    content: "list",
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
        {this.state.content === "list" ? (
          <div className="domain">
            <table className="strainlist">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Scientific Name</th>
                <th></th>
              </tr>
              <tbody>
                {this.state.items.map((category, category_id) => {
                  return (
                    <tr key={category_id}>
                      <td>{category.id}</td>
                      <td
                        className="row_name"
                        onClick={() =>
                          history.push(
                            "/taxonomy/"
                              .concat(this.props.Category.toLowerCase())
                              .concat("/")
                              .concat(category.id)
                          )
                        }
                      >
                        {category.category_name}
                      </td>
                      <td>{category.scientific_name}</td>
                      <td>
                        <svg
                          className="w-1 h-1 row_button"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            this.delete(category.id);
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </td>
                    </tr>
                    // </Link>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          this.addCategory()
        )}
      </div>
    );
  }
}

export default withRouter(CategoryList);
