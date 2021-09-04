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
      // headers: {
      //   "Content-Type":
      //     "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      // },
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log("value being addded");

    this.setState({
      [name]: value,
    });
  }

  async submit(event) {
    event.preventDefault();

    await this.api
      .post("/", JSON.stringify(this.state))
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((error) => console.log("Error detected: " + error));
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Scientific Name:
          <input
            name="scientific_name"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddStrain;
