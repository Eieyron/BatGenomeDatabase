// import React from 'react'
import "./StrainContent.css";

import React, { Component } from "react";
import history from "../..//history";
import axios from "axios";

export default class StrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "error",
        },
      ],
      isLoaded: false,
      search_type: "id",
      search_term: "",
    };

    this.delete = this.delete.bind(this);
    this.load_data = this.load_data.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async load_data(query = "") {
    await fetch(axios.defaults.baseURL + "strain/" + query)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
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

  async componentDidMount() {
    if (this.state.search_type && this.state.search_term) {
      await this.load_data(
        this.state.search_type + "__icontains=" + this.state.search_term
      );
    } else {
      await this.load_data();
    }
  }

  async delete(id) {
    await axios
      .delete("strain/" + id + "/")
      .then((response) => {
        alert(
          response.status === 204
            ? "deleted successfully"
            : "something went wrong"
        );
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        if ([403, 401].includes(error.request.status)) {
          alert("You are not logged in. To continue, please login first.");
        } else {
          alert(error.request.response);
        }
      });
  }

  render() {
    return (
      <div className="strain_content_body">
        <div className="mid_title_bar">
          <div className="select">
            <select name="search_type" onChange={this.handleInputChange}>
              <option value="id">ID</option>
              <option value="strain_name">Name</option>
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

        <table className="strainlist">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Scientific Name</th>
            <th> </th>
          </tr>
          <tbody>
            {this.state.items.map((strain, strain_id) => {
              return (
                // <Link to={"/strain/".concat(strain.id)}>
                <tr key={strain_id}>
                  <td>{strain.id}</td>
                  <td
                    className="row_name"
                    onClick={() => history.push("/strain/".concat(strain.id))}
                  >
                    {strain.strain_name}
                  </td>
                  <td>{strain.scientific_name}</td>
                  <td>
                    <svg
                      className="w-1 h-1 row_button"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        console.log("delete element");
                        this.delete(strain.id);
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
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
