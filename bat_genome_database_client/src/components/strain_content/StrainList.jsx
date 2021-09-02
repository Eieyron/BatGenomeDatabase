// import React from 'react'
import "./StrainContent.css";

import React, { Component } from "react";
import history from "../..//history";

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
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/strain/")
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
                    {strain.name}
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
        {/* {this.state.items.map((strain, strain_id) => (
          <div key={strain_id}>
            <div className="name">{strain.name}</div>
            <div className="section">Name and Taxonomic Classification</div>

            <ul className="section_contents">
              <li className="information">
                <b>Scientific Name</b> &emsp;<i>{strain.scientific_name}</i>
              </li>
              <li className="information">
                <b>Domain</b> &emsp;<i>{strain.domain}</i>
              </li>
              <li className="information">
                <b>Phylum</b> &emsp;<i>{strain.phylum}</i>
              </li>
              <li className="information">
                <b>Class</b> &emsp;<i>{strain.class_name}</i>
              </li>
              <li className="information">
                <b>Order</b> &emsp;<i>{strain.order}</i>
              </li>
              <li className="information">
                <b>Family</b> &emsp;<i>{strain.family}</i>
              </li>
              <li className="information">
                <b>Genus</b> &emsp;<i>{strain.genus}</i>
              </li>
              <li className="information">
                <b>Species</b> &emsp;<i>{strain.species}</i>
              </li>
            </ul>

            <div className="section">Culture and Growth Conditions</div>

            <ul className="section_contents">
              <li className="information">
                <b>Medium</b> &emsp;<i>{strain.medium}</i>
              </li>
              <li className="information">
                <b>Medium Composition</b> &emsp;
                <i>{strain.medium_composition}</i>
              </li>
              <li className="information">
                <b>Medium Growth</b> &emsp;<i>{strain.medium_growth}</i>
              </li>
              <li className="information">
                <b>Temperature</b> &emsp;<i>{strain.temperature}</i>
              </li>
              <li className="information">
                <b>Temperature Range</b> &emsp;<i>{strain.temperature_range}</i>
              </li>
              <li className="information">
                <b>Temperature Type</b> &emsp;<i>{strain.temperature_type}</i>
              </li>
            </ul>

            <div className="section">Sequence Information</div>

            <ul className="section_contents">
              <Button variant="contained">
                <a href={strain.type_strain}>Get Fasta</a>
              </Button>
            </ul>
          </div>
        ))} */}
      </div>
    );
  }
}
