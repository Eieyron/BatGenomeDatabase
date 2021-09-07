// import React from 'react'
import "./StrainContent.css";

import React, { Component } from "react";
import axios from "axios";

export default class StrainContent extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props);

    this.state = {
      content: {
        strain_name: "error",
      },
      isLoaded: false,
      component: "content",
    };

    this.toEdit = {};

    this.showContents = this.showContents.bind(this);
    this.editContent = this.editContent.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/strain/".concat(this.props.id).concat("/"))
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          content: json,
        });
      });
  }

  showContents() {
    return (
      <div>
        <div className="section">Name and Taxonomic Classification</div>

        <ul className="section_contents">
          <li className="information">
            <b>Scientific Name</b> &emsp;
            <i>{this.state.content.scientific_name}</i>
          </li>
          <li className="information">
            <b>Domain</b> &emsp;
            <i>
              {this.state.content.domain
                ? this.state.content.domain.category_name
                : null}
            </i>
          </li>
          <li className="information">
            <b>Phylum</b> &emsp;<i>{this.state.content.phylum.category_name}</i>
          </li>
          <li className="information">
            <b>Class</b> &emsp;
            <i>{this.state.content.class_name.category_name}</i>
          </li>
          <li className="information">
            <b>Order</b> &emsp;<i>{this.state.content.order.category_name}</i>
          </li>
          <li className="information">
            <b>Family</b> &emsp;<i>{this.state.content.family.category_name}</i>
          </li>
          <li className="information">
            <b>Genus</b> &emsp;<i>{this.state.content.genus.category_name}</i>
          </li>
          <li className="information">
            <b>Species</b> &emsp;
            <i>{this.state.content.species.category_name}</i>
          </li>
        </ul>

        <div className="section">Culture and Growth Conditions</div>

        <ul className="section_contents">
          <li className="information">
            <b>Medium</b> &emsp;<i>{this.state.content.medium}</i>
          </li>
          <li className="information">
            <b>Medium Composition</b> &emsp;
            <i>{this.state.content.medium_composition}</i>
          </li>
          <li className="information">
            <b>Medium Growth</b> &emsp;
            <i>{this.state.content.medium_growth}</i>
          </li>
          <li className="information">
            <b>Temperature</b> &emsp;<i>{this.state.content.temperature}</i>
          </li>
          <li className="information">
            <b>Temperature Range</b> &emsp;
            <i>{this.state.content.temperature_range}</i>
          </li>
          <li className="information">
            <b>Temperature Type</b> &emsp;
            <i>{this.state.content.temperature_type}</i>
          </li>
        </ul>

        <div className="section">Sequence Information</div>

        <ul className="section_contents">
          <button>
            <a href={this.state.content.type_strain}>Get Fasta</a>
          </button>
        </ul>
      </div>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.toEdit[name] = value;

    console.log(this.toEdit);
  }

  async update(event) {
    event.preventDefault();

    await axios
      .patch("http://localhost:8000/strain/" + this.props.id + "/", this.toEdit)
      .then((response) => {
        alert(response.statusText + ": " + response.data.name);
        console.log(response);
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error detected: " + error));

    this.componentDidMount();
  }

  editContent() {
    return (
      <form onSubmit={this.update} className="form_container">
        <div className="form_content">
          Name
          <input
            name="strain_name"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Scientific Name
          <input
            name="scientific_name"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Medium
          <input
            name="medium"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">medium growth</div>
        <div className="form_content">
          Medium Composition
          <input
            name="medium_composition"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Temperature
          <input
            name="temperature"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Temperature Type
          <input
            name="temperature_type"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Temperature Range
          <input
            name="temperature_range"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">reference_list</div>
        <div className="form_content">
          Domain ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Phylum ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Class ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Order ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Family ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Genus ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Species ID{" "}
          <input
            name="temperature_range"
            type="number"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="strain_content_body">
          <div className="name">
            <div className="name_left">
              {this.state.component === "update" ? <b>Update&nbsp;</b> : ""}
              {this.state.content.strain_name}
            </div>
            <div className="name_right">
              {this.state.component === "content" ? (
                <svg
                  className="title_bar_button"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    this.setState({
                      component: "update",
                    });
                  }}
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
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
                      component: "content",
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
          {this.state.component === "content"
            ? this.showContents()
            : this.editContent()}
        </div>
      );
    } else {
      return <div>None</div>;
    }
  }
}
