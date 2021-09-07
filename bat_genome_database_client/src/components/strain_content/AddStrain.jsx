import React, { Component } from "react";
import "./StrainContent.css";
import axios from "axios";

export class AddStrain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "test",
      scientific_name: "test",
      medium: "test",
      medium_growth: true,
      medium_composition: "test",
      temperature: 20,
      temperature_type: "test",
      temperature_range: "test",
      reference_list: {},
      species_only: true,
      species: 2,
    };

    this.api = axios.create({
      baseURL: `http://localhost:8000/strain/`,
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async submit(event) {
    event.preventDefault();

    await this.api
      .post("/", this.state)
      .then((response) => {
        alert(response.statusText + ": " + response.data.name);
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error detected: " + error));
  }

  render() {
    return (
      <form onSubmit={this.submit} className="form_container">
        <div className="form_content">
          Name
          <input
            name="name"
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
        <div className="form_content">species_only</div>
        <div className="form_content">species_id</div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddStrain;
