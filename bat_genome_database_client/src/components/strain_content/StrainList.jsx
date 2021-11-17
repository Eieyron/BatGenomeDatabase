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
    };

    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    fetch(axios.defaults.baseURL + "strain/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  async delete(id) {
    await axios
      .delete("/" + id + "/")
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
        if (error.message === "Request failed with status code 403") {
          alert("You are not logged in. To continue, please login first.");
        } else {
          console.log(error);
        }
      });
  }

  render() {
    return (
      <div className="strain_content_body">
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
