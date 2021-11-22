import React, { Component } from "react";
import "./StrainContent.css";
import axios from "axios";
import ParentList from "../taxonomy_handler/ParentList";

export class AddStrain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // strain_name: "test",
      // type_strain: null,
      // scientific_name: "test",
      // medium: "test",
      // medium_growth: true,
      // medium_composition: "test",
      // temperature: 20,
      // temperature_type: "test",
      // temperature_range: "test",
      // reference_list: "{}",
      species_only: true,
      // species: 2,
    };

    // this.api = axios.create({
    //   baseURL: `http://localhost:8000/strain/`,
    // });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setParentID = this.setParentID.bind(this);
  }

  setParentID(id, taxonomical_name) {
    // this.state[taxonomical_name] =
    this.setState({
      [taxonomical_name]: id,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (target.type === "file") {
      this.state[name] = target.files[0];
    } else {
      this.setState({
        [name]: value,
      });
    }

    // console.log(this.state);
  }

  async submit(event) {
    event.preventDefault();

    let fd = new FormData();
    for (const [key, value] of Object.entries(this.state)) {
      console.log(key, value);
      fd.append(key, value);
    }

    console.log("formdata", fd);

    await axios
      .post("strain/", fd, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        alert(response.statusText + ": " + response.data.strain_name);
      })
      .then((data) => console.log(data))
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
      <form onSubmit={this.submit} className="form_container">
        <div className="form_content">
          Name
          <input
            name="strain_name"
            type="text"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Scientific Name
          <input
            name="scientific_name"
            type="text"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Medium
          <input name="medium" type="text" onChange={this.handleInputChange} />
        </div>
        <div className="form_content">
          Medium growth
          <input
            name="medium_growth"
            type="checkbox"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Medium Composition
          <input
            name="medium_composition"
            type="text"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Temperature
          <input
            name="temperature"
            type="number"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Temperature Type
          <input
            name="temperature_type"
            type="text"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Temperature Range
          <input
            name="temperature_range"
            type="text"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form_content">
          Reference List
          <textarea
            name="reference_list"
            onChange={this.handleInputChange}
            rows="4"
            cols="50"
          />
        </div>
        <div className="form_content">
          Species Only
          <input
            name="species_only"
            type="checkbox"
            checked={this.state.species_only}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.species_only ? (
          <div className="form_content">
            <ParentList
              name="species"
              category="strain"
              onChange={this.handleInputChange}
              category_contents={["Species"]}
              setDefault={this.setParentID}
            />
          </div>
        ) : (
          <>
            <div className="form_content">
              <ParentList
                name="domain"
                category="phylum"
                onChange={this.handleInputChange}
                category_contents={["Domain"]}
                setDefault={this.setParentID}
              />
            </div>
            <div className="form_content">
              <ParentList
                name="phylum"
                category="class"
                onChange={this.handleInputChange}
                category_contents={["Phylum"]}
                setDefault={this.setParentID}
              />
            </div>
            <div className="form_content">
              <ParentList
                name="class"
                category="order"
                onChange={this.handleInputChange}
                category_contents={["Class"]}
                setDefault={this.setParentID}
              />
            </div>
            <div className="form_content">
              <ParentList
                name="order"
                category="family"
                onChange={this.handleInputChange}
                category_contents={["Order"]}
                setDefault={this.setParentID}
              />
            </div>
            <div className="form_content">
              <ParentList
                name="family"
                category="genus"
                onChange={this.handleInputChange}
                category_contents={["Family"]}
                setDefault={this.setParentID}
              />
            </div>
            <div className="form_content">
              <ParentList
                name="genus"
                category="species"
                onChange={this.handleInputChange}
                category_contents={["Genus"]}
                setDefault={this.setParentID}
              />
            </div>
            <div className="form_content">
              <ParentList
                name="species"
                category="strain"
                onChange={this.handleInputChange}
                category_contents={["Species"]}
                setDefault={this.setParentID}
              />
            </div>
          </>
        )}
        <div className="form_content">
          Type Strain(file)
          <input
            name="type_strain"
            type="file"
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddStrain;
